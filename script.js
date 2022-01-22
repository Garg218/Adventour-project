let songIndex=0;
let audioElement =  new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progressbar= document.getElementById('progressbar');
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');
let songitems= Array.from(document.getElementsByClassName('songitem'));
let songs =[
    {songName: " Black-swan", filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: " Fake-love", filePath: "song/2.mp3",coverPath:"covers/1.jpg"},
    {songName: " Black-swan", filePath: "song/3.mp3",coverPath:"covers/1.jpg"},
    {songName: " Black-swan", filePath: "song/4.mp3",coverPath:"covers/1.jpg"},
    {songName: " Black-swan", filePath: "song/5.mp3",coverPath:"covers/1.jpg"},
    {songName: " Black-swan", filePath: "song/6.mp3",coverPath:"covers/1.jpg"},
    {songName: " Black-swan", filePath: "song/7.mp3",coverPath:"covers/1.jpg"}
]
songitems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].src= songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})
audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;

})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value * audioElement.duration/100;

})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
   
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
