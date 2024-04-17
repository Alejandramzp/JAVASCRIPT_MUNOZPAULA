/**
 * @param {string[]} strs
 * @return {string}
 */

strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
 
    if (strs.length == 0) { //se busca el tamaño del arreglo, si es 0 se retorna vacio
        return ""; 
    }

    let prefijo = strs[0]; //se toma el primer elemento del array para compararlo 

    for (let p = 0; p < prefijo.length; p++) { //iterador sobre las letras del primer elemento del array

        for (let s = 1; s < strs.length; s++) { // iterador sobre el tamaño del array, un paso

            if (prefijo[p] !== strs[s][p]) {//
                // Si se encuenta un caracter diferente, se retorna el prefijo actual hasta ese punto
                return prefijo.substring(0, p);
            }
        }
    }

    return prefijo; 
};

console.log(longestCommonPrefix(strs));