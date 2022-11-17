import MyProjects from "./MyProjects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

function MainContent(): JSX.Element {

  return (
    <main>
      <MyProjects />
      <AboutMe />
      <Contact />
    </main>
  );
}

export default MainContent;
