const championsData = {
    "Aatrox": [{
            name: "LA ESPADA DE LOS OSCUROS",
            description: "Aatrox golpea con su espadón e inflige daño físico. Puede atacar tres veces, cada vez con un área de efecto distinta.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AatroxQ.png"
        },
        {
            name: "CADENAS INFERNALES",
            description: "Aatrox golpea el suelo, lo que inflige daño al primer enemigo impactado. Los campeones y monstruos grandes deben abandonar el área de impacto rápidamente para evitar ser arrastrados hacia el centro y volver a recibir daño.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AatroxW.png"
        },
        {
            name: "DESLIZAMIENTO SOMBRÍO",
            description: "Aatrox se cura de forma pasiva cuando inflige daño a campeones enemigos. Al activarse, se desliza en una dirección.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AatroxE.png"
        },
        {
            name: "EL ANIQUILADOR DE MUNDOS",
            description: "Aatrox libera su forma demoníaca, lo que aterroriza a los súbditos enemigos cercanos, además de aumentar su daño de ataque, curación y velocidad de movimiento. Si consigue un asesinato o asistencia, la duración de este efecto se alarga.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AatroxR.png"
        }
    ],
    "Jax": [{
            name: "GOLPE EN SALTO",
            description: "Jax salta hacia una unidad. Si es un enemigo, lo golpea con su arma.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JaxQ.png"
        },
        {
            name: "POTENCIACIÓN",
            description: "Jax carga su arma con energía para que su siguiente ataque cause daño adicional.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JaxW.png"
        },
        {
            name: "CONTRAATAQUE",
            description: "La habilidad de Jax para el combate le permite esquivar todos los ataques que reciba durante un breve período de tiempo y luego contraatacar rápidamente, aturdiendo a todos los enemigos de los alrededores.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JaxE.png"
        },
        {
            name: "GRAN MAESTRO DE ARMAS",
            description: "Cada tercer golpe consecutivo inflige daño mágico adicional. Además, Jax puede activar esta habilidad para infligir daño a su alrededor y fortalecer su resolución, lo que aumenta su armadura y resistencia mágica durante un breve periodo.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/JaxR.png"
        }

    ],
    "Darius": [{
            name: "Diezmar",
            description: "Darius reúne fuerzas y lanza un ataque circular amplio con su hacha. Los enemigos alcanzados por el filo recibirán más daño que los alcanzados por el mango. Darius se cura con los impactos a campeones enemigos y monstruos grandes con el filo del hacha.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DariusCleave.png"
        },
        {
            name: "GOLPE INCAPACITANTE",
            description: "El siguiente ataque de Darius golpeará una arteria crucial del enemigo. Dicho enemigo perderá velocidad de movimiento a medida que se desangra.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DariusNoxianTacticsONH.png"
        },
        {
            name: "Aprehender",
            description: "Darius afila su hacha, lo que le permite ignorar parte de la armadura de su objetivo de manera pasiva. Al activarla, Darius barre a los enemigos con su hacha y los trae hacia él.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DariusAxeGrabCone.png"
        },
        {
            name: "Guillotina Noxiana",
            description: "Darius salta hacia un campeón enemigo y le asesta un golpe letal que inflige daño verdadero. El daño aumenta con cada acumulación de Hemorragia que tenga el objetivo. Guillotina Noxiana restaura su enfriamiento durante unos segundos si causó un asesinato.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DariusExecute.png"
        }
    ],
    "Camille": [{
            name: "Protocolo de Precisión",
            description: "El próximo ataque de Camille inflige daño adicional y otorga más velocidad de movimiento. Este hechizo puede lanzarse de nuevo durante un breve periodo de tiempo, de modo que inflige una cantidad adicional de daño considerablemente mayor si Camille deja un tiempo entre los dos ataques.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CamilleQ.png"
        },
        {
            name: "BARRIDO TÁCTICO",
            description: "Tras un breve lapso de tiempo, Camille provoca una explosión en forma de cono que inflige daño. Los enemigos en la mitad exterior se ralentizan y reciben daño adicional al mismo tiempo que curan a Camille.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CamilleW.png"
        },
        {
            name: "TIRO DE GANCHO",
            description: "Camille se desliza hasta un muro, salta y golpea a los enemigos al caer.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CamilleE.png"
        },
        {
            name: "Ultimátum Hextech",
            description: "Camille salta hacia un campeón enemigo, atrapándolo en una zona. Mientras esté en la zona, el enemigo no puede salir.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CamilleR.png"
        }
    ],
    "Evelynn": [{
            name: "PÚA DE ODIO",
            description: "Evelynn dispara espinas que infligen daño a todos los enemigos golpeados.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EvelynnQ.png"
        },
        {
            name: "SED DE LUJURIA",
            description: "Evelynn maldice a su objetivo y provoca que, tras un breve lapso de tiempo, el próximo ataque o habilidad lo hechice y le reduzca la resistencia mágica.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EvelynnW.png"
        },
        {
            name: "LATIGAZO",
            description: "Evelynn azota a su objetivo con su látigo y le inflige daño. Obtiene velocidad de movimiento durante un breve periodo de tiempo.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EvelynnE.png"
        },  
        {
            name: "HACEDORA DE VIUDAS",
            description: "Evelynn se vuelve invulnerable brevemente y asola la zona que tiene delante, y después reaparece mucho más atrás.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EvelynnR.png"
        }
    ],
    "Elise": [{
            name: "Neurotoxina / Mordisco Venenoso",
            description: "Forma humana: Inflige daño según la cantidad de vida que tenga el objetivo. Forma de araña: Embiste a un enemigo e inflige daño según la cantidad de vida que tenga.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EliseHumanQ.png"
        },
        {
            name: "ARAÑA VOLÁTIL / FRENESÍ ARÁCNIDO",
            description: "Forma humana: Libera una araña cargada de veneno que explota al acercarse a un objetivo. Forma de araña: Elise y sus arañas aumentan su velocidad de ataque.",
            image:"https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EliseHumanW.png"
        },
        {
            name: "MARAÑA / RÁPEL",
            description: "Elise aturde a un enemigo con un capullo. En forma de araña, Elise se lanza al aire y luego cae sobre un enemigo.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EliseHumanE.png"
        },
        {
            name: "FORMA DE ARAÑA",
            description: "Se transforma en una amenazadora araña, lo que reduce su alcance de ataque pero le proporciona velocidad de movimiento, nuevas habilidades y un enjambre de arañas que ataca a sus enemigos.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EliseR.png"
        }
    ],
    "Kha'Zix": [{
            name: "SABOREA SU MIEDO",
            description: "Inflige daño físico al objetivo. El daño es mayor en objetivos aislados. Si decide evolucionar Garras desgarradoras, recupera parte del enfriamiento contra objetivos aislados. Kha'Zix también obtiene más alcance, tanto en Saborea su miedo como en sus ataques básicos.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/KhazixQ.png"
        },
        {
            name: "PINCHO DEL VACÍO",
            description: "Kha'Zix lanza pinchos explosivos que infligen daño físico a los enemigos golpeados. Kha'Zix se cura si también está dentro del radio de la explosión. Si decide evolucionar Pinchos, entonces Pincho del Vacío lanza tres pinchos en un cono, ralentiza a los enemigos golpeados y revela a los campeones enemigos golpeados durante 2 s. Los objetivos aislados sufren ralentización adicional.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/KhazixW.png"
        },
        {
            name: "SALTO",
            description: "Kha'Zix salta hacia una zona e inflige daño físico al aterrizar. Si decide evolucionar Alas, el alcance de Salto aumenta en 200. Además, al matar o ayudar a matar a un campeón, el enfriamiento de Salto se restablece.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/KhazixE.png"
        },
        {
            name: "ASALTO DEL VACÍO",
            description: "Cada rango permite que Kha'Zix evolucione una de sus habilidades, lo que les proporciona un efecto adicional único. Al activarse, Kha'Zix se vuelve invisible, lo que activa Amenaza invisible y aumenta su velocidad de movimiento. Si decide evolucionar Ocultamiento adaptable, Asalto del Vacío aumenta la duración de su invisibilidad y obtiene un uso adicional..",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/KhazixR.png"
        }
    ],
    "Lee Sin": [{
            name: "Onda Sónica / Golpe Resonante",
            description: " Lee Sin emite una onda sonora discordante para localizar a sus enemigos e inflige daño físico al que detecta primero.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/LeeSinQOne.png"
        },
        {
            name: "SALVAGUARDA / VOLUNTAD DE HIERRO",
            description: "Lee Sin salta sobre un aliado de su elección y genera un escudo que lo protege del daño. Si el aliado es un campeón, también lo escuda.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/LeeSinWOne.png"
        },
        {
            name: "Tempestad / Incapacitar",
            description: "Lee Sin golpea el suelo y provoca una onda de choque que inflige daño mágico y revela a los enemigos alcanzados.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/LeeSinEOne.png"
        },
        {
            name: "Ira del Dragón",
            description: "Lee Sin realiza una potente patada giratoria, que lanza hacia atrás al objetivo e inflige daño físico a él y a todos los enemigos con los que impacte.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/LeeSinR.png"
        }
    ],
    "Ahri": [{
            name: "Orbe del engaño",
            description: "Ahri se cura tras matar a 9 súbditos o monstruos. Ahri se cura más cantidad tras eliminar a un campeón enemigo.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/passive/Ahri_SoulEater2.png"
        },
        {
            name: "Fuego Zorruno",
            description: "Ahri obtiene una breve mejora de velocidad de movimiento y lanza tres fuegos zorrunos que fijan y atacan a los enemigos cercanos",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriW.png"
        },
        {
            name: "Hechizar",
            description: "Ahri lanza un beso que daña y hechiza al enemigo al que alcance primero, con lo que cancela instantáneamente todas sus habilidades de movimiento y hace que avance hacia ella de forma inofensiva.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriE.png"
        },
        {
            name: "Impulso Espiritual",
            description: "Ahri se lanza hacia adelante y puede lanzarse dos veces más, infligiendo daño a los enemigos cercanos con cada lanzamiento.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AhriR.png"
        }
    ],
    "Annie": [{
            name: "Desintegracion",
            description: "Annie lanza una bola de fuego imbuida de maná que daña al objetivo y le devuelve el maná gastado si este resulta destruido.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AnnieQ.png"
        },
        {
            name: "Incineracion ",
            description: "Annie lanza un cono de fuego, infligiendo daño a todos los enemigos en el área.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AnnieW.png"
        },
        {
            name: "Escudo Fundido",
            description: "Annie otorga a un aliado o a ella misma un escudo que aumenta la velocidad de movimiento y devuelve daño a los atacantes.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AnnieE.png"
        },
        {
            name: "Invocar: Tibbers",
            description: "Annie da vida a su oso Tibbers, que daña a todas las unidades de la zona. Tibbers puede atacar y quemar a los enemigos adyacentes.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AnnieR.png"
        }
    ],
    "Akali": [{
            name: "Pleno de cinco puntas",
            description: "Akali lanza cinco kunais que ralentizan e infligen daño en función de su daño de ataque y poder de habilidad adicionales.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AkaliQ.png"
        },
        {
            name: "Velo del Crepúsculo",
            description: "Akali lanza una cortina de humo y obtiene brevemente velocidad de movimiento. Mientras se encuentra dentro del área, Akali se vuelve invisible, no puede ser seleccionada como objetivo de hechizos ni ataques enemigos.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AkaliW.png"
        },
        {
            name: "Volterer Shuriken",
            description: "Akali lanza un shuriken que inflige daño y puede lanzarse hacia el enemigo alcanzado.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AkaliE.png"
        },
        {
            name: "Ejecucion Perfecta",
            description: "Akali salta hacia una dirección y daña a los enemigos golpeados. Relanzamiento: Akali se desliza hacia una dirección y ejecuta a todos los enemigos golpeados.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AkaliR.png"
        }
    ],
    "Vladimir": [{
            name: "Transfusión",
            description: "Vladimir le roba vida al enemigo objetivo. Cuando los recursos de Vladimir estén al máximo, durante un breve periodo Transfusión inflige mucho más daño y cura mucho más.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VladimirQ.png"
        },
        {
            name: "Estanque sangriento",
            description: "Vladimir se sumerge en un estanque de sangre, por lo que no se lo puede seleccionar como objetivo durante 2 s.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VladimirSanguinePool.png"
        },
        {
            name: "Mareas de Sangre",
            description: "Vladimir paga con su propia vida para cargar una reserva de sangre que, una vez liberada, inflige daño en el área circundante.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VladimirE.png"
        },
        {
            name: "Hemoplaga",
            description: "Vladimir infecta una zona con una plaga virulenta. Los enemigos afectados reciben más daño mientras dura el efecto.",
            image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VladimirHemoplague.png"
        }
    ],
"Ashe": [
    { 
        name: "CONCENTRACIÓN MÁXIMA", 
        description: "Ashe acumula Concentración al atacar. Al alcanzar el nivel máximo, Ashe puede lanzar Concentración máxima para consumir todas las acumulaciones, aumentar temporalmente su velocidad de ataque y transformar su ataque básico en un poderoso ataque de ráfaga durante unos instantes.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AsheQ.png" 
    },
    { 
        name: "DESCARGA", 
        description: "Ashe dispara flechas en un cono para causar más daño. También aplica Tiro congelador.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/Volley.png" 
    },
    { 
        name: "DISPARO DE HALCÓN", 
        description: "Ashe puede enviar su Espíritu Halcón en misión de exploración para reconocer el terreno.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AsheSpiritOfTheHawk.png" 
    },
    { 
        name: "FLECHA DE CRISTAL ENCANTADA", 
        description: "Ashe dispara un proyectil de hielo en línea recta. Si la flecha impacta contra un campeón enemigo, le inflige daño y aturde según la distancia que haya recorrido la flecha. Además, las unidades enemigas circundantes reciben daño y se ralentizan.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/EnchantedCrystalArrow.png" 
    }
],
"Caitlyn": [
    { 
        name: "PACIFICADORA DE PILTOVER", 
        description: "Caitlyn carga su rifle durante 1 s para liberar un disparo penetrante que provoca daño físico y se ensancha al alcanzar a un objetivo (causa menos daño a los objetivos posteriores).",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CaitlynQ.png" 
    },
    { 
        name: "TRAMPA PARA YORDLES", 
        description: "Caitlyn pone una trampa que, al activarse, inmoviliza al campeón enemigo y lo revela durante 1,5 s, lo que permite que Caitlyn aseste un Disparo a la cabeza potenciado.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CaitlynW.png" 
    },
    { 
        name: "RED DE CALIBRE 90", 
        description: "Caitlyn lanza una red pesada para ralentizar a su objetivo. El retroceso empuja hacia atrás a Caitlyn.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CaitlynE.png" 
    },
    { 
        name: "AS EN LA MANGA", 
        description: "Caitlyn se toma su tiempo para preparar el tiro perfecto, causando una gran cantidad de daño a un solo objetivo a gran distancia. Los campeones enemigos pueden interceptar la bala para sus aliados.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/CaitlynR.png" 
    }
],
"Draven": [
    { 
        name: "HACHA GIRATORIA", 
        description: "El siguiente ataque de Draven inflige daño físico adicional. Tras golpear al objetivo, el hacha saldrá volando por los aires. Si Draven la atrapa, preparará automáticamente otra Hacha giratoria. Draven puede tener dos Hachas giratorias a la vez.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DravenSpinning.png" 
    },
    { 
        name: "SUBIDÓN DE ADRENALINA", 
        description: "Draven aumenta la velocidad de movimiento y la velocidad de ataque. La bonificación de velocidad de movimiento disminuye rápidamente con el tiempo. Al atrapar un Hacha giratoria, se recuperará el enfriamiento de Subidón de adrenalina.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DravenFury.png" 
    },
    { 
        name: "A UN LADO", 
        description: "Draven lanza sus hachas, lo que inflige daño físico a los objetivos golpeados y los echa a un lado. Los objetivos impactados se ven ralentizados.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DravenDoubleShot.png" 
    },
    { 
        name: "ESPIRAL DE MUERTE", 
        description: "Draven lanza dos hachas gigantescas para infligir daño físico a cada unidad alcanzada. Las hachas de Espiral de muerte cambian lentamente de dirección y regresan a Draven tras golpear a un campeón enemigo. Draven también puede activar esta habilidad mientras las hachas están de camino para hacer que vuelvan antes. Inflige menos daño por cada unidad que golpea y se reinicia cuando el hacha cambia de dirección. Ejecuta a los enemigos que tengan menos vida que el número de acumulaciones de Adoración de Draven..",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/DravenRCast.png" 
    }
],
"Varus": [
    { 
        name: "FLECHA PENETRANTE", 
        description: "Varus se prepara y luego dispara un tiro potente que goza de más alcance y daño cuanto más tiempo pase preparando el tiro.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VarusQ.png" 
    },
    { 
        name: "CARCAJ INFECTADO", 
        description: "Pasiva: Los ataques básicos de Varus infligen daño mágico adicional y aplican Infección. Las demás habilidades de Varus detonan Infección, lo que inflige daño mágico según la vida máxima del objetivo. Activa: Varus potencia su siguiente Flecha penetrante.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VarusW.png" 
    },
    { 
        name: "LLUVIA DE FLECHAS", 
        description: "Varus lanza una lluvia de flechas que infligen daño físico y profanan el suelo. El suelo profanado ralentiza la velocidad de movimiento de los enemigos y reduce su curación propia y su regeneración.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VarusE.png" 
    },
    { 
        name: "CADENA DE CORRUPCIÓN", 
        description: "Varus lanza una mortífera espiral de corrupción que inmoviliza al primer campeón impactado y luego se expande hacia los campeones cercanos que no estén infectados, a los cuales también inmoviliza al tocarlos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/VarusR.png" 
    }
],
"Braum": [
    { 
        name: "MORDISCO INVERNAL", 
        description: "Braum lanza un chorro de gélido hielo desde el escudo que ralentiza y causa daño mágico. Aplica una acumulación de Golpes conmocionantes.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/BraumQ.png" 
    },
    { 
        name: "DETRÁS DE MÍ", 
        description: "Braum salta hacia un campeón o súbdito aliado. Al alcanzarlo, ambos obtienen armadura y resistencia mágica durante unos segundos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/BraumW.png" 
    },
    { 
        name: "INQUEBRANTABLE", 
        description: "Braum alza su escudo en una dirección durante varios segundos e intercepta todos los proyectiles, que lo golpean y son destruidos. Anula por completo el daño del primero y reduce el de los siguientes que llegan desde la misma dirección.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/BraumE.png" 
    },
    { 
        name: "FISURA GLACIAL", 
        description: "Braum golpea el suelo y lanza por los aires a los enemigos cercanos y situados en una línea delante de él. A lo largo de esta línea se abre una fisura que ralentiza a los enemigos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/BraumRWrapper.png" 
    }
],
"Blitzcrank": [
    { 
        name: "AGARRE MISIL", 
        description: "Blitzcrank dispara su mano derecha para apresar a un rival que encuentre en su camino, le inflige daño y lo atrae hacia él.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/RocketGrab.png" 
    },
    { 
        name: "SOBRECARGA", 
        description: "Blitzcrank se sobrecarga para aumentar drásticamente su velocidad de movimiento y su velocidad de ataque. Se ve ralentizado temporalmente cuando termina el efecto.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/Overdrive.png" 
    },
    { 
        name: "PUÑO DE PODER", 
        description: "Blitzcrank carga su puño para que su siguiente ataque cause el doble de daño y lance al objetivo por los aires.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/PowerFist.png" 
    },
    { 
        name: "CAMPO ESTÁTICO", 
        description: "Los enemigos a los que Blitzcrank ataca quedan marcados y reciben una descarga eléctrica después de 1 s. Además, Blitzcrank puede activar esta habilidad para eliminar los escudos de los enemigos cercanos, infligirles daño y silenciarlos durante un breve periodo.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/StaticField.png" 
    }
],
"Nautilus": [
    { 
        name: "LÍNEA DE DRAGADO", 
        description: "Nautilus arroja su ancla. Si impacta con un enemigo, arrastra a ambos hasta una posición intermedia e inflige daño mágico. Si impacta contra un obstáculo, Nautilus se propulsa hacia él.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NautilusAnchorDrag.png" 
    },
    { 
        name: "IRA DEL TITÁN", 
        description: "Nautilus obtiene un escudo temporal. Mientras está activo, sus ataques infligen daño prolongado a su objetivo y a los enemigos cercanos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NautilusPiercingGaze.png" 
    },
    { 
        name: "AGUAS REVUELTAS", 
        description: "Nautilus crea tres ondas de explosiones a su alrededor. Cada explosión inflige daño y ralentiza a los enemigos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NautilusSplashZone.png" 
    },
    { 
        name: "CARGA DE PROFUNDIDAD", 
        description: "Nautilus lanza una onda expansiva al suelo que persigue al rival. Esta onda expansiva hace pedazos la tierra, lo que provoca que los enemigos salten por los aires. Cuando alcanza al enemigo, la onda expansiva estalla y los enemigos saltan por los aires y quedan aturdidos.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/NautilusGrandLine.png" 
    }
],
"Alistar": [
    { 
        name: "PULVERIZACIÓN", 
        description: "Alistar golpea con fuerza el suelo, lo que inflige daño a los enemigos cercanos y los lanza por los aires.Alistar golpea con fuerza el suelo, lo que inflige daño a los enemigos cercanos y los lanza por los aires.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/Pulverize.png" 
    },
    { 
        name: "TESTARAZO", 
        description: "Alistar propina un cabezazo al objetivo, dañándolo y haciéndolo retroceder.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/Headbutt.png" 
    },
    { 
        name: "PISOTEAR", 
        description: "Alistar pisotea a las unidades enemigas cercanas, ignora la colisión con unidades y obtiene acumulaciones si daña a un campeón enemigo. Con el máximo de acumulaciones, el siguiente ataque básico de Alistar contra un campeón enemigo inflige daño mágico adicional y lo aturde.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/AlistarE.png" 
    },
    { 
        name: "VOLUNTAD INQUEBRANTABLE", 
        description: "Alistar profiere un gran rugido con el que elimina todos los efectos de control de adversario que le afectan y reduce el daño físico y mágico recibido mientras dura el efecto.",
        image: "https://ddragon.leagueoflegends.com/cdn/14.10.1/img/spell/FerociousHowl.png" 
    }
],
};
document.querySelectorAll('.champion').forEach(champion => {
    champion.addEventListener('click', () => {
        const championName = champion.getAttribute('data-champion');
        const abilities = championsData[championName];

        document.getElementById('champion-name').textContent = championName;
        const abilitiesList = document.getElementById('abilities-list');
        abilitiesList.innerHTML = '';

        abilities.forEach(ability => {
            const listItem = document.createElement('li');
            listItem.classList.add('ability');

            const img = document.createElement('img');
            img.src = ability.image;
            img.alt = ability.name;

            const description = document.createElement('div');
            description.classList.add('ability-description');

            const abilityName = document.createElement('strong');
            abilityName.textContent = ability.name;

            const abilityDesc = document.createElement('p');
            abilityDesc.textContent = ability.description;

            description.appendChild(abilityName);
            description.appendChild(abilityDesc);

            listItem.appendChild(img);
            listItem.appendChild(description);
            abilitiesList.appendChild(listItem);
        });

        document.getElementById('modal').style.display = 'block';
    });
});

document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
                         
