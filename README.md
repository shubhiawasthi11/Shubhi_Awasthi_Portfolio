# Shubhi Awasthi Portfolio

A responsive, single-page personal portfolio made with plain HTML, CSS, and JavaScript. It uses no framework, package manager, build step, or backend.

## Run locally

You can open `index.html` directly in a browser. To run it from a local web server (recommended, because optional asset checks use `fetch`), open PowerShell in this folder and run:

```powershell
py -m http.server 8000
```

Then visit <http://localhost:8000>. Stop the server with `Ctrl+C`.

If the Python launcher is unavailable but Node.js is installed, you can use:

```powershell
npx serve .
```

## Files

- `index.html` contains all portfolio sections and page metadata.
- `styles.css` contains the design system, responsive layouts, and reduced-motion styles.
- `script.js` contains the menu, rotating tagline, scroll reveals, optional asset checks, and contact form behavior.
- `public/favicon.svg` and `public/og-card.svg` are the favicon and social preview image.

## Add your assets

- Copy your portrait to `public/images/shubhi-profile.jpg`. Until it is present, the hero shows a neutral initials placeholder.
- Copy the certificate PDF to `public/certificates/full-stack-development-mern.pdf`. The “View certificate” link appears only when that file exists.

The contact form validates fields in the browser and opens the visitor's email app with the message addressed to `awasthishubhi70@gmail.com`. It does not submit to or store data on a server.

## Publish

This is a static site. Upload the project files to any static host, such as GitHub Pages, Netlify, or Vercel. No build command is required; for Vercel, select the “Other” framework preset and leave the build command empty.
