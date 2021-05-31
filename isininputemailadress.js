


document.getElementById("Sname").addEventListener("input", () => {

  const text = document.getElementById("Sname").value

  const input = document.getElementById("Sname")

  const find = new Find(text)



  if (find.sentence("@").isit) {

    console.log("this is truth email adress");

    input.style.background="lightgreen"

  }
  else {

    console.log("this is not email adress");

    input.style.background = "red"

  }

})
