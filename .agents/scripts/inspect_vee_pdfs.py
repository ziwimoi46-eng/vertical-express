from pathlib import Path
import fitz

root = Path("attached_assets")
output = Path(".agents/outputs")
output.mkdir(parents=True, exist_ok=True)

for filename in ("ISO_copy_1793217302013.pdf", "VEE_Logo-1_1793217317027.pdf"):
    doc = fitz.open(root / filename)
    print(f"{filename}: {len(doc)} page(s)")
    for index, page in enumerate(doc):
        print(f"  page {index + 1}: {page.rect}, images={len(page.get_images(full=True))}")
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        target = output / f"{Path(filename).stem}-page-{index + 1}.png"
        pix.save(target)
        print(f"  rendered: {target}")
