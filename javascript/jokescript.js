let alternar = true;

function trocarImagem() {
    document.getElementById("alemão").src = alternar ? "../navcode/images/partyimages/partyimages-joke/alemanha.png" : "../navcode/images/partyimages/Alemão.jpeg";
    document.getElementById("francês").src = alternar ? "../navcode/images/partyimages/partyimages-joke/frança.png" : "../navcode/images/partyimages/Francês.jpeg";
    document.getElementById("italiano").src = alternar ? "../navcode/images/partyimages/partyimages-joke/italia.png" : "../navcode/images/partyimages/Italiano.jpeg";
    document.getElementById("russo").src = alternar ? "../navcode/images/partyimages/partyimages-joke/russia.png" : "../navcode/images/partyimages/Russo.jpeg";

    document.getElementById("suiço").src = alternar ? "../navcode/images/partyimages/partyimages-joke/lituano.png" : "../navcode/images/partyimages/Suiço.jpeg";
    document.getElementById("suiço-lituano").textContent = alternar ? "Ryan Augusto Chagas" : "Thiago de Oliveira Becker Bayao";

    document.getElementById("croata").src = alternar ? "../navcode/images/partyimages/partyimages-joke/croacia.png" : "../navcode/images/partyimages/Croata.jpeg";
    document.getElementById("americano").src = alternar ? "../navcode/images/partyimages/partyimages-joke/america.png" : "../navcode/images/partyimages/Americano.jpeg";

    alternar = !alternar; 
}