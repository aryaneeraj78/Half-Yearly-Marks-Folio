// Vectors and assets for Bihar School Report Card (विद्यालय रिपोर्ट कार्ड)
// Matching exact official design: Shiksha Vibhag Bihar, Sarva Shiksha Abhiyan, Bihar Education Project

window.SHIKSHA_VIBHAG_SVG = `
<svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer green circle -->
  <circle cx="100" cy="100" r="96" fill="#fff9c4" stroke="#1b5e20" stroke-width="4"/>
  <circle cx="100" cy="100" r="91" fill="none" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="3 2"/>
  
  <!-- Left pencil -->
  <g transform="translate(18, 55) rotate(-20)">
    <path d="M0,15 L10,0 L20,15 L20,70 L0,70 Z" fill="#ffb74d" stroke="#5d4037" stroke-width="1"/>
    <path d="M0,15 L10,0 L20,15 Z" fill="#ffe0b2"/>
    <polygon points="10,0 7,6 13,6" fill="#212121"/>
    <rect x="0" y="55" width="20" height="15" fill="#f48fb1" stroke="#5d4037" stroke-width="1"/>
  </g>

  <!-- Right pencil -->
  <g transform="translate(162, 50) rotate(20)">
    <path d="M0,15 L10,0 L20,15 L20,70 L0,70 Z" fill="#ffb74d" stroke="#5d4037" stroke-width="1"/>
    <path d="M0,15 L10,0 L20,15 Z" fill="#ffe0b2"/>
    <polygon points="10,0 7,6 13,6" fill="#212121"/>
    <rect x="0" y="55" width="20" height="15" fill="#f48fb1" stroke="#5d4037" stroke-width="1"/>
  </g>

  <!-- Foliage / leaves along edge -->
  <g fill="#2e7d32">
    <ellipse cx="38" cy="40" rx="4" ry="10" transform="rotate(-30 38 40)"/>
    <ellipse cx="48" cy="32" rx="4" ry="10" transform="rotate(-15 48 32)"/>
    <ellipse cx="162" cy="40" rx="4" ry="10" transform="rotate(30 162 40)"/>
    <ellipse cx="152" cy="32" rx="4" ry="10" transform="rotate(15 152 32)"/>
    <ellipse cx="35" cy="155" rx="4" ry="10" transform="rotate(35 35 155)"/>
    <ellipse cx="46" cy="165" rx="4" ry="10" transform="rotate(50 46 165)"/>
    <ellipse cx="165" cy="155" rx="4" ry="10" transform="rotate(-35 165 155)"/>
    <ellipse cx="154" cy="165" rx="4" ry="10" transform="rotate(-50 154 165)"/>
  </g>

  <!-- Bodhi Tree (symbol of Bihar) -->
  <g id="bodhiTree" transform="translate(100, 58)">
    <!-- Tree Trunk -->
    <path d="M-3,30 L-2,8 Q-10,-5 -22,-12 Q-10,-10 -2,0 L-2,-20 L2,-20 L2,0 Q10,-10 22,-12 Q10,-5 2,8 L3,30 Z" fill="#5d4037"/>
    <!-- Altar / Platform -->
    <rect x="-18" y="28" width="36" height="16" fill="#ffffff" stroke="#212121" stroke-width="2"/>
    <rect x="-14" y="32" width="28" height="8" fill="#212121"/>
    <text x="0" y="38" font-family="'Noto Sans Devanagari', sans-serif" font-size="7" font-weight="bold" fill="#ffffff" text-anchor="middle">बिहार</text>
    
    <!-- Leaves -->
    <g fill="#2e7d32" stroke="#1b5e20" stroke-width="0.8">
      <path d="M0,-32 C-7,-25 -6,-15 0,-10 C6,-15 7,-25 0,-32 Z"/>
      <path d="M-10,-28 C-18,-24 -15,-12 -8,-8 C-4,-14 -3,-24 -10,-28 Z"/>
      <path d="M10,-28 C18,-24 15,-12 8,-8 C4,-14 3,-24 10,-28 Z"/>
      <path d="M-18,-20 C-26,-15 -21,-3 -14,0 C-11,-7 -11,-16 -18,-20 Z"/>
      <path d="M18,-20 C26,-15 21,-3 14,0 C11,-7 11,-16 18,-20 Z"/>
      <path d="M-22,-8 C-29,-2 -22,8 -15,8 C-14,1 -15,-6 -22,-8 Z"/>
      <path d="M22,-8 C29,-2 22,8 15,8 C14,1 15,-6 22,-8 Z"/>
      <path d="M-5,-18 C-10,-12 -8,-4 -3,0 C0,-5 -1,-14 -5,-18 Z"/>
      <path d="M5,-18 C10,-12 8,-4 3,0 C0,-5 1,-14 5,-18 Z"/>
    </g>
    <!-- Rosary/Prayer beads hanging on tree -->
    <path d="M-9,10 Q-15,18 -9,26 Q-3,18 -9,10" fill="none" stroke="#424242" stroke-width="1.2" stroke-dasharray="2 1.5"/>
    <path d="M9,10 Q15,18 9,26 Q3,18 9,10" fill="none" stroke="#424242" stroke-width="1.2" stroke-dasharray="2 1.5"/>
  </g>

  <!-- Left & Right Swastik (ancient sacred emblem of Bihar seal) -->
  <g transform="translate(68, 92)" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="square">
    <path d="M-8,-8 L-8,0 L8,0 L8,8 M-8,-8 L0,-8 M8,8 L0,8 M0,-8 L0,8 M-8,0 L-8,4 M8,0 L8,-4"/>
  </g>
  <g transform="translate(132, 92)" fill="none" stroke="#212121" stroke-width="2.2" stroke-linecap="square">
    <path d="M-8,-8 L-8,0 L8,0 L8,8 M-8,-8 L0,-8 M8,8 L0,8 M0,-8 L0,8 M-8,0 L-8,4 M8,0 L8,-4"/>
  </g>

  <!-- Text: शिक्षा विभाग / बिहार सरकार -->
  <text x="100" y="132" font-family="'Baloo 2', 'Noto Sans Devanagari', sans-serif" font-size="20" font-weight="800" fill="#1b5e20" text-anchor="middle">शिक्षा विभाग</text>
  <text x="100" y="148" font-family="'Noto Sans Devanagari', sans-serif" font-size="13" font-weight="700" fill="#2e7d32" text-anchor="middle">बिहार सरकार</text>

  <!-- Open Book at bottom -->
  <g transform="translate(100, 168)">
    <path d="M0,2 Q-20,-8 -35,-4 L-35,16 Q-18,12 0,20 Q18,12 35,16 L35,-4 Q20,-8 0,2 Z" fill="#ffffff" stroke="#212121" stroke-width="1.5"/>
    <!-- Page lines -->
    <path d="M-6,4 Q-18,-3 -30,0" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <path d="M-6,8 Q-18,1 -30,4" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <path d="M-6,12 Q-18,5 -30,8" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <path d="M6,4 Q18,-3 30,0" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <path d="M6,8 Q18,1 30,4" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <path d="M6,12 Q18,5 30,8" stroke="#9e9e9e" stroke-width="1" fill="none"/>
    <line x1="0" y1="2" x2="0" y2="20" stroke="#212121" stroke-width="1.5"/>
  </g>
</svg>
`;

