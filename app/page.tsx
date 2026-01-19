import CoverPage from "./components/CoverPage";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen py-8 flex flex-col items-center print:py-0 print:block">
      
      {/* Profile Pages */}
      <CoverPage />
      <Introduction />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
