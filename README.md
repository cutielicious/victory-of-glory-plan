# Victory of Glory - 2026 Year Plan

A simple, single-page website built to display the annual events and services calendar for Victory of Glory Ministry for the 2026 church year.

Repository: https://github.com/cutielicious/victory-of-glory-plan

---

## About This Project

This website presents Victory of Glory Ministry's 2026 Year Plan, including the ministry's theme for the year ("Ri kunda nga malofha a Yeso") and a dynamically loaded list of annual events and services. The page displays a header with the pastor's photo, the ministry name, the year plan title, and the yearly theme, followed by a list of events that is populated using JavaScript.

---

## Features

- Header section with pastor's photo, ministry name, and year plan title
- Yearly theme display box
- Dynamic event list (annual events and services), loaded via JavaScript
- Footer with copyright notice
- Fallback image handling if the pastor's photo fails to load
- Clean, simple, responsive single-page layout

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript |

---

## Project Structure

```
victory-of-glory-plan/
│
├── index.html    # Main page: header, theme, and event list structure
├── style.css     # Stylesheet for layout and design
├── script.js     # Loads and populates the annual events list
├── pastor.jpg    # Pastor's photo displayed in the header
└── README.md     # Project documentation (this file)
```

---

## How to Run This Project Locally

1. Download or clone this repository:
   ```
   git clone https://github.com/cutielicious/victory-of-glory-plan.git
   ```
2. Make sure `index.html`, `style.css`, `script.js`, and `pastor.jpg` are all in the same folder.
3. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, etc.).
4. No installation or build steps are required - this is a static HTML/CSS/JS website.

---

## How It Works

1. `index.html` sets up the page structure: header (photo, title, theme), a main section with an event list placeholder, and a footer.
2. `style.css` handles the visual styling and layout of the page.
3. `script.js` runs on page load and populates the `#eventList` element with the ministry's annual events and services, replacing the initial "Loading 2026 events..." placeholder.
4. If `pastor.jpg` fails to load, a placeholder image is shown instead.

---

## Author

Developed as part of a personal project to support Victory of Glory Ministry's event planning and communication.

---
