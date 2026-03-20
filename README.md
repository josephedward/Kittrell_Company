# The Kittrell Company

Website for The Kittrell Company, a Richmond, Virginia homebuilder. Static HTML/CSS/JS frontend served by a lightweight Node.js/Express backend.

## Tech Stack

- **Frontend:** HTML5, CSS3, jQuery, Magnific Popup, Isotope grid, Revolution Slider
- **Backend:** Node.js + Express
- **Maps:** Leaflet + CartoDB tiles (no API key required)
- **Linting:** ESLint 8

## Local Development

### Prerequisites

- Node.js (v18+ recommended)
- A `.env` file in the project root (optional — only needed to override `PORT`)

### Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000` by default.

### Environment Variables

Create a `.env` file in the project root:

```
PORT=3000
```

`PORT` defaults to 3000 if not set.

## npm Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `start` | `node index.js` | Start the production server |
| `dev` | `nodemon index.js` | Start with auto-restart on file changes |
| `lint` | `eslint . --ext .js` | Run ESLint across all custom JS files |
| `logs` | `node index.js 2>&1 \| tee server.log` | Start server and write logs to `server.log` |
| `ci` | `rm -rf node_modules package-lock.json && npm install` | Clean reinstall of dependencies |

## Project Structure

```
.
├── index.html              # Main page (single-page site)
├── index.js                # Express server (contact form)
├── css/                    # Stylesheets
├── js/                     # Custom JS (designesia.js, map.js, validation.js, etc.)
├── fonts/                  # Web fonts (three sets)
├── images/
│   ├── gallery/
│   │   ├── Gallery-Pix-*   # Original 16 gallery images
│   │   └── sized/          # New property photos, center-cropped to 1000×800
│   ├── background/         # Hero and section background images
│   └── misc/               # Misc site images
├── featured/               # Individual featured home detail pages
├── rs-plugin/              # Revolution Slider plugin (hero banner)
├── scripts/
│   └── clear_ports.sh      # Utility to kill processes on a port
└── .agent/
    ├── worklogs/           # Session work logs
    └── CLEANUP_PLAN.md     # Plan for removing dead code and assets
```

## Gallery

The gallery grid uses Isotope for layout. All images must be **1000×800 px** (5:4 ratio) to keep the grid rows aligned.

- Original `Gallery-Pix-*` images are already 1000×800.
- New images from `images/gallery/update_032026/` were center-cropped and resized to 1000×800 using PIL and saved to `images/gallery/sized/`.

The original photos (large RAW-quality JPEGs) are stored in Dropbox and excluded from the repo via `.gitignore`.

## Contact

- **Business:** The Kittrell Company, 6327 Mallory Drive, Richmond, Virginia 23226
- **Phone:** 804-285-7869
- **Email:** thekittrellcompany@gmail.com
