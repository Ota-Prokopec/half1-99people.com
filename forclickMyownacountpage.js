


function forclickMyownacountpage(element) {

       element.addEventListener("click", () => {

         userdata.friend = element.getAttribute("email")

         if (element.getAttribute("acount") === "true") {

           zobrazeni(25)
           writeinfoaboutsend()

         }
         else {
           if (element.getAttribute("acount") === "try") {

             const nameofuser = element.getAttribute("email")
             const nameofquiz = element.childNodes[0]
             userdata.nameOfQuiz = nameofquiz.data
             userdata.friend = nameofuser

                      doquiz()


           }
           else if (element.getAttribute("acount") === "vyplnenequiz") {

             zobrazitudelanyquiz(element)

           }
           else {
             zobrazitfriendacountpage(element)
             console.log(element);
           }

         }



       })

}
