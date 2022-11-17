import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function MainContent(): JSX.Element {

  return (
    <main>
      <AboutMe />
      <MyProjects />
      <Contact />
    </main>
  );
}

export default MainContent;
