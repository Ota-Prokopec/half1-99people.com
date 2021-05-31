


document.getElementById("myQuiz")
.addEventListener("click", () => {

  zobrazeni(22)

  getallquiz(userdata.name)


})






function getallquiz(name) {

  socket.emit("getallquiz", name)

}



socket.on("allquizfromname", (data) => {
  console.log(data);

  const names = writemyquiztotable(data)
  console.log(names);
  writetowrap__myquizes(names, "myquiz")

})











function writetowrap__myquizes(name, value, wrap, funkce) {

  if (wrap === undefined) {
    wrap = document.getElementById("wrapofmyquizes")
  }

  const frag = document.createDocumentFragment()
  wrap.innerHTML = ""
  for (let i = 0; i < name.length; i ++) {

    const nameOfQuiz = name[i]
    const element = Ota.createElementByTagName("div", {class:"item__myquiz"}, `${nameOfQuiz}`)
    if (funkce === undefined) {

      doclickwritewrapmyquiz(element);

    }
    else {

      funkce(element)

    }
    appendElement(frag, element)

  }





  appendElement(wrap, frag)



}






socket.on("sendquiznameid", (data) => {

  zobrazeni(21)

  quizarray = data
  clickonPlusMinus__input("special")
  zapisvaluetocreatequiz(1)



})







function doclickwritewrapmyquiz(element) {

  element.addEventListener("click", () => {

    socket.emit("chciquiznameid", {name:userdata.name, id:element.innerText, password:userdata.password, myname:userdata.name})
    userdata.nameOfQuiz = element.innerText

  })

}









function writemyquiztotable(data) {

  const datas = {

  }
  const array = []

  for (let i = 0; i < data.length; i ++) {

    if (datas[data[i].nameOfQuiz] === true) {



    }
    else {

      datas[data[i].nameOfQuiz] = true
      array.push(data[i].nameOfQuiz)

    }


  }






  return array

}
