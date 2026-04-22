import {Toaster} from "@/components/ui/toaster";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClientInstance} from "@/lib/query-client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Layout from "./components/portfolio/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import {Analytics} from "@vercel/analytics/react";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
