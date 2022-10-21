const form = document.querySelector('#form');
const numberInput = document.querySelector('#account_number');
const showCost = document.querySelector('#show_cost');


form.addEventListener('submit', showShippingCost);
// make api call and show on frontEnd
function showShippingCost(e) {
  e.preventDefault()

  const number = numberInput.value;

  if (number != '') {
    fetch('https://jsonplaceholder.typicode.com/todos/' + number)
      .then(response => response.json())
      .then(data => {
        showCost.innerText = data.title;
      })
      .catch(error => console.log(error))
  }
};