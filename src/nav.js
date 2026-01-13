// src/nav.js
export const NAV = [
  // TABLE OF CONTENT
  {
    section: "TABLE OF CONTENT",
    items: [
      { label: "Table of Content", path: "/" },
    ],
  },

  {
    section: "WELCOME",
    items: [
      { label: "TL;DR What is SuVa?", path: "/welcome/tldr" },
      { label: "Documentation", path: "/welcome/documentation" },
      { label: "Socials", path: "/welcome/socials" },
    ],
  },

  {
    section: "INTRO",
    items: [
      {
        label: "Executive Summary",
        path: "/intro/executive-summary",
        children: [
          { label: "Key Investment and Highlights", path: "/intro/key-investment-highlights" },
          { label: "Revenue Model & Use of Funds", path: "/intro/revenue-model-use-of-funds" },
        ],
      },
    ],
  },

  {
    section: "PROJECT",
    items: [
      {
        label: "1. Project Overview",
        path: "/project/overview",
        children: [
          { label: "1.1 Introduction & Vision", path: "/project/introduction-vision" },
          { label: "1.2 Market Opportunity & Problem Analysis", path: "/project/market-opportunity" },
          { label: "1.3 Cryptic's Solution Architecture", path: "/project/solution-architecture" },
          { label: "1.4 Platform Capabilities & Market Position", path: "/project/platform-capabilities" },
          { label: "1.5 Roadmap", path: "/project/roadmap" },
          { label: "1.6 Revenue Model", path: "/project/revenue-model" },
        ],
      },
    ],
  },

  {
  section: "TECHNOLOGY",
  items: [
    {
      label: "2. Technology Overview",
      path: "/technology/overview",
      children: [
        {
          label: "2.1 Platform Architecture",
          path: "/technology/platform-architecture",
          children: [
            {
              label: "CRYSTALS-Dilithium",
              path: "/technology/platform-architecture/crystals-dilithium",
            },
            {
              label: "CRYSTALS-Kyber",
              path: "/technology/platform-architecture/crystals-kyber",
            },
            {
              label: "TweetNaCl",
              path: "/technology/platform-architecture/tweetnacl",
            },
            {
              label: "KeyStore Storage",
              path: "/technology/platform-architecture/keystore-storage",
            },
          ],
        },

        { label: "2.2 Quantum-Resistant Security Stack", path: "/technology/quantum-resistant-security-stack" },
        { label: "2.3 Blockchain & Payment Infrastructure", path: "/technology/blockchain-payment-infrastructure" },
        { label: "2.4 Unified Communication & Payments", path: "/technology/unified-communication-payments" },
        { label: "2.5 Secure Key Management & Recovery", path: "/technology/secure-key-management-recovery" },
        { label: "2.6 Advanced Platform Capabilities", path: "/technology/advanced-platform-capabilities" },
        { label: "2.7 GitHub Repository Access", path: "/technology/github-repository-access" },
      ],
    },
  ],
},


  {
    section: "USER EXPERIENCE",
    items: [
      {
        label: "3. User Experience Overview",
        path: "/ux/overview",
        children: [
          { label: "3.1 Getting Started", path: "/ux/getting-started" },
          { label: "3.2 User Journey Paths", path: "/ux/user-journeys" },
          { label: "3.3 Core Feature Walkthroughs", path: "/ux/core-features" },
          { label: "3.4 Security & Privacy Settings", path: "/ux/security-privacy" },
          { label: "3.5 Troubleshooting & Support", path: "/ux/troubleshooting" },
        ],
      },
    ],
  },

  {
    section: "TOKENOMICS & BUSINESS MODEL",
    items: [
      {
        label: "4. Tokenomics Overview",
        path: "/tokenomics/overview",
        children: [
          { label: "4.1 Token Utility", path: "/tokenomics/token-utility" },
          { label: "4.2 Flywheel", path: "/tokenomics/flywheel" },
          { label: "4.3 Tokenomics Model", path: "/tokenomics/model" },
          { label: "4.4 Treasury Ops & Revenue Streams", path: "/tokenomics/treasury" },
          { label: "4.5 Buyback & Burn Ops", path: "/tokenomics/buyback-burn" },
          { label: "4.6 Conclusion", path: "/tokenomics/conclusion" },
        ],
      },
    ],
  },

  {
    section: "MARKETING",
    items: [
      {
        label: "5. Marketing Overview",
        path: "/marketing/overview",
        children: [
          { label: "5.1 Socials & Community Growth", path: "/marketing/community" },
          { label: "5.2 CEX Listings", path: "/marketing/cex" },
          { label: "5.3 User Acquisition Model", path: "/marketing/acquisition" },
          { label: "5.4 Strategic Partnerships", path: "/marketing/partnerships" },
          { label: "5.5 Conclusion", path: "/marketing/conclusion" },
        ],
      },
    ],
  },

  {
    section: "FREQUENTLY ASKED QUESTIONS",
    items: [
      { label: "General", path: "/faq/general" },
      { label: "Security & Cryptography", path: "/faq/security" },
      { label: "Token & Economy", path: "/faq/token" },
      { label: "Audits & Trust", path: "/faq/audits" },
      { label: "Doxxed & Compliant", path: "/faq/compliance" },
      { label: "Why?", path: "/faq/why" },
    ],
  },

  {
    section: "GLOSSARY",
    items: [{ label: "Glossary", path: "/glossary" }],
  },

  {
    section: "FINAL WORD",
    items: [{ label: "Conclusion", path: "/conclusion" }],
  },
];
