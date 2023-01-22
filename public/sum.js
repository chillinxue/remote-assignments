function submitButtonOnClick(event) {
  const numberInput = document.getElementById('numberInput').value;
  console.log(numberInput)
  fetch(`http://localhost:3000/getData?number=${numberInput}`)
  .then((response) => response.text())
  .then((data) => {
    const result = document.getElementById('result');
    result.innerText = data;
  })
  event.preventDefault();
}