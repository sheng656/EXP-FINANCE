# Partner Logos Directory

This directory contains SVG and PNG logos for all financial institution partners.

## File Naming Convention

Logo files can be in SVG or PNG format. The system will automatically try to load SVG first, then PNG if SVG is not found. Follow the naming convention below:

### Major Banks (8 logos)
- `anz.svg` or `anz.png` - ANZ Bank
- `asb.svg` or `asb.png` - ASB Bank
- `bnz.svg` or `bnz.png` - BNZ Bank
- `westpac.svg` or `westpac.png` - Westpac Bank
- `kiwibank.svg` or `kiwibank.png` - Kiwibank
- `tsb.svg` or `tsb.png` - TSB Bank
- `cooperative.svg` or `cooperative.png` - The Co-operative Bank
- `heartland.svg` or `heartland.png` - Heartland Bank

### Non-Bank Lenders (6 logos)
- `pepper.svg` or `pepper.png` - Pepper Money
- `liberty.svg` or `liberty.png` - Liberty Financial
- `avanti.svg` or `avanti.png` - Avanti Finance
- `basecorp.svg` or `basecorp.png` - Basecorp Finance
- `resimac.svg` or `resimac.png` - RESIMAC
- `bluestone.svg` or `bluestone.png` - Bluestone

### Specialist Lenders (6 logos)
- `fmt.svg` or `fmt.png` - First Mortgage Trust
- `scp.svg` or `scp.png` - Southern Cross Partners
- `funding-partners.svg` or `funding-partners.png` - Funding Partners
- `xceda.svg` or `xceda.png` - XCEDA Finance
- `prospa.svg` or `prospa.png` - Prospa
- `finance-direct.svg` or `finance-direct.png` - Finance Direct

### Property Finance (5 logos)
- `asap.svg` or `asap.png` - ASAP Finance
- `der.svg` or `der.png` - DER Property Finance
- `cressida.svg` or `cressida.png` - Cressida Capital
- `mtf.svg` or `mtf.png` - MTF Finance
- `unity.svg` or `unity.png` - Unity

## Logo Requirements

### Technical Specifications
- **Format**: SVG (preferred) or PNG
- **Recommended dimensions**: 
  - SVG: Any size (scalable)
  - PNG: 400-800px width at 2x resolution for retina displays
- **Color**: Full color (grayscale effect applied on hover)
- **Background**: Transparent
- **File size**: 
  - SVG: Keep under 50KB
  - PNG: Keep under 100KB per file for optimal performance

### Design Guidelines
1. Use official brand logos from each institution's website or press kit
2. Ensure logos are high quality and properly vectorized (for SVG)
3. Remove any unnecessary elements or padding
4. Optimize SVG files using tools like SVGO or SVGOMG
5. Optimize PNG files using tools like TinyPNG or ImageOptim

### Copyright & Usage
- Only use official logos with proper authorization
- Logos should be used for informational purposes to indicate partnership
- Respect each brand's guidelines and usage policies
- Do not modify or distort logos

## Fallback Behavior

The logo loading follows this priority:
1. First attempts to load SVG file (e.g., `anz.svg`)
2. If SVG fails, attempts to load PNG file (e.g., `anz.png`)
3. If both fail, displays the partner name as text

This ensures the website remains functional while logos are being collected.

## Adding New Partners

To add a new partner:
1. Obtain the official SVG or PNG logo
2. Optimize the image file
3. Save with appropriate filename in this directory (`/public/partners/`)
4. Update `/components/sections/PartnersSection.tsx` to include the new partner in the `PARTNERS` array

## Notes

- Files in the `public` folder are served at the root path in Vite
- Access logos via `/partners/filename.svg` or `/partners/filename.png`
- Logos are displayed with grayscale filter by default and show full color on hover
- The carousel auto-plays every 3 seconds when not being interacted with
- Responsive design shows 3-8 logos depending on screen width