window.SSA_LOGO_SVG = `
<svg viewBox="0 0 540 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Center Text Top: सर्व शिक्षा अभियान -->
  <text x="270" y="44" font-family="'Baloo 2', 'Noto Sans Devanagari', sans-serif" font-size="36" font-weight="800" fill="#111827" text-anchor="middle" letter-spacing="0.5">सर्व शिक्षा अभियान</text>

  <!-- Center Text Bottom: सब पढ़ें सब बढ़ें -->
  <text x="270" y="128" font-family="'Baloo 2', 'Noto Sans Devanagari', sans-serif" font-size="30" font-weight="700" fill="#111827" text-anchor="middle" letter-spacing="0.5">सब पढ़ें सब बढ़ें</text>

  <!-- Long Horizontal Pencil in center -->
  <g id="ssaPencil">
    <!-- Sharpened wood tip -->
    <polygon points="12,74 54,61 54,87" fill="#ffe0b2" stroke="#111827" stroke-width="2.5"/>
    <polygon points="12,74 28,69 28,79" fill="#212121"/>

    <!-- Red Pencil Hexagonal Body -->
    <rect x="54" y="61" width="410" height="26" fill="#d32f2f" stroke="#111827" stroke-width="2.5"/>
    <line x1="54" y1="74" x2="464" y2="74" stroke="#f44336" stroke-width="3"/>
    <line x1="54" y1="64" x2="464" y2="64" stroke="#b71c1c" stroke-width="1.5"/>
    <line x1="54" y1="84" x2="464" y2="84" stroke="#b71c1c" stroke-width="1.5"/>

    <!-- Eraser metal band & Eraser on right -->
    <rect x="464" y="60" width="18" height="28" rx="2" fill="#212121" stroke="#111827" stroke-width="2"/>
    <path d="M482,61 L496,61 Q506,61 506,74 Q506,87 496,87 L482,87 Z" fill="#ffffff" stroke="#111827" stroke-width="2.5"/>
  </g>

  <!-- Girl sitting on the pencil (Left side) reading open book -->
  <g id="girlStudent" transform="translate(68, 6)">
    <!-- Open book held by girl -->
    <g transform="translate(-46, 12) rotate(-15)">
      <path d="M0,0 Q14,-6 28,0 L28,24 Q14,18 0,24 Z" fill="#ffffff" stroke="#111827" stroke-width="2.2"/>
      <path d="M28,0 Q42,-6 56,0 L56,24 Q42,18 28,24 Z" fill="#ffffff" stroke="#111827" stroke-width="2.2"/>
      <line x1="28" y1="0" x2="28" y2="24" stroke="#111827" stroke-width="2"/>
    </g>
    <!-- Hands holding book -->
    <ellipse cx="6" cy="30" rx="3.5" ry="3.5" fill="#ffe0b2" stroke="#111827" stroke-width="1.5"/>
    <ellipse cx="18" cy="24" rx="3.5" ry="3.5" fill="#ffe0b2" stroke="#111827" stroke-width="1.5"/>
    
    <!-- Head and face -->
    <circle cx="28" cy="22" r="14" fill="#ffffff" stroke="#111827" stroke-width="2.2"/>
    <!-- Eyes, nose, smile -->
    <circle cx="24" cy="20" r="1.8" fill="#111827"/>
    <circle cx="32" cy="20" r="1.8" fill="#111827"/>
    <path d="M25,25 Q28,29 32,25" fill="none" stroke="#111827" stroke-width="1.8" stroke-linecap="round"/>
    
    <!-- Hair and pigtails with red bows -->
    <path d="M16,16 Q28,8 40,16 Q42,26 38,20 Q28,12 18,22 Z" fill="#111827"/>
    <path d="M16,14 Q8,8 2,14 Q8,22 14,20 Z" fill="#111827"/>
    <polygon points="12,18 4,14 6,24" fill="#d32f2f" stroke="#111827" stroke-width="1"/>
    <polygon points="38,18 46,14 44,24" fill="#d32f2f" stroke="#111827" stroke-width="1"/>

    <!-- Green frock -->
    <path d="M18,36 L38,36 L46,62 L10,62 Z" fill="#2e7d32" stroke="#111827" stroke-width="2.2"/>
    
    <!-- Legs hanging over pencil -->
    <path d="M18,62 L18,78 Q22,86 28,82 Q28,74 24,62" fill="#ffffff" stroke="#111827" stroke-width="2"/>
    <path d="M30,62 L32,80 Q38,88 44,82 Q42,74 36,62" fill="#ffffff" stroke="#111827" stroke-width="2"/>
  </g>

  <!-- Boy sitting on the pencil (Right side) pointing forward -->
  <g id="boyStudent" transform="translate(425, 20)">
    <!-- Head and face -->
    <circle cx="28" cy="18" r="14" fill="#ffffff" stroke="#111827" stroke-width="2.2"/>
    <!-- Spiky / boy hair -->
    <path d="M16,14 Q28,4 40,12 Q42,6 34,4 Q24,2 18,10 Z" fill="#111827"/>
    <path d="M14,14 Q20,6 28,6 Q36,6 42,14" fill="#111827"/>
    <!-- Eyes, nose, smile -->
    <circle cx="24" cy="18" r="1.8" fill="#111827"/>
    <circle cx="32" cy="18" r="1.8" fill="#111827"/>
    <path d="M26,23 Q29,26 33,23" fill="none" stroke="#111827" stroke-width="1.8" stroke-linecap="round"/>

    <!-- Pointing left arm -->
    <path d="M18,34 L-15,36 Q-22,36 -22,32 Q-15,30 18,30 Z" fill="#ffffff" stroke="#111827" stroke-width="2"/>
    <polygon points="-22,34 -30,34 -24,31" fill="#ffe0b2" stroke="#111827" stroke-width="1.5"/>

    <!-- Yellow shirt -->
    <path d="M16,30 L40,30 L42,50 L14,50 Z" fill="#fbc02d" stroke="#111827" stroke-width="2.2"/>
    
    <!-- Blue shorts -->
    <path d="M14,50 L42,50 L44,64 L12,64 Z" fill="#0288d1" stroke="#111827" stroke-width="2.2"/>

    <!-- Legs hanging over pencil -->
    <path d="M18,64 L16,80 Q20,88 26,84 Q26,76 24,64" fill="#ffffff" stroke="#111827" stroke-width="2"/>
    <path d="M32,64 L34,80 Q38,88 44,84 Q42,76 38,64" fill="#ffffff" stroke="#111827" stroke-width="2"/>
  </g>
</svg>
`;

