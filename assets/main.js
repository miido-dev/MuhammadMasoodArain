function setupModal(btn, modal, span, video) {
    btn.onclick = function() {
      modal.style.display = "block";
    };
  
    span.onclick = function() {
      modal.style.display = "none";
      pauseVideo(video);
    };
  
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            pauseVideo(video);
      }
    };

  }
  
  function pauseVideo(video) {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
  
  let vid = document.getElementById("myVideo");
  let mergeChefvid = document.getElementById("MergeChefVideo");
  let dateUpvid = document.getElementById("DateUpVideo");
  let bbvid = document.getElementById("BBVideo");
  let ppdvid = document.getElementById("PPDVideo");
  let icvid = document.getElementById("ICVideo");
  let hitVideo = document.getElementById("HitEmVideo");
  
  var modal = document.getElementById("myModal");
  var mergeModal = document.getElementById("MergeChefModal");
  var dateModal = document.getElementById("DateUpRunnerModal");
  var birdBrainModal = document.getElementById("BridBrainModal");
  var idleCowModal = document.getElementById("IdleCowModal");
  var princessModal = document.getElementById("PrincessPartyDozerModal");
  var receptionModal = document.getElementById("ReceptionGameModal");
  var hitModal = document.getElementById("HitEmModal");
  
  var btn = document.getElementById("myBtn");
  var btnTwo = document.getElementById("BtnTwo");
  var btnThree = document.getElementById("BtnThree");
  var btnFour = document.getElementById("BtnFour");
  var btnFive = document.getElementById("BtnFive");
  var btnSix = document.getElementById("BtnSix");
  var btnSeven = document.getElementById("BtnSeven");
  var btnEight = document.getElementById("BtnEight");
  
  var span = document.getElementsByClassName("close")[0];
  var span1 = mergeModal.getElementsByClassName("close")[0];
  var span2 = dateModal.getElementsByClassName("close")[0];
  var span3 = birdBrainModal.getElementsByClassName("close")[0];
  var span4 = idleCowModal.getElementsByClassName("close")[0];
  var span5 = princessModal.getElementsByClassName("close")[0];
  var span6 = receptionModal.getElementsByClassName("close")[0];
  var span7 = hitModal.getElementsByClassName("close")[0];
  
  setupModal(btn, modal, span, vid);
  setupModal(btnTwo, mergeModal, span1, mergeChefvid);
  setupModal(btnThree, dateModal, span2, dateUpvid);
  setupModal(btnFour, birdBrainModal, span3, bbvid);
  setupModal(btnFive, idleCowModal, span4, ICVideo);
  setupModal(btnSix, princessModal, span5, ppdvid);
  setupModal(btnSeven, receptionModal, span6, null);
  setupModal(btnEight, hitModal, span7, hitVideo);
  