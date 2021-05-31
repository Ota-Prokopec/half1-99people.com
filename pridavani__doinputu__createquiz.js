


document.getElementById("createquiz__minus")
.addEventListener("click", () => {

  const element = document.getElementById("input__pocet__value")

  let value = element.value

  value --;

  element.value = value;

  clickonPlusMinus__input("")
  zapisvaluetocreatequiz(JSON.parse(document.getElementById("howmuchquestion").innerText))


})
document.getElementById("createquiz__plus")
.addEventListener("click", () => {

  const element = document.getElementById("input__pocet__value")

  let value = element.value

  value ++;

  element.value = value;

  clickonPlusMinus__input("")
  zapisvaluetocreatequiz(JSON.parse(document.getElementById("howmuchquestion").innerText))


})
