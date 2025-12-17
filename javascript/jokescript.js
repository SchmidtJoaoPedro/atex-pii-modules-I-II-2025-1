let alternar = true;

function trocarImagem() {
    document.getElementById("alemão").src = alternar ? "./images/partyimages/partyimages-joke/alemanha.png" : "./images/partyimages/Alemão.jpeg";
    document.getElementById("francês").src = alternar ? "./images/partyimages/partyimages-joke/frança.png" : "./images/partyimages/Francês.jpeg";
    document.getElementById("italiano").src = alternar ? "./images/partyimages/partyimages-joke/italia.png" : "./images/partyimages/Italiano.jpeg";
    document.getElementById("russo").src = alternar ? "./images/partyimages/partyimages-joke/russia.png" : "./images/partyimages/Russo.jpeg";

    document.getElementById("suiço").src = alternar ? "./images/partyimages/partyimages-joke/lituano.png" : "./images/partyimages/Suiço.jpeg";
    document.getElementById("suiço-lituano").textContent = alternar ? "Ryan Augusto Chagas" : "Thiago de Oliveira Becker Bayao";

    document.getElementById("croata").src = alternar ? "./images/partyimages/partyimages-joke/croacia.png" : "./images/partyimages/Croata.jpeg";
    document.getElementById("americano").src = alternar ? "./images/partyimages/partyimages-joke/america.png" : "./images/partyimages/Americano.jpeg";

    alternar = !alternar; 
}