const landingText = document.getElementById("landing-text");

function forLandingFraze() {
    let sentenceList = landingFraze.split(".");
    sentenceList.forEach((element,i) => {
        let div = document.createElement('div');
        console.log(element);
        if (element) {
        let div = document.createElement('div');
        div.appendChild(element)
        landingText.appendChild(div)
        } else {
            let wordList = div.split(" ");
            let num = Math.round(wordList.length/2);
            let div2 = document.createElement('div');
            div.append(wordList[0],wordList[1]);
            div2.append(wordList[2],wordList[3]);
            landingText.append(div,div2)
        }
      })   
};


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}