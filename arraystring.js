












class Find {
  constructor(string) {
     this.string = string
  }





      word(word) {

        return this.string.split(' ').some(function(w){return w === word})

      }





      sentence(value) {
            const isit = this.string.indexOf(value) >= 0;
            return {isit:isit, value:this.string.indexOf(value), string:this.string};
      }







      array(item, callback, length) {

        let array1 = [];
        let array = this.string;
        let input = [];



                  for (let pos = 0; pos < length; pos ++) {

                 for (let i = 0; i < array.length; i ++) {

                      //console.log(array);

                   if (Array.isArray(array[i])) {


                                      for (let a = 0; a < array[i].length; a++) {


                                        array1.push(array[i][a]);

                                      }


                   }
                   else {
                     if (item === array[i] || item === array) {

                       console.log("equal");

                       input.push({item:item, array:this.string});

                     }

                   }

                 }
                   array = array1;

                 }

                 return input;
      }







      object(callback) {

        for (const [key, value] of Object.entries(this.string)) {

          const find = callback(key, value);
                            if (find.trueth) {
                   if (key === find.string) {
                     return {objectKey:"key", trueth:true, key:key, value:value};
                   }
                    if (value === find.string) {
                         return {objectKey:"value", trueth:true, key:key, value:value};
                   }
                               }





        }



      }








}