window.BOOK_RAYS_SVG = `
<svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Radiating light beams -->
  <g stroke="#0070ba" stroke-width="2.5" stroke-linecap="round">
    <line x1="50" y1="14" x2="50" y2="4"/>
    <line x1="32" y1="18" x2="24" y2="10"/>
    <line x1="68" y1="18" x2="76" y2="10"/>
    <line x1="18" y1="32" x2="8" y2="28"/>
    <line x1="82" y1="32" x2="92" y2="28"/>
  </g>
  <!-- Open Book in solid blue style -->
  <g fill="#0070ba" stroke="#0056b3" stroke-width="2" stroke-linejoin="round">
    <!-- Left pages -->
    <path d="M46,44 Q28,34 10,40 L10,80 Q28,74 46,80 Z"/>
    <!-- Right pages -->
    <path d="M54,44 Q72,34 90,40 L90,80 Q72,74 54,80 Z"/>
  </g>
  <!-- White page lines for realism -->
  <path d="M16,48 Q30,44 42,48" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M16,56 Q30,52 42,56" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M16,64 Q30,60 42,64" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M84,48 Q70,44 58,48" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M84,56 Q70,52 58,56" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M84,64 Q70,60 58,64" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <!-- Spine -->
  <path d="M46,80 Q50,84 54,80 L54,44 Q50,48 46,44 Z" fill="#003d7a"/>
</svg>
`;

