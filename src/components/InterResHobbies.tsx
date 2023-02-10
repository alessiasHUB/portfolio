import "./interResHobbies.css";
import H from "../imgs/letters/H-white.png";
import O from "../imgs/letters/O-white.png";
import B from "../imgs/letters/B-white.png";
import i from "../imgs/letters/i-white.png";
import E from "../imgs/letters/E-white.png";
import S from "../imgs/letters/S-white.png";

/*
"Bouldering",
"Dancing salsa & bachata",
"Painting",
"Playing piano",
*/

export default function InterResHobbies(): JSX.Element {
  return (
    <div className="background-img-hobbies">
      <div className="hobbies-title-container">
        <img src={H} alt="H" className="hobbies-title" />
        <img src={O} alt="O" className="hobbies-title" />
        <img src={B} alt="B" className="hobbies-title" />
        <img src={B} alt="B" className="hobbies-title" />
        <img src={i} alt="i" className="hobbies-title" />
        <img src={E} alt="E" className="hobbies-title" />
        <img src={S} alt="S" className="hobbies-title" />
      </div>
    </div>
  );
}
