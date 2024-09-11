/* 
    1. Naming. 
    
    Sans décommenter les variables ci-dessous, devinez celles qui ont un nom non-réglementaire, c'est à dire celles qui vont provoquer une erreur lors de l'exécution de votre code par le navigateur.
    Rajoutez un commentaire à côté de chaque variable //correct ou //faux.

*/

    // LET UsErNaMe = "John";   //faux
    // const _id = 99;  //correct
    // let class = true; //faux
    // const isAdult = true; //correct
    // const $card = {name: "card", content: "Lorem ipsum"}; //faux --> correcte, mais à éviter de faire
    // let 1452 = 1452; //faux
    // const sum41 = "music"; //correct



/* 
    2. Trouver un bon nom; 

    Essayez de trouver un bon nom à ces variables, puis déclarez-les avec ce nom et la valeur correspondante.

    A. Une let qui retourne un booléen en fonction de la présence d'un joueur en ligne.
    B. Une let qui retourne un booléen en fonction des droits d'un rôle "modérateur".
    C. Une const qui contient un tableau de nombres représentants des salaires.
    D. Une let contenant des informations sur la météo du jour.
    E. Une let qui contient la hauteur d'une page web.
    F. Une const qui contient un message d'alerte.

    Même chose pour des fonctions.

    G. Une fonction qui retourne les données d'un utilisateur
    H. Une fonction qui retourne un booléen si l'utilisateur est adulte.
    I. Une fonction qui crée un bouton
    J. Une fonction qui ajoute une animation 
*/

//A.
let isOnline = true;

//B. 
let isModo= false;

//C.
const salaires = [2450,1850,4712,3254,2000,1578]

//D. 

let weatherToday = {
    temperature : 27,
    humidity: 45,
    wind: 14
}

// E
let pageHeight= 4251 // ou scrollHeight

// F
 const alertInterdiction = "Vous ne pouvez pas faire ça"
// G
//function getUserData(user){}*/
// H
/* function checkIfAdult(){}*/ // ou isAdult
// I
/* function createButton(){}*/
// J
/* function addAnnimation(){}*/

