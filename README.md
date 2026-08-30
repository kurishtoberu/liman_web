# Liman Project Website Build

Static HTML build untuk PT Liman Bangun Utama dengan 3 halaman:

- `index.html` — homepage Liman / daftar project
- `tira-hill-living.html` — detail Tira Hill Living / Jambe
- `kutilang-living.html` — detail Kutilang Living / Pekanbaru

## Cara test local

```bash
python -m http.server 8080
```

Atau di Windows:

```bash
py -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Catatan

- Gambar Kutilang sudah memakai asset yang diberikan user.
- Tira Hill Living memakai asset dari dokumen brosur PDF.
- Kutilang 54/105 dan 45/105 ditandai Sold Out.
- Kutilang 80/105, 68/105, dan SOHO ditandai Available.
