# Changelog

All notable changes to the Aspire Bathrooms theme are recorded here.
Theme: Be Yours v8.7.0 by RoarTheme (replacing Basel v3.1 by The4Studio).

---

## [Unreleased] — 2026-05-28

### Theme Settings (`config/settings_data.json`)

| Setting | Before (Basel) | After (Be Yours) |
|---|---|---|
| Accent colour | `#faeaa1` (yellow) | `#ec6e00` (Aspire orange) |
| Body text colour | `#212326` | `#4c4c4c` |
| Heading colour | `#1a1b18` | `#0a0a0a` |
| Price colour | `#1a1b18` | `#0a0a0a` |
| Solid button label | `#212326` (dark) | `#ffffff` (white) |
| Sale price colour | `#d72c0d` | `#ec0101` |
| Sale badge background | `#d72c0d` | `#ec6e00` (orange) |
| Border colour | `#d2d5d9` | `#e0dbd5` (warm) |
| Review stars colour | `#ffb503` | `#ec6e00` (orange) |
| Shadow colour | `#a8e8e2` | `#f5d9bb` (warm) |
| Heading font | Cabin | Roboto |
| Body font | Jost | Karla |
| Heading scale | 100 | 110 |
| Free shipping threshold | USD 500 | AUD 1,000 |
| Sale badge basis | Value | Percentage |
| Social links | Shopify placeholder URLs | Cleared (to be updated) |

---

### Header & Navigation (`sections/header-group.json`)

- **Announcement bar** — 3 rotating messages on orange (`#ec6e00`) background:
  1. Free standard shipping on orders over $1,000 AUD
  2. Download our product brochure (`/pages/downloads`)
  3. Find a stockist near you (`/pages/stockists`)
- **Mega menu** — 3 dropdown blocks: Bathroom, Kitchen, Laundry; linked to `main-menu`
- **Sticky header** — enabled, stays visible on scroll
- **Transparent header** — enabled, blends into hero sections
- **Logo** — pulled from `{{ shop.brand.logo }}`
- No country/language selector (AU-only store)

---

### Footer (`sections/footer-group.json`)

- **Dark footer** — background `#4c4c4c`, white headings (was light in Basel)
- **3 link columns**: `footer-bathroom`, `footer-kitchen-laundry`, `footer-info` menus
- **Newsletter block** — "Stay in the Loop" with Aspire copy
- **Copyright** — "© 2025 Aspire Bathrooms. All rights reserved."

---

### Homepage (`templates/index.json`)

13 sections, in order:

1. **Hero slideshow** (`slideshow`) — 4 slides, autorotating, orange CTAs
2. **Scrolling promo ticker** (`scrolling-promotion`) — animated orange bar under hero
3. **Shop by Room** (`tab-collage`) — tabbed tiles: Bathroom, Kitchen, Laundry, Assisted Living
4. **Featured Products** (`featured-collection`) — pulls from `featured` collection
5. **Trust badges** (`guarantees`) — Free Shipping, Australian Brand, Quality Guaranteed, Product Brochure; orange icons on `#f7f4f0`
6. **Brand statement** (`rich-text`) — "We believe your bathroom should be more than functional"
7. **Discover Aspire** (`image-with-text`) — lifestyle image with brand copy and CTA
8. **Shop by Finish** (`multicolumn`) — 3 columns: Matte Black, Chrome, Stainless Steel
9. **Tapware collection** (`featured-collection`) — pulls from `tapware` collection
10. **Testimonials** (`testimonials`) — 5 rotating Australian customer reviews, orange accent
11. **Brand logos** (`scrolling-promotion`) — 6 partner/brand logo image slots
12. **Newsletter** (`newsletter`) — "Stay in the Loop" with orange button
13. **Downloads CTA** (`image-with-text-overlay`) — banner linking to `/pages/downloads`

---

### Product Page (`templates/product.json`)

