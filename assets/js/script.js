/* DYNAMIX TEXT */

var options = {
  strings: ["étudiant", "développeur", "passionné"],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
};

var typed = new Typed(".dynamic-text", options);

/* SCROLL */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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

document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video-container");

  videoContainers.forEach((container) => {
    const video = container.querySelector(".video-item");

    container.addEventListener("mouseenter", () => {
      video.play();
    });

    container.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});

/* STAGES 2023/2024 et 2024/2025 */

document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.getElementById("mainContent");

  const stage2023 = {
    image: document.getElementById("stageImage"),
    details: document.getElementById("stageDetails"),
    closeBtn: document.getElementById("closeButton"),
  };

  const stage2024 = {
    image: document.getElementById("stageImage2024"),
    details: document.getElementById("stageDetails2024"),
    closeBtn: document.getElementById("closeButton2024"),
  };

  function openStage(stage) {
    // Ferme tous les autres détails
    [stage2023, stage2024].forEach((s) => {
      if (s !== stage) {
        s.details.classList.add("invisible");
      }
    });
    // Ouvre le détail du stage
    stage.details.classList.remove("invisible");
    mainContent.classList.add("blurred");
  }

  function closeStage(stage) {
    stage.details.classList.add("invisible");
    mainContent.classList.remove("blurred");
  }

  // Events ouverture
  stage2023.image.addEventListener("click", () => openStage(stage2023));
  stage2024.image.addEventListener("click", () => openStage(stage2024));

  // Events fermeture
  stage2023.closeBtn.addEventListener("click", () => closeStage(stage2023));
  stage2024.closeBtn.addEventListener("click", () => closeStage(stage2024));

  // Ferme si clic en dehors
  document.addEventListener("click", function (event) {
    [stage2023, stage2024].forEach((stage) => {
      if (
        !stage.details.contains(event.target) &&
        event.target !== stage.image
      ) {
        closeStage(stage);
      }
    });
  });
});
