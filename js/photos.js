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
/* ============================================================
   YOUR PHOTOS — shown in this exact order (first = hero photo).
   ============================================================ */

const photos = [
  { src: "images/FB_IMG_1791346227704.jpg", title: "A quiet crescent in the evening sky", date: "2026" },
  { src: "images/FB_IMG_1791346168807.jpg", title: "An old boat resting in the green", date: "2026" },
  { src: "images/FB_IMG_1791345906324.jpg", title: "Open fields under a clear sky", date: "2026" },
  { src: "images/FB_IMG_1791345612348.jpg", title: "Palm trees by the dry field", date: "2026" },
  { src: "images/FB_IMG_1791345712627.jpg", title: "A small bridge between the trees", date: "2026" },
  { src: "images/FB_IMG_1791345705516.jpg", title: "Looking up through the branches", date: "" },
  { src: "images/FB_IMG_1791345908307.jpg", title: "Afternoon light on a quiet road", date: "" },
  { src: "images/FB_IMG_1791345688714.jpg", title: "Fresh from the morning market", date: "" },
  { src: "images/FB_IMG_1791345786633.jpg", title: "A boy and his calf", date: "" },
  { src: "images/FB_IMG_1791345794292.jpg", title: "One bright flower among the colours", date: "" },
  { src: "images/FB_IMG_1791345606267.jpg", title: "A lone tree by the water", date: "" },
  { src: "images/FB_IMG_1791345621178.jpg", title: "Pink water lilies in the pond", date: "" },
  { src: "images/FB_IMG_1791345639667.jpg", title: "Goats grazing by the water", date: "" },
  { src: "images/FB_IMG_1791345673093.jpg", title: "Palm leaves against the sky", date: "" },
  { src: "images/FB_IMG_1791346226547.jpg", title: "Still water in the afternoon", date: "" },
  { src: "images/FB_IMG_1791346223841.jpg", title: "Green fields stretching far", date: "" },
  { src: "images/FB_IMG_1791346221741.jpg", title: "A quiet path through the trees", date: "" },
  { src: "images/FB_IMG_1791346219686.jpg", title: "Soft light over the pond", date: "" },
  { src: "images/FB_IMG_1791346218463.jpg", title: "Trees standing in the mist", date: "" },
  { src: "images/FB_IMG_1791346216778.jpg", title: "Morning by the water", date: "" },
  { src: "images/FB_IMG_1791346213498.jpg", title: "A simple village scene", date: "" },
  { src: "images/FB_IMG_1791346213043.jpg", title: "Shadows on the road", date: "" },
  { src: "images/FB_IMG_1791346212591.jpg", title: "Open sky above the land", date: "" },
  { src: "images/FB_IMG_1791346211335.jpg", title: "Quiet hours by the field", date: "" },
  { src: "images/FB_IMG_1791346181546.jpg", title: "Green all around", date: "" },
  { src: "images/FB_IMG_1791346173786.jpg", title: "A calm day outdoors", date: "" },
  { src: "images/FB_IMG_1791346170873.jpg", title: "Light through the leaves", date: "" },
  { src: "images/FB_IMG_1791346168628.jpg", title: "Simple moments outside", date: "" },
  { src: "images/FB_IMG_1791346165331.jpg", title: "By the water’s edge", date: "" },
  { src: "images/FB_IMG_1791346161064.jpg", title: "A quiet corner of the village", date: "" },
  { src: "images/FB_IMG_1791346032901.jpg", title: "Soft colours of the day", date: "" },
  { src: "images/FB_IMG_1791346025213.jpg", title: "Trees and open space", date: "" },
  { src: "images/FB_IMG_1791346023323.jpg", title: "A still afternoon", date: "" },
  { src: "images/FB_IMG_1791346022504.jpg", title: "Along the path", date: "" },
  { src: "images/FB_IMG_1791346017038.jpg", title: "Small details of home", date: "" },
  { src: "images/FB_IMG_1791346015855.jpg", title: "Everyday light", date: "" },
  { src: "images/FB_IMG_1791346013259.jpg", title: "A moment in the shade", date: "" },
  { src: "images/FB_IMG_1791346010395.jpg", title: "Quiet surroundings", date: "" },
  { src: "images/FB_IMG_1791346008575.jpg", title: "Under the open sky", date: "" },
  { src: "images/FB_IMG_1791345910325.jpg", title: "Green and still", date: "" },
  { src: "images/FB_IMG_1791345908335.jpg", title: "A long road ahead", date: "" },
  { src: "images/FB_IMG_1791345903164.jpg", title: "Trees lining the way", date: "" },
  { src: "images/FB_IMG_1791345899429.jpg", title: "Simple village life", date: "" },
  { src: "images/FB_IMG_1791345896201.jpg", title: "Light and shadow", date: "" },
  { src: "images/FB_IMG_1791345885477.jpg", title: "By the roadside", date: "" },
  { src: "images/FB_IMG_1791345876863.jpg", title: "A calm stretch of land", date: "" },
  { src: "images/FB_IMG_1791345872987.jpg", title: "Afternoon stillness", date: "" },
  { src: "images/FB_IMG_1791345872886.jpg", title: "Open fields nearby", date: "" },
  { src: "images/FB_IMG_1791345869112.jpg", title: "Soft evening light", date: "" },
  { src: "images/FB_IMG_1791345866471.jpg", title: "Among the trees", date: "" },
  { src: "images/FB_IMG_1791345862439.jpg", title: "A quiet place", date: "" },
  { src: "images/FB_IMG_1791345862009.jpg", title: "Natural light", date: "" },
  { src: "images/FB_IMG_1791345857654.jpg", title: "Simple beauty outside", date: "" },
  { src: "images/FB_IMG_1791345851848.jpg", title: "A small scene", date: "" },
  { src: "images/FB_IMG_1791345850558.jpg", title: "Everyday view", date: "" },
  { src: "images/FB_IMG_1791345849575.jpg", title: "Soft colours", date: "" },
  { src: "images/FB_IMG_1791345846999.jpg", title: "By the water", date: "" },
  { src: "images/FB_IMG_1791345840697.jpg", title: "A moment of calm", date: "" },
  { src: "images/FB_IMG_1791345829846.jpg", title: "Trees and sky", date: "" },
  { src: "images/FB_IMG_1791345827547.jpg", title: "Open air", date: "" },
  { src: "images/FB_IMG_1791345825012.jpg", title: "Quiet surroundings", date: "" },
  { src: "images/FB_IMG_1791345817259.jpg", title: "A still day", date: "" },
  { src: "images/FB_IMG_1791345815484.jpg", title: "Green and light", date: "" },
  { src: "images/FB_IMG_1791345813093.jpg", title: "Along the edge", date: "" },
  { src: "images/FB_IMG_1791345809670.jpg", title: "Simple landscape", date: "" },
  { src: "images/FB_IMG_1791345807114.jpg", title: "Afternoon calm", date: "" },
  { src: "images/FB_IMG_1791345801980.jpg", title: "A quiet view", date: "" },
  { src: "images/FB_IMG_1791345790762.jpg", title: "Colours of the day", date: "" },
  { src: "images/FB_IMG_1791345790358.jpg", title: "Soft light outside", date: "" },
  { src: "images/FB_IMG_1791345769119.jpg", title: "A peaceful corner", date: "" },
  { src: "images/FB_IMG_1791345759433.jpg", title: "Natural tones", date: "" },
  { src: "images/FB_IMG_1791345757368.jpg", title: "Under the trees", date: "" },
  { src: "images/FB_IMG_1791345754204.jpg", title: "A still moment", date: "" },
  { src: "images/FB_IMG_1791345751767.jpg", title: "Open space", date: "" },
  { src: "images/FB_IMG_1791345748262.jpg", title: "Simple and quiet", date: "" },
  { src: "images/FB_IMG_1791345702755.jpg", title: "Looking up", date: "" },
  { src: "images/FB_IMG_1791345693767.jpg", title: "Tall against the sky", date: "" },
  { src: "images/FB_IMG_1791345686454.jpg", title: "Market day", date: "" },
  { src: "images/FB_IMG_1791345684102.jpg", title: "Fresh produce", date: "" },
  { src: "images/FB_IMG_1791345678321.jpg", title: "Leaves in the light", date: "" },
  { src: "images/FB_IMG_1791345675784.jpg", title: "Green details", date: "" },
  { src: "images/FB_IMG_1791345670184.jpg", title: "A quiet path", date: "" },
  { src: "images/FB_IMG_1791345654676.jpg", title: "By the pond", date: "" },
  { src: "images/FB_IMG_1791345652109.jpg", title: "Still water", date: "" },
  { src: "images/FB_IMG_1791345649850.jpg", title: "A calm afternoon", date: "" },
  { src: "images/FB_IMG_1791345637782.jpg", title: "Goats by the bank", date: "" },
  { src: "images/FB_IMG_1791345634110.jpg", title: "Near the water", date: "" },
  { src: "images/FB_IMG_1791345629527.jpg", title: "Pink blooms", date: "" },
  { src: "images/FB_IMG_1791345624878.jpg", title: "A simple scene", date: "" },
  { src: "images/FB_IMG_1791345613546.jpg", title: "Palm and field", date: "" },
  { src: "images/FB_IMG_1791345608796.jpg", title: "Lone tree by the pond", date: "" }
];
