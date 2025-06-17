
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Subscriptions from "./pages/Subscriptions";
import AddOns from "./pages/AddOns";
import FileTransfer from "./pages/FileTransfer";
import OfficeTools from "./pages/OfficeTools";
import CRM from "./pages/CRM";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          
          {/* Dashboard Routes */}
          <Route path="/" element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Redirect / to /dashboard when inside the dashboard layout */}
            <Route index element={<Navigate to="/dashboard" replace />} />
            
            {/* Main Dashboard Routes */}
            <Route path="/clients" element={<Dashboard />} />
            <Route path="/clients/new" element={<Dashboard />} />
            <Route path="/projects" element={<Dashboard />} />
            <Route path="/tasks" element={<Dashboard />} />
            <Route path="/messages" element={<Dashboard />} />
            <Route path="/team" element={<Dashboard />} />
            
            {/* New Routes */}
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/add-ons" element={<AddOns />} />
            <Route path="/file-transfer" element={<FileTransfer />} />
            <Route path="/office-tools" element={<OfficeTools />} />
            <Route path="/crm" element={<CRM />} />
            
            <Route path="/settings" element={<Dashboard />} />
          </Route>
          
          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
