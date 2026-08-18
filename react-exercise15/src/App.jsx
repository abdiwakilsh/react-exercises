import { useState } from "react";
import LanguageContext from "./LanguageContext";
import Greeting from "./Greeting";

function App() {
  const [language, setLanguage] = useState("en");

  function changeLanguage() {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }

  return (
    <LanguageContext.Provider value={language}>
      <div>
        <Greeting />

        <button onClick={changeLanguage}>
          {language === "en" ? "Spanish" : "English"}
        </button>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;