- **Gallery** — thumbnail slider on left, sticky product info on right
- **Block order** — breadcrumb → vendor → title → rating → price → variant picker → description → 3 collapsible tabs → buy buttons → inventory status → share → sticky cart
- **Collapsible tabs** — Product Specifications, Dimensions & Downloads, Shipping Information (with Aspire shipping copy)
- **Sticky Add to Cart** — enabled on scroll
- **Sale badge** — percentage basis
- **Dynamic checkout** — enabled
- **Sections below fold** — You May Also Like (8 products), Recently Viewed, trust bar (`#f7f4f0`)

---

### Collection Page (`templates/collection.json`)

- **Banner** — 400px, collection image with overlay, left-aligned text
- **Sub-collection tiles** — square image tiles at top linking to sub-categories
- **Product grid** — 4 columns desktop, 2 mobile; portrait ratio; secondary hover image; Quick Buy; Quick View; colour swatches
- **Filters** — vertical sidebar, colour swatches enabled, max 8 items shown
- **Trust bar** — 4 guarantees (`#f7f4f0`) below grid
- **Recently Viewed** — section at bottom

---

### Contact Page (`templates/page.contact-with-map.json`)

- Banner hero — "Contact Us"
- Intro rich-text with links to Downloads and Stockists pages
- Contact form with phone field
- 4 trust icons — Call Us, Email Us, Find a Stockist, Product Brochure
- Map section — placeholder address "Australia", zoom 12 *(real address required)*

---

### FAQ Page (`templates/page.faq.json`)

- Banner hero — "Frequently Asked Questions"
- 4 grouped FAQ sections: Shipping & Delivery (3 Qs), Products (4 Qs), Orders & Returns (3 Qs), Stockists & Trade (2 Qs)
- CTA at bottom linking to `/pages/contact-us`

---

### Store Locator / Stockists Page (`templates/page.store-locator.json`)

- Banner hero — "Find a Stockist"
- Store locator section with 3 placeholder location blocks *(real stockist addresses required)*
- Become a Stockist CTA — dual buttons: Get in Touch + Download Brochure

---

### About Page (`templates/page.about.json`)

New page (was 404 on live site):

- Banner hero — "About Aspire Bathrooms"
- Brand story rich-text — "Who We Are"
- 4 brand values (`#f7f4f0`) — Quality First, Australian Brand, Expert Advice, Nationwide Delivery
- Image with text — "Everything You Need for a Beautiful Renovation" → `/collections/all`
- Image with text — "Visit a Showroom Near You" → `/pages/stockists`
- Testimonials carousel — 4 reviews
- CTA — Shop Now + Contact Us

---

### Downloads Page (`templates/page.downloads.json`)

New page:

- Banner hero — "Downloads & Resources"
- Intro rich-text
- Brochure download section — image with text, PDF download button *(PDF link required)*
- 4 feature icons (`#f7f4f0`) — Full Product Range, Dimensions Included, All Finishes Listed, Need Help?
- CTA — Contact Us + Find a Stockist

---

### Bug Fixes / Theme Check

- Fixed 7 pre-existing errors in `locales/de.schema.json` — missing German translations for `map_language` and `map_region` settings
- Fixed `colors_overlay_opacity` values that were not multiples of 4 (step: 4) across multiple templates
- Fixed `map_zoom` values below minimum of 12 in `page.contact-with-map.json` and `page.store-locator.json`
- Fixed invalid block type `"buttons"` → `"button"` in rich-text sections across all page templates
- Fixed invalid block type `"subtext"` → `"paragraph"` in newsletter section on homepage

---

### Pending / To Do

- [ ] Upload slideshow images (4 slides)
- [ ] Upload shop-by-room images (Bathroom, Kitchen, Laundry, Assisted Living)
- [ ] Upload brand logo images (6 slots)
- [ ] Upload Discover Aspire lifestyle image
- [ ] Upload Downloads CTA background image
- [ ] Upload brochure PDF and set download link
- [ ] Add real contact address and phone (current placeholder is London/UK)
- [ ] Add real stockist locations (3 placeholder blocks)
- [ ] Add Google Maps API key
- [ ] Create `main-menu` in Shopify admin with full hierarchy
- [ ] Create footer menus (`footer-bathroom`, `footer-kitchen-laundry`, `footer-info`)
- [ ] Update social media links in theme settings
- [ ] Push to GitHub to deploy
