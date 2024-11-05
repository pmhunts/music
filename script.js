document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const spinner = document.getElementById('loading-spinner');
    spinner.style.display = 'block';

    setTimeout(function () {
        spinner.style.display = 'none';
        if (username === 'p' && password === 'p00') {
            document.getElementById('login-container').classList.remove('show');
            document.getElementById('background-video').classList.add('hidden');

            let postLoginVideo = document.createElement('video');
            postLoginVideo.id = 'background-video-post';
            postLoginVideo.autoplay = true;
            postLoginVideo.loop = true;
            postLoginVideo.muted = true;
            postLoginVideo.innerHTML = '<source src="phone.mp4" type="video/mp4">';
            document.body.appendChild(postLoginVideo);

            setTimeout(() => {
                document.getElementById('login-container').classList.add('hidden');
                document.getElementById('post-login-container').classList.remove('hidden');
                document.getElementById('post-login-container').classList.add('show');
            }, 500);
        } else {
            alert("Invalid username or password!");
        }
    }, 1500);
});

document.querySelectorAll('.music-journey').forEach(container => {
    container.addEventListener('click', function () {
        const audioElement = this.querySelector('audio');
        const titleElement = this.querySelector('h2');
        
        if (audioElement.paused) {
            document.querySelectorAll('.music-journey audio').forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
                audio.parentElement.querySelector('h2').innerText = 'Play ' + audio.parentElement.querySelector('h2').innerText.slice(6);
            });
            
            audioElement.play();
            titleElement.innerText = 'Pause ' + titleElement.innerText.slice(5);
        } else {
            audioElement.pause();
            titleElement.innerText = 'Play ' + titleElement.innerText.slice(6);
        }
    });
});
