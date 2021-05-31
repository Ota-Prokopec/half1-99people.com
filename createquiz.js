


let quizarray = []
function createpagequiz() {

  const q = document.getElementById("createquiz__question").value
  const ar = document.getElementsByClassName("createquiz__input")

  let zapis = false
  let ischecked = false
  let a = [];
  const right = [];
  for (let i = 1; i < ar.length; i ++) {
    a.push(ar[i].value)
    if (ar[i].value !== "") {
      zapis = true
    }
    else {
      zapis = false
    }
  }
  const check = document.getElementsByClassName("checkbox")
  //console.log(check);
  for (let i = 0; i < check.length; i ++) {

    //console.log(check);

    if (check[i].checked) {

      right.push(i)
      ischecked = true

    }


  }

  const el = document.getElementById("howmuchquestion")
  let value = el.innerText


              console.log(typeof(right));



  const object = {question:q,
                  answers:a,
                  policka:ar.length-1,
                  right:right}
                  console.log(object);








         if (ischecked && zapis && value > quizarray.length) {




                     quizarray.push(object)




                     vycistitInputCreateQuiz()
                     pridatstrankucreatequiz(1)
         }
         else if (value < quizarray.length + 1) {
           vycistitInputCreateQuiz()
           pridatstrankucreatequiz(1)
           console.log("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
           quizarray[JSON.parse(value) - 1] = object
           //zapisvaluetocreatequiz(value)
         }
         else {
           error("")
         }


}










function zapisvaluetocreatequiz(value) {
  vycistitInputCreateQuiz()


  //console.log(value);

  const q = document.getElementById("createquiz__question")

  const ar = document.getElementsByClassName("createquiz__input")

  if (quizarray[value-1] !== undefined) {

    const object = quizarray[value-1]

    q.value = object.question
    vytvoritelinputpocetvalue(object.policka)
    const el = document.getElementsByClassName("createquiz__input")
    for (let i = 0; i < JSON.parse(object.policka); i ++) {

      //console.log(object.answers[i]);

          el[i+1].value = object.answers[i]

    }

  }




}
