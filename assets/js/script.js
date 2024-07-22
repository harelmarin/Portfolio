/* DYNAMIX TEXT */

var options = {
    strings: ["étudiant", "développeur", "designer", "passionné"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
  };
  
  var typed = new Typed(".dynamic-text", options);


  /* SCROLL */

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
    observer.observe(element);
});


/* LANDING PAGE */

document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(container => {
        const video = container.querySelector('.video-item');
        
        container.addEventListener('mouseenter', () => {
            video.play();
        });

        container.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; 
        });
    });
});

