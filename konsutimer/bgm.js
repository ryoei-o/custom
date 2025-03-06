const audioSelect = document.getElementById('audio-select');
const audioPlayer = document.getElementById('audio-player');
const audioSource = document.getElementById('audio-source');


function playMusic(){
  let fileInput = document.getElementById("audio-file");
  let audioPlayer = document.getElementById("audio-player");


if(fileInput.files.length > 0){
  let file = fileInput.files[0];
  let url = URL.createObjectURL(file);
  audioPlayer.src = url;
  audioPlayer.play();
  audioPlayer.volume = 0.05;
}
}
