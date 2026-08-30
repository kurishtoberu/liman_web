# Final SEO setup setelah domain production ditentukan

File ini sengaja tidak memasukkan canonical URL dan sitemap.xml dengan domain fiktif. Setelah domain resmi aktif:

1. Tambahkan `<link rel="canonical" href="https://DOMAIN/...">` ke setiap halaman.
2. Ubah `og:image` dan `twitter:image` menjadi URL absolut `https://DOMAIN/assets/...`.
3. Buat `sitemap.xml` dengan URL absolut untuk `/`, `/tira-hill-living`, dan `/kutilang-living`.
4. Tambahkan `Sitemap: https://DOMAIN/sitemap.xml` ke `robots.txt`.
5. Daftarkan sitemap ke Google Search Console.