window.GRAD_CAP_WREATH_SVG = `
<svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Laurel Wreath branches on left and right in royal blue -->
  <g fill="#0070ba">
    <!-- Left branch leaves -->
    <path d="M48,90 C32,90 14,75 14,50 C14,35 22,25 30,18" stroke="#0070ba" stroke-width="2.5" fill="none"/>
    <ellipse cx="14" cy="50" rx="3.5" ry="7" transform="rotate(-20 14 50)"/>
    <ellipse cx="18" cy="38" rx="3.5" ry="7" transform="rotate(-5 18 38)"/>
    <ellipse cx="25" cy="28" rx="3.5" ry="7" transform="rotate(20 25 28)"/>
    <ellipse cx="34" cy="20" rx="3.5" ry="7" transform="rotate(40 34 20)"/>
    <ellipse cx="18" cy="64" rx="3.5" ry="7" transform="rotate(-40 18 64)"/>
    <ellipse cx="28" cy="76" rx="3.5" ry="7" transform="rotate(-60 28 76)"/>
    <ellipse cx="40" cy="85" rx="3.5" ry="7" transform="rotate(-80 40 85)"/>
    
    <!-- Right branch leaves -->
    <path d="M52,90 C68,90 86,75 86,50 C86,35 78,25 70,18" stroke="#0070ba" stroke-width="2.5" fill="none"/>
    <ellipse cx="86" cy="50" rx="3.5" ry="7" transform="rotate(20 86 50)"/>
    <ellipse cx="82" cy="38" rx="3.5" ry="7" transform="rotate(5 82 38)"/>
    <ellipse cx="75" cy="28" rx="3.5" ry="7" transform="rotate(-20 75 28)"/>
    <ellipse cx="66" cy="20" rx="3.5" ry="7" transform="rotate(-40 66 20)"/>
    <ellipse cx="82" cy="64" rx="3.5" ry="7" transform="rotate(40 82 64)"/>
    <ellipse cx="72" cy="76" rx="3.5" ry="7" transform="rotate(60 72 76)"/>
    <ellipse cx="60" cy="85" rx="3.5" ry="7" transform="rotate(80 60 85)"/>
  </g>

  <!-- Graduation Cap (Mortarboard) in center -->
  <g transform="translate(50, 48)">
    <!-- Cap base/skullcap -->
    <path d="M-15,6 Q0,14 15,6 L15,16 Q0,24 -15,16 Z" fill="#0056b3" stroke="#003d7a" stroke-width="1.5"/>
    <!-- Diamond top -->
    <polygon points="0,-16 28,-3 0,10 -28,-3" fill="#0070ba" stroke="#003d7a" stroke-width="2"/>
    <!-- Button on top -->
    <circle cx="0" cy="-3" r="2.5" fill="#003d7a"/>
    <!-- Tassel hanging down -->
    <path d="M0,-3 Q16,2 20,14 L22,22" stroke="#003d7a" stroke-width="1.8" fill="none"/>
    <polygon points="20,20 24,20 22,26" fill="#003d7a"/>
  </g>
</svg>
`;

