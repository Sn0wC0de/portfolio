const landingEl = document.getElementById("landing");
const landingText = document.getElementById("landing-text");
const image = document.getElementById('logo');
const body =document.getElementsByTagName('body')
const spans = document.getElementsByTagName('span');
const panel = document.getElementById('panel');
const aboutContainer = document.getElementById('about-container');
const skillsContainer = document.getElementById('skills-container');
// line brake on dot
const landingFraze = `Good Afternoon Sir.I'm Dmitrij.Front-End WEB Developer.`;




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




function everyLeter() {
  let text = landingFraze;
  // split fraze in sentences on dot
  let sentenceList = text.split(".");
  // adding css to every letter
  sentenceList.forEach((element, i) => {
    let div = document.createElement('div');
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
      // adding space between words
      if(leter === ' ') {
        leterP.style.marginLeft = '20px'
      }
      // add a dot at the end of the sentence
      if(list.length === index + 1){
        leterP.textContent = `${leter}.`;
     
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
}


// event listeners
image.addEventListener('click', removeLetterClass);


window.addEventListener('scroll', function (e) {
  windowScroll = this.window.scrollY - 300; 
  isVisible =  document.getElementById('h2-about').offsetTop; 
  elHeight = document.getElementById('h2-about').offsetHeight;
// console.log(document.getElementById('h2-about'))
  // console.log('isvisible', isVisible, 'windowscroll', windowScroll)
  if (aboutContainer.classList.contains('animate') & windowScroll < isVisible) {
    aboutContainer.classList.add('unanimate')
    aboutContainer.classList.remove('animate');
     }
  else if (  windowScroll > isVisible & windowScroll + 300 <  1400) {
    aboutContainer.classList.remove('unanimate');
    aboutContainer.classList.add('animate');
   } 
  else  {
    aboutContainer.classList.add('unanimate')
    aboutContainer.classList.remove('animate');
   }  
});


// window.addEventListener('scroll', function (e) {
//   windowScroll = this.window.scrollY; 
//   isVisible =  document.getElementById('h2-skills').offsetTop; 
 
//   if (skillsContainer.classList.contains('animate') & windowScroll < isVisible-400) {
//     skillsContainer.classList.add('unanimate')
//     skillsContainer.classList.remove('animate');
//      }
//   else if (  windowScroll > isVisible & windowScroll <  2000) {
//     skillsContainer.classList.remove('unanimate');
//     skillsContainer.classList.add('animate');
//    } 
//   else  {
//     skillsContainer.classList.add('unanimate')
//     skillsContainer.classList.remove('animate');
//    }  
// });


// on load

everyLeter();

