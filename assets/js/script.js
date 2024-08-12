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

/* RESPONSIVE VIDEO */


document.addEventListener('DOMContentLoaded', function() {
    function updateVideoAttributes() {
      const videos = [
        { id: '1', poster: 'assets/img/wethefoot.mp4' },
        { id: '2', poster: 'assets/img/BlogYmmersion.MP4' },
        { id: '3', poster: 'assets/img/Groupie.mp4' },
        { id: '4', poster: 'assets/img/Crudapp.mp4' },
        { id: '5', poster: 'assets/img/Bookbox.mp4' },
      ];

      videos.forEach(videoData => {
        const video = document.getElementById(videoData.id);
        if (window.innerWidth <= 800) {
          video.setAttribute('controls', true);
          video.setAttribute('poster', videoData.poster);
        } else {
          video.removeAttribute('controls');
          video.removeAttribute('poster');
        }
      });
    }

    // Initial check
    updateVideoAttributes();

    // Update on resize
    window.addEventListener('resize', updateVideoAttributes);
  });








  document.addEventListener("DOMContentLoaded", function() {
    const stageImage = document.getElementById("stageImage");
    const stageDetails = document.getElementById("stageDetails");
    const closeButton = document.getElementById("closeButton");
    const mainContent = document.getElementById("mainContent");

    // Fonction pour ouvrir le rectangle de détails
    function openDetails() {
        stageDetails.classList.remove("invisible"); 
        mainContent.classList.add("blurred");
    }

    // Fonction pour fermer le rectangle de détails
    function closeDetails() {
        stageDetails.classList.add("invisible"); 
        mainContent.classList.remove("blurred"); 
    }

    stageImage.addEventListener("click", function() {
        openDetails();
    });

    closeButton.addEventListener("click", function() {
        closeDetails();
    });

    // Ferme le rectangle de détails si on clique en dehors de celui-ci
    document.addEventListener("click", function(event) {
        if (!stageDetails.contains(event.target) && event.target !== stageImage) {
            closeDetails();
        }
    });
});




