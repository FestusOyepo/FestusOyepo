/* ============================================================
   EDIT THIS FILE to change prices, package details, samples
   and links. No other file needs touching for routine updates.
   ============================================================ */
window.SITE_CONFIG = {
  name: "Festus Oyepo",
  xUrl: "https://x.com/FestusJones",
  xHandle: "@FestusJones",
  currency: "USD",

  /* ---- REVIEW BEFORE PUBLISHING --------------------------------
     Turnaround and revision limits have NOT been confirmed.
     Leave these empty ("") and the site says they are agreed in
     writing before work starts. Fill them in once you decide,
     e.g. revisions: "2 rounds of revisions", turnaround: "within 5 days of receiving footage".
  --------------------------------------------------------------- */
  packages: [
    {
      id: "audit",
      tag: "Audit",
      name: "Detailed Twitch Channel Audit",
      price: 25,
      clips: 0,
      summary: "A structured, written review of your Twitch channel with a prioritized plan you can act on.",
      includes: [
        "Structured review of your public Twitch channel",
        "Specific recommendations on positioning, presentation and discoverability",
        "A prioritized action plan, most useful changes first"
      ],
      notIncluded: "Does not include editing, and does not guarantee growth.",
      revisions: "",
      turnaround: ""
    },
    {
      id: "clips3",
      tag: "Short-form",
      name: "Three-Clip Editing Pack",
      price: 75,
      clips: 3,
      summary: "Three short vertical clips cut from stream footage you provide.",
      includes: [
        "3 edited short-form clips from your footage",
        "Vertical formatting for TikTok, YouTube Shorts and Instagram Reels",
        "Captions, hooks and basic editing"
      ],
      notIncluded: "Footage is supplied by you. No guaranteed views or growth.",
      revisions: "",
      turnaround: ""
    },
    {
      id: "clips6",
      tag: "Short-form",
      name: "Six-Clip Editing Pack",
      price: 150,
      clips: 6,
      summary: "Six short vertical clips, edited to the same standard as the three-clip pack.",
      includes: [
        "6 edited short-form clips from your footage",
        "Same editing standard as the three-clip pack",
        "Vertical formatting for TikTok, YouTube Shorts and Instagram Reels"
      ],
      notIncluded: "Footage is supplied by you. No guaranteed views or growth.",
      revisions: "",
      turnaround: ""
    }
  ],

  /* ---- Sample audits (illustrative, NOT client work) ----------
     Add, remove or reword freely. Keep the "Sample" label.
  --------------------------------------------------------------- */
  sampleAudits: [
    {
      topic: "Stream title",
      issue: "The title only says \"chill stream\", so someone browsing a category can't tell what game, mode or hook to expect.",
      recommendation: "Name the game or activity and add one specific reason to click, such as a goal, a challenge or a theme for the session.",
      why: "Browsing viewers decide from the thumbnail and title in a second. Specific titles help the right viewers recognise your stream as theirs.",
      next: "Rewrite your next three titles using: game, what's happening, who it's for."
    },
    {
      topic: "Categories and tags",
      issue: "The channel switches between several very large categories and uses broad tags, so it competes with thousands of streams at once.",
      recommendation: "Choose one or two core games plus accurate tags (language, play style, community) and test a smaller category that fits your content.",
      why: "In a smaller, relevant category a stream is easier to find. This is a hypothesis to test, not a promise of more viewers.",
      next: "Pick one core category for two weeks and note what changes in who joins chat."
    },
    {
      topic: "Reusing stream moments",
      issue: "Good moments end at the stream's end: nothing is posted on short-form platforms, so new people can't meet the channel before a live show.",
      recommendation: "Pick two moments per week, cut them to a clear vertical clip with captions, and end each with a pointer to your channel.",
      why: "Short clips give people a low-effort way to see your personality before they ever open Twitch.",
      next: "Mark three funny or exciting moments from your last stream and clip them."
    }
  ],

  /* ---- Real case studies --------------------------------------
     Add verified work here and it appears in "My Work" automatically.
     Only add items you can back with evidence you are allowed to show.
     Example (remove the comment to use):
     {
       title: "Channel name or 'Anonymous streamer'",
       summary: "What was done and what the client confirmed.",
       evidenceLabel: "Client-approved screenshot",
       evidenceUrl: "case-1.png",   // optional image
       link: "https://example.com"          // optional
     }
  --------------------------------------------------------------- */
  /* PAUSED until each channel link and result is verified with Festus:
  twitchResults: [
    {
      title: "Twitch Partner Program invitation",
      summary: "A client channel received an official invite to the Twitch Partner Program, which unlocks Partner-exclusive tools and revenue features.",
      evidenceLabel: "Past project · Twitch email screenshot",
      evidenceUrl: "assets/portfolio/09-twitch-partner-invite.jpeg",
      link: "https://www.twitch.tv/sirmaza"
    },
    {
      title: "Leveled up to Twitch Affiliate",
      summary: "Another client channel reached Twitch Affiliate status, which unlocks ad revenue, subscriptions and Bits.",
      evidenceLabel: "Past project · Twitch email screenshot",
      evidenceUrl: "assets/portfolio/10-twitch-affiliate-levelup.jpeg",
      link: "https://www.twitch.tv/deansocool"
    },
    {
      title: "357 unique viewers in one stream",
      summary: "A single 7-hour broadcast on a client channel reached 357 unique viewers and 54 unique chatters, with 8 new subscribers and 24 new followers.",
      evidenceLabel: "Past project · Twitch stream summary",
      evidenceUrl: "assets/portfolio/11-twitch-stream-stats.jpeg",
      link: "https://www.twitch.tv/acrethedog"
    }
  ],
  */
  twitchResults: [],
  caseStudies: [
    {
      title: "3.1M views in 28 days",
      summary: "A client channel reached 3.1M views and 37.5K watch hours in one month, with a single-day peak above 270K views.",
      evidenceLabel: "Client result · YouTube Analytics screenshot",
      evidenceUrl: "assets/portfolio/01-views-3-1m.jpeg",
      link: "https://www.youtube.com/@Rizpol"
    },
    {
      title: "217K views from a cold start",
      summary: "A relaunched channel recorded 217.9K views and 1.2K watch hours in 28 days.",
      evidenceLabel: "Client result · YouTube Analytics screenshot",
      evidenceUrl: "assets/portfolio/05-views-217k.jpeg",
      link: "https://www.youtube.com/@TheHungryCreativePod"
    },
    {
      title: "YouTube Partner Program approval",
      summary: "A client channel was approved for monetization in the YouTube Partner Program.",
      evidenceLabel: "Client result · YouTube Studio screenshot",
      evidenceUrl: "assets/portfolio/02-partner-approval.jpeg",
      link: "https://www.youtube.com/@hOlyhexOr"
    },
    {
      title: "Monthly ad revenue: $433 to $543",
      summary: "A monetized client channel's payout grew from $433 in June to $543 in July.",
      evidenceLabel: "Client result · payment screenshot",
      evidenceUrl: "assets/portfolio/03-payment-growth.jpeg",
      link: "https://www.youtube.com/@KheZu"
    }
  ]
};
