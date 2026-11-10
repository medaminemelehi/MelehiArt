#!/bin/zsh
# Builds web-sized copies of gallery images (macOS `sips`, no installs needed).
#   assets/web/thumb/...  ~1000px  — used in the gallery grids
#   assets/web/large/...  ~2200px  — used in the full-screen viewer
# Originals are never modified. Re-run after adding new images.
cd "${0:A:h}/.."
for dir in paintings ceramics home press; do
  for f in assets/$dir/*.(jpg|JPG|jpeg|png)(N); do
    [[ ${f:t} == *_web.* ]] && continue; name=${f:t}; [[ $name == *.png ]] && name=${name:r}.jpg
    for size in thumb large; do
      out="assets/web/$size/$dir/$name"
      [[ -f "$out" && "$out" -nt "$f" ]] && continue
      mkdir -p "${out:h}"
      px=$([[ $size == thumb ]] && echo 1000 || echo 2200)
      w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}'); h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
      (( (w > h ? w : h) < px )) && px=$(( w > h ? w : h ))   # never upscale
      sips -Z $px -s format jpeg -s formatOptions 80 "$f" --out "$out" >/dev/null
    done
  done
done
du -sh assets/web/*
