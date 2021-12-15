const landingText = document.getElementById("landing-text");

function forLandingFraze() {
    let sentenceList = landingFraze.split(".");
    sentenceList.forEach((element,i) => {
        let div = document.createElement('div');
        console.log(element);
        element = element + '!';
        if (element.length > 1) {
        let div = document.createElement('div');
        div.textContent = element;
          landingText.appendChild(div) }
      })   
};


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    console.log(0)
    document.getElementById("header").style.top = "0";
  } else {
    console.log(50)
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// on load

forLandingFraze()