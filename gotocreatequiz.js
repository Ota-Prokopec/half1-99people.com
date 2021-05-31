


document.getElementById("nextButtonFromCreateQuizLoby")
.addEventListener("click", () => {

  const input = document.getElementById("nameofquizcreate")

  userdata.nameOfQuiz = input.value

  if (input.value !== "") {

    zobrazeni(21)

  }

})
