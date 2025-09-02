const locations = [
    {
        lat: -21.42512741118613,  // Prefeitura
        lng: -45.949767243095266,
        zoom: 17,
        info: "Ecoponto - Prefeitura Municipal de Alfenas:\nLocal para descarte de eletrônicos no prédio da Prefeitura.\n(Observação: Pilhas, lâmpadas e baterias não devem ser descartadas.)",
        horarios: {
            "segunda": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "terca": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "quarta": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "quinta": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "sexta": {
                "abre": "08:00",
                "fecha": "18:00"
            },  
            "sabado": {
                "abre": "não abre hoje",
                "fecha": "não abre hoje"
            },  
            "domingo": {
                "abre": "não abre hoje",
                "fecha": "não abre hoje"
            }
        }
    },
    {
        lat: -21.397809759367437, // Alfenas Ambiental
        lng: -45.9480039510521,
        zoom: 17,
        info: "Ponto de Coleta - Ferro Velho do João:\nVenda e coleta de sucatas de Alfenas. Verifique os horários de funcionamento.",
        horarios: {
            "segunda": {
                "abre": "07:00",
                "fecha": "18:00"
            },
            "terca": {
                "abre": "07:00",
                "fecha": "18:00"
            },
            "quarta": {
                "abre": "07:00",
                "fecha": "18:00"
            },
            "quinta": {
                "abre": "07:00",
                "fecha": "18:00"
            },
            "sexta": {
                "abre": "07:00",
                "fecha": "18:00"
            },  
            "sabado": {
                "abre": "07:00",
                "fecha": "12:00"
            },  
            "domingo": {
                "abre": "não abre hoje",
                "fecha": "não abre hoje"
            }
        }
    },
    {
        lat: -21.420964604560012, // Unifal
        lng: -45.94861900506598,
        zoom: 17,
        info: "Ponto de Coleta - UNIFAL-MG:\nEspaço destinado à reciclagem segura de resíduos eletrônicos na UNIFAL-MG.",
        horarios: {
            "segunda": {
                "abre": "07:00",
                "fecha": "23:00"
            },
            "terca": {
                "abre": "07:00",
                "fecha": "23:00"
            },
            "quarta": {
                "abre": "07:00",
                "fecha": "23:00"
            },
            "quinta": {
                "abre": "07:00",
                "fecha": "23:00"
            },
            "sexta": {
                "abre": "07:00",
                "fecha": "23:00"
            },  
            "sabado": {
                "abre": "não abre hoje",
                "fecha": "não abre hoje"
            },  
            "domingo": {
                "abre": "não abre hoje",
                "fecha": "não abre hoje"
            }
        }
    },
    {
        lat: -21.43082050408932, // Vida Viva
        lng: -45.959207436363265,
        zoom: 17,
        info: "Ecoponto - Vida Viva:\nLocal destinado ao descarte adequado de resíduos eletrônicos, conforme recomendações ambientais.",
        horarios: {
            "segunda": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "terca": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "quarta": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "quinta": {
                "abre": "08:00",
                "fecha": "18:00"
            },
            "sexta": {
                "abre": "08:00",
                "fecha": "18:00"
            },  
            "sabado": {
                "abre": "null",
                "fecha": "null"
            },  
            "domingo": {
                "abre": "null",
                "fecha": "null"
            }
        }
    },

];

function updateMap(index) {
    const loc = locations[index];
    const url = `https://www.google.com/maps?q=${loc.lat},${loc.lng}&hl=pt-BR&z=${loc.zoom}&output=embed`;
    document.getElementById('map').src = url;
    document.getElementById('infoText').value = loc.info;
    animateInfo();
    atualizarStatus(loc.horarios);
}

function animateInfo() {
    const infoElem = document.getElementById('infoText');
    infoElem.classList.remove('fade-transition');
    void infoElem.offsetWidth;
    infoElem.classList.add('fade-transition');
}

function atualizarStatus(horarios, nomeLocal) {
    let agora = new Date();
    let diaSemana = [
        "domingo","segunda","terca","quarta","quinta","sexta","sabado"
    ][agora.getDay()];

    let horarioHoje = horarios[diaSemana];
    let led = document.getElementById("led");
    let status = document.getElementById("status");

    if (!horarioHoje || !horarioHoje.abre) {
        led.className = "led fechado";
        status.innerText = `FECHADO hoje.`;
        return;
    }

    let horaAtual = agora.toTimeString().substring(0,5);
    let aberto = horaAtual >= horarioHoje.abre && horaAtual <= horarioHoje.fecha;

    if (aberto) {
        led.className = "led aberto";
        status.innerText = `ABERTO (até ${horarioHoje.fecha})`;
    } else {
        led.className = "led fechado";
        if (horarioHoje.abre == horarioHoje.fecha){
            status.innerText = `FECHADO (hoje não abre)`;
        } else 
            status.innerText = `FECHADO (${horarioHoje.abre} - ${horarioHoje.fecha})` 
    }
}


document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', () => {
    const index = parseInt(button.getAttribute('data-index'));
    updateMap(index);
    });
});