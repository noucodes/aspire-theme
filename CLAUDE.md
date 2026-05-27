# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is **Be Yours** (v8.7.0), a Shopify Online Store 2.0 theme by RoarTheme. There is no build system — all assets are raw JS/CSS files deployed directly to Shopify. Changes are pushed to a live store using the Shopify CLI.

## Deployment Commands

```bash
# Push all changes to the connected Shopify store
shopify theme push

# Push to a specific store/environment
shopify theme push --store <store-handle>

# Preview changes without pushing (live reload dev server)
shopify theme dev --store <store-handle>

# Pull current live theme into local files
shopify theme pull

# Check theme for Shopify compatibility errors
shopify theme check
```

## Architecture

### Directory Structure

| Directory | Purpose |
|---|---|
| `layout/` | Root page shells — `theme.liquid` wraps all storefront pages, `password.liquid` wraps the password gate |
| `sections/` | Section files rendered per-page; JSON group files (`header-group.json`, `footer-group.json`, `overlay-group.json`) define shared section groups |
| `snippets/` | Reusable Liquid partials rendered via `{% render %}` |
| `assets/` | All JS, CSS, and static files served via Shopify CDN |
| `templates/` | JSON files that define which sections appear on each page type (index, product, collection, etc.) |
| `config/` | `settings_schema.json` defines Theme Editor controls; `settings_data.json` holds saved values |
| `locales/` | Translation strings; `en.default.json` is the source of truth, `*.schema.json` files hold Theme Editor label translations |

### CSS Loading Pattern

CSS is loaded lazily per-section, not bundled. Each section `.liquid` file includes its own stylesheet tags at the top:

```liquid
{{ 'section-main-product.css' | asset_url | stylesheet_tag }}
{{ 'component-price.css' | asset_url | stylesheet_tag }}
```

For non-critical styles, the print/onload deferred pattern is used:
```liquid
<link rel="stylesheet" href="{{ 'component-deferred-media.css' | asset_url }}" media="print" onload="this.media='all'">
```

`base.css` is the only eagerly preloaded stylesheet (loaded in `layout/theme.liquid`). `apps.css` is always deferred.

CSS custom properties (design tokens) are generated at runtime from Theme Editor settings in `snippets/css-variables.liquid` and injected into `:root` via a `{%- style -%}` block.

### JavaScript Architecture

All JS is vanilla (no frameworks, no transpilation). The key files loaded globally in `theme.liquid`:

- **`vendor-v4.js`** — bundled third-party libraries
- **`pubsub.js`** — lightweight pub/sub event bus; exposes `subscribe(eventName, callback)` and `publish(eventName, data)`. Event names are in the `PUB_SUB_EVENTS` constant (cartUpdate, variantChange, optionValueSelectionChange, etc.)
- **`global.js`** — `window.theme` global, `HTMLUpdateUtility` for DOM swaps, `theme.config` (media query helpers, touch detection), `theme.initWhenVisible()` for IntersectionObserver-based lazy init
- **`modules-basis.js`** — UI components (scroll snap slider, etc.)

Section-specific JS files are loaded on demand within section files. Interactive components are implemented as **Web Components** (Custom Elements), e.g., `<product-info>`, `<cart-drawer>`, `<mini-cart>`. Each file guards against double-registration with `if (!customElements.get('element-name'))`.

ES modules are loaded via an **import map** defined in `theme.liquid`:
```json
{
  "imports": {
    "mdl-scrollsnap": "...",
    "timeline-component": "...",
    "comparison-table-component": "...",
    "dual-scroll-component": "..."
  }
}
```

### Section-Specific Padding

Each section renders its own padding via an inline `{%- style -%}` block that reads `section.settings.padding_top` / `padding_bottom`, with a 0.75× scale applied at mobile breakpoints.

### Localization

Translation keys use the `t:` prefix in JSON schemas (e.g., `"label": "t:settings_schema.colors.name"`). All string content should reference locale keys rather than hardcoded strings. The default locale file is `locales/en.default.json`.

### Template Composition

Page layouts are defined in `templates/*.json` — these JSON files list which sections appear on the page and their block/settings configuration. The `sections/` liquid files contain the rendering logic; templates only hold configuration.
