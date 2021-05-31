
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql')
var Promise = require('promise');
const url = require("url")
const fs = require('fs');
const fetch = require('node-fetch');

// create sql
const pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'people.com'
})

/*const  = {
  name:"",//
  password:"",//
  code:"",//
  zapomenuteheslo:"",
  username:"",//
  oppassword:""//
}*/

const myemail = "oprokopec@sps-pi.cz"
/*link to javascript*/
app.use(express.static(__dirname + ''));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html.html'));
});


/*user body to parse code*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const options = {
  specialkey:"$MyAcount$"
}



server.listen(8080);



/*connect*/





io.on('connection', function(socket) {

















//registrovat
    socket.on("register", ({name, password, username}) => {






      get("user", "name = ?", [name]).then((data, error) => {




        if (data[0] === undefined) {

          send("CanIHaveName", true)

          /*.name = name;
          .password = password;*/

          const code = docode();

          /*.code = code;
          .username = username*/

          //adddatabase email code to database emailcode


                    addemailcode(name, code)




          sendEmail(name, code, `Kód pro schválení Email adresy`);

          //register({name:name, password:password})

        }
        else {


          send("CanIHaveName", false)
        }

      })

    })



















    function addemailcode(name, code) {

      get("codeemail", "name = ?", [name]).then((emaildata) => {



        if (emaildata.length == 0) {
          adddatabase("codeemail", {
            name: name,
            code: code
          })
        }
        else {

          setTimeout(() => {
            adddatabase("codeemail", {
              name: name,
              code: code
            })
          }, 144)



          deleteuser("codeemail", "name = ?", [name])

        }

      })

    }











//check email
socket.on("emailcode", (data, name, password, username) => {


  get("user", "name = ?", name).then((info) => {



    if (info.length === 0  ) {






          get("codeemail", "name = ?", [name]).then((code) => {



            if (data === code[0].code) {





              register({name:name, password:password, username:username})

              send("emailcodeisright", true)
              send("amiregistred", {name:name, password:password})

            }
            else {

              send("emailcodeisright", false)
              send("amiregistred", false)

            }

          })








    }

  })






//vymazatcodeemail(name)


})






function vymazatcodeemail(name) {

  setTimeout(() => {

    deleteuser("codeemail", "name = ?", [name])

  })


}


function register({name, password, username}) {



       if (name !== "" && password !== "" && username !== "") {
         adddatabase("user", {
           name:name,
           password:password,
           username:username,
           opvymazat:""
         })
       }




}

//////////////////////////////////////////////////////////////////





function sendEmail(email, value, text) {



  var nodemailer = require('nodemailer');










  var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user:  'oprokopec@sps-pi.cz',
    pass:  'SpSvoS6824'
  }
});

