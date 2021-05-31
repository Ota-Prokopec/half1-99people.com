


document.getElementById("exitFromcreatequiz__otazka")
.addEventListener("click", () => {

  quizarray = []
  const element = document.getElementById("exitFromcreatequiz__otazka")

  if (element.getAttribute("zavrit") === "createquiz") {

    zobrazeni(20)

  }
  else if (element.getAttribute("zavrit") === "myquiz") {

    zobrazeni(22)

  }



})



document.getElementById("exitButtonFromCreateQuizLoby")
.addEventListener("click", () => {

  zobrazeni(19)

})




document.getElementById("myQuiz")
.addEventListener("click", () => {

  const element = document.getElementById("exitFromcreatequiz__otazka")

  element.setAttribute("zavrit", "myquiz")

})



document.getElementById("button__createquiz__goloby")
.addEventListener("click", () => {

  const element = document.getElementById("exitFromcreatequiz__otazka")

  element.setAttribute("zavrit", "createquiz")

})
