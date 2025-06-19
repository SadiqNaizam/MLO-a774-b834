import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AcademicsResearchHub from "./pages/AcademicsResearchHub";
import InnovationImpactPage from "./pages/InnovationImpactPage";
import FacultyProfilesPage from "./pages/FacultyProfilesPage";
import AdmissionsGlobalGatewayPage from "./pages/AdmissionsGlobalGatewayPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/academics" element={<AcademicsResearchHub />} />
          {/* Example of a more specific academic route, content could be dynamic within AcademicsResearchHub */}
          <Route path="/academics/:disciplineId" element={<AcademicsResearchHub />} /> 
          <Route path="/innovation" element={<InnovationImpactPage />} />
          <Route path="/faculty" element={<FacultyProfilesPage />} />
          <Route path="/admissions" element={<AdmissionsGlobalGatewayPage />} />
          
          {/* Add other specific routes from your application here */}
          {/* <Route path="/news-and-events" element={<NewsPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/apply-now" element={<ApplicationPortalPage />} /> */}


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;