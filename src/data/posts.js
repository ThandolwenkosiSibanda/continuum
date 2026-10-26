// Table: posts. project_slug links a post to the app it's about. body is a list
// of blocks: { type: "intro" | "p" | "h2" | "quote", text }, { type: "ul", items }
// and { type: "images", images: [{ src, alt }] }. Text can link with
// [words](/path). A post with no body shows its excerpt.

const IMG = "/assets/images/insights";

export const posts = [
  {
    slug: "your-next-buyer-is-on-their-phone",
    title: "Your next buyer isn't standing in the yard. They're on their phone.",
    excerpt:
      "Most auction houses still sell the way they did twenty years ago: a printed catalogue, a viewing day, and a crowd that has to be there in person. Everyone who can't get to the yard on sale day is a bid you never see.",
    lead: "Why auction houses that still sell only on sale day are leaving bids on the table, and what a branded auction app changes.",
    industry: "Auctions",
    project_slug: "auctionflow",
    cover: `${IMG}/insight-auctionflow.jpg`,
    cover_alt: "AuctionFlow back office dashboard",
    body: [
      {
        type: "intro",
        text: "Most auction houses in Zimbabwe still sell the way they did twenty years ago: a printed catalogue, a viewing day, and a crowd that has to be there in person. Everyone who can't get to the yard on sale day is a bid you never see.",
      },
      {
        type: "p",
        text: "So we built AuctionFlow: online auctions, simplified. It's a complete auction platform, with a bidder app, a website and a back office, set up for each auction house under its own name. Your logo, your colours, your listing on Google Play and the App Store, your web address. Your bidders only ever see your brand.",
      },
      { type: "h2", text: "What your bidders get" },
      {
        type: "ul",
        items: [
          "A full online catalogue: photos, specs, location and a live countdown for every lot",
          "Bid now, or set a maximum and let the app bid for them one step at a time",
          "Anti-sniping: a late bid extends the lot, so nobody wins by refreshing at the last second",
          "Instant alerts when they're outbid, when a lot is ending, and when they win",
          "Buyer's premium and VAT worked out on every win, so there are no surprises at the cashier",
          "Pay by EcoCash, OneMoney or InnBucks in the app, or by bank transfer or cash at your office",
        ],
      },
      {
        type: "images",
        images: [
          { src: `${IMG}/auctionflow-10-mobile-money.jpg`, alt: "Paying by EcoCash, OneMoney or InnBucks in AuctionFlow" },
          { src: `${IMG}/auctionflow-01-white-label.jpg`, alt: "AuctionFlow runs under each auction house's own brand" },
        ],
      },
      { type: "h2", text: "What your team gets" },
      {
        type: "ul",
        items: [
          "A full admin mode on the phone, and a back office on any computer: create a sale, photograph lots in the yard and publish",
          "Hidden reserves: bids that end below reserve wait for your decision, accept or decline",
          "Every bid and every bidder's secret maximum, visible to staff only",
          "Payments, proofs of payment and collections tracked lot by lot",
          "Unsold lots relisted into the next sale automatically, held back until you approve them",
          "Staff roles (auction manager, cashier, collections, viewer), so each person only sees and changes what their job needs",
        ],
      },
      { type: "h2", text: "Your brand, not ours" },
      {
        type: "p",
        text: "Your name and logo on the app, the website and every message bidders receive. Your colours throughout. Listed in the app stores under your name, on your own web address, with your bank, mobile money and collection details. Your bidders and your data live in a system that belongs to you.",
      },
      { type: "h2", text: "Built to be trusted" },
      {
        type: "ul",
        items: [
          "Prices and countdowns update live on every phone, so everyone sees the same sale at the same moment",
          "Two people bidding in the same second can't break it: every bid is checked and recorded centrally",
          "Bidders never see your reserves or anyone else's maximum bid",
          "Lots close on time by themselves, winners are told straight away, and watchers get an \"ending soon\" reminder",
          "Works on Android, iPhone and any computer",
        ],
      },
      { type: "h2", text: "Why it matters" },
      { type: "quote", text: "More bidders means more competition, and better prices for your sellers." },
      {
        type: "p",
        text: "An online sale reaches bidders in Harare, Bulawayo, Mutare and the diaspora, not just whoever turns up on the day. Sales run around the clock, and staff time goes into the lots, not the paperwork. It's built for Zimbabwe, with mobile money, USD pricing, VAT and WhatsApp contact for every buyer, and there's no per-sale platform commission.",
      },
      {
        type: "p",
        text: "If you run an auction house and want your own branded auction app and website, [get in touch](/contact). And if you need another custom app or business system built around how you work, we'd like to hear about that too.",
      },
    ],
    sort_order: 1,
  },
  {
    slug: "no-two-businesses-are-the-same",
    title: "No two businesses are the same. So why should the systems that run them be?",
    excerpt:
      "Customers don't think in shopping carts. They think “I'm putting up a house in Bulawayo and I'm at the roofing stage.” A generic e-commerce template can't handle that, so we built around how Proqit actually works.",
    lead: null,
    industry: "Construction",
    project_slug: "proqit",
    cover: `${IMG}/insight-proqit.jpg`,
    cover_alt: "Proqit",
    body: null,
    sort_order: 2,
  },
  {
    slug: "run-the-league-from-your-phone",
    title: "Run the league from your phone.",
    excerpt:
      "Officials make the fixture list, appoint referees and enter results in minutes. Referees send the score straight from the pitch, and the association confirms it before it counts.",
    lead: null,
    industry: "Sport",
    project_slug: "ntafa",
    cover: `${IMG}/insight-ntafa.jpg`,
    cover_alt: "NTAFA",
    body: null,
    sort_order: 3,
  },
];
