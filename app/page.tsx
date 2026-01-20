import CoverPage from "./components/CoverPage";
import TableOfContents from "./components/TableOfContents";
import Introduction from "./components/Introduction";
import Services from "./components/Services";
import Projects from "./components/Projects";
import OurProjects from "./components/OurProjects";
import Gallery from "./components/Gallery";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen py-8 flex flex-col items-center print:py-0 print:block">
      
      {/* Profile Pages */}
      <CoverPage />
      <TableOfContents />
      <Introduction />
      <Services />
      <Projects />
      <OurProjects />
      <Gallery />
      <Certificates />
      <Contact />
    </main>
  );
}
