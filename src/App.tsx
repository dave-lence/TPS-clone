import "./App.css";  
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import SuccessStories from "./pages/successStories";
import About from "./pages/about";
import Blog from "./pages/blog";
import ContactUs from "./pages/contactUs";
import FAQs from "./pages/faqs";
import KnowledgeBase from "./pages/knowledgeBase";
import Support from "./pages/support";
import Footer from './pages/Home/components/Footer'
import ItSupport from "./pages/services/Pages/itSupport";
import CloudSolutions from "./pages/services/Pages/cloudSolutions";
import BackupAndRecovery from "./pages/services/Pages/backupAndRecovery";
import OldAndSlow from "./pages/challanges/Pages/oldAndSlow";
import CyberSecurity from "./pages/services/Pages/cyberSecurity";
import Communications from "./pages/services/Pages/communications";
import DoesItSecurityMatter from "./pages/challanges/Pages/doesItSecurityMatter";
import DisasterRecovery from "./pages/challanges/Pages/disasterRecovery";
import ItAndRoi from "./pages/challanges/Pages/itAndRoi";
import SmallIssues from "./pages/challanges/Pages/smallIssues";
import Terms from "./pages/Terms";
import Privacy from "./pages/privacy";
import SupportEngine from "./supportEngine";
import ChatAdmin from "./supportEngine/Admin";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/support" element={<Support />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services/it-support" element={<ItSupport />} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/backup-recovery" element={<BackupAndRecovery />} />
        <Route path="/challenges/old-slow-and-useless" element={<OldAndSlow />} />
        <Route path="/communications" element={<Communications />} />
        <Route path="/challenges/it-security-does-it-matter" element={<DoesItSecurityMatter />} />
        <Route path="/challenges/disaster-recovery-whats-that" element={<DisasterRecovery />} />
        <Route path="/challenges/it-and-roi" element={<ItAndRoi />} />
        <Route path="/challenges/small-issues-which-create-big-problems" element={<SmallIssues />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/chat-admins" element={<ChatAdmin />} />
      </Routes>

      <Footer />

      <SupportEngine/>

    </BrowserRouter>
  );
}

export default App;


