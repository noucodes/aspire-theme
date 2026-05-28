# Aspire Bathrooms — Theme Redesign Plan

Reference site: https://aspirebathrooms.com.au/ (currently running Basel v3.1 by The4Studio)
New theme: Be Yours v8.7.0 (this repository)

---

## Design System

### Brand Colors (from live store settings_data.json)
| Role | Value | Usage |
|---|---|---|
| Primary / Orange | `#ec6e00` | Buttons, badges, sale labels, nav active state |
| Secondary / Teal | `#179a94` | Checkout button, success states, accent links |
| Heading / Text | `#0a0a0a` | Product titles, key headings |
| Body text | `#4c4c4c` | Paragraphs, secondary text |
| Background | `#ffffff` | Page background |
| Surface | `#f7f4f0` | Section backgrounds, card fills |
| Footer background | `#4c4c4c` | Footer |
| Sale badge | `#ec0101` | Sale/hot labels |

Map to Be Yours `config/settings_data.json`:
- `colors_accent` → `#ec6e00`
- `colors_text` → `#4c4c4c`
- `colors_heading` → `#0a0a0a`
- `colors_background` → `#ffffff`
- `colors_price` → `#0a0a0a`
- `colors_sale_price` → `#ec0101`
- `colors_solid_button_labels` → `#ffffff`

### Typography (from live store)
| Role | Font | Notes |
|---|---|---|
| Body | Karla | Current live font — keep |
| Headings | Roboto | Current live font — keep |
| Product titles | Roboto | Same as heading |
| Secondary / italic | Lato Italic | Used for taglines/sub-headings |

Be Yours settings:
- `type_body_font`: Karla
- `type_header_font`: Roboto
- `body_scale`: 100
- `heading_scale`: 110

### Tone & Voice
Clean, practical, Australian. Premium without being pretentious. Short headlines, factual product copy. "All prices are in AUD."

---

## Navigation Structure

### Announcement Bar (`sections/announcement-bar.liquid`)
Rotating messages (current site has "All prices are in AUD" in topbar):
- "All prices are in AUD — Free standard shipping on orders over $1,000"
- "Download our product brochure → [Downloads page]"
- "Find a stockist near you → [Stockists page]"

### Header Mega Menu
Full structure from current live mega menu:

```
Home
Bathroom → /collections/bathroom
  Basins → /collections/basins
    Above Counter Basins → /collections/above-counter-basins
    Semi Recessed Basins → /collections/semi-recessed-basins
  Vanities → /collections/vanities
    Wall Hung Vanities → /collections/wall-hung-vanities
    Vanity Tops → /collections/vanity-tops
  Baths → /collections/baths
    Freestanding Baths → /collections/freestanding-baths
  Tapware → /collections/tapware
    Basin Mixers → /collections/basin-mixers
    Bath Mixers → /collections/bath-mixers
    Shower Mixers → /collections/shower-mixers
    Bathroom Taps → /collections/bathroom-taps
  Shower Products → /collections/showers
    Shower Heads → /collections/shower-heads
    Shower Arms → /collections/shower-arms
    Rail Showers → /collections/hand-showers-and-twin-showers
    Shower Bases → /collections/shower-bases
    Shower Mixers → /collections/shower-mixers
  Toilet Suites → /collections/toilets
    Back to Wall → /collections/back-to-wall-toilets
    Wall Faced → /collections/wall-faced-toilets
    Wall Hung → /collections/wall-hung-toilets
  Accessories → /collections/accessories
    Towel Rails → /collections/towel-rails
    Robe Hooks → /collections/robe-hooks
    Toilet Roll Holders → /collections/toilet-roll-holders
    Toilet Brushes → /collections/toilet-brushes
    Soap Dispensers → /collections/soap-dispensers
  Mirrors & Shave Cabinets
  Bath Outlets → /collections/bath-outlets

Kitchen → /collections/kitchen
  Kitchen Sinks → /collections/kitchen-sinks
  Kitchen Tapware → /collections/kitchen-tapware

Laundry → /collections/laundry
  Inset Troughs & Cabinets → /collections/inset-troughs-cabinets
  Laundry Tapware → /collections/laundry-tapware

Assisted Living → /collections/assisted-living

Downloads → /pages/downloads
Stockists → /pages/stockists
Contact Us → /pages/contact-us
```

---

## Section-by-Section Migration

Current Basel sections → Be Yours equivalents:

| Basel Section | Content | Be Yours Section |
|---|---|---|
| `slideshow` | 4 homepage banner slides | `sections/slideshow.liquid` |
| Section title "FEATURED PRODUCTS" | Heading only | `sections/rich-text.liquid` (heading block only) |
| `gl_section_product_gird` | Featured products, 4 cols | `sections/featured-collection.liquid` |
| Custom HTML content block | Aspire description + image | `sections/image-with-text.liquid` |
| Custom text (Discover Aspire) | Brand statement | `sections/rich-text.liquid` |
| `gl_section_categories` (masonry) | Category image tiles | `sections/tab-collage.liquid` |
| `gl_newsletter` | Email signup | `sections/newsletter.liquid` |
| `gl_section_blog` | Latest news | `sections/featured-blog.liquid` |
| `gl_section_store_information` | Trust/info icons | `sections/guarantees.liquid` |
| `gl_instagram_width_testimonial` | Reviews + social | `sections/testimonials.liquid` |
| `gl_section_brands` | Brand logo carousel | `sections/logo-list.liquid` |

