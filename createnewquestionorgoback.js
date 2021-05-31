


document.getElementById("quizback")
.addEventListener("click", () => {

  pridatstrankucreatequiz(-1)

})
document.getElementById("quiznext")
.addEventListener("click", () => {


  createpagequiz()


})
function vycistitInputCreateQuiz() {

  const q = document.getElementById("createquiz__question")
  const a = document.getElementsByClassName("createquiz__input ")
  for (let i = 0; i < a.length; i ++) {
    a[i].value = ""
  }


}


function pridatstrankucreatequiz(v) {

  const el = document.getElementById("howmuchquestion")
  let value = el.innerText
  value = parseInt(value)
  value += v
  console.log(value, quizarray[value]);
  if(value > 0 && value < quizarray.length + 2) {
    el.innerHTML = value;

    zapisvaluetocreatequiz(value)

  }


}
