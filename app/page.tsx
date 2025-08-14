import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Socials from "../components/Socials";

export default function HomePage() {
  return <>
    <Introduction />
    <Projects />
    <div style={{ paddingBottom: "10rem" }}>
      <Socials />
    </div>
  </>;
}