window.FLORAL_DIVIDER_SVG = `
<svg viewBox="0 0 160 30" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Elegant center fleur / palmette -->
  <path d="M80,4 C83,12 87,18 94,18 C90,20 86,22 80,26 C74,22 70,20 66,18 C73,18 77,12 80,4 Z" fill="#0070ba"/>
  <circle cx="80" cy="18" r="2.5" fill="#fed843"/>
  <!-- Left flourish swirl -->
  <path d="M68,18 C52,18 42,8 24,18 C14,24 6,18 2,16" stroke="#0070ba" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="36" cy="14" r="3" fill="#0070ba"/>
  <circle cx="20" cy="18" r="2.2" fill="#0070ba"/>
  <circle cx="4" cy="16" r="2.5" fill="#0070ba"/>
  <!-- Right flourish swirl -->
  <path d="M92,18 C108,18 118,8 136,18 C146,24 154,18 158,16" stroke="#0070ba" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="124" cy="14" r="3" fill="#0070ba"/>
  <circle cx="140" cy="18" r="2.2" fill="#0070ba"/>
  <circle cx="156" cy="16" r="2.5" fill="#0070ba"/>
</svg>
`;

window.BOOKS_STACK_LEFT_SVG = `
<svg viewBox="0 0 130 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Book 1 (Bottom, Blue) -->
  <g transform="translate(10, 52)">
    <polygon points="0,18 85,18 95,8 10,8" fill="#0288d1" stroke="#01579b" stroke-width="1.8"/>
    <rect x="0" y="18" width="85" height="12" rx="2" fill="#039be5" stroke="#01579b" stroke-width="1.8"/>
    <rect x="10" y="21" width="75" height="7" fill="#ffffff" stroke="#90caf9" stroke-width="1"/>
  </g>

  <!-- Book 2 (Middle, Red) -->
  <g transform="translate(16, 34) rotate(-3)">
    <polygon points="0,16 78,16 88,6 10,6" fill="#e53935" stroke="#b71c1c" stroke-width="1.8"/>
    <rect x="0" y="16" width="78" height="12" rx="2" fill="#f44336" stroke="#b71c1c" stroke-width="1.8"/>
    <rect x="8" y="19" width="70" height="7" fill="#ffffff" stroke="#ffcdd2" stroke-width="1"/>
  </g>

  <!-- Book 3 (Top, Green/Yellow) -->
  <g transform="translate(24, 18) rotate(4)">
    <polygon points="0,14 70,14 80,4 10,4" fill="#43a047" stroke="#1b5e20" stroke-width="1.8"/>
    <rect x="0" y="14" width="70" height="12" rx="2" fill="#4caf50" stroke="#1b5e20" stroke-width="1.8"/>
    <rect x="8" y="17" width="62" height="7" fill="#ffffff" stroke="#c8e6c9" stroke-width="1"/>
  </g>

  <!-- Sprouting Green Leaves -->
  <g transform="translate(92, 42)" fill="#2e7d32" stroke="#1b5e20" stroke-width="1.2">
    <path d="M0,20 C10,12 18,2 26,-8 C18,0 8,4 0,20 Z"/>
    <path d="M2,18 C-4,10 -10,4 -18,2 C-10,6 -4,12 2,18 Z"/>
    <path d="M4,16 C12,8 20,12 28,14 C18,16 10,18 4,16 Z"/>
  </g>
</svg>
`;

