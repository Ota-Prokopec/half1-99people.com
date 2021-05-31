


socket.on("didichangedpassword", (data) => {

  console.log(data);

  console.log(data.name, data.password);

  if (data !== false) {

    setTimeout(() => {
      login({name:data.name, password:data.password})

    }, 144)


  }
  else {





    error("heslo není správné, do vašeho emailu jsme poslali heslo to zadejte do obnovacího hesla a zadejte nové heslo")



  }





})