---

## Pages

### Homepage (`templates/index.json`)

**1. Slideshow** — `sections/slideshow.liquid`
- 4 slides (re-use images from current live theme)
- `autorotate: true`, `autorotate_speed: 5`
- `image_ratio: 100vh`, text position bottom-left
- CTA buttons linking to `/collections/bathroom`, `/collections/kitchen`, `/collections/featured`, `/collections/all`
- Colors: text `#ffffff`, overlay `#1a1b18` at 15% opacity
- Slide highlight color: `#ec6e00`

**2. Scrolling Promotion Bar** — `sections/scrolling-promotion.liquid`
- "FREE STANDARD SHIPPING ON ORDERS OVER $1,000 AUD"
- "207+ PRODUCTS IN STOCK"  
- "PREMIUM BATHROOM, KITCHEN & LAUNDRY PRODUCTS"
- "DOWNLOAD OUR PRODUCT BROCHURE"
- Use custom colors: bg `#ec6e00`, text `#ffffff`

**3. Shop by Room** — `sections/tab-collage.liquid`
4 image tiles (current site has masonry categories):
- Bathroom → `/collections/bathroom`
- Kitchen → `/collections/kitchen`
- Laundry → `/collections/laundry`
- Assisted Living → `/collections/assisted-living`
- Heading: "Shop by Room"
- `layout: text_first`, `full_width: true`

**4. Featured Products** — `sections/featured-collection.liquid`
- Collection: `featured` (currently shows 4 products at ~50% discount)
- Heading: "Featured Products"
- `products_to_show: 8`, `columns_desktop: 4`, `columns_mobile: 2`
- `show_quick_buy: true`, `enable_quick_view: true`, `enable_color_swatches: true`
- `image_ratio: portrait`

**5. Trust Badges / Store Information** — `sections/guarantees.liquid`
Maps from current `gl_section_store_information`:
- Icon: `truck` | "Free Shipping" | "Free standard shipping on orders over $1,000 AUD"
- Icon: `shield` | "Australian Brand" | "Proudly Australian, local support and service"
- Icon: `star` | "Quality Products" | "Premium fixtures and fittings built to last"
- Icon: `book` | "Product Brochure" | "Download our full product catalogue as a PDF"
- `full_width: true`, `columns_desktop: 4`

**6. Discover Aspire — Brand Statement** — `sections/image-with-text.liquid`
Maps from current "Discover Aspire" text + image block:
- Heading: "We believe your bathroom should be more than functional — it should feel like home."
- Body: "Aspire Bathrooms offers a carefully curated range of premium fixtures and fittings. Quality over trends, reliable service, every time."
- CTA: "View All Products" → `/collections/all`
- `layout: image_first`

**7. Shop by Finish** — `sections/multicolumn.liquid`
Three finish landing pages (improvement over current site):
- "Matte Black" → `/collections/matte-black`
- "Chrome" → `/collections/chrome`
- "Stainless Steel" → `/collections/stainless-steel`
- Heading: "Shop by Finish"
- `columns_desktop: 3`

**8. Tapware Collection** — `sections/featured-collection.liquid`
- Collection: `tapware`
- `products_to_show: 4`, `horizontal_scroll: true`
- Heading: "Popular Tapware"

**9. Testimonials** — `sections/testimonials.liquid`
Maps from current `gl_instagram_width_testimonial`.
Add 5 customer reviews (placeholder until real reviews migrated):
- Heading: "What Our Customers Say"
- `autorotate: false`

**10. Brand Logos** — `sections/logo-list.liquid`
Maps from current `gl_section_brands` carousel:
- Scrolling logo strip of product brands stocked
- `heading: ""` (no heading, just logos)

**11. Newsletter** — `sections/newsletter.liquid`
Maps from current `gl_newsletter`:
- Heading: "Stay in the Loop"
- Sub: "Get the latest products, promotions, and renovation inspiration."
- `full_width: false`

**12. Featured Blog** — `sections/featured-blog.liquid`
Maps from current `gl_section_blog`:
- Heading: "Latest News"
- `posts_to_show: 3`

**13. Downloads CTA** — `sections/image-with-text-overlay.liquid`
New section (improvement):
- Heading: "Download Our Full Product Brochure"
- Sub: "Browse the complete Aspire range in one document"
- CTA: "Download PDF" → `/pages/downloads`

---

### Product Page (`templates/product.json`)

Current Basel product page features to preserve in Be Yours:
- Left media, right info layout (`media_position: left`)
- Thumbnail slider on left
- Zoom on hover
- Related products (8 items)
- Recently viewed (10 items)
- Sticky cart

