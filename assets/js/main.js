/**
 * KIER BENEDICT — 2026 ARCHITECTURAL & 3D STUDIO PORTFOLIO ENGINE
 * Powers:
 *  - 60fps Inertial 3D Hero Sculpture Parallax
 *  - Interactive 3D Animated Folders & Compact Folder Drawer Stage
 *  - Universal 3D Card Tilt ([data-tilt-3d]) & Scroll-Floating 3D Accents
 *  - Top-Layer <dialog closedby="any"> Lightbox & Mobile Navigation
 */

(() => {
  'use strict';

  /* ==========================================================================
     1. MASTER ARCHIVE DATASET (Organized into 4 Disciplines / Folders)
     ========================================================================== */
  const FOLDER_META = {
    photo: {
      code: 'FOLDER 01 // PHOTO',
      title: 'Street & Documentary Photography',
      countLabel: '10 Files • 35mm Monochrome',
      pageLink: 'gallery-photos.html'
    },
    design: {
      code: 'FOLDER 02 // DESIGN',
      title: 'Brand Identity, Key Art & UI/UX',
      countLabel: '10 Files • Visual Systems',
      pageLink: 'gallery-graphics.html'
    },
    art: {
      code: 'FOLDER 03 // INK ART',
      title: 'Architectural Ink Studies & Drafts',
      countLabel: '3 Archival Plates • 36 Drawings',
      pageLink: 'gallery-artwork.html'
    },
    video: {
      code: 'FOLDER 04 // MOTION',
      title: 'Cinematography & Viral Reels',
      countLabel: '6 Productions • 535K+ Views',
      pageLink: 'gallery-videos.html'
    }
  };

  const WORKS_DATA = [
    // --- FOLDER 01: PHOTOGRAPHY (10) ---
    {
      id: 'photo-1',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: '★ Main Cover • Documentary',
      title: 'Pensive Market Hours',
      desc: 'Candid monochrome street documentary captured amidst the dense hum of a bustling market. A vendor rests her chin against her palm in quiet contemplation, framed by the silhouettes of passing pedestrians.',
      img: 'assets/img/photomain.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-2',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Monochrome • Reflection',
      title: 'Echoes on Water — Shoreline Shadows',
      desc: 'Abstract black and white street study exploring liquid motion and human form. Five figures standing along the shoreline are captured entirely through the rippling surface of dark water.',
      img: 'assets/img/shoreline-reflection.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-3',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Street Life • Candid',
      title: 'The Sidewalk Salute',
      desc: 'A timeless documentary moment captured in the streets. Five young neighborhood boys stand side-by-side on the sidewalk, instinctively snapping to attention with earnest salutes.',
      img: 'assets/img/sidewalk-salute.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-4',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Photojournalism • Davao City',
      title: 'Gathering in Davao — Public Spectacle',
      desc: 'High-contrast documentary photojournalism capturing spectators and photojournalists perched on wooden scaffolds and barricades watching a street event unfold.',
      img: 'assets/img/davao-crowd-gathering.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-5',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Night Street • Experimental',
      title: 'Vignette of the Night Market',
      desc: 'Experimental optical street photography shot through a circular aperture element, isolating a solo vendor tending to her produce stall beneath an incandescent bulb.',
      img: 'assets/img/night-market-aperture.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-6',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Reflection • Perspective',
      title: 'Skywalkers: Puddle Inversion',
      desc: 'By inverting the frame, a rain puddle on the asphalt transforms into a skyward portal, reflecting two young girls walking as if stepping through clouds.',
      img: 'assets/img/puddle-sky-reflection.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-7',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Architecture • Layered Glass',
      title: 'The Glass Labyrinth — Cyberzone',
      desc: 'In-camera architectural composition where transparent glass balustrades interweave crisscrossing escalators, neon branding, and urban crowds.',
      img: 'assets/img/mall-glass-layers.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-8',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Rural Life • Documentary',
      title: 'The Countryside Commute',
      desc: 'Evocative Philippine countryside documentary of a farmer wearing a traditional woven salakot hat balancing atop his bicycle while dragging a coconut palm frond.',
      img: 'assets/img/farmer-bicycle-trail.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-9',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Environmental Portrait',
      title: 'THE FISHMARKET: Precision & Labor',
      desc: 'Environmental documentary portrait by Kier Benedict centering on a focused fishmonger meticulously cleaning fresh catches, framed by glistening scales and market light.',
      img: 'assets/img/fishmarket-vendor-portrait.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },
    {
      id: 'photo-10',
      category: 'photo',
      badge: '01 // PHOTOGRAPHY',
      tag: 'Still Life • Market Texture',
      title: 'THE FISHMARKET: Stacks & Stillness',
      desc: 'Captures the physical textures and quiet aftermath of the trading floor—towering stacks of weathered crates, heavy wash tubs, and wet concrete.',
      img: 'assets/img/fishmarket-crates-still-life.jpg',
      link: 'gallery-photos.html',
      linkLabel: 'Open Photo Gallery'
    },

    // --- FOLDER 02: BRAND & UI/UX DESIGN (10) ---
    {
      id: 'design-1',
      category: 'design',
      badge: '02 // KEY VISUAL',
      tag: '★ Main Cover • Event Key Art',
      title: 'PAUNAHAI: Game On! All Night',
      desc: 'The Expedition: Rise of the Digital Frontiers — An ethereal retro-futuristic event key visual blending celestial constellation cartography, summit expeditions, and prism typography.',
      img: 'assets/img/paunahi.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-2',
      category: 'design',
      badge: '02 // BRAND IDENTITY',
      tag: 'Identity Manual • Style Guide',
      title: 'Spectrum Visuals: Lucent — See Beyond',
      desc: 'Comprehensive brand identity manual for Notre Dame of Marbel University’s Spectrum Visuals featuring an iridescent chrome S monogram and frosted editorial layouts.',
      img: 'assets/img/spectrum-lucent.png',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-3',
      category: 'design',
      badge: '02 // BRAND IDENTITY',
      tag: 'Institutional • Logo System',
      title: 'SALIGAN: In Motion — 70 Years',
      desc: 'Institutional brand identity guidelines and logo architecture for San Pedro College’s 70th milestone, deconstructing a kinetic running figure into an abstract S.',
      img: 'assets/img/saligan-in-motion.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-4',
      category: 'design',
      badge: '02 // FILM KEY ART',
      tag: 'Theatrical One-Sheet Poster',
      title: 'BLISS // Theatrical Key Art Poster',
      desc: 'Psychological thriller theatrical one-sheet built with intense chiaroscuro contrast, fractured porcelain facial textures, and an inverted mirrored composition.',
      img: 'assets/img/bliss-poster.png',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-5',
      category: 'design',
      badge: '02 // CONCEPT ART',
      tag: 'Cyberpunk • Neo-Noir Poster',
      title: 'Kill Bill 2077 — Neo-Noir Concept',
      desc: 'Retro-futuristic cyberpunk reimagining featuring rain-slicked neon alleyways, glowing amber energy katana effects, 35mm film grain, and Japanese sci-fi typography.',
      img: 'assets/img/kill-bill-2077.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-6',
      category: 'design',
      badge: '02 // MIXED MEDIA',
      tag: 'Surrealism • Photomontage',
      title: 'PECULIAR // Mixed-Media Collage',
      desc: 'Vintage surrealist photomontage poster by Kier Benedict centering on a retro instant camera emitting a vibrant beam of cutout typography over alpine peaks.',
      img: 'assets/img/peculiar-collage.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-7',
      category: 'design',
      badge: '02 // RETRO SCI-FI',
      tag: 'Surrealist Concept Collage',
      title: 'Things Go Better With Coke — Mars',
      desc: 'Retro-futuristic space collage depicting a young explorer purchasing a soda from a vintage 1950s Coca-Cola vending machine on Martian terrain beneath an Earth-rise.',
      img: 'assets/img/coke-mars-collage.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'ui-1',
      category: 'design',
      badge: '02 // UI & UX DESIGN',
      tag: 'Interactive Web Atelier • 4K UHD',
      title: 'Solflora — Haute Atelier Botanique (Paris)',
      desc: 'Bespoke interactive Parisian floral atelier web experience featuring custom bouquet composition, editorial serif typography, and reactive light and pollen physics.',
      img: 'assets/img/ui-solflora-4k.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open UI/UX & Brand Gallery'
    },
    {
      id: 'ui-2',
      category: 'design',
      badge: '02 // UI & UX DESIGN',
      tag: 'Native Desktop Application • 4K UHD',
      title: 'Sift — Precision File Organizer',
      desc: 'Minimalist dark-mode Windows native desktop utility engineered for 100% local, private, high-speed Downloads and Desktop file indexing and organization.',
      img: 'assets/img/ui-sift-app-4k.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open UI/UX & Brand Gallery'
    },
    {
      id: 'ui-3',
      category: 'design',
      badge: '02 // UI & UX DESIGN',
      tag: 'Interactive Web OS • 4K UHD',
      title: 'Interactive Creative OS & Companion UI',
      desc: 'Game-inspired dark-mode web architecture combining tactile Bento telemetry, holographic companion state synchronization, and custom HUD navigation.',
      img: 'assets/img/ui-creative-os-4k.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open UI/UX & Brand Gallery'
    },
    {
      id: 'design-8',
      category: 'design',
      badge: '02 // UI & UX DESIGN',
      tag: 'Financial Dashboard & Allowance Tracker • 4K UHD',
      title: 'Daily Allowance & Expense Dashboard UI',
      desc: 'Clean utility web application dashboard featuring real-time daily allowance guidance, quick-fill expense logging, category budget progress bars, and SQLite state management.',
      img: 'assets/img/ui-peso-dashboard-4k.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open UI/UX & Brand Gallery'
    },
    {
      id: 'design-9',
      category: 'design',
      badge: '02 // DREAMSCAPE',
      tag: 'Vintage Photomontage',
      title: 'Sea of Clouds? How Ironic...',
      desc: 'Poetic vintage dreamscape photomontage where mid-century sightseers along a mountain overlook watch giant humpback whales breach across a sea of cumulus clouds.',
      img: 'assets/img/sea-of-clouds-collage.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },
    {
      id: 'design-10',
      category: 'design',
      badge: '02 // ART DIRECTION',
      tag: '15-Piece Visual Feed Archive',
      title: 'Visual Archive & Feed Curation',
      desc: 'Curated 15-piece portfolio grid showcasing multidisciplinary art direction across album art, neo-brutalist typography, Japanese woodblock posters, and editorial design.',
      img: 'assets/img/creative-archive-grid.jpg',
      link: 'gallery-graphics.html',
      linkLabel: 'Open Graphic Gallery'
    },

    // --- FOLDER 03: ARCHITECTURAL INK STUDIES (3 Plates / 36 Drawings) ---
    {
      id: 'art-1',
      category: 'art',
      badge: '03 // ILLUSTRATION',
      tag: '★ Main Cover • 6-Part Series',
      title: 'Architectural Ink Studies — 6-Part Series',
      desc: 'Hand-drawn pen-and-ink collection by Kier Benedict exploring six structural languages: colonial estate, Ketchum timber A-frame lodge, subterranean hill dwelling, rustic shack, alpine cabin, and cantilevered clifftop retreat.',
      img: 'assets/img/artmain.jpg',
      link: 'gallery-artwork.html',
      linkLabel: 'Open Artwork Gallery'
    },
    {
      id: 'art-2',
      category: 'art',
      badge: '03 // ILLUSTRATION',
      tag: 'Sketchbook • 15-Piece Plate',
      title: 'Pen & Ink Archive: Vol. 01 — Structural Form',
      desc: 'Curated 15-drawing portfolio plate showcasing micron pen illustrations of historic water towers, Japanese timber storefronts, Bauhaus dwellings, and seaside cafes.',
      img: 'assets/img/ink-sketches-archive-1.jpg',
      link: 'gallery-artwork.html',
      linkLabel: 'Open Artwork Gallery'
    },
    {
      id: 'art-3',
      category: 'art',
      badge: '03 // ILLUSTRATION',
      tag: 'Technical Drafts • 15-Piece Plate',
      title: 'Pen & Ink Archive: Vol. 02 — Urban & Mechanical',
      desc: '15-sketch archival plate pairing Romanesque cathedral facades and Italian hill towns with tactile mechanical studies including a rotary telephone and fighter jet blueprint.',
      img: 'assets/img/ink-sketches-archive-2.jpg',
      link: 'gallery-artwork.html',
      linkLabel: 'Open Artwork Gallery'
    },

    // --- FOLDER 04: CINEMATOGRAPHY & VIRAL REELS (6) ---
    {
      id: 'video-1',
      category: 'video',
      badge: '04 // VIRAL REEL',
      tag: '159K Views • The Mindanao Tech',
      views: '159K Views',
      title: 'Pasiklaban Highlights: Relive the Season',
      desc: 'Premiered on The Mindanao Tech (159K views, 5.5K reactions). High-energy stage cinematography capturing electrifying theatrical performances, synchronized strobes, and crowd energy.',
      img: 'assets/img/videomain.jpg',
      link: 'https://www.facebook.com/reel/1740043854065347/',
      linkLabel: 'Watch Reel on Facebook ↗'
    },
    {
      id: 'video-2',
      category: 'video',
      badge: '04 // AERIAL CINEMA',
      tag: '104K Views • Drone Cinematography',
      views: '104K Views',
      title: 'Pasiklaban From Above',
      desc: 'Shot and edited for The Mindanao Tech (104K views, 4.8K reactions). Sweeping bird’s-eye drone sequences revealing the monumental scale of festival grounds and university arenas.',
      img: 'assets/img/video-thumb-2-above.jpg',
      link: 'https://www.facebook.com/reel/4546250098994184/',
      linkLabel: 'Watch Reel on Facebook ↗'
    },
    {
      id: 'video-3',
      category: 'video',
      badge: '04 // DOCUMENTARY REEL',
      tag: '126K Views • Campus Life',
      views: '126K Views',
      title: 'USM Brand New Day: A Month in Campus',
      desc: 'Created for The Mindanao Tech (126K views, 3.9K reactions). Uplifting documentary-style montage capturing the authentic heart of university life and golden-hour campus scenery.',
      img: 'assets/img/video-thumb-3-campus.jpg',
      link: 'https://www.facebook.com/reel/1935455211193468/',
      linkLabel: 'Watch Reel on Facebook ↗'
    },
    {
      id: 'video-4',
      category: 'video',
      badge: '04 // NOCTURNAL FILM',
      tag: '117K Views • Night Fair',
      views: '117K Views',
      title: 'USM Grounds at Night: Trade Fair Glow',
      desc: 'Broadcast on The Mindanao Tech (117K views, 2.5K reactions). Atmospheric nocturnal cinematography exploring radiant neon stalls, artisan food lanes, and carnival lights.',
      img: 'assets/img/video-thumb-5-nightfair.jpg',
      link: 'https://www.facebook.com/mintech1955/videos/1854618398821488/',
      linkLabel: 'Watch Video on Facebook ↗'
    },
    {
      id: 'video-5',
      category: 'video',
      badge: '04 // NARRATIVE REEL',
      tag: 'Documentary • The Mindanao Tech',
      views: 'Featured',
      title: 'Pasiklaban: A Story in Every Moment',
      desc: 'Character-driven short reel focusing on candid backstage anticipation, genuine performer bonds, and the quiet human moments behind the spectacle.',
      img: 'assets/img/video-thumb-1-story.jpg',
      link: 'https://www.facebook.com/reel/1739148517187889/',
      linkLabel: 'Watch Reel on Facebook ↗'
    },
    {
      id: 'video-6',
      category: 'video',
      badge: '04 // SPORTS HYPE',
      tag: '29K Views • Athletic Edit',
      views: '29K Views',
      title: 'UNILYMPICS: Champions Forged Through Hard Work',
      desc: 'Fast-paced, hard-hitting sports hype edit highlighting student athletes’ grit, court rallies, peak adrenaline, and championship celebrations (29K views).',
      img: 'assets/img/video-thumb-6-unilympics.jpg',
      link: 'https://www.facebook.com/reel/1478491370736313/',
      linkLabel: 'Watch Reel on Facebook ↗'
    }
  ];


  /* ==========================================================================
     2. TOP-LAYER DIALOG ANIMATION & LIGHT-DISMISS HELPERS (modern-web-guidance)
     ========================================================================== */
  let supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
      return false;
    }
    const probe = document.createElement('div');
    probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = 'none';
    supportsDisplayTransition = getComputedStyle(probe).display === 'block';
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
  }

  async function closeTopLayer(element) {
    if (!element || !element.open) return;
    if (!supportsTopLayerExit()) {
      element.setAttribute('data-closing', '');
      const animations = element.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 2000)),
        ]);
      }
      if (!element.hasAttribute('data-closing')) return;
      element.removeAttribute('data-closing');
    }
    element.close();
  }

  function bindDialogEnhancements(dialog) {
    if (!dialog) return;

    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeTopLayer(dialog);
    });

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (isDialogContent) return;
        closeTopLayer(dialog);
      });
    }
  }

  const projectDialog = document.getElementById('project-dialog');
  const mobileMenuDialog = document.getElementById('mobile-menu-dialog');
  bindDialogEnhancements(projectDialog);
  bindDialogEnhancements(mobileMenuDialog);


  /* ==========================================================================
     3. UNIVERSAL PROJECT LIGHTBOX CONTROLLER
     ========================================================================== */
  const dialogCategory = document.getElementById('dialog-category');
  const dialogTag = document.getElementById('dialog-tag');
  const dialogImg = document.getElementById('dialog-img');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogDesc = document.getElementById('dialog-desc');
  const dialogExternalLink = document.getElementById('dialog-external-link');
  const dialogLinkLabel = document.getElementById('dialog-link-label');
  const closeProjectDialogBtn = document.getElementById('close-project-dialog');

  function openProjectModal(workId) {
    const item = WORKS_DATA.find((w) => w.id === workId);
    if (!item || !projectDialog) return;

    dialogCategory.textContent = item.badge;
    dialogTag.textContent = item.tag;
    dialogImg.src = item.img;
    dialogImg.alt = item.title;
    dialogTitle.textContent = item.title;
    dialogDesc.textContent = item.desc;
    dialogExternalLink.href = item.link;
    dialogLinkLabel.textContent = item.linkLabel;
    dialogExternalLink.target = item.link.startsWith('http') ? '_blank' : '_self';

    projectDialog.showModal();
  }

  if (closeProjectDialogBtn) {
    closeProjectDialogBtn.addEventListener('click', () => closeTopLayer(projectDialog));
  }

  document.addEventListener('click', (e) => {
    const modalTrigger = e.target.closest('[data-open-modal]');
    if (modalTrigger) {
      e.preventDefault();
      openProjectModal(modalTrigger.getAttribute('data-open-modal'));
      return;
    }

    const folderJump = e.target.closest('[data-select-folder]');
    if (folderJump) {
      e.preventDefault();
      const folderKey = folderJump.getAttribute('data-select-folder');
      selectFolder(folderKey, true);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const modalTrigger = e.target.closest('[data-open-modal]');
    if (modalTrigger && modalTrigger.tagName !== 'BUTTON' && modalTrigger.tagName !== 'A') {
      e.preventDefault();
      openProjectModal(modalTrigger.getAttribute('data-open-modal'));
      return;
    }
    const folderJump = e.target.closest('[data-select-folder]');
    if (folderJump) {
      e.preventDefault();
      selectFolder(folderJump.getAttribute('data-select-folder'), true);
    }
  });


  /* ==========================================================================
     4. INTERACTIVE 3D FOLDERS & COMPACT FOLDER DRAWER CONTROLLER
     ========================================================================== */
  const folderTabs = document.querySelectorAll('.folder-3d[data-folder-tab]');
  const activeFolderCode = document.getElementById('active-folder-code');
  const activeFolderTitle = document.getElementById('active-folder-title');
  const activeFolderCount = document.getElementById('active-folder-count');
  const activeFolderPageLink = document.getElementById('active-folder-page-link');
  const folderDrawerTrack = document.getElementById('folder-drawer-track');
  const drawerPrevBtn = document.getElementById('drawer-prev-btn');
  const drawerNextBtn = document.getElementById('drawer-next-btn');

  function selectFolder(folderKey, scrollToFolder = false) {
    const meta = FOLDER_META[folderKey];
    if (!meta || !folderDrawerTrack) return;

    folderTabs.forEach((tab) => {
      const isMatch = tab.getAttribute('data-folder-tab') === folderKey;
      tab.classList.toggle('is-active', isMatch);
      tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    activeFolderCode.textContent = meta.code;
    activeFolderTitle.textContent = meta.title;
    activeFolderCount.textContent = meta.countLabel;
    activeFolderPageLink.href = meta.pageLink;

    const items = WORKS_DATA.filter((w) => w.category === folderKey);
    folderDrawerTrack.innerHTML = items.map((item) => `
      <article class="folder-file-card" data-open-modal="${item.id}" tabindex="0" role="button" aria-label="${item.title}">
        <div class="folder-file-card__media">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <span class="folder-file-card__tag">${item.badge}</span>
          ${item.views ? `<span class="folder-file-card__views">${item.views}</span>` : ''}
        </div>
        <div class="folder-file-card__body">
          <h4 class="folder-file-card__title">${item.title}</h4>
          <p class="folder-file-card__desc">${item.desc}</p>
          <div class="folder-file-card__foot">
            <span>${item.tag}</span>
            <span>Preview &nearr;</span>
          </div>
        </div>
      </article>
    `).join('');

    folderDrawerTrack.scrollTo({ left: 0, behavior: 'smooth' });

    if (scrollToFolder) {
      const anchor = document.getElementById('folders-grid-anchor');
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Initialize with Folder 01 (Photography)
  selectFolder('photo', false);

  folderTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      selectFolder(tab.getAttribute('data-folder-tab'), false);
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectFolder(tab.getAttribute('data-folder-tab'), false);
      }
    });
  });

  if (drawerPrevBtn && folderDrawerTrack) {
    drawerPrevBtn.addEventListener('click', () => {
      folderDrawerTrack.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }
  if (drawerNextBtn && folderDrawerTrack) {
    drawerNextBtn.addEventListener('click', () => {
      folderDrawerTrack.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }


  /* ==========================================================================
     5. SMOOTH 60FPS INERTIAL 3D PARALLAX & INTERACTIVE 3D TILT ENGINE
     ========================================================================== */
  const heroStage = document.getElementById('hero-interactive-stage');
  const heroSpotlight = document.getElementById('hero-spotlight');
  const depthLayers = document.querySelectorAll('#hero [data-depth]');
  const heroTypoBack = document.getElementById('hero-typo-back');
  const heroTypoFront = document.getElementById('hero-typo-front');
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (heroStage && hasFinePointer) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let isAirbrushHovering = false;
    let airbrushTargetX = -999;
    let airbrushTargetY = -999;
    let airbrushCurrentX = -999;
    let airbrushCurrentY = -999;

    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1 to +1
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1 to +1

      if (heroSpotlight) {
        heroSpotlight.style.left = `${e.clientX - rect.left}px`;
        heroSpotlight.style.top = `${e.clientY - rect.top}px`;
      }

      if (heroTypoBack && heroTypoFront) {
        const typoRect = heroTypoBack.getBoundingClientRect();
        const isOverPortfolio =
          e.clientX >= typoRect.left - 16 &&
          e.clientX <= typoRect.right + 16 &&
          e.clientY >= typoRect.top - 16 &&
          e.clientY <= typoRect.bottom + 16;

        if (isOverPortfolio) {
          airbrushTargetX = e.clientX - typoRect.left;
          airbrushTargetY = e.clientY - typoRect.top;
          if (!isAirbrushHovering) {
            airbrushCurrentX = airbrushTargetX;
            airbrushCurrentY = airbrushTargetY;
            isAirbrushHovering = true;
          }
          heroTypoFront.classList.add('is-airbrush-active');
        } else {
          isAirbrushHovering = false;
          heroTypoFront.classList.remove('is-airbrush-active');
        }
      }
    });

    heroStage.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      isAirbrushHovering = false;
      if (heroTypoFront) {
        heroTypoFront.classList.remove('is-airbrush-active');
      }
    });

    function animateHero3D() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      const isMobileViewport = window.innerWidth <= 820;

      depthLayers.forEach((layer) => {
        if (isMobileViewport) {
          layer.style.transform = '';
          return;
        }

        const depth = parseFloat(layer.getAttribute('data-depth') || '0.2');
        const moveX = currentX * depth * 42;
        const moveY = currentY * depth * 32;
        const rotX = -currentY * depth * 8;
        const rotY = currentX * depth * 8;

        if (layer.classList.contains('hero-subject-stage')) {
          layer.style.transform = `translate3d(calc(-50% + ${moveX * 0.45}px), calc(-50% + ${moveY * 0.45}px), 0)`;
        } else if (layer.classList.contains('hero-typography-layer--front')) {
          layer.style.transform = `translate3d(${moveX}px, calc(-50% + ${moveY}px), 0)`;
        } else if (layer.classList.contains('hero-typography-layer')) {
          layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        } else {
          layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }
      });

      if (heroTypoFront && isAirbrushHovering) {
        airbrushCurrentX += (airbrushTargetX - airbrushCurrentX) * 0.22;
        airbrushCurrentY += (airbrushTargetY - airbrushCurrentY) * 0.22;
        heroTypoFront.style.setProperty('--airbrush-x', `${airbrushCurrentX.toFixed(1)}px`);
        heroTypoFront.style.setProperty('--airbrush-y', `${airbrushCurrentY.toFixed(1)}px`);
      }

      requestAnimationFrame(animateHero3D);
    }

    requestAnimationFrame(animateHero3D);
  }

  // Subtle 3D Pop-Out Parallax for the Chiaroscuro Story Stage ([data-story-depth])
  const noirStage = document.getElementById('noir-interactive-stage');
  const storyLayers = document.querySelectorAll('#story [data-story-depth]');
  if (noirStage && storyLayers.length > 0 && hasFinePointer) {
    let sTargetX = 0;
    let sTargetY = 0;
    let sCurrX = 0;
    let sCurrY = 0;

    noirStage.addEventListener('mousemove', (e) => {
      const rect = noirStage.getBoundingClientRect();
      sTargetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      sTargetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    noirStage.addEventListener('mouseleave', () => {
      sTargetX = 0;
      sTargetY = 0;
    });

    function animateStory3D() {
      sCurrX += (sTargetX - sCurrX) * 0.06;
      sCurrY += (sTargetY - sCurrY) * 0.06;

      storyLayers.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-story-depth') || '0.2');
        const mx = (sCurrX * depth * 28).toFixed(2);
        const my = (sCurrY * depth * 20).toFixed(2);
        if (el.classList.contains('noir-rim-glow')) {
          el.style.transform = `translate3d(calc(-50% + ${mx}px), ${my}px, 0)`;
        } else {
          el.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
        }
      });

      requestAnimationFrame(animateStory3D);
    }

    requestAnimationFrame(animateStory3D);
  }

  // Interactive 3D Card Tilt on Hover ([data-tilt-3d])
  if (hasFinePointer) {
    document.querySelectorAll('[data-tilt-3d]').forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        const rotX = (-ny * 10).toFixed(2);
        const rotY = (nx * 10).toFixed(2);
        card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  // Scroll-Driven Floating 3D Spheres ([data-scroll-float])
  const scrollFloats = document.querySelectorAll('[data-scroll-float]');
  if (scrollFloats.length > 0) {
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      scrollFloats.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-scroll-float') || '0.1');
        el.style.transform = `translate3d(0, ${sy * speed}px, 0)`;
      });
    }, { passive: true });
  }


  /* ==========================================================================
     6. MOBILE DRAWER, LIVE MANILA CLOCK & ONE-CLICK EMAIL COPY
     ========================================================================== */
  const openMobileMenuBtn = document.getElementById('open-mobile-menu');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

  if (openMobileMenuBtn && mobileMenuDialog) {
    openMobileMenuBtn.addEventListener('click', () => mobileMenuDialog.showModal());
  }
  if (closeMobileMenuBtn && mobileMenuDialog) {
    closeMobileMenuBtn.addEventListener('click', () => closeTopLayer(mobileMenuDialog));
  }
  document.querySelectorAll('.drawer-nav-link').forEach((link) => {
    link.addEventListener('click', () => closeTopLayer(mobileMenuDialog));
  });

  // Live Manila Clock (GMT+8)
  const clockEl = document.getElementById('hero-live-clock');
  function updateClock() {
    if (!clockEl) return;
    try {
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).format(new Date());
      clockEl.textContent = `MNL // ${timeStr}`;
    } catch {
      clockEl.textContent = 'MNL // GMT+8';
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Copy Email Button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyEmailStatus = document.getElementById('copy-email-status');
  if (copyEmailBtn && copyEmailStatus) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('benedictkier3474@gmail.com');
        copyEmailStatus.textContent = 'Copied!';
        setTimeout(() => {
          copyEmailStatus.textContent = 'Copy';
        }, 2500);
      } catch {
        window.location.href = 'mailto:benedictkier3474@gmail.com';
      }
    });
  }


  /* ==========================================================================
     7. ATELIER AMBIENT SOUND ENGINE (Warm Felted Rhodes + Smooth Fade-In)
     ========================================================================== */
  const elevatorAudio = document.getElementById('elevator-audio');
  const elevatorToggleBtn = document.getElementById('elevator-toggle-btn');
  const navElevatorBtn = document.getElementById('nav-elevator-btn');
  const elevatorStateIcon = document.getElementById('elevator-state-icon');
  const elevatorStatusLbl = document.getElementById('elevator-status-lbl');
  const elevatorFloorInd = document.getElementById('elevator-floor-indicator');

  let audioCtx = null;
  function playWarmStudioChime() {
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioCtx) audioCtx = new Ctx();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const now = audioCtx.currentTime;
      // Soft, warm Ebmaj9 studio harmonic swell (G4 + Bb4 + D5, very low gain)
      [392.0, 466.16, 587.33].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.04);

        gain.gain.setValueAtTime(0.0001, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.018, now + i * 0.04 + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.04);
        osc.stop(now + 1.15);
      });
    } catch {
      // Ignore Web Audio errors
    }
  }

  if (elevatorAudio) {
    const TARGET_AMBIENT_VOL = 0.22; // Subtle, atmospheric gallery level
    elevatorAudio.volume = 0;
    let fadeTimer = null;
    let userManuallyPaused = localStorage.getItem('kb_elevator_muted') === '1';

    function fadeVolumeIn() {
      if (fadeTimer) clearInterval(fadeTimer);
      elevatorAudio.volume = 0.02;
      fadeTimer = setInterval(() => {
        if (elevatorAudio.paused) {
          clearInterval(fadeTimer);
          return;
        }
        const next = Math.min(TARGET_AMBIENT_VOL, elevatorAudio.volume + 0.012);
        elevatorAudio.volume = next;
        if (next >= TARGET_AMBIENT_VOL) {
          clearInterval(fadeTimer);
        }
      }, 65);
    }

    function syncElevatorUI(isPlaying) {
      if (elevatorToggleBtn) {
        elevatorToggleBtn.classList.toggle('is-playing', isPlaying);
        elevatorToggleBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      }
      if (navElevatorBtn) {
        navElevatorBtn.classList.toggle('is-playing', isPlaying);
        navElevatorBtn.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
      }
      if (elevatorStateIcon) {
        elevatorStateIcon.className = isPlaying ? 'ri-volume-up-line' : 'ri-volume-mute-line';
      }
      if (elevatorStatusLbl) {
        elevatorStatusLbl.textContent = isPlaying ? 'AMBIENT ON AIR' : 'STUDIO SOUND';
      }
    }

    async function toggleElevatorMusic(e) {
      if (e) e.stopPropagation();
      if (elevatorAudio.paused) {
        userManuallyPaused = false;
        localStorage.setItem('kb_elevator_muted', '0');
        playWarmStudioChime();
        try {
          await elevatorAudio.play();
          fadeVolumeIn();
          syncElevatorUI(true);
        } catch {
          syncElevatorUI(false);
        }
      } else {
        userManuallyPaused = true;
        localStorage.setItem('kb_elevator_muted', '1');
        if (fadeTimer) clearInterval(fadeTimer);
        elevatorAudio.pause();
        syncElevatorUI(false);
      }
    }

    if (elevatorToggleBtn) {
      elevatorToggleBtn.addEventListener('click', toggleElevatorMusic);
    }
    if (navElevatorBtn) {
      navElevatorBtn.addEventListener('click', toggleElevatorMusic);
    }

    elevatorAudio.addEventListener('play', () => syncElevatorUI(true));
    elevatorAudio.addEventListener('pause', () => syncElevatorUI(false));

    // Attempt immediate playback or start seamlessly on first user interaction
    function tryAutoStart() {
      if (userManuallyPaused || !elevatorAudio.paused) return;
      elevatorAudio.play().then(() => {
        fadeVolumeIn();
        syncElevatorUI(true);
        removeUnlockListeners();
      }).catch(() => {
        // Wait for first interaction
      });
    }

    function removeUnlockListeners() {
      window.removeEventListener('pointerdown', tryAutoStart);
      window.removeEventListener('keydown', tryAutoStart);
    }

    if (!userManuallyPaused) {
      tryAutoStart();
      window.addEventListener('pointerdown', tryAutoStart, { passive: true });
      window.addEventListener('keydown', tryAutoStart, { passive: true });
    } else {
      syncElevatorUI(false);
    }
  }

  // Live Elevator Floor Indicator on Scroll (FL // 26 -> FL // 01..05)
  if (elevatorFloorInd) {
    const floorMap = [
      { id: 'hero', code: 'FL // 26' },
      { id: 'content-index', code: 'FL // 01' },
      { id: 'story', code: 'FL // 02' },
      { id: 'folders-archive', code: 'FL // 03' },
      { id: 'capabilities', code: 'FL // 04' },
      { id: 'contact', code: 'FL // 05' }
    ];

    function updateElevatorFloor() {
      const probeY = window.scrollY + window.innerHeight * 0.38;
      let activeFloor = 'FL // 26';
      for (const item of floorMap) {
        const el = document.getElementById(item.id);
        if (el && probeY >= el.offsetTop) {
          activeFloor = item.code;
        }
      }
      if (elevatorFloorInd.textContent !== activeFloor) {
        elevatorFloorInd.textContent = activeFloor;
      }
    }

    window.addEventListener('scroll', updateElevatorFloor, { passive: true });
    updateElevatorFloor();
  }

})();
