// Function to set up modals with buttons, modals, spans, and videos
function setupModal(btn, modal, span, video) {
  if (!btn || !modal || !span) {
      console.warn("Missing element in modal setup", { btn, modal, span });
      return;
  }

  btn.onclick = function () {
      modal.style.display = "block";
  };

  span.onclick = function () {
      modal.style.display = "none";
      pauseVideo(video);
  };

  window.onclick = function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
          pauseVideo(video);
      }
  };

  document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && modal.style.display === "block") {
          modal.style.display = "none";
          pauseVideo(video);
      }
  });
}

// Function to pause and reset the video
function pauseVideo(video) {
  if (video) {
      video.pause();
      video.currentTime = 0;
  }
}

// Data for modals and their corresponding buttons and videos
const modalData = [
  { btnId: "myBtn", modalId: "myModal", videoId: "myVideo" },
  { btnId: "BtnTwo", modalId: "MergeChefModal", videoId: "MergeChefVideo" },
  { btnId: "BtnThree", modalId: "DateUpRunnerModal", videoId: "DateUpVideo" },
  { btnId: "BtnFour", modalId: "BridBrainModal", videoId: "BBVideo" },
  { btnId: "BtnFive", modalId: "IdleCowModal", videoId: "ICVideo" },
  { btnId: "BtnSix", modalId: "PrincessPartyDozerModal", videoId: "PPDVideo" },
  { btnId: "BtnSeven", modalId: "ReceptionGameModal", videoId: "FDFVideo" },
  { btnId: "BtnEight", modalId: "HitEmModal", videoId: "HitEmVideo" },
  { btnId: "BtnNine", modalId: "TheTrialsModal", videoId: "TheTrialVideo" },
  { btnId: "BtnTen", modalId: "VRSpacecraftModal", videoId: "VRSpacecraftModalVideo" },
];

// Dynamically set up each modal
modalData.forEach(({ btnId, modalId, videoId }) => {
  const btn = document.getElementById(btnId);
  const modal = document.getElementById(modalId);
  const video = document.getElementById(videoId);
  const span = modal ? modal.querySelector(".close") : null;
  setupModal(btn, modal, span, video);
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function enlargeImage(img) {
  const modal = document.createElement('div');
  modal.classList.add('image-modal');
  modal.innerHTML = `<span class="close" onclick="this.parentElement.remove()">×</span><img src="${img.src}" alt="${img.alt}">`;
  document.body.appendChild(modal);
}




function enlargeArtworkImage(img) {
  const enlargedContainer = document.querySelector('.enlarged-image-container');
  const enlargedImage = enlargedContainer.querySelector('img');

  // Set the source of the enlarged image
  enlargedImage.src = img.src;

  // Show the enlarged image container
  enlargedContainer.style.display = 'flex';
}

function showArtworkModal() {
  const modal = document.getElementById('artworkModal');
  const modalContent = modal.querySelector('.artwork-modal-content');

  // Clear previous images
  modalContent.innerHTML = '';

  // Add all images to the modal as thumbnails
  const images = document.querySelectorAll('.art-grid img');
  images.forEach((img) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = img.src;
    thumbnail.alt = img.alt;
    thumbnail.onclick = () => enlargeArtworkImage(img); // Attach enlarge function
    modalContent.appendChild(thumbnail);
  });

  // Show the modal
  modal.style.display = 'block';
}

function closeArtworkModal() {
  const modal = document.getElementById('artworkModal');
  modal.style.display = 'none';
}

function closeEnlargedImage() {
  const enlargedContainer = document.querySelector('.enlarged-image-container');
  enlargedContainer.style.display = 'none';
}



//  ---------------------------------- Video Modal stuff ---------------------------------------//

// Add an event listener to the "Fullscreen" link
function enableFullscreen(videoElement) {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.webkitRequestFullscreen) {
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    videoElement.mozRequestFullScreen();
  } else if (videoElement.msRequestFullscreen) {
    videoElement.msRequestFullscreen();
  }
}

// Attach the fullscreen event to the link
document.querySelector('.center-fullscreen').onclick = function () {
  const videoElement = document.getElementById('myVideo');
  enableFullscreen(videoElement);
};