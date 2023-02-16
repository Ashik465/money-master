function getElementByIdInput(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value);
}
function getElementByIdText(id) {
  const value = document.getElementById(id).innerText;
  return parseFloat(value);
}

function setElementByID(id, value) {
  let element = document.getElementById(id);
  element.innerText = value;
}
