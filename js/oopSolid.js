class MusicPlayer {
    constructor() {
      this.currentTrack = null;
      this.songNameElement = document.getElementById("songName");
      this.playButton = document.getElementById("play");
      this.plusButton = document.getElementById("plus");
      this.minusButton = document.getElementById("minus");
      this.nextButton = document.getElementById("next");
      this.prevButton = document.getElementById("prev");
  
      this.playAudio = this.playAudio.bind(this);
      this.handleTrackClick = this.handleTrackClick.bind(this);
      this.playNextTrack = this.playNextTrack.bind(this);
      this.playPreviousTrack = this.playPreviousTrack.bind(this);
  
      this.addEventListeners();
    }
  
    addEventListeners() {
      const trackElements = document.querySelectorAll(".track");
      trackElements.forEach((trackElement) => {
        trackElement.addEventListener("click", this.handleTrackClick);
      });
  
      this.playButton.addEventListener("click", () => {
        if (this.currentTrack !== null) {
          this.playAudio(this.currentTrack);
        }
      });
  
      this.plusButton.addEventListener("click", () => {
        if (this.currentTrack !== null) {
          this.currentTrack.currentTime += 15;
        }
      });
  
      this.minusButton.addEventListener("click", () => {
        if (this.currentTrack !== null) {
          this.currentTrack.currentTime -= 15;
        }
      });
  
      this.nextButton.addEventListener("click", this.playNextTrack);
      this.prevButton.addEventListener("click", this.playPreviousTrack);
    }
  
    playAudio(track) {
      if (track === this.currentTrack) {
        if (track.paused) {
          this.playButton.innerText = "[stop]";
          track.play();
        } else {
          this.playButton.innerText = "[play]";
          track.pause();
        }
      } else {
        if (this.currentTrack !== null) {
          this.currentTrack.pause();
          this.currentTrack.currentTime = 0;
        }
        this.currentTrack = track;
        this.playButton.innerText = "[stop]";
        track.loop = false;
        track.play();
      }
    }
  
    handleTrackClick(event) {
      const target = event.target;
      if (target.classList.contains("track")) {
        const audioElement = target.querySelector("audio");
        if (audioElement.paused) {
          this.playAudio(audioElement);
          this.songNameElement.innerText = target.dataset.songName;
        }
      }
    }
  
    playNextTrack() {
      const nextTrack = this.currentTrack.nextElementSibling;
      if (nextTrack) {
        this.playAudio(nextTrack.querySelector("audio"));
        this.songNameElement.innerText = nextTrack.dataset.songName;
      }
    }
  
    playPreviousTrack() {
      const prevTrack = this.currentTrack.previousElementSibling;
      if (prevTrack) {
        this.playAudio(prevTrack.querySelector("audio"));
        this.songNameElement.innerText = prevTrack.dataset.songName;
      }
    }
  }
  
  const musicPlayer = new MusicPlayer();