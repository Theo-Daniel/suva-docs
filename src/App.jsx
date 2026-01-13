import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/TopBar";

import TableOfContents from "./pages/TableOfContents";
import DocPage from "./pages/DocPage";
import Search from "./pages/Search";

import logoWhite from "./assets/Logo-White.png";

/* =========================
   PAGE IMPORTS (your folders)
========================= */

// WELCOME
import WhatIsSUVA from "./pages/WELCOME/WhatIsSUVA";
import DocumentationWelcome from "./pages/WELCOME/Documentation";
import SocialsWelcome from "./pages/WELCOME/Socials";

// INTRO
import ExecutiveSummary from "./pages/INTRO/1. ExecutiveSummary";
import InvestmentsAndHighlights from "./pages/INTRO/InvestmentsAndHighlights";
import RevenueAndFunds from "./pages/INTRO/RevenueAndFunds";

// PROJECT
import ProjectOverview from "./pages/PROJECT/1. ProjectOverview";
import IntroductionAndVision from "./pages/PROJECT/Introduction & Vision";
import MarketOpportunityAndProblemAnalysis from "./pages/PROJECT/Market Opportunity & Problem Analysis";
import SuvasSolutionArchitecture from "./pages/PROJECT/SuVa's Solution Architecture";
import PlatformCapabilitiesAndMarketPosition from "./pages/PROJECT/Platform Capabilities & Market Position";
import Roadmap from "./pages/PROJECT/Roadmap";
import RevenueModelProject from "./pages/PROJECT/Revenue Model";

// TECHNOLOGY
import TechnologyOverview from "./pages/TECHNOLOGY/b";
import QuantumResistantSecurityStack from "./pages/TECHNOLOGY/Quantum-Resistant Security Stack";
import BlockchainAndPaymentInfrastructure from "./pages/TECHNOLOGY/Blockchain & Payment Infrastructure";
import UnifiedCommunicationAndPayments from "./pages/TECHNOLOGY/Unified Communication & Payments";
import SecureKeyManagementAndRecovery from "./pages/TECHNOLOGY/Secure Key Management & Recovery";
import AdvancedPlatformCapabilities from "./pages/TECHNOLOGY/Advanced Platform Capabilities";
import GitHubRepositoryAccess from "./pages/TECHNOLOGY/GitHub Repository Access";

// TECHNOLOGY > Platform Architecture
import PlatformArchitecture from "./pages/TECHNOLOGY/PlatformArchitecture/Platform Architecture";
import CrystalsDilithium from "./pages/TECHNOLOGY/PlatformArchitecture/CRYSTALS-Dilithium";
import CrystalsKyber from "./pages/TECHNOLOGY/PlatformArchitecture/CRYSTALS-Kyber";
import TweetNaCl from "./pages/TECHNOLOGY/PlatformArchitecture/TweetNaCl";
import KeyStoreStorage from "./pages/TECHNOLOGY/PlatformArchitecture/KeyStore Storage";

// USER EXPERIENCE
import GettingStarted from "./pages/USER EXPERIENCE/Getting Started";
import UserJourneyPaths from "./pages/USER EXPERIENCE/User Journey Paths";
import CoreFeatureWalkthroughs from "./pages/USER EXPERIENCE/Core Feature Walkthroughs";
import SecurityAndPrivacySettings from "./pages/USER EXPERIENCE/Security & Privacy Settings";
import TroubleshootingAndSupport from "./pages/USER EXPERIENCE/Troubleshooting & Support";

// TOKENOMICS & BUSINESS MODEL
import TokenUtility from "./pages/TOKENOMICS & BUSINESS MODEL/Token Utility";
import Flywheel from "./pages/TOKENOMICS & BUSINESS MODEL/Flywheel";
import TokenomicsModel from "./pages/TOKENOMICS & BUSINESS MODEL/Tokenomics Model";
import TreasuryOpsAndRevenueStreams from "./pages/TOKENOMICS & BUSINESS MODEL/Treasury Operations & Revenue Streams";
import BuybackAndBurnOps from "./pages/TOKENOMICS & BUSINESS MODEL/Buyback & Burn Operations";
import TokenomicsConclusion from "./pages/TOKENOMICS & BUSINESS MODEL/Conclusion";

