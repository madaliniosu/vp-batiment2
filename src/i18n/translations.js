// src/i18n/translations.js
// Single source of truth for all site text.
// To add a language: copy the `en` block, change the key, translate the values.

export const fr = {
  // ── Meta ──────────────────────────────────────────
  meta: {
    home:      'VP Bâtiment · Construction & Rénovation · Île-de-France',
    services:  'Services · VP Bâtiment',
    projects:  'Réalisations · VP Bâtiment',
  },

  // ── Nav ───────────────────────────────────────────
  nav: {
    home:     'Accueil',
    services: 'Services',
    projects: 'Réalisations',
    cta:      'Devis gratuit',
  },

  // ── Hero ──────────────────────────────────────────
  hero: {
    label: 'Victor & Pierre · Île-de-France',
    h1:    ['Chaque chantier', 'est notre', 'réputation.'],
    sub:   "Deux frères, cinquante ans d'expérience combinée. Électricité, peinture, enduit, rénovation complète — sans sous-traitants.",
    btn1:  'Voir nos réalisations',
    btn2:  'Nous contacter',
  },

  // ── Stats ─────────────────────────────────────────
  stats: [
    { num: '30', sup: 'ANS', label: 'Expérience de Victor' },
    { num: '20', sup: 'ANS', label: 'Expérience de Pierre' },
    { num: '2',  sup: '',    label: 'Frères · Interlocuteur direct' },
  ],

  // ── About ─────────────────────────────────────────
  about: {
    label: 'Qui sommes-nous',
    h2:    ['Un savoir-faire transmis,', 'une parole donnée.'],
    p1:    "VP Bâtiment, c'est Victor et Pierre — deux frères qui travaillent ensemble depuis plus de vingt ans. Victor gère l'électricité et la coordination de chantier. Pierre s'occupe de la peinture, des enduits et des finitions.",
    p2:    "Pas de sous-traitants, pas d'intermédiaires. Vous avez un interlocuteur direct du premier appel jusqu'à la remise des clés.",
    cards: [
      { title: 'Multi-métiers',          desc: "Électricité, peinture, enduit, plaquisterie — une seule équipe pour l'ensemble du chantier. Moins de coordination, plus de cohérence." },
      { title: 'Communication directe',  desc: "Vous parlez toujours à l'un des deux frères. Pas de chef de chantier intermédiaire, pas de messages perdus." },
      { title: 'Qualité avant délai',    desc: "Nous prenons le temps de bien faire. Nos clients reviennent — et nous recommandent. C'est notre meilleure publicité." },
    ],
  },

  // ── Services preview (home) ───────────────────────
  servicesPreview: {
    label: 'Ce que nous faisons',
    h2:    ["Nos domaines", "d'intervention"],
    link:  'Tous les services →',
    items: [
      { title: 'Électricité',        desc: "Installation, mise aux normes, tableau électrique, domotique. Spécialité de Victor avec 30 ans d'expérience." },
      { title: 'Peinture & Enduit',  desc: "Préparation des supports, enduits de finition, peinture intérieure. Le métier de Pierre." },
      { title: 'Rénovation complète',desc: "Coordination de tous les corps de métier pour une rénovation complète de votre appartement ou maison." },
    ],
  },

  // ── Services page ─────────────────────────────────
  servicesPage: {
    header: {
      label: 'Nos prestations',
      h1:    ['Services &', 'expertises'],
      p:     "De l'électricité aux finitions, nous couvrons l'ensemble des corps de métier nécessaires à votre rénovation.",
    },
    cards: [
      {
        tag: "Victor · 30 ans d'expérience", h3: 'Électricité',
        p:   "Installation complète, mise en conformité NF C 15-100, remplacement de tableau électrique. Victor intervient aussi bien dans des appartements haussmanniens que dans des constructions récentes.",
        li:  ["Tableau électrique & disjoncteurs", "Mise aux normes NF C 15-100", "Câblage & prises", "Éclairage & domotique", "Bornes de recharge véhicule"],
      },
      {
        tag: "Pierre · 20 ans d'expérience", h3: 'Peinture intérieure',
        p:   "Préparation rigoureuse des supports, application de peintures de qualité. Pierre travaille avec soin sur chaque surface pour un résultat propre et durable.",
        li:  ["Peinture murs & plafonds", "Peinture boiseries & portes", "Préparation & traitement des supports", "Finitions satinées, mates, brillantes", "Teintes sur mesure"],
      },
      {
        tag: 'Pierre · Spécialité', h3: 'Enduits & Plâtrerie',
        p:   "Enduits de lissage, ragréage, rebouchage, plaquisterie. Pierre maîtrise aussi bien les techniques traditionnelles que les matériaux modernes.",
        li:  ["Enduit de lissage & de finition", "Ragréage sols", "Cloisons & plaquisterie", "Doublage thermique & phonique", "Faux plafonds"],
      },
      {
        tag: 'Victor & Pierre', h3: 'Rénovation complète',
        p:   "Cuisine, salle de bain, appartement entier — nous coordonnons et réalisons l'ensemble des travaux. Un seul interlocuteur pour tout le chantier.",
        li:  ["Audit & chiffrage détaillé", "Planning & coordination", "Cuisine & salle de bain", "Appartements & maisons", "Suivi rigoureux du budget"],
      },
      {
        tag: 'Spécialité', h3: 'Salle de bain',
        p:   "Démolition, carrelage, peinture hydrofuge et électricité — nous prenons en charge la totalité du chantier salle de bain, de A à Z.",
        li:  ["Démolition & évacuation", "Pose de carrelage", "Peinture hydrofuge", "Électricité pièce humide", "Installation sanitaires"],
      },
      {
        tag: 'Conseil', h3: 'Devis & Consultation',
        p:   "Avant tout engagement, nous visitons le chantier, évaluons les travaux et établissons un devis détaillé et transparent. Pas de surprise en cours de chantier.",
        li:  ["Visite technique gratuite", "Devis détaillé poste par poste", "Conseil sur les matériaux", "Planification réaliste", "Suivi photographique du chantier"],
      },
    ],
    process: {
      h2: 'Comment ça se passe',
      steps: [
        { num: '01', label: 'Contact', title: 'Prise de contact',  desc: "Vous nous décrivez votre projet. Nous répondons sous 24h pour convenir d'une visite." },
        { num: '02', label: 'Visite',  title: 'Visite technique',  desc: "Nous visitons le chantier, prenons les mesures et évaluons les contraintes. Gratuit & sans engagement." },
        { num: '03', label: 'Devis',   title: 'Devis détaillé',    desc: "Un devis clair, poste par poste, avec planning prévisionnel. Pas de surprises cachées." },
        { num: '04', label: 'Chantier',title: 'Réalisation',       desc: "Nous réalisons les travaux selon le planning convenu. Vous pouvez nous joindre directement à tout moment." },
      ],
    },
  },

  // ── Projects page ─────────────────────────────────
  projectsPage: {
    header: {
      label: 'Nos chantiers',
      h1:    ['Réalisations', 'récentes'],
      p:     "Une sélection de chantiers réalisés en Île-de-France. Chaque projet reflète notre engagement pour la qualité et les finitions soignées.",
    },
    items: [
      { type: 'Rénovation complète', title: 'Appartement 75 m²',          meta: 'Paris 11e · 2024',           desc: "Rénovation intégrale d'un appartement années 60 — électricité, peinture, enduits, cloisons. Durée : 6 semaines." },
      { type: 'Électricité',         title: 'Mise aux normes électriques', meta: 'Vincennes · 2024',           desc: "Remplacement complet du tableau, mise en conformité NF C 15-100, installation borne de recharge." },
      { type: 'Peinture & Enduit',   title: 'Appartement haussmannien',   meta: 'Paris 16e · 2023',           desc: "Réfection complète des enduits et peintures d'un appartement 120 m². Moulures conservées et restaurées." },
      { type: 'Salle de bain',       title: 'Rénovation salle de bain',   meta: 'Boulogne-Billancourt · 2023',desc: "Démolition, carrelage, peinture hydrofuge, électricité pièce humide. Livré en 10 jours ouvrés." },
      { type: 'Rénovation complète', title: 'Maison individuelle',         meta: 'Versailles · 2023',          desc: "Rénovation d'une maison des années 80 : électricité, isolation, plaquisterie, peinture. 4 mois de chantier." },
      { type: 'Peinture',            title: 'Locaux professionnels',       meta: 'Neuilly-sur-Seine · 2022',   desc: "Rafraîchissement et peinture de 300 m² de bureaux. Travaux réalisés week-end pour ne pas interrompre l'activité." },
    ],
  },

  // ── Contact sections ──────────────────────────────
  contact: {
    home:     { label: 'Contact',      h2: ['Un projet ?', 'Parlons-en.'],       p: "Nous répondons sous 24h. Le devis est gratuit et sans engagement. Décrivez-nous votre projet et nous vous recontactons rapidement." },
    services: { label: 'Devis gratuit',h2: ['Décrivez', 'votre projet.'],        p: "Dites-nous ce que vous souhaitez faire. Nous vous proposons une visite technique gratuite et un devis détaillé sous 48h." },
    projects: { label: 'Votre projet', h2: ['Un projet', 'similaire ?'],         p: "Vous avez vu quelque chose qui vous inspire ? Contactez-nous pour discuter de votre projet." },
    details: { tel: '+33 (0)6 00 00 00 00', email: 'contact@vpbatiment.fr', zoneLabel: 'Zone', zone: 'Île-de-France' },
  },

  // ── Form ──────────────────────────────────────────
  form: {
    first:    'Prénom',    phFirst:   'Votre prénom',
    last:     'Nom',       phLast:    'Votre nom',
    email:    'Email',     phEmail:   'votre@email.fr',
    phone:    'Téléphone', phPhone:   '06 00 00 00 00',
    type:     'Type de projet',
    service:  'Service concerné',
    message:  'Message',
    phMsg:    'Décrivez votre projet...',
    phMsgSvc: 'Surface, état actuel, délai souhaité...',
    phMsgProj:'Décrivez votre projet, surface, localisation...',
    select:   'Sélectionner',
    options:  ['Rénovation complète','Électricité','Peinture & Enduit','Salle de bain','Cuisine','Autre'],
    optionsSvc:['Électricité','Peinture & Enduit','Plâtrerie & Cloisons','Rénovation complète','Salle de bain','Autre'],
    submitHome:'Envoyer la demande',
    submitSvc: 'Demander un devis gratuit',
    submitProj:'Envoyer ma demande',
    note:      'Réponse sous 24h · Devis gratuit & sans engagement',
    sending:   'Envoi...',
    sent:      '✓ Message envoyé',
  },

  // ── Footer ────────────────────────────────────────
  footer: {
    copy: '© 2025 VP Bâtiment · Île-de-France',
  },
};

