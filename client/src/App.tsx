import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import About from "./pages/About";
import ServiceElectronics from "./pages/ServiceElectronics";
import ServiceDetailing from "./pages/ServiceDetailing";
import ServiceWinterization from "./pages/ServiceWinterization";
import ServiceGelcoat from "./pages/ServiceGelcoat";
import ServiceEngines from "./pages/ServiceEngines";
import ServiceMaintenance from "./pages/ServiceMaintenance";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    // Don't scroll to top if navigating to a hash anchor
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/about"} component={About} />
      <Route path={"/services/electronics"} component={ServiceElectronics} />
      <Route path={"/services/detailing"} component={ServiceDetailing} />
      <Route path={"/services/winterization"} component={ServiceWinterization} />
      <Route path={"/services/gelcoat-bottom-paint"} component={ServiceGelcoat} />
      <Route path={"/services/engines-repowers"} component={ServiceEngines} />
      <Route path={"/services/maintenance"} component={ServiceMaintenance} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider
          defaultTheme="light"
        >
          <TooltipProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
