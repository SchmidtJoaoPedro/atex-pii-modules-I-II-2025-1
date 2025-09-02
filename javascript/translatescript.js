function translatePortuguese() {
    document.getElementById("translate").innerHTML = 'Uma das questões <span id="important-span">mais desafiadoras</span> do cenário global contemporâneo. <button id="btn-translate" onclick="translateEnglish()"><span class="material-symbols-outlined">translate</span></button>';
}

function translateEnglish() {
    document.getElementById("translate").innerHTML = 'One of the <span id="important-span">most challenging</span> issues in the contemporary global scenario. <button id="btn-translate" onclick="translatePortuguese()"><span class="material-symbols-outlined">translate</span></button>'
}