const button = document.getElementById('button');
const gif = document.getElementById('gif');
const gif2 = document.getElementById('gif2');

let isPlaying = true;
const gifURL = 'https://cdn.pixabay.com/animation/2023/10/20/03/38/03-38-03-793_512.gif';
const staticImageURL = 'https://xatimg.com/image/5j2M5vNqniE3.png';

button.addEventListener('click', () => {
if (isPlaying) {
    gif.src = staticImageURL;
} else {
    gif.src = gifURL;
}
if (isPlaying) {
    gif2.src = staticImageURL;
}else {
    gif2.src - gifURL;
}
isPlaying = !isPlaying;
});
