import { useContext } from "react";
import LanguageContext from "./LanguageContext";

function Greeting() {
  const language = useContext(LanguageContext);

  if (language === "en") {
    return <h1>Hello!</h1>;
  } else {
    return <h1>¡Hola!</h1>;
  }
}

export default Greeting;