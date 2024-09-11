/* 
    1. Les événements.

    Les évènements permettent à l'utilisateur d'une page web d'intéragir avec celle-ci.
    Voici quelques évènements très connus : click, submit, input, mousedown/up/over, drag&drop, load, scroll, touch, etc ...

*/

const title = document.querySelector("h1");
title.addEventListener("click", handleClick);

// "Click" = type dévènement
//handleClick = action à effectuer, fonction call back à exécuter.

function handleClick() {
    console.log("Clicked!");
    // title.textContent=`${title.textContent + 1}`;
    title.style.backgroundColor = "teal";
}
/*Il est possible d'insérer la fonction directement en paramètre de l'event listener, mais cela empèche l'utilisation du "remove event listener" plus tard. Il est préférable de les séparer.*/

/* AddEventListener appelle toujours cette fonction avec un objet d'event, à nous de choisir si nous voulons l'utiliser ou pas*/