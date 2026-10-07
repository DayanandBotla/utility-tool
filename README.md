# CleanMargin

Commercial cleaning planning tools. Dependency-free, pre-rendered static HTML in English, German, French, Spanish, Italian and Dutch.

## Run

Requires Node 20+. `npm run build`, `npm test`, then `npm start`. Open http://127.0.0.1:4173/en/.

`SITE_URL` sets the canonical HTTPS origin when building. Deploy `dist/` to static hosting. The root is a language selector; localized URLs remain accessible without redirects. Six complete language versions, canonical tags, reciprocal hreflang, structured data, robots.txt and sitemap.xml are generated.

Country is inferred from a supported region in browser language preferences, not IP geolocation. A manual country selector persists locally. Currency denomination changes do not convert amounts or apply tax law. Calculations never leave the browser. No external fonts, analytics or ad requests.

## Calculation

Cost = (cleaning hours + paid travel/setup hours) × crew × wage × (1 + burden/100) + supplies + allocated overhead. Quote = cost/(1 − margin/100). Overrun affects cleaning time only. Discount reduces the quoted price. Actual profit uses actual cleaning hours with the same costs and travel assumptions. All results exclude VAT/sales tax. Inputs and default examples are not market rates.

## Before a public business launch

- Confirm brand/domain, operator name, business address and contact details. Add verified operator/contact information and any applicable local legal notice. Do not invent contact information.
- Have native speakers review translations and an experienced cleaning owner check the assumptions.
- Use your public canonical origin; rebuild and submit sitemap in Search Console. SEO setup does not guarantee indexing/rankings.
- Confirm hosting security headers and real 404 status on your chosen provider.
- Actual location inference can be added via the host's country header, with browser fallback and manual override. Do not confuse browser region with physical location.

## Advertising integration

Ads are intentionally inactive. No fictitious publisher ID or homemade consent banner. Add your approved AdSense publisher ID and real slots only after site review and configuration. Suitable placement: a reserved banner after the working calculator and a reserved article slot after the methodology; keep ads out of input panels and away from action buttons. Do not inject ads during input events. Reserve dimensions to reduce layout shift.

For European audiences configure Google's certified CMP/TCF flow, appropriate consent signals and privacy disclosures before loading advertising. Update the privacy text in all languages to accurately name the operator, vendors, purposes, retention and rights. A generic consent button is not a substitute for the required CMP.

Publish the exact ads.txt entry supplied by your AdSense account at `/ads.txt`. No ads.txt is shipped because no seller is authorized yet. See https://support.google.com/adsense/answer/12171612 and https://support.google.com/adsense/answer/13554020 .

Browser WebMCP is feature-detected and optional. `configure_cleaning_quote` sets visible inputs; it does not send an offer. Unsupported browsers remain fully functional.
