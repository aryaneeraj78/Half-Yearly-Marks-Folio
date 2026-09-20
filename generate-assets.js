import sharp from 'sharp';
import fs from 'fs';

// 1. Generate Site Logo SVG and PNG (512x512)
const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f2b5c"/>
      <stop offset="50%" stop-color="#1e40af"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="50%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f1f5f9"/>
    </linearGradient>
    <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Circular Rounded Base -->
  <rect width="512" height="512" rx="128" fill="url(#bgGrad)"/>
  <circle cx="256" cy="256" r="236" fill="none" stroke="url(#goldGrad)" stroke-width="6" stroke-dasharray="12 8" opacity="0.8"/>
  <circle cx="256" cy="256" r="224" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.3"/>

  <!-- Golden Laurel Wreath -->
  <g fill="none" stroke="url(#goldGrad)" stroke-width="4" stroke-linecap="round" opacity="0.9">
    <path d="M120 340 C 90 280, 95 200, 150 140 C 165 125, 185 115, 210 108" />
    <path d="M392 340 C 422 280, 417 200, 362 140 C 347 125, 327 115, 302 108" />
  </g>
  <!-- Laurel Leaves Left -->
  <g fill="url(#goldGrad)">
    <ellipse cx="108" cy="280" rx="8" ry="18" transform="rotate(-35 108 280)"/>
    <ellipse cx="102" cy="240" rx="8" ry="18" transform="rotate(-20 102 240)"/>
    <ellipse cx="108" cy="200" rx="8" ry="18" transform="rotate(-5 108 200)"/>
    <ellipse cx="124" cy="160" rx="8" ry="18" transform="rotate(15 124 160)"/>
    <ellipse cx="150" cy="130" rx="8" ry="18" transform="rotate(35 150 130)"/>
    <ellipse cx="185" cy="112" rx="8" ry="18" transform="rotate(55 185 112)"/>
  </g>
  <!-- Laurel Leaves Right -->
  <g fill="url(#goldGrad)">
    <ellipse cx="404" cy="280" rx="8" ry="18" transform="rotate(35 404 280)"/>
    <ellipse cx="410" cy="240" rx="8" ry="18" transform="rotate(20 410 240)"/>
    <ellipse cx="404" cy="200" rx="8" ry="18" transform="rotate(5 404 200)"/>
    <ellipse cx="388" cy="160" rx="8" ry="18" transform="rotate(-15 388 160)"/>
    <ellipse cx="362" cy="130" rx="8" ry="18" transform="rotate(-35 362 130)"/>
    <ellipse cx="327" cy="112" rx="8" ry="18" transform="rotate(-55 327 112)"/>
  </g>

  <!-- Central Shield -->
  <g filter="url(#dropShadow)">
    <path d="M166 140 L346 140 C346 250, 296 330, 256 360 C216 330, 166 250, 166 140 Z" fill="url(#shieldGrad)" stroke="url(#goldGrad)" stroke-width="6"/>
  </g>

  <!-- Open Book inside shield -->
  <g transform="translate(206, 210)">
    <!-- Pages Left & Right -->
    <path d="M50 40 C30 35, 10 37, 0 45 L0 95 C10 87, 30 85, 50 90 Z" fill="#2563eb"/>
    <path d="M50 40 C70 35, 90 37, 100 45 L100 95 C90 87, 70 85, 50 90 Z" fill="#1d4ed8"/>
    <!-- Page lines left -->
    <line x1="8" y1="56" x2="42" y2="52" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <line x1="8" y1="66" x2="42" y2="62" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <line x1="8" y1="76" x2="36" y2="72" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <!-- Page lines right -->
    <line x1="58" y1="52" x2="92" y2="56" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <line x1="58" y1="62" x2="92" y2="66" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
    <line x1="58" y1="72" x2="86" y2="76" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Academic Mortarboard (Graduation Cap) -->
  <g transform="translate(256, 175)">
    <!-- Cap Diamond top -->
    <polygon points="0,-28 65,-4 0,20 -65,-4" fill="#0f172a" stroke="url(#goldGrad)" stroke-width="3"/>
    <!-- Skull cap bottom -->
    <path d="M-36 6 C-36 22, 36 22, 36 6 L36 20 C36 34, -36 34, -36 20 Z" fill="#1e293b"/>
    <!-- Tassel -->
    <circle cx="0" cy="-4" r="5" fill="#f59e0b"/>
    <path d="M0 -4 Q30 5, 45 22" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
    <rect x="42" y="22" width="6" height="14" rx="2" fill="#d97706"/>
  </g>

  <!-- A+ Badge on top right of shield -->
  <g transform="translate(340, 160)">
    <circle cx="0" cy="0" r="28" fill="#dc2626" stroke="#ffffff" stroke-width="3" filter="url(#dropShadow)"/>
    <text x="-4" y="8" font-family="Arial, sans-serif" font-size="22" font-weight="900" fill="#ffffff" text-anchor="middle">A+</text>
  </g>

  <!-- Text: MARKS FOLIO -->
  <text x="256" y="415" font-family="'Poppins', 'Segoe UI', sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="3">MARKS FOLIO</text>
  <text x="256" y="445" font-family="'Noto Sans Devanagari', 'Poppins', sans-serif" font-size="18" font-weight="700" fill="#fef08a" text-anchor="middle" letter-spacing="1">अर्द्धवार्षिक मूल्यांकन अंक पत्रक</text>
  <rect x="186" y="462" width="140" height="4" rx="2" fill="url(#goldGrad)"/>
