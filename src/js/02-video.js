import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', timeRecord);

function timeRecord() {
  player.getCurrentTime().then(
    throttle(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    }, 1000)
  );
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then();
