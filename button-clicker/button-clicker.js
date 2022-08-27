

function hide(element) {
  let addBtn = document.getElementById('add');
  addBtn.style.display = 'none';

}


function logging(element) {
  let login = true;
  if (login) {
    element.innerText = 'logout';
    login = !login
  }

}

let count = 0;
const alertLikes = (element) => {
  count += 1;
  element.innerText = `${count} likes`;
  alert(`Ninja has been liked when you clicked the button`)
}