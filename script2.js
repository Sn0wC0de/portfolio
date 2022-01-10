const landingText = document.getElementById("landing-text");
const landingFraze = `HeLLo Comrade. My name is Dmitrij. I'm Front-End WEB-Developer.`;

// bollean to discover name in forLandingFraze()
let specialLeter = false;

function forLandingFraze() {
    // split fraze on dots
    let sentenceList = landingFraze.split(".");
    
    
  
    sentenceList.forEach((element,i) => {
        // put ! in front of the name so I can find it later
        if(element.includes("Dmitrij")){
            element = element.replace("Dmitrij" , "!Dmitrij!")
            let newElList = element.split( '!', 2);
            newElList.forEach((el)=> {
                if(el.includes("Dmitrij")) {
                    el = el+'!';
                    let div = document.createElement('div');
                    div.classList.add("name")
                    console.log(el)
                    div.textContent = el
                    landingText.appendChild(div)
                } else {
                    let div = document.createElement('div');
                    div.textContent = el;
                    landingText.appendChild(div)
                }
                
            })
            
          } else {
            let div = document.createElement('div');
            element = element + '!';
            if (element.length > 1) {
            let div = document.createElement('div');
            div.textContent = element;
            landingText.appendChild(div) }
          }


        
      })   
};



// on load

forLandingFraze()