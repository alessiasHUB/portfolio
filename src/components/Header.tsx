import "./header.css";

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="title-container">
      <p className="header-title">A</p>
      <p className="header-title">L</p>
      <p className="header-title">E</p>
      <p className="header-title">S</p>
      <p className="header-title">S</p>
      <p className="header-title">I</p>
      <p className="header-title">A</p>
      <p className="empty-space"> </p>
      <p className="header-title">B</p>
      <p className="header-title">O</p>
      <p className="header-title">R</p>
      <p className="header-title">Y</p>
      <p className="header-title">S</p>
      </div>
      {/* <div className="title">
      <h1>Alessia Borys</h1>
      </div>
      <div className="ghost">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      {/* <h1 data-text="Spotlight">Spotlight</h1> */}
    </header>
  );
}

export default Header;