// MARKETING
import SocialsAndCommunityGrowth from "./pages/MARKETING/Socials & Community Growth";
import CEXListings from "./pages/MARKETING/CEX Listings";
import UserAcquisitionModel from "./pages/MARKETING/User Acquisition Model";
import StrategicPartnerships from "./pages/MARKETING/Strategic Partnerships";
import MarketingConclusion from "./pages/MARKETING/Conclusion";

// FAQ (Q&A)
import FAQGeneral from "./pages/Q&A/General";
import FAQSecurityAndCryptography from "./pages/Q&A/Security & Cryptography";
import FAQTokenAndEconomy from "./pages/Q&A/Token & Economy";
import FAQAuditsAndTrust from "./pages/Q&A/Audits & Trust";
import FAQDoxxedAndCompliant from "./pages/Q&A/Doxxed & Compliant";
import FAQWhy from "./pages/Q&A/Why";

// GLOSSARY / FINAL
import Glossary from "./pages/GLOSSARY/Glossary";
import FinalConclusion from "./pages/FINAL/Conclusion";

/* =========================
   SMALL PLACEHOLDER PAGES
   (because you don't have these files yet)
========================= */

function UXOverview() {
  return (
    <DocPage title="3. User Experience Overview">
      <p>Temporary placeholder.</p>
    </DocPage>
  );
}

function TokenomicsOverview() {
  return (
    <DocPage title="4. Tokenomics Overview">
      <p>Temporary placeholder.</p>
    </DocPage>
  );
}

function MarketingOverview() {
  return (
    <DocPage title="5. Marketing Overview">
      <p>Temporary placeholder.</p>
    </DocPage>
  );
}

/* =========================
   LAYOUT
========================= */

