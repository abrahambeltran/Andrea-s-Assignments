const paragraph = document.querySelector('p');

paragraph.addEventListener("click", updateName);

function updateName(){
    const name = prompt("NEW NAME");
    paragraph.textContent = `PLAYER 1: ${name}`;
    //document.body.appendChild();
}