window.BOOKS_PENCILS_RIGHT_SVG = `
<svg viewBox="0 0 130 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Stack of Books on left of cup -->
  <g transform="translate(10, 52)">
    <polygon points="0,18 65,18 75,8 10,8" fill="#fbc02d" stroke="#f57f17" stroke-width="1.8"/>
    <rect x="0" y="18" width="65" height="12" rx="2" fill="#fdd835" stroke="#f57f17" stroke-width="1.8"/>
    <rect x="8" y="21" width="57" height="7" fill="#ffffff" stroke="#fff59d" stroke-width="1"/>
  </g>
  <g transform="translate(14, 36) rotate(3)">
    <polygon points="0,16 60,16 70,6 10,6" fill="#00897b" stroke="#004d40" stroke-width="1.8"/>
    <rect x="0" y="16" width="60" height="12" rx="2" fill="#26a69a" stroke="#004d40" stroke-width="1.8"/>
    <rect x="8" y="19" width="52" height="7" fill="#ffffff" stroke="#b2dfdb" stroke-width="1"/>
  </g>

  <!-- Pencil Holder / Cup with Pencils -->
  <g transform="translate(80, 24)">
    <!-- Pencils sticking out -->
    <!-- Red pencil -->
    <g transform="translate(12, 10) rotate(-18)">
      <rect x="0" y="0" width="7" height="36" fill="#e53935" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 0,0 7,0" fill="#ffe0b2" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 1.5,-4 5.5,-4" fill="#212121"/>
    </g>
    <!-- Blue pencil -->
    <g transform="translate(20, 8) rotate(-4)">
      <rect x="0" y="0" width="7" height="38" fill="#1976d2" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 0,0 7,0" fill="#ffe0b2" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 1.5,-4 5.5,-4" fill="#212121"/>
    </g>
    <!-- Green pencil -->
    <g transform="translate(28, 12) rotate(14)">
      <rect x="0" y="0" width="7" height="34" fill="#43a047" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 0,0 7,0" fill="#ffe0b2" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 1.5,-4 5.5,-4" fill="#212121"/>
    </g>
    <!-- Yellow pencil -->
    <g transform="translate(34, 15) rotate(26)">
      <rect x="0" y="0" width="7" height="32" fill="#fbc02d" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 0,0 7,0" fill="#ffe0b2" stroke="#212121" stroke-width="1"/>
      <polygon points="3.5,-10 1.5,-4 5.5,-4" fill="#212121"/>
    </g>

    <!-- Cup/Holder -->
    <path d="M6,22 L10,54 Q12,58 24,58 Q36,58 38,54 L42,22 Z" fill="#0288d1" stroke="#01579b" stroke-width="2"/>
    <ellipse cx="24" cy="22" rx="18" ry="4" fill="#039be5" stroke="#01579b" stroke-width="2"/>
    <!-- Decorative stripes on cup -->
    <path d="M8,32 Q24,36 40,32" stroke="#ffffff" stroke-width="2" fill="none"/>
    <path d="M9,42 Q24,46 39,42" stroke="#ffffff" stroke-width="2" fill="none"/>
  </g>
</svg>
`;