</svg>
`;

// 2. Generate 1200x630 Social Share Thumbnail matching the user's banner
const shareBannerSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <linearGradient id="bgBackdrop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb"/>
      <stop offset="40%" stop-color="#fef3c7"/>
      <stop offset="80%" stop-color="#fed7aa"/>
      <stop offset="100%" stop-color="#fde68a"/>
    </linearGradient>
    <linearGradient id="deskWood" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="50%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#92400e"/>
    </linearGradient>
    <linearGradient id="blueBannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="30%" stop-color="#1d4ed8"/>
      <stop offset="70%" stop-color="#1e3a8a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="redRibbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e11d48"/>
      <stop offset="40%" stop-color="#dc2626"/>
      <stop offset="100%" stop-color="#991b1b"/>
    </linearGradient>
    <linearGradient id="goldCapsuleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#facc15"/>
      <stop offset="70%" stop-color="#eab308"/>
      <stop offset="100%" stop-color="#ca8a04"/>
    </linearGradient>
    <linearGradient id="laptopScreen" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#f8fafc"/>
    </linearGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.2"/>
    </filter>
    <filter id="heavyShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.35"/>
    </filter>
    <filter id="titleShadow">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0284c7" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- 1. Background Warm Studio Atmosphere -->
  <rect width="1200" height="630" fill="url(#bgBackdrop)"/>

  <!-- Soft bokeh / foliage circles in background -->
  <g opacity="0.35">
    <circle cx="1100" cy="120" r="140" fill="#10b981"/>
    <circle cx="1180" cy="240" r="90" fill="#059669"/>
    <circle cx="1020" cy="80" r="80" fill="#34d399"/>
    <circle cx="1150" cy="30" r="110" fill="#6ee7b7"/>
    <circle cx="80" cy="80" r="120" fill="#fbbf24" opacity="0.5"/>
  </g>

  <!-- Wooden Desk Base (Bottom) -->
  <path d="M0 490 L1200 480 L1200 630 L0 630 Z" fill="url(#deskWood)"/>
  <!-- Desk highlight line -->
  <line x1="0" y1="490" x2="1200" y2="480" stroke="#fde68a" stroke-width="3" opacity="0.8"/>
  <rect x="0" y="492" width="1200" height="14" fill="#000000" opacity="0.15"/>

  <!-- ================= LEFT PROMOTIONAL CALLOUT ================= -->
  <!-- Splattered / Painted Navy Brush Banner Behind Title -->
  <path d="M 40 50 Q 320 35, 620 60 Q 640 180, 610 280 Q 300 290, 40 260 Q 20 150, 40 50 Z" fill="url(#blueBannerGrad)" filter="url(#softShadow)"/>
  
  <!-- Left Side: Graduation Mortarboard & A+ Badge -->
  <g transform="translate(48, 80)" filter="url(#softShadow)">
    <!-- Sheet of paper under cap -->
    <rect x="10" y="45" width="85" height="115" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
    <line x1="22" y1="75" x2="65" y2="75" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="90" x2="80" y2="90" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="105" x2="75" y2="105" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="120" x2="82" y2="120" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    <line x1="22" y1="135" x2="55" y2="135" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>

    <!-- A+ Stamp Badge -->
    <circle cx="68" cy="115" r="20" fill="#fee2e2" stroke="#dc2626" stroke-width="3"/>
    <text x="68" y="122" font-family="'Poppins', sans-serif" font-size="17" font-weight="900" fill="#dc2626" text-anchor="middle">A+</text>

    <!-- Mortarboard Cap -->
    <g transform="translate(52, 40)">
      <polygon points="0,-18 42,0 0,16 -42,0" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
      <path d="M-22 6 C-22 18, 22 18, 22 6 L22 14 C22 24, -22 24, -22 14 Z" fill="#1e293b"/>
      <circle cx="0" cy="0" r="3.5" fill="#f59e0b"/>
      <path d="M0 0 Q20 5, 28 16" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      <rect x="26" y="16" width="4" height="8" fill="#d97706" rx="1"/>
    </g>
  </g>

  <!-- Big Bold Title: "Half-Yearly" and "Marks Folio" -->
  <g transform="translate(160, 80)">
    <!-- "Half-Yearly" -->
    <text x="0" y="65" font-family="'Poppins', system-ui, sans-serif" font-size="54" font-weight="900" fill="#ffffff" letter-spacing="-1" filter="url(#titleShadow)">
      Half-Yearly
    </text>
    <!-- "Marks Folio" with Golden / Yellow Fill & Navy Edge -->
    <text x="0" y="145" font-family="'Poppins', system-ui, sans-serif" font-size="70" font-weight="900" fill="#facc15" stroke="#1e3a8a" stroke-width="3" letter-spacing="-1">
      Marks Folio
    </text>
  </g>

  <!-- Red Ribbon: "अंक पत्रक (Marks Folio)" -->
  <g transform="translate(40, 275)" filter="url(#softShadow)">
    <rect x="0" y="0" width="440" height="52" rx="26" fill="url(#redRibbonGrad)"/>
    <text x="220" y="35" font-family="'Noto Sans Devanagari', 'Poppins', sans-serif" font-size="25" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
      अंक पत्रक (Marks Folio)
    </text>
  </g>

  <!-- Golden Capsule: "स्वतः-भरण उपकरण" -->
  <g transform="translate(60, 342)" filter="url(#softShadow)">
    <!-- Golden pill -->
    <rect x="40" y="0" width="320" height="42" rx="21" fill="url(#goldCapsuleGrad)" stroke="#ffffff" stroke-width="2"/>
    <!-- Decorative side brackets / wings -->
    <line x1="0" y1="21" x2="32" y2="21" stroke="#ca8a04" stroke-width="3" stroke-linecap="round"/>
    <circle cx="32" cy="21" r="5" fill="#ca8a04"/>
    <line x1="368" y1="21" x2="400" y2="21" stroke="#ca8a04" stroke-width="3" stroke-linecap="round"/>
    <circle cx="368" cy="21" r="5" fill="#ca8a04"/>
    <text x="200" y="29" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="900" fill="#0f172a" text-anchor="middle">
      स्वतः-भरण उपकरण
    </text>
  </g>

  <!-- Subtitle Paragraph -->
  <g transform="translate(50, 415)">
    <text x="0" y="0" font-family="'Noto Sans Devanagari', sans-serif" font-size="21" font-weight="800" fill="#0f172a">
      विद्यार्थियों के अंक, रिपोर्ट कार्ड एवं अंक पत्रक तैयार करने
    </text>
    <text x="90" y="32" font-family="'Noto Sans Devanagari', sans-serif" font-size="21" font-weight="800" fill="#1e3a8a">
      का डिजिटल उपकरण।
    </text>
  </g>


  <!-- ================= CENTER & RIGHT 3D TECH MOCKUPS ================= -->

  <!-- Laptop Mockup (Center) -->
  <g transform="translate(560, 160)" filter="url(#heavyShadow)">
    <!-- Laptop Lid / Screen Bezel -->
    <rect x="0" y="0" width="360" height="240" rx="14" fill="#0f172a" stroke="#475569" stroke-width="4"/>
    <!-- Screen Inner Display -->
    <rect x="14" y="14" width="332" height="206" rx="6" fill="url(#laptopScreen)"/>

    <!-- Screen Header: Student Report Card -->
    <rect x="14" y="14" width="332" height="34" rx="6" fill="#1d4ed8"/>
    <text x="180" y="36" font-family="'Poppins', sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">
      Student Report Card
    </text>

    <!-- Table on Laptop Screen -->
    <g transform="translate(24, 56)">
      <!-- Table Header -->
      <rect x="0" y="0" width="312" height="20" fill="#e2e8f0"/>
      <text x="8" y="14" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#334155">Subject</text>
      <text x="110" y="14" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#334155">Half Yearly</text>
      <text x="200" y="14" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#334155">Full Marks</text>
      <text x="275" y="14" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#334155">Grade</text>

      <!-- Row 1: Hindi -->
      <line x1="0" y1="20" x2="312" y2="20" stroke="#cbd5e1"/>
      <text x="8" y="33" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">Hindi</text>
      <text x="135" y="33" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">48</text>
      <text x="225" y="33" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="33" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#16a34a">A</text>

      <!-- Row 2: English -->
      <line x1="0" y1="38" x2="312" y2="38" stroke="#e2e8f0"/>
      <text x="8" y="50" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">English</text>
      <text x="135" y="50" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">45</text>
      <text x="225" y="50" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="50" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#16a34a">A</text>

      <!-- Row 3: Mathematics -->
      <line x1="0" y1="55" x2="312" y2="55" stroke="#e2e8f0"/>
      <text x="8" y="67" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">Mathematics</text>
      <text x="135" y="67" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">50</text>
      <text x="225" y="67" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="67" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#2563eb">A+</text>

      <!-- Row 4: Science -->
      <line x1="0" y1="72" x2="312" y2="72" stroke="#e2e8f0"/>
      <text x="8" y="84" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">Science</text>
      <text x="135" y="84" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">47</text>
      <text x="225" y="84" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="84" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#16a34a">A</text>

      <!-- Row 5: Social Science -->
      <line x1="0" y1="89" x2="312" y2="89" stroke="#e2e8f0"/>
      <text x="8" y="101" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">Social Science</text>
      <text x="135" y="101" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">44</text>
      <text x="225" y="101" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="101" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#16a34a">A</text>

      <!-- Row 6: Sanskrit -->
      <line x1="0" y1="106" x2="312" y2="106" stroke="#e2e8f0"/>
      <text x="8" y="118" font-family="Arial, sans-serif" font-size="9.5" fill="#0f172a">Sanskrit</text>
      <text x="135" y="118" font-family="Arial, sans-serif" font-size="9.5" font-weight="600" fill="#0f172a">49</text>
      <text x="225" y="118" font-family="Arial, sans-serif" font-size="9.5" fill="#64748b">50</text>
      <text x="282" y="118" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#2563eb">A+</text>
      <line x1="0" y1="123" x2="312" y2="123" stroke="#cbd5e1"/>

      <!-- Well Done badge on screen -->
      <text x="156" y="146" font-family="'Poppins', cursive, sans-serif" font-size="14" font-weight="800" fill="#1e40af" text-anchor="middle">
        Well Done! 😊
      </text>
    </g>

    <!-- Laptop Base / Keyboard deck -->
    <path d="M-35 240 L395 240 L415 255 L-55 255 Z" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
    <rect x="140" y="242" width="80" height="4" rx="2" fill="#475569"/>
  </g>

  <!-- Upright Marks Folio Official Sheet (Behind Laptop on Right) -->
  <g transform="translate(860, 40)" filter="url(#softShadow)">
    <rect x="0" y="0" width="230" height="340" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
    <!-- Crest on sheet header -->
    <circle cx="45" cy="40" r="18" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
    <path d="M36 40 L45 35 L54 40 L45 45 Z" fill="#2563eb"/>
    <text x="130" y="32" font-family="'Poppins', sans-serif" font-size="14" font-weight="900" fill="#0f2b5c" text-anchor="middle">
      MARKS FOLIO
    </text>
    <text x="130" y="46" font-family="Arial, sans-serif" font-size="8.5" font-weight="600" fill="#475569" text-anchor="middle">
      Half-Yearly Examination
    </text>
    <line x1="15" y1="58" x2="215" y2="58" stroke="#cbd5e1"/>

    <!-- Fill-in fields -->
    <text x="15" y="76" font-family="Arial, sans-serif" font-size="8" fill="#475569">Student Name : ____________</text>
    <text x="15" y="92" font-family="Arial, sans-serif" font-size="8" fill="#475569">Class / Sec : ____________</text>
    <text x="15" y="108" font-family="Arial, sans-serif" font-size="8" fill="#475569">Roll No. : ____________</text>
    <text x="15" y="124" font-family="Arial, sans-serif" font-size="8" fill="#475569">U-DISE : ____________</text>

    <!-- Mini grid on sheet -->
    <rect x="15" y="136" width="200" height="180" fill="#f8fafc" stroke="#cbd5e1"/>
    <line x1="15" y1="156" x2="215" y2="156" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="85" y1="136" x2="85" y2="316" stroke="#cbd5e1"/>
    <line x1="150" y1="136" x2="150" y2="316" stroke="#cbd5e1"/>
    <text x="45" y="150" font-family="Arial, sans-serif" font-size="7.5" font-weight="700" fill="#334155" text-anchor="middle">Subject</text>
    <text x="117" y="150" font-family="Arial, sans-serif" font-size="7.5" font-weight="700" fill="#334155" text-anchor="middle">Marks Obt.</text>
    <text x="182" y="150" font-family="Arial, sans-serif" font-size="7.5" font-weight="700" fill="#334155" text-anchor="middle">Grade</text>
  </g>

  <!-- Smartphone Mockup (Foreground Right) -->
  <g transform="translate(970, 270)" filter="url(#heavyShadow)">
    <rect x="0" y="0" width="120" height="240" rx="20" fill="#0f172a" stroke="#334155" stroke-width="4"/>
    <!-- Speaker / camera notch -->
    <rect x="42" y="6" width="36" height="5" rx="2.5" fill="#334155"/>
    <!-- Phone Screen -->
    <rect x="6" y="16" width="108" height="208" rx="14" fill="#ffffff"/>
    <!-- App Header on phone -->
    <rect x="6" y="16" width="108" height="48" fill="#1e40af"/>
    <circle cx="60" cy="34" r="10" fill="#ffffff"/>
    <text x="60" y="56" font-family="'Poppins', sans-serif" font-size="8" font-weight="800" fill="#ffffff" text-anchor="middle">
      MARKS FOLIO
    </text>
    <!-- Quick buttons on phone -->
    <rect x="14" y="74" width="92" height="18" rx="4" fill="#eff6ff" stroke="#bfdbfe"/>
    <text x="60" y="86" font-family="Arial, sans-serif" font-size="7" font-weight="700" fill="#1d4ed8" text-anchor="middle">⚡ 1-Click Fast Entry</text>
    
    <rect x="14" y="98" width="92" height="18" rx="4" fill="#f0fdf4" stroke="#bbf7d0"/>
    <text x="60" y="110" font-family="Arial, sans-serif" font-size="7" font-weight="700" fill="#15803d" text-anchor="middle">📄 PDF &amp; Print</text>

    <!-- Mini chart on phone -->
    <rect x="14" y="124" width="92" height="85" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
    <rect x="22" y="165" width="12" height="36" fill="#3b82f6" rx="2"/>
    <rect x="38" y="150" width="12" height="51" fill="#10b981" rx="2"/>
    <rect x="54" y="142" width="12" height="59" fill="#f59e0b" rx="2"/>
    <rect x="70" y="155" width="12" height="46" fill="#8b5cf6" rx="2"/>
    <rect x="86" y="148" width="12" height="53" fill="#ec4899" rx="2"/>
  </g>

  <!-- Pencils Holder on Desk (Far Right) -->
  <g transform="translate(1115, 230)" filter="url(#softShadow)">
    <!-- Blue Cup -->
    <rect x="0" y="130" width="60" height="90" rx="8" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
    <!-- Colored Pencils / Pens sticking out -->
    <g stroke-linecap="round">
      <line x1="12" y1="130" x2="6" y2="40" stroke="#f59e0b" stroke-width="8"/>
      <polygon points="6,40 2,24 10,40" fill="#1e293b"/>
      <line x1="28" y1="130" x2="28" y2="20" stroke="#ef4444" stroke-width="8"/>
      <polygon points="28,20 24,4 32,20" fill="#1e293b"/>
      <line x1="44" y1="130" x2="52" y2="35" stroke="#10b981" stroke-width="8"/>
      <polygon points="52,35 56,19 48,35" fill="#1e293b"/>
    </g>
  </g>

  <!-- Top Left: Bihar Education Emblem ("तमसो मा ज्योतिर्गमय") -->
  <g transform="translate(42, 16)" filter="url(#softShadow)">
    <circle cx="28" cy="28" r="24" fill="#dc2626" stroke="#facc15" stroke-width="2.5"/>
    <circle cx="28" cy="28" r="20" fill="#ffffff"/>
    <path d="M28 14 L30 24 L34 26 L28 29 L22 26 L26 24 Z" fill="#dc2626"/>
    <circle cx="28" cy="20" r="3" fill="#f59e0b"/>
  </g>
</svg>
`;

async function main() {
  console.log('Generating logo and thumbnail assets...');
  
  // Save SVGs
  fs.writeFileSync('logo.svg', logoSvg.trim());
  fs.writeFileSync('share-thumbnail.svg', shareBannerSvg.trim());
  console.log('Saved logo.svg and share-thumbnail.svg');

  // Convert Logo to PNG (512x512)
  await sharp(Buffer.from(logoSvg))
    .resize(512, 512)
    .png()
    .toFile('logo.png');
  console.log('Generated logo.png (512x512)');

  // Convert Logo to Favicon PNG (64x64)
  await sharp(Buffer.from(logoSvg))
    .resize(64, 64)
    .png()
    .toFile('favicon.png');
  console.log('Generated favicon.png (64x64)');

  // Convert Share Banner to PNG (1200x630)
  await sharp(Buffer.from(shareBannerSvg))
    .resize(1200, 630)
    .png({ quality: 95 })
    .toFile('share-thumbnail.png');
  console.log('Generated share-thumbnail.png (1200x630)');
  
  // Also create og-image.png as duplicate for scrapers that look for og-image
  fs.copyFileSync('share-thumbnail.png', 'og-image.png');
  console.log('Created og-image.png copy');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