Block order:
1. Breadcrumb
2. Subtitle (vendor name, uppercase)
3. Title (h1, `title_size: h2`)
4. Rating
5. Price (`show_badges: true`, `sale_badge_basis: auto`)
6. Variant picker (button style; swatch for color/finish variants)
7. Description
8. Collapsible tab: "Product Specifications"
9. Collapsible tab: "Dimensions & Downloads"
10. Collapsible tab: "Shipping" — "Free standard shipping on orders over $1,000 AUD. Ships within 1–3 business days."
11. Buy Buttons (`show_dynamic_checkout: true`, `show_quantity_selector: true`)
12. Inventory status (`inventory_threshold: 20`)
13. Share
14. Sticky cart

Below fold:
- `sections/product-recommendations.liquid` — "You May Also Like" (8 products, matching current site)
- `sections/recently-viewed-products.liquid` — "Recently Viewed" (10 products)

---

### Collection Page (`templates/collection.json`)

Current Basel collection has: 4-column grid, left sidebar filters (price, color, size), 16 per page, quick view on hover.

- `sections/main-collection-banner.liquid` — hero with collection title
- `sections/main-collection-subs.liquid` — sub-collection tiles for top-level collections (Bathroom, Kitchen, Laundry)
- `sections/main-collection-product-grid.liquid`
  - `columns_desktop: 4`, `columns_mobile: 2`
  - Filters: sidebar style — price, color/finish, type
  - `products_per_page: 16` (matches current site)
  - `enable_sorting: true`
  - `show_rating: true`, `enable_color_swatches: true`, `enable_quick_view: true`
  - `show_quick_buy: true`
  - `image_ratio: portrait`

---

### Contact Page (`templates/page.contact-with-map.json`)

Current site: `page.contact-us.liquid` with embedded Google Map.

> **IMPORTANT:** Live site has placeholder data (London address, UK phone). Need real Aspire Bathrooms contact details before go-live.

Sections:
- `sections/contact-form.liquid` — Name, Email, Phone, Message fields
- `sections/map.liquid` — actual Aspire address + Google Map
  - Heading: "Get In Touch With Us"
  - Hours block (once real hours supplied)
  - CTA: "Get Directions"

---

### Downloads Page (`templates/page.json`)

Current site has a single Aspire Brochure PDF download.

Use `sections/page.liquid` + `sections/custom-liquid.liquid`:
- Heading: "Product Downloads"
- Sub: "Download our brochures, specification sheets and installation guides"
- Download card: "Aspire Bathrooms Brochure" → PDF link (re-upload to Shopify Files)
- Slots for additional brand-specific docs

---

### Stockists Page (`templates/page.store-locator.json`)

Current site: `page.our-shop.liquid` with map.

Use `sections/store-locator.liquid`:
- Google Maps API key (carry over from current `settings_data.json`)
- Postcode/suburb search
- List of stockist locations

> **Action needed:** Populate stockist data from current theme.

---

### About Page (`templates/page.about.json`)

Currently 404 on live site. Create new:
- `sections/image-banner.liquid` — hero
- `sections/rich-text.liquid` — brand story and mission
- `sections/guarantees.liquid` — 4 brand values
- `sections/image-with-text.liquid` — showroom/team photo
- `sections/testimonials.liquid`

---

### FAQ Page (`templates/page.faq.json`)

Current site has `page.faqs.liquid` with `faqs_faq`, `faqs_question`, `faqs_tab` sections.

Use `sections/faq.liquid` (Be Yours built-in):
- Group FAQs by topic: Shipping, Products, Returns, Account

---

## Improvements Over Current Site

| Area | Current (Basel) | New (Be Yours) |
|---|---|---|
| JavaScript | jQuery 1.12.4 + heavy legacy libs | Modern vanilla JS + Web Components |
| Performance | Multiple blocking JS/CSS files | Lazy-loaded per-section CSS, deferred JS |
| Product grid hover | Quick view popup | Quick view + add to cart inline |
| Color swatches | Basic | Native Shopify variant swatches |
| Mobile nav | Separate mobile menu section | Built-in responsive drawer |
| Slideshow | Revolution Slider (old) | Modern scroll-snap slider |
| Footer | Single column, 2021 copyright | Multi-column with nav, newsletter, social |
| Theme age | Built 2021, jQuery 1.x | Modern OS 2.0 architecture |
| Shop by finish | No dedicated pages | Matte Black / Chrome / Stainless pages |
| About page | 404 | Full brand story page |
| Contact | Placeholder (London) data | Real info + map |

---

## Implementation Order

1. **Theme settings** — apply brand colors and fonts to `config/settings_data.json`
2. **Homepage** — build `templates/index.json` section by section
3. **Product page** — configure `templates/product.json` blocks
4. **Collection page** — configure `templates/collection.json`
5. **Contact page** — `templates/page.contact-with-map.json` (needs real contact details)
6. **Downloads page** — `templates/page.json` + re-upload brochure PDF
7. **Stockists page** — `templates/page.store-locator.json`
8. **About page** — create `templates/page.about.json`
9. **FAQ page** — configure `templates/page.faq.json`
10. **Header** — mega menu configuration
11. **Footer** — column layout and links
12. **Announcement bar** — 3 rotating messages
13. **Test on all devices before pushing**
