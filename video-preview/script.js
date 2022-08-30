const vid = document.getElementById('m-vid');

vid.addEventListener('mouseover', function () {
 vid.play()
})

vid.addEventListener('mouseleave', function () {
   vid.pause()
})

