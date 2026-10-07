# Fahimography

A minimalist photography portfolio by Abdullah Al Fahim. Plain HTML, CSS and JavaScript — no server, no build step.

## Add a photo
1. Put the photo inside the `images/` folder (WebP or JPG, around 1600px wide is plenty).
2. Open `js/photos.js`.
3. Copy one line like `{ src: "images/photo-007.webp", title: "Morning Light", date: "2026" },` and paste it at the end of the list.
4. Change the file name (`src`), the `title` and the `date` (a year like `2026`, a full date, or `""`).
5. Save.
6. Upload / commit to GitHub. The photo appears automatically.

Photos show in the same order as the list; the first one is also the big photo at the top. The 6 gray sample images are placeholders — delete their lines and files when you add your own.

Optional: for faster phones, also save `photo-007-640.webp` and `photo-007-1280.webp` and add `widths: [640, 1280]` to the entry.

## Change the About text
Open `js/site-config.js` and edit the `about` list. Each line in quotes is one paragraph.

## Change social links and email
Open `js/site-config.js`, then edit `email` and the links inside `social`. Names shown on hover are in `labels`.

## Change the website name
In `js/site-config.js`, edit `brandName`, `photographer`, `subtitle` and `intro`. For the browser tab title and share preview, also edit the `<title>` and `og:` lines in `index.html`.

## Put it online with GitHub Pages
1. Create a new repository on github.com.
2. Upload everything from this folder (so `index.html` is at the top level).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

All paths are relative, so it works in a repository subfolder.