function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.startsWith("/search")) {
      sessionStorage.setItem(
        "last_non_search_path",
        location.pathname + location.search
      );
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex h-screen w-full max-w-[1400px] border-x border-white/10">
        <Sidebar />

        <main className="flex flex-1 flex-col">
          <Topbar />

          <div className="flex-1 overflow-y-auto">
            <div className="flex justify-center border-b border-white/10 py-10">
              <img src={logoWhite} alt="SuVa" className="h-28 opacity-90" />
            </div>

            <div className="min-h-[calc(100vh-57px)]">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* =========================
   ROUTES
========================= */

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* SEARCH */}
        <Route path="/search" element={<Search />} />

        {/* TABLE OF CONTENT */}
        <Route path="/" element={<TableOfContents />} />

        {/* ================= WELCOME ================= */}
        <Route path="/welcome/tldr" element={<WhatIsSUVA />} />
        <Route path="/welcome/documentation" element={<DocumentationWelcome />} />
        <Route path="/welcome/socials" element={<SocialsWelcome />} />

        {/* ================= INTRO ================= */}
        <Route path="/intro/executive-summary" element={<ExecutiveSummary />} />
        <Route
          path="/intro/key-investment-highlights"
          element={<InvestmentsAndHighlights />}
        />
        <Route path="/intro/revenue-model-use-of-funds" element={<RevenueAndFunds />} />

        {/* ================= PROJECT ================= */}
        <Route path="/project/overview" element={<ProjectOverview />} />
        <Route path="/project/introduction-vision" element={<IntroductionAndVision />} />
        <Route
          path="/project/market-opportunity"
          element={<MarketOpportunityAndProblemAnalysis />}
        />
        <Route path="/project/solution-architecture" element={<SuvasSolutionArchitecture />} />
        <Route
          path="/project/platform-capabilities"
          element={<PlatformCapabilitiesAndMarketPosition />}
        />
        <Route path="/project/roadmap" element={<Roadmap />} />
        <Route path="/project/revenue-model" element={<RevenueModelProject />} />

        {/* ================= TECHNOLOGY ================= */}
        <Route path="/technology/overview" element={<TechnologyOverview />} />

        <Route path="/technology/platform-architecture" element={<PlatformArchitecture />} />
        <Route
          path="/technology/platform-architecture/crystals-dilithium"
          element={<CrystalsDilithium />}
        />
        <Route
          path="/technology/platform-architecture/crystals-kyber"
          element={<CrystalsKyber />}
        />
        <Route
          path="/technology/platform-architecture/tweetnacl"
          element={<TweetNaCl />}
        />
        <Route
          path="/technology/platform-architecture/keystore-storage"
          element={<KeyStoreStorage />}
        />

        <Route
          path="/technology/quantum-resistant-security-stack"
          element={<QuantumResistantSecurityStack />}
        />
        <Route
          path="/technology/blockchain-payment-infrastructure"
          element={<BlockchainAndPaymentInfrastructure />}
        />
        <Route
          path="/technology/unified-communication-payments"
          element={<UnifiedCommunicationAndPayments />}
        />
        <Route
          path="/technology/secure-key-management-recovery"
          element={<SecureKeyManagementAndRecovery />}
        />
        <Route
          path="/technology/advanced-platform-capabilities"
          element={<AdvancedPlatformCapabilities />}
        />
        <Route
          path="/technology/github-repository-access"
          element={<GitHubRepositoryAccess />}
        />

        {/* ================= USER EXPERIENCE ================= */}
        <Route path="/ux/overview" element={<UXOverview />} />
        <Route path="/ux/getting-started" element={<GettingStarted />} />
        <Route path="/ux/user-journeys" element={<UserJourneyPaths />} />
        <Route path="/ux/core-features" element={<CoreFeatureWalkthroughs />} />
        <Route path="/ux/security-privacy" element={<SecurityAndPrivacySettings />} />
        <Route path="/ux/troubleshooting" element={<TroubleshootingAndSupport />} />

        {/* ================= TOKENOMICS ================= */}
        <Route path="/tokenomics/overview" element={<TokenomicsOverview />} />
        <Route path="/tokenomics/token-utility" element={<TokenUtility />} />
        <Route path="/tokenomics/flywheel" element={<Flywheel />} />
        <Route path="/tokenomics/model" element={<TokenomicsModel />} />
        <Route path="/tokenomics/treasury" element={<TreasuryOpsAndRevenueStreams />} />
        <Route path="/tokenomics/buyback-burn" element={<BuybackAndBurnOps />} />
        <Route path="/tokenomics/conclusion" element={<TokenomicsConclusion />} />

        {/* ================= MARKETING ================= */}
        <Route path="/marketing/overview" element={<MarketingOverview />} />
        <Route path="/marketing/community" element={<SocialsAndCommunityGrowth />} />
        <Route path="/marketing/cex" element={<CEXListings />} />
        <Route path="/marketing/acquisition" element={<UserAcquisitionModel />} />
        <Route path="/marketing/partnerships" element={<StrategicPartnerships />} />
        <Route path="/marketing/conclusion" element={<MarketingConclusion />} />

        {/* ================= FAQ ================= */}
        <Route path="/faq/general" element={<FAQGeneral />} />
        <Route path="/faq/security" element={<FAQSecurityAndCryptography />} />
        <Route path="/faq/token" element={<FAQTokenAndEconomy />} />
        <Route path="/faq/audits" element={<FAQAuditsAndTrust />} />
        <Route path="/faq/compliance" element={<FAQDoxxedAndCompliant />} />
        <Route path="/faq/why" element={<FAQWhy />} />

        {/* ================= GLOSSARY / FINAL ================= */}
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/conclusion" element={<FinalConclusion />} />

        {/* FALLBACK */}
        <Route path="*" element={<DocPage title="Not Found"><p>Page not found.</p></DocPage>} />
      </Routes>
    </Layout>
  );
}
