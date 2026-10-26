// Table: services. nav_text shows in the header menu, list_text in the home
// page list, bullets on the home page and card_bullets on the Services page.
// seen_in and related are project slugs. The detail-page sections (included,
// steps, built_with, faq) are optional: a service page shows the ones its row
// fills in and falls back to the shared process steps.

export const services = [
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    icon: "ri-smartphone-line",
    nav_text: "Android and iPhone from one codebase",
    list_text: "Android and iPhone",
    summary: "Android and iPhone apps from one codebase, with an admin side your team can run from the same phone.",
    bullets: [
      "Customer and staff apps in one",
      "Listed on Google Play and the App Store under your name",
      "Live updates for prices, bids and scores",
    ],
    card_bullets: ["Customer and staff apps in one", "Listed under your name", "Live updates for prices, bids and scores"],
    seen_in: ["auctionflow", "proqit", "winno-brix", "medcompare", "rentr", "bushveld-figtree", "ntafa"],
    title: "Mobile apps for Android and iPhone.",
    lead: "One codebase for both platforms, with an admin side your team can run from the same phone, all built around how your business works.",
    hero_phones: ["rentr", "auctionflow", "ntafa"],
    included_title: "Everything your app needs",
    included: [
      {
        icon: "ri-smartphone-line",
        title: "Android and iPhone",
        text: "One React Native codebase runs on both, which keeps building and upkeep costs down.",
      },
      {
        icon: "ri-admin-line",
        title: "Admin mode built in",
        text: "Your team runs orders, listings, results or payments from the same app.",
      },
      {
        icon: "ri-flashlight-line",
        title: "Live updates",
        text: "Prices, bids, scores and countdowns update on every phone at the same moment.",
      },
      {
        icon: "ri-wallet-3-line",
        title: "Mobile money",
        text: "EcoCash, OneMoney and InnBucks built into checkout, plus bank and cash options.",
      },
      {
        icon: "ri-whatsapp-line",
        title: "WhatsApp",
        text: "Assistants and alerts right where your customers already talk to you.",
      },
      {
        icon: "ri-store-2-line",
        title: "Under your name",
        text: "Listed on Google Play and the App Store with your name, logo and colours.",
      },
    ],
    steps_title: "From idea to App Store",
    steps: [
      { title: "Map how you work", text: "We learn how your business runs: your customers, your staff, your payments and your rules." },
      { title: "Design the screens", text: "Flows and screens for every kind of user, tested with you before any code is written." },
      {
        title: "Build and test",
        text: "One codebase for Android and iPhone, with security checked in the database, not just hidden in the app.",
      },
      { title: "Launch and grow", text: "We publish to the app stores under your name, then keep improving the app as you grow." },
    ],
    built_with: ["React Native", "Expo", "Supabase", "PostgreSQL", "PowerSync"],
    related: ["proqit", "winno-brix", "ntafa"],
    related_label: "Mobile apps we built",
    faq_title: "Questions about mobile apps",
    faq: [
      {
        question: "Do you build for both Android and iPhone?",
        answer:
          "Yes. We build with React Native and Expo, so one codebase runs on both platforms. That keeps the cost of building and maintaining the app down.",
      },
      {
        question: "Can my staff manage things from the app?",
        answer:
          "Yes. Most of our apps include an admin mode in the same app, so your team can run orders, listings, payments or results from a phone.",
      },
      {
        question: "Will the app carry our name?",
        answer: "Yes. It's listed on Google Play and the App Store under your name, with your logo and colours throughout.",
      },
      {
        question: "Who owns the app?",
        answer: "You do. Your customers and your data live in a system that belongs to you, with no per-seat fees.",
      },
      {
        question: "What happens after launch?",
        answer: "We stay on to support the app, release updates and add features as your business grows.",
      },
    ],
    sort_order: 1,
  },
  {
    slug: "web-apps",
    name: "Web Apps & Back Offices",
    icon: "ri-window-line",
    nav_text: "Websites, dashboards and admin tools",
    list_text: "Websites, dashboards, admin tools",
    summary: "Websites, online catalogues and back offices for the people who run the business day to day.",
    bullets: [
      "Public website and online catalogue",
      "Back office that runs on any computer",
      "Staff roles, so everyone sees only what their job needs",
    ],
    card_bullets: ["Public website and online catalogue", "Back office on any computer", "Staff roles and permissions"],
    seen_in: ["auctionflow"],
    sort_order: 2,
  },
  {
    slug: "ux-ui-design",
    name: "UX/UI Design",
    icon: "ri-pen-nib-line",
    nav_text: "Screens people understand first time",
    list_text: "Flows, screens, design systems",
    summary: "Screens designed around the people using them, from the first sketch to a full design handoff.",
    bullets: ["User flows and wireframes", "App and web interface design", "Design systems your developers can build from"],
    card_bullets: ["User flows and wireframes", "App and web interface design", "Design systems for developers"],
    seen_in: ["auctionflow", "proqit", "winno-brix", "medcompare", "rentr", "bushveld-figtree", "ntafa"],
    sort_order: 3,
  },
  {
    slug: "integrations",
    name: "Integrations",
    icon: "ri-plug-line",
    nav_text: "Mobile money, WhatsApp and AI",
    list_text: "Mobile money, WhatsApp, AI",
    summary: "Connect your app to the services your customers already use.",
    bullets: [
      "EcoCash, OneMoney and InnBucks payments",
      "WhatsApp assistants that capture leads",
      "AI replies that use your live prices, never made-up ones",
    ],
    card_bullets: ["EcoCash, OneMoney and InnBucks", "WhatsApp assistants that capture leads", "AI replies grounded in your data"],
    seen_in: ["auctionflow", "proqit"],
    sort_order: 4,
  },
  {
    slug: "support-hosting",
    name: "Support & Hosting",
    icon: "ri-server-line",
    nav_text: "Updates and growth after launch",
    list_text: "After launch",
    summary: "We stay on after launch to keep your app running and growing with your business.",
    bullets: ["Updates and new features as you grow", "App store releases handled for you", "Help when your team needs it"],
    card_bullets: ["Updates and new features", "App store releases handled", "Help when your team needs it"],
    seen_in: [],
    sort_order: 5,
  },
];
