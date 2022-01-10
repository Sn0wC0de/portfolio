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