


const passwordtext = document.getElementsByClassName("deletepassword")

const premenatextpassword = {
  password: "text",
  text: "password"
}

for (let i = 0; i < passwordtext.length; i ++) {

  passwordtext[i].addEventListener("click", () => {

    const cislo = passwordtext[i].getAttribute("password");

    const elementinput = document.getElementsByClassName("pass")



    for (let j = 0; j < elementinput.length; j ++) {

      if (elementinput[j].getAttribute("password") === cislo) {

          const element = elementinput[j]

          element.type = premenatextpassword[element.type]




      }

    }



  })

}