// ─────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────
export const en = {
  meta: {
    home:     'VP Bâtiment · Construction & Renovation · Île-de-France',
    services: 'Services · VP Bâtiment',
    projects: 'Projects · VP Bâtiment',
  },
  nav: {
    home:     'Home',
    services: 'Services',
    projects: 'Projects',
    cta:      'Free quote',
  },
  hero: {
    label: 'Victor & Pierre · Île-de-France',
    h1:    ['Every project', 'is our', 'reputation.'],
    sub:   'Two brothers, fifty years of combined experience. Electrical work, painting, plaster, full renovation — no subcontractors.',
    btn1:  'See our work',
    btn2:  'Contact us',
  },
  stats: [
    { num: '30', sup: 'YRS', label: "Victor's experience" },
    { num: '20', sup: 'YRS', label: "Pierre's experience" },
    { num: '2',  sup: '',    label: 'Brothers · Direct contact' },
  ],
  about: {
    label: 'About us',
    h2:    ['Expertise passed down,', 'a word kept.'],
    p1:    'VP Bâtiment is Victor and Pierre — two brothers who have worked together for over twenty years. Victor handles electrical work and site coordination. Pierre takes care of painting, plaster and finishes.',
    p2:    'No subcontractors, no intermediaries. You have a direct point of contact from the first call to the handover.',
    cards: [
      { title: 'Multi-trade',           desc: 'Electrical, painting, plaster, drywall — one team for the entire project. Less coordination, more coherence.' },
      { title: 'Direct communication',  desc: 'You always speak to one of the two brothers. No intermediary site manager, no lost messages.' },
      { title: 'Quality over speed',    desc: "We take the time to do it right. Our clients come back — and recommend us. That's our best advertisement." },
    ],
  },
  servicesPreview: {
    label: 'What we do',
    h2:    ['Our areas', 'of expertise'],
    link:  'All services →',
    items: [
      { title: 'Electrical',      desc: "Installation, compliance, electrical panels, home automation. Victor's specialty with 30 years of experience." },
      { title: 'Painting & Plaster', desc: "Surface preparation, finishing plaster, interior painting. Pierre's trade." },
      { title: 'Full renovation', desc: 'Coordination of all trades for a complete renovation of your apartment or house.' },
    ],
  },
  servicesPage: {
    header: {
      label: 'Our services',
      h1:    ['Services &', 'expertise'],
      p:     'From electrical to finishes, we cover all the trades needed for your renovation.',
    },
    cards: [
      {
        tag: "Victor · 30 years' experience", h3: 'Electrical',
        p:   'Full installation, NF C 15-100 compliance, electrical panel replacement. Victor works in both old Haussmann apartments and modern buildings.',
        li:  ['Electrical panel & circuit breakers','NF C 15-100 compliance','Wiring & outlets','Lighting & home automation','EV charging stations'],
      },
      {
        tag: "Pierre · 20 years' experience", h3: 'Interior painting',
        p:   'Thorough surface preparation, quality paint application. Pierre works carefully on every surface for a clean, durable result.',
        li:  ['Walls & ceiling painting','Woodwork & door painting','Surface preparation & treatment','Matte, satin, gloss finishes','Custom colours'],
      },
      {
        tag: 'Pierre · Specialty', h3: 'Plaster & Drywall',
        p:   'Skim coat, floor levelling, patching, plasterboard. Pierre masters both traditional techniques and modern materials.',
        li:  ['Skim coat & finishing plaster','Floor levelling','Partitions & drywall','Thermal & acoustic insulation','Suspended ceilings'],
      },
      {
        tag: 'Victor & Pierre', h3: 'Full renovation',
        p:   'Kitchen, bathroom, entire apartment — we coordinate and carry out all the work. One point of contact for the entire project.',
        li:  ['Assessment & detailed quote','Scheduling & coordination','Kitchen & bathroom','Apartments & houses','Strict budget monitoring'],
      },
      {
        tag: 'Specialty', h3: 'Bathroom',
        p:   'Demolition, tiling, moisture-resistant paint and electrical work — we handle the entire bathroom project from A to Z.',
        li:  ['Demolition & disposal','Tiling','Moisture-resistant paint','Wet room electrical work','Sanitary installation'],
      },
      {
        tag: 'Consulting', h3: 'Quote & Consultation',
        p:   'Before any commitment, we visit the site, assess the work and produce a detailed, transparent quote. No surprises during the project.',
        li:  ['Free technical visit','Detailed line-by-line quote','Materials advice','Realistic scheduling','Photographic site monitoring'],
      },
    ],
    process: {
      h2: 'How it works',
      steps: [
        { num: '01', label: 'Contact', title: 'Get in touch',    desc: "Tell us about your project. We'll get back to you within 24 hours to arrange a visit." },
        { num: '02', label: 'Visit',   title: 'Technical visit', desc: 'We visit the site, take measurements and assess the constraints. Free & no obligation.' },
        { num: '03', label: 'Quote',   title: 'Detailed quote',  desc: 'A clear, line-by-line quote with a provisional schedule. No hidden surprises.' },
        { num: '04', label: 'Work',    title: 'Execution',       desc: 'We carry out the work according to the agreed schedule. You can reach us directly at any time.' },
      ],
    },
  },
  projectsPage: {
    header: {
      label: 'Our projects',
      h1:    ['Recent', 'work'],
      p:     'A selection of projects completed in Île-de-France. Each reflects our commitment to quality and careful finishes.',
    },
    items: [
      { type: 'Full renovation', title: '75 m² apartment',         meta: 'Paris 11th · 2024',           desc: "Full renovation of a 1960s apartment — electrical, painting, plaster, partitions. Duration: 6 weeks." },
      { type: 'Electrical',      title: 'Electrical compliance',    meta: 'Vincennes · 2024',            desc: 'Complete panel replacement, NF C 15-100 compliance, EV charging station installation.' },
      { type: 'Painting & Plaster',title:'Haussmann apartment',    meta: 'Paris 16th · 2023',           desc: 'Complete replastering and repainting of a 120 m² apartment. Mouldings preserved and restored.' },
      { type: 'Bathroom',        title: 'Bathroom renovation',      meta: 'Boulogne-Billancourt · 2023', desc: 'Demolition, tiling, moisture-resistant paint, wet room electrical. Delivered in 10 working days.' },
      { type: 'Full renovation', title: 'Detached house',           meta: 'Versailles · 2023',           desc: "Renovation of an 80s house: electrical, insulation, drywall, painting. 4-month project." },
      { type: 'Painting',        title: 'Commercial premises',      meta: 'Neuilly-sur-Seine · 2022',    desc: 'Refresh and painting of 300 m² of offices. Work carried out over weekends.' },
    ],
  },
  contact: {
    home:     { label: 'Contact',     h2: ['A project?', "Let's talk."],      p: "We respond within 24 hours. The quote is free and non-binding. Tell us about your project and we'll get back to you quickly." },
    services: { label: 'Free quote',  h2: ['Describe', 'your project.'],      p: "Tell us what you'd like to do. We'll offer a free technical visit and a detailed quote within 48 hours." },
    projects: { label: 'Your project',h2: ['A similar', 'project?'],          p: "Did you see something that inspires you? Contact us to discuss your project. We're available for a quick visit." },
    details:  { tel: '+33 (0)6 00 00 00 00', email: 'contact@vpbatiment.fr', zoneLabel: 'Area', zone: 'Île-de-France' },
  },
  form: {
    first:    'First name', phFirst:   'Your first name',
    last:     'Last name',  phLast:    'Your last name',
    email:    'Email',      phEmail:   'your@email.com',
    phone:    'Phone',      phPhone:   '07 00 00 00 00',
    type:     'Project type',
    service:  'Service',
    message:  'Message',
    phMsg:    'Describe your project...',
    phMsgSvc: 'Area, current state, desired timeline...',
    phMsgProj:'Describe your project, area, location...',
    select:   'Select',
    options:  ['Full renovation','Electrical','Painting & Plaster','Bathroom','Kitchen','Other'],
    optionsSvc:['Electrical','Painting & Plaster','Plasterwork & Partitions','Full renovation','Bathroom','Other'],
    submitHome:'Send request',
    submitSvc: 'Request a free quote',
    submitProj:'Send my request',
    note:      'Response within 24h · Free quote & no obligation',
    sending:   'Sending...',
    sent:      '✓ Message sent',
  },
  footer: {
    copy: '© 2025 VP Bâtiment · Île-de-France',
  },
};
