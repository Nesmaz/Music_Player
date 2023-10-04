let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playp = document.getElementById("playp");

        song.onloadedmetadata = function(){
            progress.max = song.duration;
            progress.value = song.currentTime;
        }
        song.ontimeupdate = function(){
            progress.value = song.currentTime;
        }        

        function playPause(){
            if(song.paused){
                song.play();
                playp.classList.remove("fa-play");
                playp.classList.add("fa-pause");
            }
            else{
                song.pause();
                playp.classList.remove("fa-pause");
                playp.classList.add("fa-play");
            }
        }

        progress.onchange = function(){
            song.play();
            song.currentTime = progress.value;
            playp.classList.add("fa-pause");
            playp.classList.remove("fa-play");
        }
        