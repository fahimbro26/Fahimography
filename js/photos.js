/* ============================================================
   YOUR PHOTOS — shown in this exact order (first = hero photo).

   HOW TO ADD A PHOTO
   1. Copy the image into the "images" folder (WebP or JPG, about 1600px wide).
   2. Copy one line below, paste it at the end (before the "];"), and change:
        src   -> "images/your-file-name.webp"
        title -> the name of the photo
        date  -> any format: "2026", "September 2026", "26 September 2026",
                 "26.09.2026" (use "" or leave it out to show no date)
   3. Keep the comma after every line. Save, then upload to GitHub.

   OPTIONAL (faster on phones): also save smaller copies named
   your-file-640.webp and your-file-1280.webp, then add:  widths: [640, 1280]
   The site then picks the right size automatically.
   ============================================================ */
const photos = [
  { src: "images/photo-001.webp", title: "Sample photograph", date: "26 September 2026" },
  { src: "images/photo-002.webp", title: "Sample photograph", date: "September 2026" },
  { src: "images/photo-003.webp", title: "Sample photograph", date: "2026" },
  { src: "images/photo-004.webp", title: "Sample photograph", date: "" },
  { src: "images/photo-005.webp", title: "Sample photograph", date: "" },
  { src: "images/photo-006.webp", title: "Sample photograph", date: "" }
];
