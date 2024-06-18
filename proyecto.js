const champions = {
    "Aatrox": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
        description: "Aatrox es un guerrero resucitado conocido por su gran habilidad en combate."
    },
    "Ahri": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
        description: "Ahri es una vastaya que usa su magia para manipular las emociones de sus enemigos."
    },
    "Darius": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
        description: "Darius no es un maníaco enloquecido y sediento de sangre, sino más bien un asesino."
    },

    "Ashe": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
        description: "Una guerrera poseedora de una conexión mágica con sus tierras heladas que carga con madre."
    },

    "Evelynn": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
        description: "Evelynn no siempre fue una cazadora hábil. Comenzó hace millones de años, como algo primordial. "
    },

    "Elise": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_3.jpg",
        description: "Elise es una letal depredadora que mora en un palacio cerrado y sin luz situado en el corazón."
    },

    "Draven": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
        description: "Draven, un antiguo soldado cuyo sentido del espectáculo y habilidad sin igual."
    },

    "Varus": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
        description: "Varus era un asesino despiadado al que le encantaba torturar a sus enemigos."
    },

    "Kha'Zix": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_3.jpg",
        description: "Kha'Zix es un despiadado depredador del Vacío que se infiltró en Valoran para poder devorar a sus criaturas."
    },

    "Caitlyn": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
        description: "Es conocida como la mejor arma de Piltover para librar a la ciudad de sus criminales.."
    },

    "Braum": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
        description: "Dotado de bíceps inmensos y un corazón aún más grande, Braum es un querido  y poderoso héroe Hijo del Hielo del Fréljord."
    },

    "Alistar": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_29.jpg",
        description: " Un poderoso guerrero con una reputación temible, busca venganza por la muerte de su clan a manos del imperio noxiano."
    },
    "Blitzcrank": {
        image: "https://lolwp.com/wp-content/uploads/SteamGolem_Splash_12.jpg",
        description: "Blitzcrank es un autómata enorme, casi indestructible, creado originalmente para el tratamiento de residuos tóxicos."
    },
    "Jax": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_13.jpg",
        description: "El mejor maestro de armas de Runaterra, es el único superviviente de los Kohari."
    },

    "Camille": {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqJInNuQFxGtqs_b1sfw3lYzOF4LuH9ynQA&s",
        description: "Convertida en un arma viviente para operar fuera de la ley, jefa de espías del clan Ferros"
    },
    "Lee sin": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_31.jpg",
        description: "Maestro de las artes marciales ancestrales de Jonia, luchador  que canaliza la esencia del espíritu del dragón"
    },
    "Vladimir": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
        description: "Maestro de las artes marciales ancestrales de Jonia, es un luchador con principios "
    },
    "Akali": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_71.jpg",
        description: "Maestro de las artes marciales ancestrales de Jonia, es un luchador con principios "
    },
    "Annie": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_1.jpg",
        description: "Peligrosa pero encantadoramente,Annie es una pequeña maga con un inmenso poder."
    },
    "Nautilus": {
        image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
        description: "Una solitaria leyenda, tan antigua como los primeros muelles que se hundieron en Aguas poderosas es protector y fornido"
    },


};

const roles = {
    "TOP": ["Aatrox", "Jax", "Darius", "Camille"],
    "JUNGLA": ["Evelynn", "Elise", "Kha'Zix", "Lee sin"],
    "MID": ["Ahri", "Annie", "Akali", "Vladimir"],
    "ADC": ["Ashe", "Caitlyn", "Draven", "Varus"],
    "SUPPORT": ["Alistar", "Blitzcrank", "Braum", "Nautilus"]
};

document.getElementById('searchChampionBtn').addEventListener('click', () => {
    let content = `<input type="text" id="championSearch" placeholder="Buscar campeón">
                   <button onclick="searchChampion()">Buscar</button>`;
    document.getElementById('content').innerHTML = content;
});
document.getElementById('viewHabilites').addEventListener('click', () => {
    window.location.href = 'index3.html';
});
document.getElementById('ViewObjetos').addEventListener('click', () => {
    window.location.href = 'index2.html';
});
document.getElementById('selectRoleBtn').addEventListener('click', () => {
    let content = '';
    for (let role in roles) {
        content += `<h3>${role}</h3>`;
        roles[role].forEach(champion => {
            content += `
                <div class="champion-card">
                    <img src="${champions[champion]?.image || ''}" alt="${champion}">
                    <div class="description">
                        <h4>${champion}</h4>
                        <p>${champions[champion]?.description || 'Descripción no disponible.'}</p>
                    </div>
                </div>
            `;
        });
    }
    document.getElementById('content').innerHTML = content;
});

function searchChampion() {
    const searchValue = document.getElementById('championSearch').value;
    const champion = champions[searchValue];
    if (champion) {
        const content = `
            <div class="champion-card">
                <img src="${champion.image}" alt="${searchValue}">
                <div class="description">
                    <h4>${searchValue}</h4>
                    <p>${champion.description}</p>
                </div>
            </div>
        `;
        document.getElementById('content').innerHTML = content;
    } else {
        document.getElementById('content').innerHTML = `<p>Campeón no encontrado.</p>`;
    }
}