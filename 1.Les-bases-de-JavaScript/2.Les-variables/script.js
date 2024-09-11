/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre ordinateur permettant de stocker des valeurs et de les utiliser dans le code. 
*/

/* let */

let maincharacter = "Coline";
console.log(maincharacter);

/* ⚠️Impossible d'utiliser let et const avant de les déclarer */

/* ⚠️Impossible de redéclarer une let ou const avec le même nom */

/* const */

const id = 10; 

// on ne peut pas changer la valeur d'une constante. MAIS si la constante est un objet, on peut modifier la valeur d'une propriété:

const obj ={a: 999,b:888,c:null}

obj.c=777;
console.log(obj.c);


/* var */

//Utilisé près ES6. Déprecié maintenant à quelques exceptions près.

/* ⚠️ Attention, on ne peut pas déclarer de constante sans les initialiser, contrairement aux var et let. */
