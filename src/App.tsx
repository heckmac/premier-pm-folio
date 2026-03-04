import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import FusionTelepresence from "./pages/FusionTelepresence";
import SmartwatchGestures from "./pages/design/SmartwatchGestures";
import SharafDG from "./pages/design/SharafDG";
import InsuranceDataCollection from "./pages/design/InsuranceDataCollection";
import Design from "./pages/Design";
import MollieLanding from "./pages/MollieLanding";
import ChatPortfolio from "./pages/ChatPortfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/fusion-telepresence" element={<FusionTelepresence />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/fusion-telepresence" element={<FusionTelepresence />} />
          <Route path="/design/smartwatch-gestures" element={<SmartwatchGestures />} />
          <Route path="/design/sharaf-dg-omnichannel" element={<SharafDG />} />
          <Route path="/design/insurance-data-collection" element={<InsuranceDataCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mollie" element={<MollieLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
