let traverseDomAndCollectElements = function(matchFunc, startEl) {
 let resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// # -->  es id
// . --> es una clase
// div.class // texto.texto --> es un tag.class
//  no tiene nada --> es un tag

let selectorTypeMatcher = function(selector) {  
  // tu código aquí
  if (selector.includes("#")) { // aca evaluamos si el selector es de tipo id, la funcion includes evalua si la plabra contiene este elemento (#) que lo identifica como id.
    return "id";
  } 
  else if (selector[0] === "."){// aca evaluamos si el selector en su pos inicial tiene un punto es una clase.. (son 2 formas de hacerlo)
      return "class";
    }
    else if (selector.split('.').length > 1) { // supongamos que el selector es div.class, el split separa el string donde ve un punto y lo
      return "tag.class";                     // coloca en una array ['div', 'class'], evalua si el array tiene 2 o mas palabras entonces es un tag
    }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function(selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") { 
   matchFunction = (elemento) => `#${elemento.id}` === selector; // retorna true or false dependiendo si el id que estoy recibiendo es igual al que me mandaron en el selector
   
  } else if (selectorType === "class") {
    matchFunction = (elemento) => {
      let classes = elemento.classList;
      for (let i = 0; classes.length; i++){
        
      }
    }
  } else if (selectorType === "tag.class") {
    
  } else if (selectorType === "tag") {
    
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
