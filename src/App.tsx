import MainContent from "./components/MainContent";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import "./style.css"

function App(): JSX.Element {

  return (
    <>
      <PageHeader />
      <MainContent />
      <PageFooter />
    </>
  );
}

export default App;
