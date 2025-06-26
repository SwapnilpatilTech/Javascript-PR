const songs = [
  {
    name: "songs/DJ SWAPNIL SARKARI X LEFT RIGHT X NAGIN  _ TRENDING DJ SONG.mp3",
    title: "Vibe Beat",
    cover: "image/i2.jpeg"
  },
  {
    name: "songs/Madhro Darudo Remix  DJ SP Hahacar  Jignesh Barot  Poch Vage Ne Pag Mara Tute  Sarkari Tune.mp3",
    title: "Chill Flow",
    cover: "image/i1.jpeg"
  }
];

let songIndex = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

function loadSong(song) {
  title.innerText = song.title;
  audio.src = `songs/${song.name}`;
  cover.src = `images/${song.cover}`;
}

function playSong() {
  audio.play();
  playBtn.innerText = "⏸";
}

function pauseSong() {
  audio.pause();
  playBtn.innerText = "▶️";
}

let isPlaying = false;

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

audio.addEventListener("ended", () => {
  nextBtn.click(); // auto-play next
});

loadSong(songs[songIndex]); // initial load
