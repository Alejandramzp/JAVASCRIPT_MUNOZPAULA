/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

dictionary = ["cat","bat","rat"]
sentence = "the cattle was rattled by the battery" 

var replaceWords = function(dictionary, sentence) {
    nuevaOracion = sentence.split(" "); //nueva oracion separando las palabras de la oracion principal 
    // Ejemplo ---> sentence2 = ["the","cattle","was","rattled","by","the","battery"]
    
    for(d in dictionary){ //iterador en el diccionario
 
         let t = dictionary[d].length // tamaño de la palabra en esa posicion del diccionario(letras)
 
         for(n in nuevaOracion){ //iterador en la oracion nueva 
 
           //toma una parte de la palabra dependiendo del tamaño(t)
             let comparar = nuevaOracion[n].slice(0,t); 
 
             if(dictionary[d]==comparar){ //comparar la palabra del diccionario con la parte que se tomó
                 
 //En la nueva oracion se elimina la palabra en la posicion "n" y se reemplaza la que estaba anteriormente por la que estamos comparando en el diccionario
                 nuevaOracion.splice(n,1,dictionary[d]); 
 
             }
         }
    }
    ordenado = "" 
 
    ordenado = nuevaOracion.join(' ');//se quitan las comas y se reemplazan por espacios en la oracion
 
    return (ordenado)
};

console.log(replaceWords(dictionary, sentence));