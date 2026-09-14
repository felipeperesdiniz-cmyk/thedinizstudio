#!/bin/bash
# 2880x1800 retina PNG captures -> 1440px JPEGs sized for the work grid.
cd "$(dirname "$0")" || exit 1
mkdir -p assets/work
for f in captures/shot_*.png; do
  [ -e "$f" ] || continue
  name=$(basename "$f" .png); name=${name#shot_}
  out="assets/work/${name//_/-}.jpg"
  sips -Z 1440 "$f" -s format jpeg -s formatOptions 72 --out "$out" >/dev/null 2>&1
  printf '%-26s %s\n' "$(basename "$out")" "$(du -h "$out" | cut -f1)"
done
echo "total: $(du -sh assets/work | cut -f1)"
