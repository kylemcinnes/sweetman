# Sweetman Real Estate

A static site for Tim Sweetman and Sweetman Real Estate in Plantation, Florida. It works as a digital business card: a short introduction, two current listings, and direct ways to call, email, or follow him.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy

The site is plain HTML, CSS, and JavaScript, with `index.html` at the repository root. GitHub Pages can serve it from the `main` branch.

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, set the source to **Deploy from a branch**.
3. Choose the `main` branch and the `/ (root)` folder, then save.

The published address is [https://kylemcinnes.github.io/sweetman/](https://kylemcinnes.github.io/sweetman/).

If you later use a custom domain, add the domain in Pages settings and update the canonical URL, Open Graph URL, and sitemap in `index.html`, `robots.txt`, and `sitemap.xml`.

## Update a listing

Edit the matching card in `index.html`. Keep the price, status, and facts aligned with the live Zillow page, and point the “View on Zillow” button at the current listing URL. The prices on the site were confirmed on Zillow on October 16, 2026:

- [10751 SW 25th St, Davie](https://www.zillow.com/homedetails/10751-SW-25th-St-Davie-FL-33324/43177630_zpid/) — $1,283,000
- [2030 SW 62nd Ave, Plantation](https://www.zillow.com/homedetails/2030-SW-62nd-Ave-Fort-Lauderdale-FL-33317/43170367_zpid/) — $1,200,000

The contact form opens the visitor’s email app with a message addressed to sweetmanrealestate@gmail.com. It does not store submissions.

## Photos

The portrait and the two property photographs come from Tim Sweetman’s public Zillow profile and listing media, and are used here to present his own business and those listings. The page does not use personal or family photographs. Replace `images/tim-sweetman.jpg`, `images/listing-davie.jpg`, or `images/listing-plantation.jpg` if newer photos should be used, and keep the alt text accurate.
