




(function(global, factory) {

  global.Ota = factory();

})(window, function() {

  function createElementByTagName(tagName, object,   ...el) {
      const element = document.createElement(tagName);
      //console.log(el);
      for (const [key, value] of Object.entries(object)) {
        if (key === "name" || key === "type" || key === "class" || key === "id" || key === "aria-role" || key === "aria-label") {
                element.setAttribute(key, value);
        }
        else {
          /**//**/    element.style[key] = value;
        }
      }
      for (let pos = 0; pos < el.length; pos++) {
        if (typeof el[pos] == "string") {
                 element.innerHTML = el[pos];
        }
        else {
          element.appendChild(el[pos]);
        }
      }
                return element ;
    }

    return {
      createElementByTagName
    };

});



function appendElement(to, ...element) {
  //console.log(to);
  const temp = document.createDocumentFragment();
  for (let pos = 0; pos < element.length; pos++) {
         temp.appendChild(element[pos]);
  }

     to.appendChild(temp);
}
function removeElement(value, callback) {
  callback(value);
      value.remove();
      return value ;
}
function removeElementByAttribute(element, callback) {
      callback(element);
  const el = element;
            for (const [key, value] of Object.entries(element)) {
              switch (key) {
                case "id":
                      document.getElementById(`${value}`).remove;
                  break;
                  case "class":
                        const remove = document.getElementsByClassName(`${value}`);
                        for (let pos = 0; pos < remove.length; pos++) {
                          remove[pos].remove();
                        }
                    break;
                    case "tag":
                    const removetag = document.getElementsByTagName(`${value}`);
                    for (let pos = 0; pos < removetag.length; pos++) {
                      removetag[pos].remove();
                    }
                      break;
                default:
              }
            }
            return el ;
}
function styleElement(object, ...element) {

          for (let pos = 0; pos < element.length; pos++)  {
            for (const [key, value] of Object.entries(object)) {
              element[pos].style[key] = value;
            }
          }

}
