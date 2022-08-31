let likeBtn = document.getElementById('like-btn');
let likeBtn1 = document.getElementById('like-btn1');
let likeBtn2 = document.getElementById('like-btn2');

let btnState = 0;
let btnState1 = 0
let btnState2 = 0


likeBtn.addEventListener('click', () => {
  btnState += 1;
  likeBtn.innerText = `${btnState} likes`;
})

likeBtn1.addEventListener('click', () => {
  btnState1 += 1;
  likeBtn1.innerText = `${btnState1} likes`;
})

likeBtn2.addEventListener('click', () => {
  btnState2 += 1;
  likeBtn2.innerText = `${btnState2} likes`;
})


