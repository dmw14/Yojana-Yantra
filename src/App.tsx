import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EligibilityForm from "./pages/EligibilityForm";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Chatbot from "./pages/Chatbot";
import NotFound from "./pages/NotFound";
import HousingSchemes from "./pages/schemes/HousingSchemes";
import EducationSchemes from "./pages/schemes/EducationSchemes";
import EmploymentSchemes from "./pages/schemes/EmploymentSchemes";
import AgricultureSchemes from "./pages/schemes/AgricultureSchemes";
import HealthSchemes from "./pages/schemes/HealthSchemes";
import SeniorCitizenSchemes from "./pages/schemes/SeniorCitizenSchemes";
import DivyangjanSchemes from "./pages/schemes/DivyangjanSchemes";
import MoreSchemes from "./pages/schemes/MoreSchemes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eligibility" element={<EligibilityForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/schemes/housing" element={<HousingSchemes />} />
          <Route path="/schemes/education" element={<EducationSchemes />} />
          <Route path="/schemes/employment" element={<EmploymentSchemes />} />
          <Route path="/schemes/agriculture" element={<AgricultureSchemes />} />
          <Route path="/schemes/health" element={<HealthSchemes />} />
          <Route path="/schemes/senior-citizens" element={<SeniorCitizenSchemes />} />
          <Route path="/schemes/divyangjan" element={<DivyangjanSchemes />} />
          <Route path="/schemes/more" element={<MoreSchemes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
