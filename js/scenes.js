/* =========================================================
   Rihla — Animated SVG scenes
   Lightweight animated backgrounds used as photo fallbacks
   and as decorative motion. Pure string builders (no DOM).
   ========================================================= */

var ET_SCENES = (function () {

  function styleBlock(css) {
    return '<style>' + css + '</style>';
  }

  function wrap(id, inner, css) {
    return '<svg class="scene-svg" viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      styleBlock(css) +
      '<defs>' +
        '<linearGradient id="' + id + '-sky" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#0d3b66"/><stop offset=".55" stop-color="#1f6396"/><stop offset="1" stop-color="#57b7d6"/>' +
        '</linearGradient>' +
        '<linearGradient id="' + id + '-sun" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#ffe29a"/><stop offset="1" stop-color="#f9a826"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<rect width="400" height="260" fill="url(#' + id + '-sky)"/>' +
      inner +
    '</svg>';
  }

  /* ---------- Reusable bits ---------- */

  function sun(id, cx, cy, r, cls) {
    return '<circle class="' + (cls || 'sun') + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + id + '-sun)"/>';
  }

  function stars() {
    var s = '';
    var pts = [[30, 24], [120, 40], [210, 18], [300, 34], [360, 58], [70, 66], [250, 60], [160, 22], [330, 20]];
    for (var i = 0; i < pts.length; i++) {
      s += '<circle class="twinkle" style="animation-delay:' + (i * 0.45) + 's" cx="' + pts[i][0] + '" cy="' + pts[i][1] + '" r="1.6" fill="#fff"/>';
    }
    return s;
  }

  function clouds() {
    return '<g class="cloud drift1">' +
        '<ellipse cx="80" cy="44" rx="34" ry="12" fill="rgba(255,255,255,.75)"/>' +
        '<ellipse cx="104" cy="38" rx="22" ry="10" fill="rgba(255,255,255,.7)"/>' +
      '</g>' +
      '<g class="cloud drift2">' +
        '<ellipse cx="300" cy="66" rx="30" ry="10" fill="rgba(255,255,255,.6)"/>' +
        '<ellipse cx="322" cy="60" rx="20" ry="9" fill="rgba(255,255,255,.55)"/>' +
      '</g>';
  }

  function waves(id, y, amp, color, speed, cls) {
    var d = 'M0,' + y + ' Q25,' + (y - amp) + ' 50,' + y + ' T100,' + y + ' T150,' + y + ' T200,' + y + ' T250,' + y + ' T300,' + y + ' T350,' + y + ' T400,' + y;
    return '<g class="wave-group ' + cls + '"><path d="' + d + ' L400,' + (y + 26) + ' L0,' + (y + 26) + ' Z" fill="' + color + '" opacity="0.55"/>' +
      '<path transform="translate(400,0)" d="' + d + ' L800,' + (y + 26) + ' L400,' + (y + 26) + ' Z" fill="' + color + '" opacity="0.55"/></g>';
  }

  function bubbles() {
    var s = '';
    var pos = [[40, 200, 3], [90, 220, 4], [150, 190, 3], [210, 230, 5], [270, 200, 3], [330, 220, 4], [370, 195, 3], [60, 235, 3], [300, 240, 4]];
    for (var i = 0; i < pos.length; i++) {
      s += '<circle class="bubble" style="animation-delay:' + (i * 0.7) + 's" cx="' + pos[i][0] + '" cy="' + pos[i][1] + '" r="' + pos[i][2] + '" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="1.4"/>';
    }
    return s;
  }

  function fish(id, x, y, dir, color) {
    return '<g class="fish" style="animation-delay:' + (Math.random() * 2) + 's">' +
      '<g transform="translate(' + x + ',' + y + ') scale(' + dir + ',1)">' +
        '<ellipse cx="0" cy="0" rx="11" ry="6" fill="' + color + '"/>' +
        '<polygon points="-11,-2 -18,-8 -18,8" fill="' + color + '"/>' +
        '<circle cx="5" cy="-1.5" r="1.6" fill="#fff"/>' +
      '</g></g>';
  }

  /* ---------- Scenes ---------- */

  function sea() {
    var inner = sun('sea', 330, 60, 26) +
      '<path d="M0,150 Q50,120 100,150 T200,150 T300,150 T400,150 L400,260 L0,260 Z" fill="#0f7ea0"/>' +
      waves('sea', 168, 12, '#1abc9c', 7, 'wave1') +
      waves('sea', 196, 16, '#16a085', 10, 'wave2') +
      waves('sea', 228, 12, '#0b6e5a', 13, 'wave3') +
      '<g class="boat">' +
        '<path d="M0,0 L26,0 L20,8 L6,8 Z" fill="#8d4a2f"/>' +
        '<polygon points="16,-26 16,0 2,0" fill="#fff"/>' +
        '<polygon points="16,-26 16,0 30,0" fill="#f9a826"/>' +
        '<rect x="0" y="-1" width="26" height="2" fill="#5b2f1c"/>' +
      '</g>' +
      bubbles();
    var css = 'g.wave1{animation:sea-wave1 ' + 7 + 's linear infinite}@keyframes sea-wave1{from{transform:translateX(0)}to{transform:translateX(-400px)}}' +
      'g.wave2{animation:sea-wave2 ' + 10 + 's linear infinite}@keyframes sea-wave2{from{transform:translateX(0)}to{transform:translateX(-400px)}}' +
      'g.wave3{animation:sea-wave3 ' + 13 + 's linear infinite}@keyframes sea-wave3{from{transform:translateX(0)}to{transform:translateX(-400px)}}' +
      'g.boat{animation:sea-boat 5s ease-in-out infinite alternate;transform-origin:13px 8px}@keyframes sea-boat{from{transform:rotate(-3deg) translateY(0)}to{transform:rotate(3deg) translateY(-4px)}}' +
      'circle.bubble{animation:sea-rise 5s linear infinite}@keyframes sea-rise{0%{transform:translateY(0);opacity:0}15%{opacity:.9}100%{transform:translateY(-120px);opacity:0}}' +
      'circle.sun{animation:sea-pulse 4s ease-in-out infinite alternate}@keyframes sea-pulse{from{transform:scale(1);opacity:.95}to{transform:scale(1.12);opacity:1}}';
    return wrap('sea', inner, css);
  }

  function underwater() {
    var inner =
      '<rect width="400" height="260" fill="#0a3d62" opacity="0.35"/>' +
      '<g class="rays">' +
        '<polygon points="40,0 90,0 140,260 60,260" fill="rgba(255,255,255,.10)"/>' +
        '<polygon points="170,0 215,0 260,260 195,260" fill="rgba(255,255,255,.08)"/>' +
        '<polygon points="300,0 350,0 370,260 290,260" fill="rgba(255,255,255,.10)"/>' +
      '</g>' +
      '<ellipse cx="70" cy="246" rx="80" ry="20" fill="#0a5c46"/>' +
      '<ellipse cx="210" cy="252" rx="110" ry="18" fill="#0b6e5a"/>' +
      '<ellipse cx="360" cy="246" rx="70" ry="16" fill="#0a5c46"/>' +
      '<path d="M150,252 q10,-14 24,-6 q-4,-16 14,-22" fill="none" stroke="#1abc9c" stroke-width="4"/>' +
      '<path d="M300,248 q8,-10 20,-4" fill="none" stroke="#f9a826" stroke-width="4"/>' +
      fish('u', 90, 150, 1, '#f9a826') +
      fish('u', 250, 130, -1, '#1abc9c') +
      fish('u', 330, 185, 1, '#e74c3c') +
      bubbles();
    var css = 'g.rays{animation:uw-rays 6s ease-in-out infinite alternate}@keyframes uw-rays{from{transform:rotate(0deg)}to{transform:rotate(2deg)}}' +
      'g.fish{animation:uw-swim 7s ease-in-out infinite alternate}@keyframes uw-swim{from{transform:translate(0,0)}to{transform:translate(-24px,6px)}}' +
      'circle.bubble{animation:uw-rise 6s linear infinite}@keyframes uw-rise{0%{transform:translateY(0);opacity:0}15%{opacity:.9}100%{transform:translateY(-150px);opacity:0}}' +
      'rect{opacity:1}';
    return wrap('uw', inner, css);
  }

  function desert() {
    var inner = sun('ds', 200, 56, 30) +
      stars() +
      '<path d="M0,170 Q100,120 200,165 T400,160 L400,260 L0,260 Z" fill="#d9a441"/>' +
      '<path d="M0,210 Q120,165 240,205 T400,200 L400,260 L0,260 Z" fill="#c4882e"/>' +
      '<path d="M0,240 Q140,205 260,238 T400,234 L400,260 L0,260 Z" fill="#a96f22"/>' +
      '<g class="camel">' +
        '<path d="M0,0 L10,-6 L18,-3 L26,-6 L34,0 L30,4 L4,4 Z" fill="#6b4423"/>' +
        '<rect x="4" y="-12" width="3" height="8" fill="#6b4423"/><rect x="27" y="-12" width="3" height="8" fill="#6b4423"/>' +
        '<circle cx="30" cy="-2" r="2" fill="#6b4423"/>' +
      '</g>';
    var css = 'circle.sun{animation:ds-pulse 5s ease-in-out infinite alternate}@keyframes ds-pulse{from{transform:scale(1)}to{transform:scale(1.14)}}' +
      'g.camel{animation:ds-walk 9s ease-in-out infinite}@keyframes ds-walk{0%{transform:translateX(-40px)}50%{transform:translateX(360px)}100%{transform:translateX(440px)}}' +
      'circle.twinkle{animation:ds-tw 2.4s ease-in-out infinite alternate}@keyframes ds-tw{from{opacity:.25}to{opacity:1}}';
    return wrap('ds', inner, css);
  }

  function pyramid() {
    var inner = sun('py', 320, 52, 26) +
      clouds() +
      '<polygon points="0,240 60,120 120,240" fill="#e8c15a"/>' +
      '<polygon points="60,120 90,240 0,240" fill="#d4a93f"/>' +
      '<polygon points="120,240 205,90 290,240" fill="#f0cc6d"/>' +
      '<polygon points="205,90 250,240 120,240" fill="#dcb44c"/>' +
      '<polygon points="300,240 360,150 400,240" fill="#d4a93f"/>' +
      '<rect x="196" y="176" width="18" height="28" fill="#7a5a22"/>' +
      '<path d="M0,240 L400,240 L400,260 L0,260 Z" fill="#b98a2f"/>';
    var css = 'circle.sun{animation:py-pulse 4.5s ease-in-out infinite alternate}@keyframes py-pulse{from{transform:scale(1)}to{transform:scale(1.12)}}' +
      'g.cloud.drift1{animation:py-drift 26s linear infinite}@keyframes py-drift{from{transform:translateX(0)}to{transform:translateX(-120px)}}' +
      'g.cloud.drift2{animation:py-drift 34s linear infinite reverse}';
    return wrap('py', inner, css);
  }

  function temple() {
    var inner = sun('tm', 60, 52, 26) +
      '<path d="M0,200 L400,200 L400,260 L0,260 Z" fill="#c9a94e"/>' +
      '<rect x="60" y="60" width="280" height="150" fill="#e6d9a6"/>' +
      '<rect x="70" y="50" width="260" height="16" fill="#c9a94e"/>' +
      '<rect x="70" y="196" width="260" height="8" fill="#c9a94e"/>' +
      '<g fill="#d9c98a">' +
        '<rect x="84" y="70" width="22" height="126"/><rect x="122" y="70" width="22" height="126"/>' +
        '<rect x="160" y="70" width="22" height="126"/><rect x="198" y="70" width="22" height="126"/>' +
        '<rect x="236" y="70" width="22" height="126"/><rect x="274" y="70" width="22" height="126"/>' +
      '</g>' +
      '<rect x="200" y="96" width="0" height="0"/>' +
      '<path d="M60,60 L200,20 L340,60" fill="none" stroke="#f9a826" stroke-width="5"/>' +
      '<circle cx="200" cy="40" r="9" fill="#e07b39"/>';
    var css = 'circle.sun{animation:tm-pulse 4s ease-in-out infinite alternate}@keyframes tm-pulse{from{transform:scale(1)}to{transform:scale(1.1)}}';
    return wrap('tm', inner, css);
  }

  function city() {
    var inner = '<circle class="moon" cx="330" cy="52" r="18" fill="#f3f0d9"/>' +
      stars() +
      '<rect x="0" y="120" width="400" height="140" fill="#1c3a5c"/>' +
      '<g fill="#274f77">' +
        '<rect x="10" y="90" width="40" height="90"/><rect x="60" y="60" width="34" height="120"/>' +
        '<rect x="104" y="100" width="46" height="80"/><rect x="160" y="70" width="30" height="110"/>' +
        '<rect x="200" y="50" width="42" height="130"/><rect x="252" y="92" width="36" height="88"/>' +
        '<rect x="298" y="66" width="44" height="114"/><rect x="352" y="96" width="38" height="84"/>' +
      '</g>' +
      '<g fill="#ffd76e">' +
        '<rect x="16" y="100" width="6" height="8"/><rect x="34" y="118" width="6" height="8"/><rect x="16" y="136" width="6" height="8"/>' +
        '<rect x="70" y="76" width="5" height="8"/><rect x="78" y="96" width="5" height="8"/><rect x="70" y="118" width="5" height="8"/>' +
        '<rect x="212" y="66" width="5" height="8"/><rect x="224" y="84" width="5" height="8"/><rect x="212" y="106" width="5" height="8"/>' +
        '<rect x="308" y="80" width="5" height="8"/><rect x="322" y="100" width="5" height="8"/><rect x="308" y="122" width="5" height="8"/>' +
      '</g>' +
      '<path d="M0,210 Q100,180 200,210 T400,210 L400,260 L0,260 Z" fill="#0f2a44"/>';
    var css = 'circle.twinkle{animation:ct-tw 2.2s ease-in-out infinite alternate}@keyframes ct-tw{from{opacity:.25}to{opacity:1}}' +
      'circle.moon{animation:ct-moon 5s ease-in-out infinite alternate}@keyframes ct-moon{from{transform:translateY(0)}to{transform:translateY(-5px)}}' +
      'g rect{animation:ct-light 3s ease-in-out infinite alternate}@keyframes ct-light{from{opacity:.6}to{opacity:1}}';
    return wrap('ct', inner, css);
  }

  function mountain() {
    var inner = sun('mt', 200, 60, 28) +
      clouds() +
      '<polygon points="0,220 90,90 180,220" fill="#5d6b7e"/>' +
      '<polygon points="90,90 130,220 0,220" fill="#4b5868"/>' +
      '<polygon points="180,220 280,70 380,220" fill="#6d7d92"/>' +
      '<polygon points="280,70 330,220 180,220" fill="#59687c"/>' +
      '<path d="M0,220 Q100,196 200,220 T400,220 L400,260 L0,260 Z" fill="#3a4452"/>' +
      '<path d="M120,200 q8,-12 18,-6 q-3,-12 12,-18" fill="none" stroke="#fff" stroke-width="3" opacity=".85"/>';
    var css = 'circle.sun{animation:mt-pulse 5s ease-in-out infinite alternate}@keyframes mt-pulse{from{transform:scale(1)}to{transform:scale(1.12)}}' +
      'g.cloud.drift1{animation:mt-drift 30s linear infinite}@keyframes mt-drift{from{transform:translateX(0)}to{transform:translateX(-140px)}}' +
      'g.cloud.drift2{animation:mt-drift 40s linear infinite reverse}';
    return wrap('mt', inner, css);
  }

  function balloon() {
    var inner = sun('bl', 60, 56, 24) +
      clouds() +
      '<g class="balloon b1">' +
        '<ellipse cx="0" cy="0" rx="16" ry="20" fill="#e74c3c"/>' +
        '<polygon points="-8,18 8,18 4,28 -4,28" fill="#7a4a22"/>' +
        '<line x1="0" y1="18" x2="0" y2="28" stroke="#7a4a22" stroke-width="1.5"/>' +
      '</g>' +
      '<g class="balloon b2">' +
        '<ellipse cx="0" cy="0" rx="14" ry="18" fill="#f9a826"/>' +
        '<polygon points="-7,16 7,16 3,25 -3,25" fill="#7a4a22"/>' +
        '<line x1="0" y1="16" x2="0" y2="25" stroke="#7a4a22" stroke-width="1.5"/>' +
      '</g>' +
      '<g class="balloon b3">' +
        '<ellipse cx="0" cy="0" rx="17" ry="21" fill="#1abc9c"/>' +
        '<polygon points="-8,19 8,19 4,29 -4,29" fill="#7a4a22"/>' +
        '<line x1="0" y1="19" x2="0" y2="29" stroke="#7a4a22" stroke-width="1.5"/>' +
      '</g>';
    var css = 'g.b1{animation:bl-float 9s ease-in-out infinite;transform-origin:200px 130px}@keyframes bl-float{0%{transform:translate(120px,240px)}55%{transform:translate(170px,90px)}100%{transform:translate(150px,-30px)}}' +
      'g.b2{animation:bl-float2 12s ease-in-out infinite;transform-origin:200px 130px}@keyframes bl-float2{0%{transform:translate(200px,260px)}50%{transform:translate(260px,110px)}100%{transform:translate(240px,-20px)}}' +
      'g.b3{animation:bl-float3 10s ease-in-out infinite;transform-origin:200px 130px}@keyframes bl-float3{0%{transform:translate(60px,250px)}55%{transform:translate(90px,80px)}100%{transform:translate(80px,-40px)}}' +
      'circle.sun{animation:bl-pulse 4s ease-in-out infinite alternate}@keyframes bl-pulse{from{transform:scale(1)}to{transform:scale(1.12)}}' +
      'g.cloud.drift1{animation:bl-drift 26s linear infinite}@keyframes bl-drift{from{transform:translateX(0)}to{transform:translateX(-140px)}}' +
      'g.cloud.drift2{animation:bl-drift 36s linear infinite reverse}';
    return wrap('bl', inner, css);
  }

  function generic() {
    return sea();
  }

  /* ---------- Public ---------- */

  var registry = {
    snorkeling: sea,
    diving: underwater,
    sea: sea,
    desert: desert,
    historical: pyramid,
    family: balloon,
    watersports: sea,
    quad: desert,
    fishing: sea,
    nightlife: city,
    wellness: mountain,
    food: city
  };

  function scene(category) {
    var fn = registry[category] || generic;
    try { return fn(); } catch (e) { return generic(); }
  }

  /* Decorative animated waves strip for the hero */
  function heroDeco() {
    return '<svg class="hero-deco" viewBox="0 0 1440 130" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<style>' +
        'g.hd1{animation:hd-a 14s linear infinite}@keyframes hd-a{from{transform:translateX(0)}to{transform:translateX(-50%)}}' +
        'g.hd2{animation:hd-b 22s linear infinite}@keyframes hd-b{from{transform:translateX(0)}to{transform:translateX(-50%)}}' +
      '</style>' +
      '<g class="hd1">' +
        '<path d="M0,40 Q120,10 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,130 L0,130 Z" fill="rgba(255,255,255,.14)"/>' +
        '<path transform="translate(1440,0)" d="M0,40 Q120,10 240,40 T480,40 T720,40 T960,40 T1200,40 T1440,40 L1440,130 L0,130 Z" fill="rgba(255,255,255,.14)"/>' +
      '</g>' +
      '<g class="hd2">' +
        '<path d="M0,78 Q150,48 300,78 T600,78 T900,78 T1200,78 T1500,78 L1500,130 L0,130 Z" fill="rgba(255,255,255,.22)"/>' +
        '<path transform="translate(1440,0)" d="M0,78 Q150,48 300,78 T600,78 T900,78 T1200,78 T1500,78 L1500,130 L0,130 Z" fill="rgba(255,255,255,.22)"/>' +
      '</g>' +
    '</svg>';
  }

  /* Animated pharaonic scene for the hero: twinkling stars, pharaoh head,
     Giza-style skyline with pyramids and the Sphinx, gliding birds */
  function sunsetDeco() {
    var navy = 'rgba(8,46,74,.6)';
    var gold = 'rgba(249,168,38,.6)';
    var goldBright = 'rgba(255,214,120,.85)';
    return '<div class="hero-scene" aria-hidden="true">' +
      '<svg class="hero-scene-svg" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">' +
      '<style>' +
        '.st1{animation:stk 4s ease-in-out infinite}.st2{animation:stk 5.5s ease-in-out .8s infinite}.st3{animation:stk 6.5s ease-in-out 1.6s infinite}' +
        '@keyframes stk{0%,100%{opacity:.12}50%{opacity:.9}}' +
        '.phk{animation:phk 8s ease-in-out infinite}' +
        '@keyframes phk{0%,100%{opacity:.6}50%{opacity:1}}' +
        '.py1{animation:pyr 9s ease-in-out infinite}.py2{animation:pyr 12s ease-in-out 1.2s infinite}.py3{animation:pyr 15s ease-in-out 2.4s infinite}.py4{animation:pyr 17s ease-in-out 3s infinite}' +
        '.sfx{animation:pyr 13s ease-in-out 2s infinite}' +
        '@keyframes pyr{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}' +
        '.bird{animation:fly 26s linear infinite}.bird2{animation:fly 36s linear 7s infinite}' +
        '@keyframes fly{0%{transform:translate(-240px,0);opacity:0}8%{opacity:.9}90%{opacity:.9}100%{transform:translate(1600px,0);opacity:0}}' +
        '.rays{transform-box:view-box;transform-origin:1145px 118px;animation:rotRays 90s linear infinite}' +
        '@keyframes rotRays{to{transform:rotate(360deg)}}' +
        '.sunGlow{animation:stk 6s ease-in-out infinite}' +
        '.shaft{animation:shaftBr 7s ease-in-out infinite}' +
        '@keyframes shaftBr{0%,100%{opacity:.45}50%{opacity:1}}' +
        '.ankh{animation:glowA 4s ease-in-out infinite}' +
        '@keyframes glowA{0%,100%{opacity:.3}50%{opacity:1}}' +
      '</style>' +
      /* twinkling stars */
      '<g fill="#ffffff">' +
        '<circle class="st1" cx="120" cy="50" r="2.2"/><circle class="st2" cx="360" cy="84" r="1.7"/>' +
        '<circle class="st3" cx="620" cy="34" r="2.1"/><circle class="st1" cx="900" cy="70" r="1.8"/>' +
        '<circle class="st2" cx="1180" cy="40" r="2.3"/><circle class="st3" cx="1380" cy="90" r="1.6"/>' +
        '<circle class="st1" cx="60" cy="120" r="1.5"/><circle class="st2" cx="760" cy="110" r="1.6"/>' +
        '<circle class="st3" cx="330" cy="200" r="1.4"/><circle class="st1" cx="1310" cy="170" r="1.5"/>' +
      '</g>' +
      /* rotating god-rays around the sun */
      '<g class="rays" transform="translate(1145 118)">' +
        '<g fill="rgba(255,220,150,.17)">' +
          '<path d="M0 0 L-16 -118 L-2 -124 Z"/>' +
          '<path d="M0 0 L-92 -92 L-82 -100 Z"/>' +
          '<path d="M0 0 L-118 -16 L-124 -2 Z"/>' +
          '<path d="M0 0 L-92 92 L-100 82 Z"/>' +
          '<path d="M0 0 L-16 118 L-2 124 Z"/>' +
          '<path d="M0 0 L92 92 L100 82 Z"/>' +
          '<path d="M0 0 L118 16 L124 2 Z"/>' +
          '<path d="M0 0 L92 -92 L82 -100 Z"/>' +
        '</g>' +
      '</g>' +
      /* the great golden sun */
      '<circle class="sunGlow" cx="1145" cy="118" r="64" fill="rgba(255,199,102,.3)"/>' +
      '<circle class="sunCore" cx="1145" cy="118" r="34" fill="rgba(255,214,120,.95)"/>' +
      '<circle cx="1145" cy="118" r="19" fill="rgba(255,242,205,1)"/>' +
      /* god-light shafts sweeping to the dunes */
      '<path class="shaft" d="M1145 118 L340 320 L780 320 Z" fill="rgba(255,214,140,.12)"/>' +
      '<path class="shaft" d="M1145 118 L1080 320 L1410 320 Z" fill="rgba(255,214,140,.1)"/>' +
      /* pharaoh head medallion (kings of Egypt) */
      '<g class="phk" transform="translate(150 36) scale(1.1)">' +
        '<path fill="' + gold + '" d="M14 90 L14 42 Q14 20 28 15 Q44 11 52 19 Q57 23 55 28 Q52 24 50 26 Q54 29 52 32 Q55 35 52 38 Q55 42 52 45 Q47 48 43 46 Q40 43 42 40 L37 90 Z"/>' +
        '<path fill="none" stroke="' + gold + '" stroke-width="1.6" stroke-linecap="round" d="M22 22 Q32 16 42 20 M20 29 Q31 23 44 27 M18 36 Q30 30 43 34 M43 46 Q45 58 42 72 Q41 78 37 82"/>' +
      '</g>' +
      /* large pulsing ankh */
      '<g class="ankh" fill="none" stroke="' + goldBright + '" stroke-width="3.5" stroke-linecap="round">' +
        '<circle cx="585" cy="128" r="15"/>' +
        '<path d="M585 143 V196 M568 169 H602"/>' +
      '</g>' +
      /* small gold ankh near the skyline */
      '<g fill="none" stroke="' + gold + '" stroke-width="2" stroke-linecap="round">' +
        '<path d="M84 268 Q72 262 76 252 Q80 244 88 248 Q95 252 92 260 Q90 266 84 268 Z" opacity=".4"/>' +
        '<path d="M84 268 V286 M73 277 H95" opacity=".4"/>' +
      '</g>' +
      /* temple pylon columns framing the scene */
      '<g fill="' + navy + '">' +
        '<rect x="8" y="96" width="40" height="224"/>' +
        '<path d="M8 96 L18 60 Q28 44 38 60 L48 96 Z"/>' +
        '<path d="M18 110 V310 M28 110 V310 M38 110 V310" stroke="rgba(5,30,48,.55)" stroke-width="2"/>' +
        '<path d="M48 96 V320" stroke="rgba(255,214,120,.55)" stroke-width="2"/>' +
      '</g>' +
      '<g fill="' + navy + '">' +
        '<rect x="1392" y="96" width="40" height="224"/>' +
        '<path d="M1392 96 L1402 60 Q1412 44 1422 60 L1432 96 Z"/>' +
        '<path d="M1402 110 V310 M1412 110 V310 M1422 110 V310" stroke="rgba(5,30,48,.55)" stroke-width="2"/>' +
        '<path d="M1392 96 V320" stroke="rgba(255,214,120,.55)" stroke-width="2"/>' +
      '</g>' +
      /* Giza-style skyline: imposing pyramids + Sphinx */
      '<g fill="' + navy + '">' +
        '<path class="py1" d="M150 320 L230 150 L310 320 Z"/>' +
        '<path class="py2" d="M470 320 L560 84 L650 320 Z"/>' +
        '<path class="py3" d="M700 320 L880 34 L1060 320 Z"/>' +
        '<path class="py4" d="M1180 320 L1240 200 L1300 320 Z"/>' +
      '</g>' +
      '<g stroke="' + goldBright + '" stroke-width="2" fill="none">' +
        '<path class="py1" d="M230 150 L310 320"/>' +
        '<path class="py2" d="M560 84 L650 320"/>' +
        '<path class="py3" d="M880 34 L1060 320"/>' +
        '<path class="py4" d="M1240 200 L1300 320"/>' +
      '</g>' +
      /* The Sphinx, recumbent, facing the pyramids */
      '<g class="sfx" transform="translate(690 244) scale(1.55)">' +
        '<path fill="' + navy + '" d="M120 52 Q98 50 84 49 Q72 48 64 46 Q57 43 53 40 Q51 36 52 32 L45 30 Q42 28 42 23 Q43 17 49 15 Q56 14 59 19 Q61 24 58 28 L56 32 L56 52 Z"/>' +
        '<path fill="none" stroke="' + goldBright + '" stroke-width="1.4" stroke-linecap="round" d="M42 23 Q43 17 49 15 Q56 14 59 19 Q61 24 58 28 L56 32 L56 52 Q56 60 84 49 Q100 47 120 52"/>' +
      '</g>' +
      '<g transform="translate(0 100)"><g class="bird">' +
        '<path d="M0 0 Q9 -10 18 0 Q9 -3 0 0 M18 0 Q27 -10 36 0 Q27 -3 18 0" stroke="rgba(255,255,255,.85)" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      '</g></g>' +
      '<g transform="translate(0 140) scale(.78)"><g class="bird2">' +
        '<path d="M0 0 Q9 -10 18 0 Q9 -3 0 0 M18 0 Q27 -10 36 0 Q27 -3 18 0" stroke="rgba(255,255,255,.55)" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '</g></g>' +
      '</svg>' +
    '</div>';
  }

  /* Royal ornament band: lotus, Eye of Horus, ankh flanked by gold lines */
  function royalOrnament() {
    var gold = 'rgba(201,162,39,.9)';
    return '<div class="ph-ornament" aria-hidden="true">' +
      '<svg viewBox="0 0 380 40" xmlns="http://www.w3.org/2000/svg">' +
        '<g fill="none" stroke="' + gold + '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M8 20 H88 M292 20 H372" opacity=".55"/>' +
          '<path d="M20 20 L26 14 L32 20 L26 26 Z" opacity=".85"/>' +
          '<path d="M348 20 L354 14 L360 20 L354 26 Z" opacity=".85"/>' +
          '<g transform="translate(102 11)"><path d="M8 18 Q4.5 11 8 6 Q11.5 11 8 18"/><path d="M8 16 Q3 10 4.5 5.5 Q7 8 8 16"/><path d="M8 16 Q13 10 11.5 5.5 Q9 8 8 16"/></g>' +
          '<g transform="translate(252 11)"><path d="M8 18 Q4.5 11 8 6 Q11.5 11 8 18"/><path d="M8 16 Q3 10 4.5 5.5 Q7 8 8 16"/><path d="M8 16 Q13 10 11.5 5.5 Q9 8 8 16"/></g>' +
          '<g transform="translate(142 10)"><path d="M3 5 Q12 1 21 5"/><path d="M3 8 Q12 13 21 8 Q12 14.5 3 8"/><circle cx="12" cy="8" r="2"/><path d="M3 8 Q7 12 9.5 15.5 Q11.5 17.5 14 15.5"/><path d="M14 15.5 Q17 17.5 16 19.5 Q15 20.5 13.5 19.5"/></g>' +
          '<g transform="translate(216 10)"><path d="M3 5 Q12 1 21 5"/><path d="M3 8 Q12 13 21 8 Q12 14.5 3 8"/><circle cx="12" cy="8" r="2"/><path d="M3 8 Q7 12 9.5 15.5 Q11.5 17.5 14 15.5"/><path d="M14 15.5 Q17 17.5 16 19.5 Q15 20.5 13.5 19.5"/></g>' +
          '<g transform="translate(182 9)"><circle cx="8" cy="3" r="2.6"/><path d="M8 5.6 V15 M4.5 10.5 H11.5"/></g>' +
        '</g>' +
      '</svg>' +
    '</div>';
  }

  return { scene: scene, heroDeco: heroDeco, sunsetDeco: sunsetDeco, royalOrnament: royalOrnament };
})();
