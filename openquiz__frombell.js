

const odpoved = {
  spatne:0,
  spravne:0
}
function doquiz() {

  console.log(userdata);

  zobrazeni(27)

  socket.emit("chciquiznameid", {name:userdata.friend, id:userdata.nameOfQuiz, password:userdata.password, myname:userdata.name})

}
let doquizarray = []
let doquizpos = 0;
socket.on("sendquiznameidfriend", (data) => {


    console.log(data);

    doquizarray = data


    startdoquiz(data)

})




function startdoquiz(data) {

  console.log(data[doquizpos].answers);



  createquizdoquiz(data[doquizpos].question, data[doquizpos].answers)

}

function createquizdoquiz(qust, answ) {

  const wrap = document.getElementById("doquiz__answer")
  wrap.innerHTML = ""

  const q = document.getElementById("obalotazkadoquiz")
  q.innerText = qust
  for (let pos = 0; pos < answ.length; pos ++) {

    const element = Ota.createElementByTagName("div", {class:"odpoveddoquiz"},
    Ota.createElementByTagName("div", {class:"itemodpoveddoquiz"}, `${answ[pos]}`))
    element.setAttribute("pos", pos)
    doclickanswer(element)
    const wrap = document.getElementById("doquiz__answer")
    appendElement(wrap, element)

  }

}

function doclickanswer(element) {




  element.addEventListener("click", () => {

    console.log(userdata.name,
    userdata.password,
    userdata.friend,
      userdata.nameOfQuiz,
     doquizpos,
     element.getAttribute("pos"));

    socket.emit("isthisanswerright", {
      name:userdata.name,
      password:userdata.password,
      friend:userdata.friend,
      nameofquiz:  userdata.nameOfQuiz,
      pos: doquizpos,
      answer: element.getAttribute("pos")
    })

  })

}




socket.on("ianswedonquestion", ({data, is}) => {
  console.log(data, is);

    zobrazitvysledek(is, data)

})







function nextquestion() {
  doquizpos ++;

       console.log(doquizpos,  doquizarray.length);

  window.removeEventListener("click", nextquestion)
  if (doquizpos === doquizarray.length) {
      zobrazeni(28)
      star()
      doquizpos = 0
  }
  else {
    startdoquiz(doquizarray)
  }



}


function zobrazitvysledek(data, is) {

  const wrap = document.getElementById("doquiz__answer")
  for (let i = 0; i < wrap.childNodes.length; i ++) {

    const element = wrap.childNodes[i]

    console.log(element.getAttribute("pos") , data);




                       for (let i = 0; i < wrap.childNodes.length; i ++) {

                         for (let pos = 0; pos < data.length; pos ++ ) {

                           if (element.getAttribute("pos") == data[pos]) {


                             element.style.background = "lightgreen"
                             element.setAttribute("thiswas", "true")

                           }
                           else {

                             if (element.getAttribute("thiswas") !== "true") {

                               element.style.background = "red"

                             }


                           }

                         }



                       }



  }


  if (is) {

    document.getElementById("odpovedeljsemdobre").innerText = "správná odpověď"
    odpoved.spravne = odpoved.spravne + 1

  }
  else {

    document.getElementById("odpovedeljsemdobre").innerText = "špatná odpověď"
    odpoved.spatne = odpoved.spatne + 1

  }


     window.addEventListener("click", nextquestion)

}


document.getElementById("exitFromdoquiz__otazka")
.addEventListener("click", () => {

  zobrazeni(26)

})
