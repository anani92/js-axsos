
const temp = document.getElementById('temp');
const tempHigh = document.querySelectorAll('.high');
const tempLow = document.querySelectorAll('.low');
const cookieBtn = document.getElementById('agree');
const cookie = document.querySelector('.cookie');
const cities = document.querySelectorAll('li');

// cities alert

cities.forEach(city => city.addEventListener('click', () => {
  alert('you selected ' + city.innerText)
}));


//remove cookie btn
cookieBtn.addEventListener('click', () => {
  cookie.style.display = 'none';
})

//helper functions
const celsiusToFahr = (celsius) => {
  const cToF = celsius * 9 / 5 + 32;
  return Math.round(cToF);
}

const fahrToCels = (fahrenheit) => {
  const fToC = (fahrenheit -32) * 5 / 9;
  return Math.round(fToC);
}



// switching from C or F
temp.addEventListener('change', () => {
  console.log(temp.value)
  if(temp.value === 'F'){
    tempHigh.forEach((temp) => temp.innerText = celsiusToFahr(temp.innerText));
    tempLow.forEach((temp) => temp.innerText = celsiusToFahr(temp.innerText));


  } else if (temp.value === 'C') {
      tempHigh.forEach((temp) => temp.innerText = fahrToCels(temp.innerText));
      tempLow.forEach((temp) => temp.innerText = fahrToCels(temp.innerText));

  }
})

