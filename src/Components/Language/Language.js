import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Language.css';
import Translate from '../Translate/translate';
function Langauage({onRouteChange}){
    const [language,setLanguage]= useState();
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false
        },
        "google_translate_element"
      );
    };
    useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);    

    return(
      <div className='lan'>
        <h1 className='lan1'> Choose Your Language </h1>
        <div className='lan2' id = "google_translate_element"></div>
        <div> <button className="next" onClick={()=>onRouteChange('survey')}> Submit </button></div>
      </div>
    )
}
export default Langauage;