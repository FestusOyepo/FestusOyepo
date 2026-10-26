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
  caseStudies: []
};
