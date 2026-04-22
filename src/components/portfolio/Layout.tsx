import {Outlet} from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="lg:pr-14 pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
