const myname = document.getElementById('name');
const request = document.getElementById('requestRemove');
const request1 = document.getElementById('request1Remove');
const requestApprove = document.getElementById('acceept')
const requestApprove1 = document.getElementById('accept1')
const contactRequest = document.getElementById('contactRequest');
const contactRequest1 = document.getElementById('contactRequest1');
const countConnection = document.getElementById('count-connection');
const countRequest = document.getElementById('count-req')
const edit = document.getElementById('edit');

let connectionCount = 200;
let requestCount = 2;

function toggleName(element) {
  element.innerText === 'Abdulrahman Anani' ?  element.innerText = 'John Doe' :  element.innerText = 'Abdulrahman Anani';
}

edit.addEventListener('click', (e) => {
  toggleName(myname)
})

request.addEventListener('click', () => {
  contactRequest.style.display = 'none';
  requestCount --;
  countRequest.innerText = requestCount;
}

)
request1.addEventListener('click', () => {
  contactRequest1.style.display = 'none';
  requestCount--;
  countRequest.innerText = requestCount
}

)

requestApprove.addEventListener('click', () => {
  contactRequest.style.display = 'none';
  connectionCount++;
  requestCount--;
  countRequest.innerText = requestCount;
  countConnection.innerText = connectionCount;
})

requestApprove1.addEventListener('click', () => {
  contactRequest.style.display = 'none';
  connectionCount++;
  requestCount--;
  countRequest.innerText = requestCount;
  countConnection.innerText = connectionCount
})