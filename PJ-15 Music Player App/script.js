let range = document.getElementById("range");
let play = document.getElementById("play");
let song = document.getElementById("song");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");

let nextSong = 0;

const songs = [
    {
        songname: "Nane Bhagyavanta",
        artist: "S.Janaki | Dr.Rajkumar",
        src: "ImgMusic/Naane Bhagyavathi.mp3",
        img: "ImgMusic/Nane Bhagyavathi.jpg",
    },

    {
        songname: "Nee Parichaya",
        artist: "Siddartha Belmannu | Rakshita Suresh",
        src: "ImgMusic/Nee-Parichaya-Helade.mp3",
        img: "ImgMusic/Nee parichaya.jpg",
    },

    {
        songname: "Ninna Gungalle",
        artist: "Adhvik",
        src: "ImgMusic/Ninna-Gungalli.mp3",
        img: "ImgMusic/Ninna Gunagallli.jpg"

    },
    {
        songname: "Preethisuve Preethisuve",
        artist: "Sonu Nigam | Prithwi Bhat",
        src: "ImgMusic/Preethisuve2.mp3",
        img: "ImgMusic/preethisuve.jpg",
    },
    {
        songname: "Bangle Bangari",
        artist: "Anthony Daasan | Charan Raj",
        src: "ImgMusic/Bangle Bangari.mp3",
        img: "ImgMusic/bangle bangari.jpg",
    },

    {
        songname: "Dontworry baby Chinnamma",
        artist: "Gana Muthu | Charan Raj",
        src: "ImgMusic/Dont-Worry-Baby-Chinnamma.mp3",
        img: "ImgMusic/Dontworry baby chinnamma.jpg",
    },
]

song.onloadedmetadata = function () {
    range.max = song.duration;
    range.value = song.currentTime;
}

function playSong() {

    if (song.paused) {
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");

    }
    else {
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play")

    }
};
song.onended = () => {
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");

};


function loadSong(index) {
    if (index < 0) index = songs.length - 1;          // wrap around if < 0
    if (index >= songs.length) index = 0;              // wrap around if > max
    
    nextSong = index;
    const current = songs[index];

    song.src = songs[index].src;
    song.load();

    document.getElementById("cover-image").src = current.img;
    document.getElementById("songname").innerText = current.songname;
    document.getElementById("singers").innerText = `Artists: ${current.artist}`;


}

function forwardSong() {
    loadSong(nextSong + 1);
    song.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
};


function backwardSong() {
    loadSong(nextSong - 1);
    song.play();
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
};

range.oninput = function () {
    song.currentTime = range.value;
};

song.ontimeupdate = function () {
    range.value = song.currentTime;
};

const container = document.querySelector('.container');
const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6EC7'];
let colorIndex = 0;
let colorInterval = null;


loadSong(nextSong);