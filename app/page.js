import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import TerminalDivider from "./components/terminaldivider";
import Projects from "./components/projects";
export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <TerminalDivider />
      <Experience />
      <Projects />
    </div>
  );
}
