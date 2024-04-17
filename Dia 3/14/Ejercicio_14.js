/**
 * @param {string[]} strs
 * @return {string}
 */

strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    
    if (strs.length == 0){ //se busca el tamaño del arreglo, si es 0 se retorna vacio
        return "";
    }

    let comparador = strs[0]; //se toma el primer elemento para compararlo 
    
    for (let i =1; i < strs.length; i++){ //iterador hasta el total del array
        while (strs[i].indexOf(comparador) !== 0) {
            comparador = comparador.slice(0, comparador.length - 1);
            if (comparador === "") {
                return "";
            }
        }
    }
    return comparador;
};

console.log(longestCommonPrefix(strs));