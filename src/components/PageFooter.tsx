// import linkedinLogo from images

function PageFooter(): JSX.Element {
  return (
    <footer className="footer">
      {/* <div>
        <p>Alessia Borys </p>
      </div> */}
      <div>
        <a href="https://www.linkedin.com/in/alessiaborys/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png"
            alt="linkedin-icon"
          />Alessia Borys 2023
        </a>
      </div>
    </footer>
  );
}

export default PageFooter;
