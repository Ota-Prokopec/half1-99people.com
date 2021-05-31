


function zapisfriend(value) {

  const frag = document.createDocumentFragment()


  for (let i = 0; i < value.length; i ++) {

    const info = {
      name:value[i].name,
      email:value[i].email
    }

    const element = Ota.createElementByTagName("div", {class: "item__friend" }, `${info.name}`,
    Ota.createElementByTagName("div", {class:"item__if__friend"}, `${info.email}`))

    appendElement(frag, element)

    clickForFriend(element, info.email)


  }

  const wrap = document.getElementById("wrapforcontact")

  appendElement(wrap, frag)

}
