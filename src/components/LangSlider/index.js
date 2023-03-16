import React from "react";
import './index.css';

export const LangSlider = () => {
    // list of known languages
    const languageList = [
        "HTML", "Javascript", "CSS", "Jquery", "React", "Bootstrap", 
        "Node.js", "MySQL", "MongoDB", "GraphQL", "Mongoose", "Handlebars", "EJS", "lodash", "nodemon", 
        "dotenv", "express"
    ]

    // function to display languages in html
    const shouldDisplay = (lang) => {
        let language = lang.length;

        for(let i = 0; i < language; i++) {
            return language[i]
        }
    ;
    // languageCard.append(card);
    // need to figure out how to empty or clear html element
        // languageCard.empty().append(card);
    };


    // we set our index to -1 so it starts at the first one which is 0
    // let languageArrayIndex = -1;


    // actual slide - wtf i did it!?! only took 6 months to figure out lol
    const slideInterval = setInterval(() => {
        // increase our index (much like increasing i in a for loop)
        ++languageArrayIndex;
        // this says once we get our index to be greater to or equal the length of the array, we'll start back from first number in index [0]
        if (languageArrayIndex >= languageList.length) {
            languageArrayIndex = 0;
        };

        // here we are basically reversing the push that was done earlier and assigning each class
        let language = languageList[languageArrayIndex];
        // the we run the shouldDisplay that is inside the language classes
        shouldDisplay(language);

        // interval runs every 5 seconds
    }, 5000);
    

    


    return (
        <div id="languages">
        </div>
    )
}
