# Public launch checklist

No deployment is performed by this change. The existing Sites preview is unchanged. Use the GitHub repository on a separate public host.

## Details needed from the owner

1. Purchased domain and preferred canonical host (`https://domain.tld` or `https://www.domain.tld`).
2. Hosting choice. Cloudflare Pages is the prepared adapter; another provider needs its own trusted country metadata adapter. Access can be provided via connected account or owner-completed dashboard setup; do not send passwords/API tokens in chat.
3. Public operator/business name, contact email, applicable business address, and registration/VAT information where required for legal notices.
4. AdSense status: not applied, pending, or approved; public `ca-pub-...` publisher ID, actual ad-slot IDs, and the account-provided ads.txt entry.
5. Selected Google-certified CMP (Google Privacy & messaging or another certified provider) and its configuration. Privacy disclosures and consent signals must be accurate for EEA/UK/Swiss traffic before ad requests are enabled.
6. Whether analytics is wanted. Add Search Console verification and consent-aware analytics only when configured.

## Cloudflare Pages setup when authorized

Connect the GitHub repo, choose `main`, build command `npm run build`, output directory `dist`, Node 24. Set `SITE_URL` to the final HTTPS canonical origin. Pages builds must include the repository's `functions/` folder; a simple static-only file upload will not supply IP detection. Attach the custom domain, complete DNS/HTTPS setup, and redirect the alternate www/non-www host to the canonical host.

The root `/` uses a temporary non-cached country redirect. All `/en/`, `/de/`, `/fr/`, `/es/`, `/it/`, `/nl/` pages remain directly accessible without forced redirects. `/api/region` uses trusted `request.cf.country`; no untrusted client country headers or external geo vendors. Country responses are not cached. Unsupported/missing location returns English/USD. Manual currency selection overrides IP currency. Belgium defaults to Dutch, Switzerland to German, Canada to English; other supported European countries without a translation use English and their local currency.

Without `SITE_URL`, builds deliberately use example.com placeholders and noindex/disallow to avoid indexing staging. Do not launch that preview build. With the production domain set, canonicals, hreflang, sitemap and robots are generated for it. Verify public pages, all six languages, desktop/mobile layouts, genuine IP country responses and fallbacks on the final host, then submit `/sitemap.xml` in Search Console.

## Content and ads

48 static localized pages contain four tools, the pricing guide, about, privacy and terms, with formulas, worked examples and FAQs. Local currencies are denominations, not exchange conversion or country-specific tax compliance. Have native speakers review translations and a cleaning operator validate assumptions. Add verified operator/contact/legal information before applying for AdSense. SEO content and metadata cannot guarantee rankings or approval.

No real ad network code is active yet. Integrate only approved IDs and slots, with a certified consent platform, matching privacy disclosures and ads.txt. Reserve ad space after the calculator and in the article, never beside input/action controls. Verify consent accept/reject paths and actual ads without clicking your own ads. Public HTTPS hosting and Google review are required; a private preview cannot be the monetized public site.
