const landingText = document.getElementById("landing-text");

function forLandingFraze() {
    let sentenceList = landingFraze.split(".");
    sentenceList.forEach((element,i) => {
        let div = document.createElement('div');
        element = element + '!';
        if (element.length > 1) {
        let div = document.createElement('div');
        div.textContent = element;
          landingText.appendChild(div) }
      })   
};



// on load

forLandingFraze()