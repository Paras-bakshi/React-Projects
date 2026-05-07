import "./Headers.css";
import headerImg from "../assets/react-core-concepts.png"
export default function Headers() {
  return (
    <header>
        <img src= {headerImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
