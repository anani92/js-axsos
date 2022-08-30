function pizzaOven(crustType, sauceType, cheeses,toppings) {
  const pizza = {
    crustType: crustType,
    sauceType: sauceType,
    cheeses: cheeses,
    toppings: toppings
  };
  return pizza;
}

const deepdishPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

const handToasted = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

const getRandom = (obj) => {
  return obj[Math.floor(Math.random(obj.length) * obj.length)]
}

function randomPizza() {
  const crustType = ['deepdish, hand tossed', 'taboon'];
  const sauceType = ['traditional', 'BarbQ', 'tomato'];
  const cheeses = [["mozzarella"],  ["mozzarella", "feta"], ['cotage', 'mix', 'french']];
  const toppings = [["pepperoni", "sausage"], ["mushrooms", "olives", "onions"]];

  return pizzaOven(getRandom(crustType), getRandom(sauceType), getRandom(cheeses), getRandom(toppings))
}


console.log(randomPizza());