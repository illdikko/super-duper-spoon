/* 
    1. Les objets.

    Les objets sont des containers à propriétés.
    Chaque propriété est associée à une valeur.
    On parle d'une collection de clés-valeurs. (keyed collection)

*/

// const boite = {proprietaire : "Léa",
//   couleur: "rouge",  
//   hauteur : 13,
//   largeur : 11,
//   poids : 1.5
// }

// // On accède aux valeurs grâce à deux notations, la dot et la bracket notation

// // dot notation
// console.log(boite.couleur);

// // bracket notation
// console.log(boite["couleur"]);

// // On peut modifier la valeur d'une propriété

// boite.hauteur = 18;
// console.log(boite.hauteur);

// Imbrication d'objets

// C'est assez complexe quand on débute de s'y retrouver, pour l'instant ne vous posez pas trop de question, mais appréciez juste la syntaxe, et tentez de retrouver des valeurs et d'exécuter des fonctions. 

const player = {
  spells: {
    fire() { //notation avant 2015 (près ES6)
      return "fire"; 
    },
    freeze: function(){
      return "freeze";
    }
  },
  bag: [
    {
      id: 1,
      name: "bow",
      description: "deals 3 damage"
    },
    {
      id: 2,
      name: "shield",
      description: "increases armor by 5"
    },
    {
      id: 3,
      name: "healing potion",
      description: "heals 10 HP"
    }
  ]
}
console.log(player.spells.fire());
console.log(player.bag[0].name);
console.log(player.bag.find(element => element.name === "shield"));