var mailOptions = {
  from:     'oprokopec@sps-pi.cz',
  to:       email,
  subject:  text,
  text:     `${value}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {

  } else {

  }
});

}


function docode() {

  const char = ["y", "x", "c", "v", "b", "n", "m", "a", "s", "d", "f", "g", "h", "j", "k", "l", "q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

  let string = "";

  for (let i = 0; i < 18; i ++) {

    const tabulka = Math.floor(Math.random()*char.length)

    const random = Math.floor(Math.random()*2)

    let letter = char[tabulka]
    if (random === 0) {
      letter = letter;
    }
    else {
      letter = letter.toUpperCase();
    }

    string += letter

  }



  return string

}




socket.on("login", ({name, password}) => {

  checkpassword("user", name, password).then((data, resovles) => {




    if (data !== false) {


  send("isPasswordRight", true)

  send("userdata", {name:name, password:password, email:name})

    }
    else {

      send("isPasswordRight", false)



    }

  })

})







socket.on("forgetpassword", (name) => {

    const password = docode();


    addemailcode(name, password)



  sendEmail(name, password, "zapomenuté heslo")

})






//
function changeCode(database, name, code) {

  setTimeout(() => {
    adddatabase(database, {name:name, code:code})
  }, 144)

  deleteuser(database, `name = ?`, [name])


};







socket.on("kontrolanovehozapomenutehohesla__noveho", ({name, code, password}) => {




  get("codeemail", "name = ?", [name]).then((emailcode) => {



    if (emailcode[0].code === code) {

      get("user", "name = ?", [name]).then((data) => {



        if (data.length !== 0) {





          changeuser("user", "name", name, {name:name, password:password, username:data[0].username})

        }
        else {
          send("didichangedpassword", false)

        }

      })

    }

  })



})



function changeuser(database, id, value, data) {

  setTimeout(() => {
    adddatabase("user", {name:data.name, password:data.password, username:data.username})
    send("didichangedpassword", {name:data.name, password:data.password})

  }, 144)

  deleteuser(database, `${id} = ?`, [value])


}










/////////////najdi přítele
socket.on("najdipritele", (data, myemail) => {

  get("user", "username = ?", data).then((friend) => {


      const array = []//[{name:"", username:""}]

      for (let i = 0; i < friend.length; i ++) {
        const email = friend[i].name;
        const name = friend[i].username;

        if (myemail === email) {

        }
        else {
          array.push({email:email, name:name})
        }


      }

      send("pritelnalezen", array)




  })

})










socket.on("ulozitzmeny", (data, name, password) => {



  const text = data.textaboutme;

  const image = data.image

  checkpassword("user", name, password).then((ispassword) => {



    if (ispassword) {



      get("info", "name = ?", name).then((isinfo) => {





        if (isinfo.length == 0) {



          adddatabase("info", {name:name, text:text, image:image})

        }
        else {

          changeinfo("info", "name", name, {name:name, text:text, image:image})

        }

        uploadfoto(image)

      })

    }

  })

})
function changeinfo(database, id, value, data) {


  setTimeout(() => {





    adddatabase("info", {name:data.name, text:data.text, image:data.image})


    //send("didichangedpassword", {name:data.name, password:data.password})

  }, 244)

  deleteuser(database, `${id} = ?`, [value])


}






socket.on("chciInformace", (name, myname) => {







    get("info", "name = ?", [name]).then((data) => {



      if (name === myname) {

        send("posilaminformaceo", {me:true, text:data[0].text, name:data[0].name, image:data[0].image})

      }
      else {

        send("posilaminformaceo", {me:false, text:data[0].text, name:data[0].name, image:data[0].image})

      }


    })




})












/*
function uploadfoto(url) {




  const name = .name;

  downloadFoto()

  async function downloadFoto() {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(`./foto/${name}.jpg`, buffer, () => {})


  }


}*/












socket.on("sendPersonalData", ({pohlavi, stari, living, school}, name, password) => {

  checkpassword("user", name, password).then((ispassword) => {

    if (ispassword) {

      get("userinfo", "name = ?", name).then((isinfo) => {





        if (isinfo.length == 0) {

          adddatabase("userinfo", {name:name, pohlavi:pohlavi, stari:stari, school:school, living:living})

        }
        else {

          changeuserinfo("userinfo", "name", name, {name:name, pohlavi:pohlavi, stari:stari, school:school, living:living})

        }


      })

    }

  })

})

function changeuserinfo(database, id, value, data) {


  setTimeout(() => {





    adddatabase("userinfo", {name:data.name, pohlavi:data.pohlavi, stari:data.stari, school:data.school, living:data.living})


    //send("didichangedpassword", {name:data.name, password:data.password})

  }, 244)

  deleteuser(database, `${id} = ?`, [value])


}











socket.on("showUserInfo", (name, myname) => {

  if (name === options.specialkey) {
    name = myname
  }
    //this is my user info
    get("userinfo", "name = ?", [name]).then((data) => {





      data = data[0]

      if (name === myname) {



      send("sendinguserinfo", {
        my:true,
         name:data.name,
          living:data.living,
           stari:data.stari,
            pohlavi:data.pohlavi,
             school:data.school
           })




         }
         else {

           //this is someone else's user info
           send("sendinguserinfo", {
             my:false,
              name:data.name,
               living:data.living,
                stari:data.stari,
                 pohlavi:data.pohlavi,
                  school:data.school
                })

         }

    })



})














socket.on("deleteacount", (data, name, password) => {



      if (data) {

        checkpassword("user", name, password).then((ispassword) => {

          if (ispassword) {

            smazatvsechno(name);

          }

        })

      }






})




function smazatvsechno(name, value) {




    //deleteuser("op", "name = ?", [name])
    deleteuser("user", "name = ?", [name])
    deleteuser("info", "name = ?", [name])
    deleteuser("userinfo", "name = ?", [name])
    delteuser("friend", "me = ?", [name])




}




















socket.on("getMyOwnFriends", (name, what) => {

  get("friend", "me = ?", [name]).then((data) => {

    if (data.length !== 0) {

      const array = [];

      for (let i = 0; i < data.length; i ++) {

        if (data[i].length !== 0) {

          get("user", "name = ?", [data[i].friend]).then((database) => {

            if (data[i].friend === name) {

            }
            else {

              send("IFindYourOwnFriend", {email:data[i].friend, name:database[0].username, what:what})

            }



          })

        }



      }


    }
    else {

      send("IFindYourOwnFriend", {email:false})

    }

  })

})

















socket.on("pratelstvi", ({value, name}, myname, password) => {


  checkpassword("user", myname, password).then((ifpassword) => {

    if (ifpassword) {

      if (value) {

        //chci přátelit
        adddatabase("friend", {me:myname, friend:name, id:`${myname}____${name}`})
      }
      else {

        //chci rozpřátelit


        deleteuser("friend", "id = ?", [`${myname}____${name}`]).then((isdelete) => {

          if (isdelete) {

            send("zmenapratelstvi", true)

          }

        })

      }


    }

  })

})


























socket.on("zjistizdajsteprateli", (name, myname) => {

  get("friend", "id = ?", [`${myname}____${name}`])
  .then((data) => {



    if (data.length !== 0) {

      send("IamFriendWith", true)

    }
    else {

      send("IamFriendWith", false)

    }

  })

})




















socket.on("MohuOPucet", ({password, name}) => {

  checkpassword(name, password).then((ifpassword) => {

    if (ifpassword) {

      sendEmail(myemail, name, `tento člověk žádá o schválení op účtu`);

      get("op", "name = ?", name).then((data) => {



        if (data.length !== 0) {

          send("MohuOPucet", "you already have op")

        }
        else {

          send("MohuOPucet", "máš op účet, ale omezený, aby si získal plný a mohl vymazat lidi, musí ti to schválit admin kterému jsme poslali vaší žádost")

          adddatabase("op", {

            name:name,
            password:password,
            username:name,
            value:"žádost"

          })

        }

      })

    }

  })



})



















function opheslo(password, name, userpassword) {



  return new Promise((resolve, reject) => {

  get("op", "name = ?", name).then((data) => {

    if (data[0].value === "admin") {

      checkpassword("user", name, userpassword).then((passworduser) => {




        if (passworduser !== false) {

          checkpassword("op", name, password).then((passwordop) => {




            if (passwordop !== false) {


              resolve(true)
            }
            else {


              resolve(false)

            }

          })

        }
        else {

          //send("jsemprihlasenyop", false)
          resolve(false)

        }

      })


    }
    else {
      //send("jsemprihlasenyop", false)
      resolve(false)
    }

  })
})

}



socket.on("loginop", (password, name, userpassword) => {







      opheslo(password, name, userpassword).then((data) => {

        if (data) {

          send("userdata", {oppassword:password})
          send("jsemprihlasenyop", true)
        }
        else {
          send("jsemprihlasenyop", false)
        }

      })


})
















socket.on("getAllContactop", (oppassword, name, password) => {

    opheslo(oppassword, name, password).then((data) => {



      if (data) {

        get("user", "opvymazat = ?", [""]).then((user) => {

          send("dataop", user)

        })


      }

    })



})



























socket.on("deleteacountOP", (name, myname,  oppassword, password) => {



  opheslo(oppassword, myname, password).then((password) => {

    if (password) {

      get("user", "name = ?", [name]).then((data) => {




        if (data.opvymazat !== "true") {

          smazatvsechno(name)

          send("vymazaljsemjakoopucet", true)

        }
        else if (data.opvymazat === "admin") {
          send("vymazaljsemjakoopucet", "pokusili jste se vymazat admina, nemůžete vymazat admina stránky, kvůli tomu že jste se pokusil vymazat admina aplikace je vám odebrán op účet")
        }
        else {
          send("vymazaljsemjakoopucet", "nepodařilo se vymazat účet")
        }

      })

    }
    else {
      send("vymazaljsemjakoopucet", "nepodařilo se vymazat účet")

    }

  })

})

























socket.on("deletequiz", ({quiz, password, name}) => {

  checkpassword("user", name, password).then((data) => {
    if (data !== false) {
      deleteuser("quiz", "myid = ?", [`${name}____${quiz}`])
    }
  })
})























socket.on("SendMyQuiz", (d) => {

  const nameOfQuiz = d.nameOfQuiz
  const userdata = d.user
  const name = userdata.name
  const password = userdata.password






  checkpassword("user", name, password).then((ispassword) => {





    if (ispassword !== false || ispassword !== undefined) {

      let canisend = false

      get("quiz", "name = ?", [name]).then((isindatabasename) => {



        let pocetdata = 1
        if (isindatabasename.length > 0) {

          pocetdata = isindatabasename.length

        }




        for (let i = 0; i < pocetdata; i ++) {




              if(isindatabasename[i] === undefined) {

                canisend = true

          }
          else {
            if (isindatabasename[i].nameOfQuiz === nameOfQuiz) {



              canisend = false


              return

            }
            else {

              canisend = true

            }
          }
        }



          if (canisend) {

            const data = d.data


            for (let i = 0; i < data.length; i ++) {

              const question = data[i].question



              const answer = JSON.stringify(data[i].answers)
              const policka = JSON.stringify(data[i].policka)
              const right = data[i].right
              console.log(`
                id: ${name}
                answer: ${answer}

                right: ${right}
                pos: ${policka}
                stranka: ${i}
                nameOfQuiz: ${nameOfQuiz},
                `);



                adddatabase("quiz", {
                  name:name,
                nameOfQuiz:nameOfQuiz,
                stranka: i,
                policka: policka,
                right: JSON.stringify(right),
                answers: answer,
                question: question,
                myid: `${name}____${nameOfQuiz}`
              }

              )

            }

          }
          else {
          }





      })





    }
    else {
      send("didisendmyquiz", "nesprávné heslo")
    }

  })

})




























socket.on("muzumittentonazevquiz__input", (data) => {



  get("quiz", "name = ?", [data.name]).then((isif) => {


    let canisend = true
    let pocetdata = 1;

    if (isif.length > 0) {
      pocetdata = isif.length
    }
    else {
      pocetdata = 1
    }

    for (let i = 0; i < pocetdata; i ++) {


      if (isif === undefined) {

        canisend = true
      }
      else {

        if (isif[i].nameOfQuiz === data.value) {
          send("muzumittentonazevquiz__color", false)

          canisend = false
          return
        }
        else {

          canisend = true
        }

      }



    }

    if (canisend) {



      send("muzumittentonazevquiz__color", true)

    }
    else {



      send("muzumittentonazevquiz__color", false)

    }

  })

})



































socket.on("getallquiz", (name) => {


  get("quiz", "name = ?", [name]).then((data) => {


    send("allquizfromname", data)

  })

})























socket.on("chciquiznameid", ({name, id, password, myname}) => {

  let my = false

  checkpassword("user", myname, password).then((ispassword) => {

    if (ispassword !== false || ispassword !== undefined) {


      get("quiz", "name = ?", [name]).then((data) => {

        const array = []

        for (let i = 0; i < data.length; i ++) {

               console.log(data[i].nameOfQuiz, id);

          if (data[i].nameOfQuiz == id) {

            console.log(data);

            data[i].answers = JSON.parse(data[i].answers)




            if (name === myname) {

              my = true

            }
            else {

              data[i].right = ""

              my = false
              deletesendquiz({password:password, nameofquiz:id, name:myname, friend:name})

            }


            array.push(data[i])

          }

        }



        if (my) {

          send("sendquiznameid", array)

        }
        else {

          send("sendquiznameidfriend", array)

        }


      })

    }

  })



})

















































socket.on("sendmyquiztofriend", ({name, password, friend, quiz}) =>  {

         checkpassword("user", name, password).then((pass) => {


           if (pass !== false) {

             get("sendquiz", "id = ?", [`${name}____${friend}____${quiz}`]).then((data) => {

               if (data.length === 0) {

                 adddatabase("sendquiz", {
                   id: `${name}____${friend}____${quiz}`,
                   name:name,
                   friend:friend,
                   quiz:quiz
                 })

               }

             })

           }

         })

})
























socket.on("upozorneni", ({password, name}) => {

  const array = []

  checkpassword("user", name, password).then((pass) => {







    if (pass !== false) {

      get("sendquiz", "friend = ?", [name]).then((data) => {



        for (let pos = 0; pos < data.length; pos ++) {

          if (data[pos].read === "" || data[pos].read === undefined || data[pos].read === "upozorneni") {

            array.push(data[pos])


          }


        }
        send("bell", array)

      })

    }

  })

})







function deletesendquiz({name, friend, nameofquiz, password}) {

  console.log("delete");

      checkpassword("user", name, password).then((ispa) => {

        if (ispa !== false) {

          console.log(friend, name, nameofquiz);

          deleteuser("sendquiz", "id = ?", [`${friend}____${name}____${nameofquiz}`])

        }

      })

}







socket.on("isthisanswerright", ({
  name,
  password,
  friend,
  nameofquiz,
  pos,
  answer
}) => {


  const array = []
console.log(
  name,
password,
friend,
nameofquiz,
pos,
answer
);




  checkpassword("user", name, password).then((passwrd) => {


    if (passwrd)
    {

      get("quiz", "name = ?", [friend]).then((data) => {


        for (let i = 0; i < data.length; i ++) {

          if (data[i].nameOfQuiz === nameofquiz) {

            array.push(data[i])



          }

        }

                                           const delka = JSON.parse(array[pos].right)
                                           isanswerindatabase(name, friend, nameofquiz, pos, /*delete false because this can breake server*/true).then((isindatabase) => {

                                                               console.log(isindatabase);

                                             if (isindatabase) {

                                               let canidofalse = true

                                               for (let i = 0; i < delka.length; i ++) {



                                                   if (delka[i] == answer) {


                                                     myscore({name:name, password:password, nameofquiz:nameofquiz, nameofquestion: pos, friend:friend, popisek:"", score:true})
                                                     send("ianswedonquestion", {data:true, is:array[pos].right})
                                                     return

                                                   }
                                                   else {

                                                     if (canidofalse) {
                                                       canidofalse = false
                                                       myscore({name:name, password:password, nameofquiz:nameofquiz, nameofquestion: pos, friend:friend, popisek:"", score:false})
                                                       send("ianswedonquestion", {data:false, is:array[pos].right})
                                                     }


                                                   }

                                                 }

                                             }
                                             else {
                                               console.log("už jste odpověděli juuu");
                                             }




                         })



      })

    }

  })

})



















function isanswerindatabase(name, friend, nameofquiz, nameofquestion, special) {



      return new Promise ((resove) => {

        get("score", "name = ?", [name]).then((data) => {

          let quiz = true

          for (let i = 0; i < data.length; i ++) {

            if (special) {

              if (data[i].friend === friend && data[i].nameofquiz === nameofquiz && data[i].nameofquestion == nameofquestion) {

                     quiz = false

              }

            }
            else {

              if (data[i].friend === friend && data[i].nameofquiz === nameofquiz) {

                     quiz = false

              }

            }



          }

          resove(quiz)

        })

      })



}










function myscore({name, password, friend, score, nameofquiz, popisek, nameofquestion}) {



  //console.log(name, password, friend, score, nameofquiz, popisek, nameofquestion, "aaaaaaaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhhhhoooooooooooooooooooojjjjjjjjjjjjjjjjj");



  checkpassword("user", name, password).then((passwrd) => {

    if (passwrd !== false) {

      //console.log("password");

          isanswerindatabase(name, friend, nameofquiz, nameofquestion, true).then((data) => {

            //console.log(data);

            if (data) {

              console.log("ahoj");

              adddatabase("score", {
                name:name,
                friend: friend,
                nameofquiz: nameofquiz,
                score: score,
                popisek: popisek,
                nameofquestion: nameofquestion
              })

              // add database that i did this quiz and it will be never send me again


            }
            else {

                            console.log("už bylo uloženo score");

            }

          })

    }

  })



}


















socket.on("zapisquiziktereminekdovyplnil", ({name, password}) => {

  checkpassword("user", name, password).then((ispassword) => {

    if (ispassword) {

      get("score", "friend = ?", [name]).then((data) => {

        send("nekdovyplnilquiz", data)

      })

    }

  })

})












    socket.on("ziskatinfoovyplneniquiz", ({
      name,
      password,
      friend,
      id
    }) => {

      checkpassword("user", name, password).then((ispassword) => {

        if (ispassword) {

          get("score", "name = ?", [friend]).then((data) => {

            const array = []
            for (let i = 0; i < data.length; i ++) {

              if (data[i].friend === name && data[i].nameOfQuiz === id) {

                array.push(data[i])

              }

            }

            send("quizvyplnenyposilamopravnene", array)

          })

        }

      })

    })






















































function send(para, valu) {

  socket.emit(para, valu)

}





})








































function checkemail(name) {

  var nodemailer = require('nodemailer');

}











function checkpassword(database, name, password) {

   return new Promise((resolve, reject) => {

     get(database, "name = ?", [name]).then((data) => {


       if (data[0].password === password) {

         resolve(data)

       }
       else {

         resolve(false)

       }

     })

   })



}







          //////////////////////////////////////
           /*function changeuser(data,value, equal, onwhat) {

            //value = name = ?, tagline = ?, description = ?, image = ?  what change                      string
            //data = database                                                                             string
            //equal = id = "ahoj"      what user                                                          string
            //onwhat = change for what ju[name, tagline, description, image, id]                          array

            pool.getConnection((err, connection) => {
                  if(err) throw err



                  connection.query(`UPDATE `user` SET `name`=[${.name}],`password`=[${onwhat}] WHERE name = ${.name}` , (err, rows) => {
                      connection.release() // return the connection to pool

                      if(!err) {

                      } else {

                      }

                  })

              })
}*/



          function adddatabase(data, value) {

            //value = id
            //data = databaseof


              pool.getConnection((err, connection) => {
                  if(err) throw err

                  const params = value
                  connection.query(`INSERT INTO ${data} SET ?`, params, (err, rows) => {
                  connection.release() // return the connection to pool
                  if (!err) {

                  } else {

                  }


                  })
              })

          }
















          function deleteuser(data, what, value) {

            return new Promise ((resolve, reject) => {

              pool.getConnection((err, connection) => {
                  if(err) throw err
                  connection.query(`DELETE FROM ${data} WHERE ${what}`, value, (err, rows) => {
                      connection.release() // return the connection to pool
                      if (!err) {

                             resolve(true)


                      } else {

                      }


                  })
              })

            })




          }
          //deleteuser("user", "id", "14")













          /*get('user',"id", "14").then((data) => {



          })*/
          function get(data, what, value) {

            return new Promise((resolve, reject) => {

                pool.getConnection((err, connection) => {
                    if(err) throw err
                    connection.query(`SELECT * FROM ${data} WHERE ${what}`, value,    (err, rows) => {
                        connection.release() // return the connection to pool

                        if (!err) {

                          if (rows !== undefined) {

                            resolve(rows)

                          }
                          else {

                            resolve(undefined);

                          }


                        } else {
                            resolve(false)
                        }

                        // if(err) throw err
                    })

                })

          })

          }
