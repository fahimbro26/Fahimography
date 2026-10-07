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
/* ============================================================
   YOUR PHOTOS — shown in this exact order (first = hero photo).

   HOW TO ADD A PHOTO
   1. Copy the image into the "images" folder (WebP or JPG).
   2. Add a new line inside the array below.
   3. Save and upload to GitHub.
   ============================================================ */

const photos = [
  "images/FB_IMG_1791345606267.jpg",
  "images/FB_IMG_1791345608796.jpg",
  "images/FB_IMG_1791345612348.jpg",
  "images/FB_IMG_1791345613546.jpg",
  "images/FB_IMG_1791345621178.jpg",
  "images/FB_IMG_1791345624878.jpg",
  "images/FB_IMG_1791345629527.jpg",
  "images/FB_IMG_1791345634110.jpg",
  "images/FB_IMG_1791345637782.jpg",
  "images/FB_IMG_1791345639667.jpg",
  "images/FB_IMG_1791345649850.jpg",
  "images/FB_IMG_1791345652109.jpg",
  "images/FB_IMG_1791345654676.jpg",
  "images/FB_IMG_1791345670184.jpg",
  "images/FB_IMG_1791345673093.jpg",
  "images/FB_IMG_1791345675784.jpg",
  "images/FB_IMG_1791345678321.jpg",
  "images/FB_IMG_1791345684102.jpg",
  "images/FB_IMG_1791345686454.jpg",
  "images/FB_IMG_1791345688714.jpg",
  "images/FB_IMG_1791345693767.jpg",
  "images/FB_IMG_1791345702755.jpg",
  "images/FB_IMG_1791345705516.jpg",
  "images/FB_IMG_1791345712627.jpg",
  "images/FB_IMG_1791345748262.jpg",
  "images/FB_IMG_1791345751767.jpg",
  "images/FB_IMG_1791345754204.jpg",
  "images/FB_IMG_1791345757368.jpg",
  "images/FB_IMG_1791345759433.jpg",
  "images/FB_IMG_1791345769119.jpg",
  "images/FB_IMG_1791345786633.jpg",
  "images/FB_IMG_1791345790358.jpg",
  "images/FB_IMG_1791345790762.jpg",
  "images/FB_IMG_1791345794292.jpg",
  "images/FB_IMG_1791345801980.jpg",
  "images/FB_IMG_1791345807114.jpg",
  "images/FB_IMG_1791345809670.jpg",
  "images/FB_IMG_1791345813093.jpg",
  "images/FB_IMG_1791345815484.jpg",
  "images/FB_IMG_1791345817259.jpg",
  "images/FB_IMG_1791345825012.jpg",
  "images/FB_IMG_1791345827547.jpg",
  "images/FB_IMG_1791345829846.jpg",
  "images/FB_IMG_1791345840697.jpg",
  "images/FB_IMG_1791345846999.jpg",
  "images/FB_IMG_1791345849575.jpg",
  "images/FB_IMG_1791345850558.jpg",
  "images/FB_IMG_1791345851848.jpg",
  "images/FB_IMG_1791345857654.jpg",
  "images/FB_IMG_1791345862009.jpg",
  "images/FB_IMG_1791345862439.jpg",
  "images/FB_IMG_1791345866471.jpg",
  "images/FB_IMG_1791345869112.jpg",
  "images/FB_IMG_1791345872886.jpg",
  "images/FB_IMG_1791345872987.jpg",
  "images/FB_IMG_1791345876863.jpg",
  "images/FB_IMG_1791345885477.jpg",
  "images/FB_IMG_1791345896201.jpg",
  "images/FB_IMG_1791345899429.jpg",
  "images/FB_IMG_1791345903164.jpg",
  "images/FB_IMG_1791345906324.jpg",
  "images/FB_IMG_1791345908307.jpg",
  "images/FB_IMG_1791345908335.jpg",
  "images/FB_IMG_1791345910325.jpg",
  "images/FB_IMG_1791346008575.jpg",
  "images/FB_IMG_1791346010395.jpg",
  "images/FB_IMG_1791346013259.jpg",
  "images/FB_IMG_1791346015855.jpg",
  "images/FB_IMG_1791346017038.jpg",
  "images/FB_IMG_1791346022504.jpg",
  "images/FB_IMG_1791346023323.jpg",
  "images/FB_IMG_1791346025213.jpg",
  "images/FB_IMG_1791346032901.jpg",
  "images/FB_IMG_1791346161064.jpg",
  "images/FB_IMG_1791346165331.jpg",
  "images/FB_IMG_1791346168628.jpg",
  "images/FB_IMG_1791346168807.jpg",
  "images/FB_IMG_1791346170873.jpg",
  "images/FB_IMG_1791346173786.jpg",
  "images/FB_IMG_1791346181546.jpg",
  "images/FB_IMG_1791346211335.jpg",
  "images/FB_IMG_1791346212591.jpg",
  "images/FB_IMG_1791346213043.jpg",
  "images/FB_IMG_1791346213498.jpg",
  "images/FB_IMG_1791346216778.jpg",
  "images/FB_IMG_1791346218463.jpg",
  "images/FB_IMG_1791346219686.jpg",
  "images/FB_IMG_1791346221741.jpg",
  "images/FB_IMG_1791346223841.jpg",
  "images/FB_IMG_1791346226547.jpg",
  "images/FB_IMG_1791346227704.jpg"
].map(src => ({ src, title: "Untitled", date: "" }));
