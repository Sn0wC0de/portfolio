const landingEl = document.getElementById("landing");
const landingText = document.getElementById("landing-text");
const image = document.getElementById('logo');
const body =document.getElementsByTagName('body')
const spans = document.getElementsByTagName('span');
const panel = document.getElementById('panel');
const aboutContainer = document.getElementById('about-container');
const skillsContainer = document.getElementById('skills-container');
const workContainer = document.getElementById('work-container');
const contactsContainer = document.getElementById('contacts-container');
// line brake on dot
// const landingFraze = `HeLLo Comrade. My name is Dmitrij. I'm Front-End WEB-Dev.`;
const landingFraze = `HeLLo Comrade. My name is Dmitrij. I'm Front-End WEB-Developer.`;




let letterList = [];
let text;

// rotate leter function
function rotate(ind) {
  let index = ind.path[0].id
  let spiningLeter = document.getElementById(index);
  
  if(!spiningLeter.classList.contains ('rotate') & !spiningLeter.classList.contains('unrotate')) {
    spiningLeter.classList.add('rotate');
  }
  else if (spiningLeter.classList.contains('unrotate')) {
    spiningLeter.classList.remove('unrotate');
    spiningLeter.classList.add('rotate');
    
  }
    else {
    spiningLeter.classList.replace('rotate', 'unrotate');
}
}


let specialLeter = false;

function everyLeter() {
  let text = landingFraze;
  // split fraze in sentences on dot
  let sentenceList = text.split(".");
  // if(sentenceList[1].includes("Dmitrij")) {
  //   console.log( "I got I gay")
  // }
  // adding css to every letter
  sentenceList.forEach((element, i) => {
    let div = document.createElement('div');
    if(element.includes("Dmitrij")){
      element = element.replace("Dmitrij" , "!DMITRIJ!")
    }

    // spliting every letter
    let list = element.split("");
    // creating new element and adding letter to it with css
    list.forEach((leter, index) => {
      let span = document.createElement("span");
      span.id = `${index}a${i}`;
      // event listener on mouse enter
      span.addEventListener('mouseenter', rotate);
      // span.setAttribute("onmouseenter", `rotate('${span.id}')`);
      let leterP = document.createElement('p');
      // adding special style for Name
      if(leter === "!") {
        specialLeter = !specialLeter;
        leter = "";
      } 
      if(specialLeter) {
        leterP.classList.add("name")
      }
      // adding space between words
      if(leter === ' ') {
        leterP.style.marginLeft = '20px'
      }
      // add a dot at the end of the sentence
      if(list.length === index + 1){
        leterP.textContent = `${leter} !`;
     
      } else {
        leterP.textContent = leter;
        
      }
      // appending
      span.appendChild(leterP);
      div.appendChild(span);
      
  });
    // appending div  to landing
    landingText.appendChild(div);
  });
};

// remove classes from 
function removeLetterClass() {
  let arr = Array.from(spans);
  arr.forEach((el)=> {
    el.classList.remove('rotate', 'unrotate')
  })
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
}

// animation for text come from left side on scroll
function animateWord (paragraph, windowScroll) {
  elementTop =  paragraph.offsetTop; 
  elementHeight =  paragraph.offsetHeight; 
  elTop =  paragraph.getBoundingClientRect().top;
  elBottom = paragraph.getBoundingClientRect().bottom;
  // animation in
  if(paragraph.classList.contains('up')& !paragraph.classList.contains('down')) {
    if (windowScroll > elTop) {
      paragraph.classList.remove('unanimate')
      paragraph.classList.add('animate');
      paragraph.classList.remove('up');
    }
  }
  // animation out
  if(!paragraph.classList.contains('up') & !paragraph.classList.contains('down')) {
    if(elementHeight > elBottom + 60 ) {
      paragraph.classList.remove('animate');
      paragraph.classList.add('unanimate');
      // 
    }
    if(windowScroll > elementTop+elementHeight){
      paragraph.classList.add('down');
    }
  }
  // animation in
  if(!paragraph.classList.contains('up') & paragraph.classList.contains('down') ) {
    if(windowScroll < elementTop+elementHeight ) {
      paragraph.classList.add('animate');
      paragraph.classList.remove('unanimate')
      paragraph.classList.add('up');
    } 
  }
// aniamtion out
  if(paragraph.classList.contains('up') & paragraph.classList.contains('down') ) {
    if(windowScroll < elTop) {
      paragraph.classList.add('unanimate');
      paragraph.classList.remove('animate')
      paragraph.classList.remove('down');
    }
  }
}


// event listeners
image.addEventListener('click', removeLetterClass);


window.addEventListener('scroll', function (e) {
  windowScroll = this.window.scrollY; 
  animateWord(aboutContainer,windowScroll);
  animateWord(skillsContainer,windowScroll);
  animateWord(workContainer,windowScroll);
  animateWord(workContainer,windowScroll);
  animateWord(contactsContainer, windowScroll)
});




// on load

everyLeter();



document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})