// Generado por _rediseno/construir.js a partir de banco2.js y meta.json. No editar a mano.
// BANCO: [id, texto, madre, respuestas] — la letra k de «respuestas» es la del enigma k (s = Sí, n = No, c = Casi).
window.BANCO = [["real","¿Existe en la realidad?",null,"ssssssss"],["tocar","¿Se puede tocar?",null,"snnnsnnn"],["vivo","¿Es un ser vivo?",null,"nnnnnnnn"],["humano","¿Lo ha creado el ser humano?",null,"ncsnnnss"],["natural","¿Es algo de la naturaleza?",null,"snnsscnn"],["lugar","¿Es un lugar?",null,"snnnsnnc"],["grande","¿Es más grande que un país?",null,"snnscnns"],["antiguo","¿Existe desde hace más de cien años?",null,"ssssssns"],["espana","¿Tiene que ver con España?",null,"snnnsscn"],["mapa","¿Sale en los mapas?",null,"snncsnns"],["grafica","¿Es una gráfica de datos?",null,"nccnnsnn"],["numeros","¿Tiene que ver con números?",null,"nsnnnsnc"],["tiempo","¿Tiene que ver con el tiempo o el calendario?",null,"nncnnsns"],["cielo","¿Tiene que ver con el cielo?",null,"nnnsnsnn"],["sonido","¿Tiene que ver con algún sonido?",null,"nnsnnncn"],["letras","¿Tiene que ver con letras o palabras?",null,"nncnnnsn"],["truco","¿Tiene la imagen algún truco (girada, al revés…)?",null,"snnnscns"],["comida","¿Tiene que ver con la comida o la bebida?",null,"nnnnnnnn"],["juego","¿Tiene que ver con un juego o un deporte?",null,"nnnnnnnn"],["ciencia","¿Se estudia en el colegio?",null,"ssnsscns"],["vista","¿Se puede ver con tus propios ojos?",null,"snnsscnn"],["girada","¿Está la imagen girada?","truco","nnnnsnns"],["espejo","¿Está la imagen reflejada como en un espejo?","truco","nnnnsnnn"],["negat","¿Está pintado lo que normalmente se deja en blanco?","truco","snnnnnnn"],["lupa","¿Está muy ampliada, como con una lupa?","truco","nnnnnnnn"],["estira","¿Está estirada o aplastada?","truco","nnnnnnnn"],["falta","¿Le falta una parte?","truco","nnnnnnnn"],["cuadros","¿Está dibujada a cuadros, con muy poca resolución?","truco","snnnsnnn"],["inicio","¿Empieza en un sitio distinto del habitual (por ejemplo, otra fecha)?","truco","nnnnnsnn"],["giro90","¿Está girada 90 grados?","girada","nnnnsnns"],["giro180","¿Está boca abajo?","girada","nnnnnnnn"],["linea","¿Es una línea, y no una superficie?","mapa","nnnnnnns"],["pais","¿Es un país, o varios?","mapa","nnnnsnnn"],["agua","¿Es agua?","mapa","snnnnnnn"],["isla","¿Es una isla?","mapa","nnnnnnnn"],["ciudad","¿Es una ciudad?","mapa","nnnnnnnn"],["montana","¿Es una montaña o una cordillera?","mapa","nnnnnnnn"],["desierto","¿Es un desierto?","mapa","nnnnnnnn"],["oceano","¿Es un océano?","agua","nnnnnnnn"],["mar","¿Es un mar?","agua","snnnnnnn"],["lago","¿Es un lago?","agua","nnnnnnnn"],["rio","¿Es un río?","agua","nnnnnnnn"],["golfo","¿Es un golfo o una bahía?","agua","nnnnnnnn"],["estrecho","¿Es un estrecho?","agua","nnnnnnnn"],["marEur","¿Baña Europa?","mar","snnnnnnn"],["marAme","¿Baña América?","mar","nnnnnnnn"],["marAsia","¿Baña solo Asia?","mar","nnnnnnnn"],["marCerr","¿Es un mar cerrado, sin salida al océano?","mar","nnnnnnnn"],["mCarib","¿Es el mar Caribe?","mar","nnnnnnnn"],["mRojo","¿Es el mar Rojo?","mar","nnnnnnnn"],["mCaspi","¿Es el mar Caspio?","mar","nnnnnnnn"],["mNegro","¿Es el mar Negro?","marEur","nnnnnnnn"],["mCanta","¿Es el mar Cantábrico?","marEur","nnnnnnnn"],["mNorte","¿Es el mar del Norte?","marEur","nnnnnnnn"],["mBalti","¿Es el mar Báltico?","marEur","nnnnnnnn"],["mMedi","¿Es el mar Mediterráneo?","marEur","snnnnnnn"],["mAdria","¿Es el mar Adriático?","marEur","nnnnnnnn"],["mEgeo","¿Es el mar Egeo?","marEur","nnnnnnnn"],["mTirre","¿Es el mar Tirreno?","marEur","nnnnnnnn"],["europa","¿Está en Europa?","pais","nnnnsnnn"],["africa","¿Está en África?","pais","nnnnnnnn"],["america","¿Está en América?","pais","nnnnnnnn"],["asia","¿Está en Asia?","pais","nnnnnnnn"],["unsolo","¿Es un solo país?","pais","nnnnnnnn"],["oceania","¿Está en Oceanía?","pais","nnnnnnnn"],["poblado","¿Tiene más de 100 millones de habitantes?","pais","nnnnnnnn"],["nordico","¿Es un país nórdico?","europa","nnnnnnnn"],["esteEur","¿Es del este de Europa?","europa","nnnnnnnn"],["ue","¿Es de la Unión Europea?","europa","nnnnsnnn"],["tieneIsl","¿Tiene islas?","europa","nnnnsnnn"],["penin","¿Es una península?","europa","nnnnsnnn"],["pItal","¿Es la península itálica?","penin","nnnnnnnn"],["pBalc","¿Es la península balcánica?","penin","nnnnnnnn"],["pEscan","¿Es la península escandinava?","penin","nnnnnnnn"],["pIber","¿Es la península ibérica?","penin","nnnnsnnn"],["pJutl","¿Es Jutlandia?","penin","nnnnnnnn"],["pCrim","¿Es Crimea?","penin","nnnnnnnn"],["pKola","¿Es la península de Kola?","penin","nnnnnnnn"],["pPelop","¿Es el Peloponeso?","penin","nnnnnnnn"],["frontera","¿Es una frontera entre países?","linea","nnnnnnnn"],["costa","¿Es una costa?","linea","nnnnnnnn"],["lrio","¿Es el curso de un río?","linea","nnnnnnnn"],["carret","¿Es una carretera o una vía de tren?","linea","nnnnnnnn"],["ruta","¿Es la ruta de un viaje famoso?","linea","nnnnnnnn"],["imagin","¿Es una línea imaginaria, como el ecuador?","linea","nnnnnnns"],["paralelo","¿Es un paralelo?","imagin","nnnnnnnn"],["ecuador","¿Es el ecuador?","imagin","nnnnnnnn"],["tropico","¿Es un trópico o un círculo polar?","imagin","nnnnnnnn"],["meridi","¿Es un meridiano?","imagin","nnnnnnnc"],["nombre","¿Tiene nombre propio?","imagin","nnnnnnns"],["tordes","¿Es la línea de Tordesillas?","imagin","nnnnnnnn"],["isobara","¿Es una isobara o una isoterma?","imagin","nnnnnnnn"],["wallace","¿Es la línea de Wallace?","imagin","nnnnnnnn"],["huso","¿Es el límite de un huso horario?","imagin","nnnnnnnc"],["greenw","¿Es el meridiano de Greenwich?","meridi","nnnnnnnn"],["pasaEsp","¿Pasa por España?","meridi","nnnnnnnn"],["opuesto","¿Sigue casi siempre el meridiano opuesto al de Greenwich?","meridi","nnnnnnns"],["aparta","¿Se aparta del meridiano en algunos sitios?","meridi","nnnnnnns"],["dia","¿Al cruzarla cambia el día del calendario?","opuesto","nnnnnnns"],["contin","¿Separa dos continentes?","opuesto","nnnnnnnn"],["tratado","¿La fijó un tratado firmado por todos los países?","opuesto","nnnnnnnn"],["aviones","¿Es una ruta que siguen los aviones?","opuesto","nnnnnnnn"],["estrel","¿Son estrellas?","cielo","nnnsnnnn"],["planet","¿Son planetas?","cielo","nnnnnnnn"],["sol","¿Tiene que ver con el Sol?","cielo","nnnnnsnn"],["luna","¿Tiene que ver con la Luna?","cielo","nnnnnnnn"],["meteo","¿Tiene que ver con el tiempo que hace (lluvia, nubes…)?","cielo","nnnnnnnn"],["cometa","¿Es un cometa o un meteorito?","cielo","nnnnnnnn"],["conste","¿Forman una constelación?","estrel","nnnsnnnn"],["galaxia","¿Es una galaxia?","estrel","nnnnnnnn"],["unaEst","¿Es una sola estrella?","estrel","nnnnnnnn"],["cumulo","¿Es un cúmulo de estrellas?","estrel","nnnnnnnn"],["zodiaco","¿Es un signo del zodiaco?","conste","nnnnnnnn"],["animal","¿Su nombre es el de un animal?","conste","nnnsnnnn"],["person","¿Su nombre es el de un personaje?","conste","nnnnnnnn"],["cObjeto","¿Su nombre es el de un objeto?","conste","nnncnnnn"],["vistaEsp","¿Se ve desde España?","conste","nnnsnnnn"],["todoAno","¿Se ve todo el año desde España?","vistaEsp","nnnsnnnn"],["surHem","¿Es del hemisferio sur?","conste","nnnnnnnn"],["aOso","¿Es una osa?","animal","nnnsnnnn"],["aLeon","¿Es un león?","animal","nnnnnnnn"],["aEscor","¿Es un escorpión?","animal","nnnnnnnn"],["aToro","¿Es un toro?","animal","nnnnnnnn"],["aCisne","¿Es un cisne?","animal","nnnnnnnn"],["aAguila","¿Es un águila?","animal","nnnnnnnn"],["oMayor","¿Es la mayor de las dos?","aOso","nnnsnnnn"],["oMenor","¿Es la menor de las dos?","aOso","nnnnnnnn"],["horas","¿Mide horas?","sol","nnnnnsnn"],["temper","¿Mide temperatura?","sol","nnnnnnnn"],["eclipse","¿Tiene que ver con los eclipses?","sol","nnnnnnnn"],["manchas","¿Tiene que ver con las manchas solares?","sol","nnnnnnnn"],["alturaS","¿Mide lo alto que sube el Sol?","sol","nnnnnnnn"],["sombras","¿Tiene que ver con las sombras?","sol","nnnnnnnn"],["sitioEsp","¿Es de un sitio de España?","horas","nnnnnsnn"],["hSur","¿Es del hemisferio sur?","horas","nnnnnnnn"],["hPolo","¿Es de un polo?","horas","nnnnnnnn"],["hEcuad","¿Es del ecuador?","horas","nnnnnnnn"],["hNorte","¿Es del hemisferio norte?","horas","nnnnnsnn"],["granCiu","¿Es de una gran ciudad?","horas","nnnnnsnn"],["cMadrid","¿Es de Madrid?","sitioEsp","nnnnnsnn"],["cBcn","¿Es de Barcelona?","sitioEsp","nnnnnnnn"],["cSevilla","¿Es de Sevilla?","sitioEsp","nnnnnnnn"],["cCanar","¿Es de Canarias?","sitioEsp","nnnnnnnn"],["cGalic","¿Es de Galicia?","sitioEsp","nnnnnnnn"],["cValen","¿Es de Valencia?","sitioEsp","nnnnnnnn"],["cBilbao","¿Es de Bilbao?","sitioEsp","nnnnnnnn"],["cZarag","¿Es de Zaragoza?","sitioEsp","nnnnnnnn"],["tiempoX","¿Lo de abajo, de izquierda a derecha, es el tiempo?","grafica","nnsnnsnn"],["barras","¿Son barras o rayas sueltas, y no una línea seguida?","grafica","nnsnnnnn"],["econom","¿Es de economía o de dinero?","grafica","nnnnnnnn"],["poblac","¿Es de población?","grafica","nnnnnnnn"],["gTemp","¿Es de temperaturas?","grafica","nnnnnnnn"],["deporte","¿Son resultados deportivos?","grafica","nnnnnnnn"],["anio","¿Abarca un año?","tiempoX","nnnnnsnn"],["unDia","¿Abarca un día?","tiempoX","nnnnnnnn"],["siglos","¿Abarca siglos?","tiempoX","nnnnnnnn"],["repite","¿Se repite igual todos los años?","anio","nnnnnsnn"],["lluvia","¿Tiene que ver con la lluvia?","anio","nnnnnnnn"],["bNumero","¿Cada barra es un número?","barras","nncnnnnn"],["bNota","¿Cada barra es una nota musical?","barras","nnsnnnnn"],["bAnio","¿Cada barra es un año?","barras","nnnnnnnn"],["bPais","¿Cada barra es un país?","barras","nnnnnnnn"],["unaCifra","¿Son números de una sola cifra?","numeros","nsnnnnnn"],["precios","¿Son precios?","numeros","nnnnnnnn"],["fechas","¿Son fechas?","numeros","nnnnnnnn"],["loteria","¿Son números de la lotería?","numeros","nnnnnnnn"],["medidas","¿Son medidas de algo?","numeros","nnnnnnnn"],["edades","¿Son edades?","numeros","nnnnnnnn"],["puntos","¿Son puntuaciones?","numeros","nnnnnnnn"],["dados","¿Son tiradas de un dado?","numeros","nnnnnnnn"],["sucesion","¿Siguen un orden conocido?","numeros","nsnnnnnn"],["fibo","¿Es la sucesión de Fibonacci?","sucesion","nnnnnnnn"],["primos","¿Son los números primos?","sucesion","nnnnnnnn"],["tabla","¿Es una tabla de multiplicar?","sucesion","nnnnnnnn"],["pares","¿Son los números pares?","sucesion","nnnnnnnn"],["cuadrad","¿Son los números al cuadrado?","sucesion","nnnnnnnn"],["cifras","¿Son las cifras de un número famoso?","sucesion","nsnnnnnn"],["nGeom","¿Es un número de la geometría?","cifras","nsnnnnnn"],["nFinanz","¿Es un número de las finanzas o del crecimiento?","cifras","nnnnnnnn"],["nTelef","¿Es un número de teléfono?","cifras","nnnnnnnn"],["nFecha","¿Es una fecha histórica?","cifras","nnnnnnnn"],["nMatric","¿Es una matrícula o un código?","cifras","nnnnnnnn"],["nE","¿Es el número e?","cifras","nnnnnnnn"],["nRaiz2","¿Es la raíz cuadrada de 2?","nGeom","nnnnnnnn"],["nRaiz3","¿Es la raíz cuadrada de 3?","nGeom","nnnnnnnn"],["nAureo","¿Es el número áureo?","nGeom","nnnnnnnn"],["nPi","¿Es el número pi?","nGeom","nsnnnnnn"],["nTau","¿Es el doble de pi?","nGeom","nnnnnnnn"],["cancion","¿Es una canción?","sonido","nnsnnnnn"],["instru","¿Es un instrumento?","sonido","nnnnnnnn"],["sAnimal","¿Es el sonido de un animal?","sonido","nnnnnnnn"],["alarma","¿Es una alarma o un timbre?","sonido","nnnnnnnn"],["voz","¿Es una voz hablando?","sonido","nnnnnnnn"],["conoc","¿La conoce casi todo el mundo?","cancion","nnsnnnnn"],["himno","¿Es un himno?","cancion","nnnnnnnn"],["infantil","¿Es una canción infantil?","cancion","nncnnnnn"],["pelicula","¿Es de una película?","cancion","nnnnnnnn"],["anuncio","¿Es de un anuncio?","cancion","nnnnnnnn"],["ingles","¿Es originalmente en inglés?","conoc","nnsnnnnn"],["celebr","¿Se canta en una celebración?","conoc","nnsnnnnn"],["futbol","¿Se canta en el fútbol?","conoc","nnnnnnnn"],["beatles","¿Es de los Beatles?","conoc","nnnnnnnn"],["espanola","¿Es española?","conoc","nnnnnnnn"],["musical","¿Es de un musical?","conoc","nnnnnnnn"],["kNavid","¿Es de Navidad?","celebr","nnnnnnnn"],["kBoda","¿Es de bodas?","celebr","nnnnnnnn"],["kCumple","¿Es de cumpleaños?","celebr","nnsnnnnn"],["kNochev","¿Es de Nochevieja?","celebr","nnnnnnnn"],["kCarnav","¿Es de Carnaval?","celebr","nnnnnnnn"],["kBautiz","¿Es de bautizos?","celebr","nnnnnnnn"],["kGradu","¿Es de graduaciones?","celebr","nnnnnnnn"],["kHallow","¿Es de Halloween?","celebr","nnnnnnnn"],["manusc","¿Es una palabra escrita a mano?","letras","nnnnnnnn"],["firma","¿Es una firma?","letras","nnnnnnnn"],["recorr","¿Es un recorrido?","letras","nnnnnnsn"],["codigo","¿Es un código, como el Morse?","letras","nnnnnnnn"],["unaLetra","¿Es una sola letra?","letras","nnnnnnnn"],["rTeclado","¿Es un recorrido sobre un teclado?","recorr","nnnnnnsn"],["rMapa","¿Es un recorrido sobre un mapa?","recorr","nnnnnnnn"],["rTablero","¿Es un recorrido sobre un tablero de juego?","recorr","nnnnnnnn"],["rMovil","¿Es un recorrido sobre la pantalla de un móvil?","recorr","nnnnnncn"],["empieza","¿Empieza en el punto gordo?","rTeclado","nnnnnnsn"],["cinco","¿La palabra tiene 5 letras?","rTeclado","nnnnnnsn"],["largaP","¿La palabra tiene más de 7 letras?","rTeclado","nnnnnnnn"],["wObjeto","¿Es el nombre de un objeto?","rTeclado","nnnnnnsn"],["wAnimal","¿Es el nombre de un animal?","rTeclado","nnnnnncn"],["wVerbo","¿Es un verbo?","rTeclado","nnnnnnnn"],["wNombre","¿Es un nombre de persona?","rTeclado","nnnnnnnn"],["ordenad","¿Se usa junto al ordenador?","wObjeto","nnnnnnsn"],["oCocina","¿Se usa en la cocina?","wObjeto","nnnnnnnn"],["oHerram","¿Es una herramienta?","wObjeto","nnnnnnnn"],["oRopa","¿Es ropa?","wObjeto","nnnnnnnn"],["eTeclado","¿Es el teclado?","ordenad","nnnnnnnn"],["ePantal","¿Es la pantalla?","ordenad","nnnnnnnn"],["eRaton","¿Es el ratón?","ordenad","nnnnnnsn"],["eImpres","¿Es la impresora?","ordenad","nnnnnnnn"],["eCable","¿Es un cable?","ordenad","nnnnnnnn"],["eAltav","¿Es un altavoz?","ordenad","nnnnnnnn"],["hora","¿Tiene que ver con la hora?","tiempo","nnnnncns"],["estacion","¿Tiene que ver con las estaciones del año?","tiempo","nnnnnsnn"],["calend","¿Tiene que ver con el calendario?","tiempo","nncnncns"],["reloj","¿Es un reloj?","tiempo","nnnnnnnn"],["histor","¿Es un hecho histórico?","tiempo","nnnnnnnn"]];
window.ENIGMAS = [
 {
  "id": "med",
  "img": "med",
  "titulo": "¿Qué es esta mancha azul?",
  "vale": [
   [
    "mediterraneo"
   ]
  ],
  "casi": [
   [
    "mar"
   ],
   [
    "agua"
   ]
  ],
  "solucion": "El mar Mediterráneo",
  "explica": "Está pintada el agua y no la tierra, y además a cuadros, con muy poca resolución. Mirándolo de lejos se adivina la bota de Italia y el mar Egeo, a la derecha."
 },
 {
  "id": "pi",
  "img": "pi",
  "titulo": "¿Qué representa este garabato?",
  "vale": [
   [
    " pi "
   ],
   [
    "3 14"
   ],
   [
    "3 1416"
   ]
  ],
  "casi": [
   [
    "numero"
   ],
   [
    "cifra"
   ],
   [
    "decimal"
   ],
   [
    "matematic"
   ]
  ],
  "solucion": "Las cifras del número pi",
  "explica": "Es un «paseo» por las cifras de pi (3,14159…), empezando en el punto gordo. Cada cifra marca hacia dónde va el siguiente paso: el 0 hacia la derecha y cada cifra más gira 36° en sentido antihorario."
 },
 {
  "id": "cum",
  "img": "cum",
  "titulo": "¿Qué representan estas rayas?",
  "vale": [
   [
    "cumpleanos"
   ],
   [
    "birthday"
   ]
  ],
  "casi": [
   [
    "cancion"
   ],
   [
    "melodia"
   ],
   [
    "musica"
   ]
  ],
  "solucion": "La melodía de «Cumpleaños feliz»",
  "explica": "Es solo el ritmo de «Cumpleaños feliz», con todas las notas a la misma altura: cada rectángulo es una nota y su largo es lo que dura. Las parejas de «cum-ple» son la nota con puntillo seguida de la cortita."
 },
 {
  "id": "osa",
  "img": "osa",
  "titulo": "¿Qué representan estos puntos?",
  "vale": [
   [
    "osa",
    "mayor"
   ],
   [
    "carro"
   ],
   [
    "big",
    "dipper"
   ],
   [
    "ursa",
    "major"
   ]
  ],
  "casi": [
   [
    "osa",
    "menor"
   ],
   [
    "osa"
   ],
   [
    "constelacion"
   ]
  ],
  "solucion": "La Osa Mayor (el Carro)",
  "explica": "Son las estrellas principales de la Osa Mayor, todas del mismo tamaño y colocadas como se ven en el cielo. El famoso Carro está dentro: las siete estrellas de arriba a la derecha y el centro."
 },
 {
  "id": "ibe",
  "img": "ibe",
  "titulo": "¿Qué es esta figura?",
  "vale": [
   [
    "espana"
   ],
   [
    "iberica"
   ],
   [
    "iberia"
   ],
   [
    "spain"
   ]
  ],
  "casi": [
   [
    "portugal"
   ],
   [
    "peninsula"
   ]
  ],
  "solucion": "La península ibérica, reflejada en un espejo",
  "explica": "Es España y Portugal reflejadas como en un espejo, giradas 90° y dibujadas a cuadros. Para verla hay que darle la vuelta y girarla."
 },
 {
  "id": "luz",
  "img": "luz",
  "titulo": "¿Qué representa esta curva?",
  "vale": [
   [
    "luz"
   ],
   [
    "duracion",
    "dia"
   ],
   [
    "horas",
    "sol"
   ],
   [
    "horas",
    "dia"
   ],
   [
    "amanecer",
    "anochecer"
   ],
   [
    "amanecer",
    "atardecer"
   ],
   [
    "salida",
    "puesta"
   ],
   [
    "insolacion"
   ],
   [
    "daylight"
   ]
  ],
  "casi": [
   [
    "sol"
   ],
   [
    "estacion"
   ],
   [
    "amanecer"
   ],
   [
    "anochecer"
   ],
   [
    "atardecer"
   ],
   [
    "ocaso"
   ],
   [
    "noche"
   ]
  ],
  "solucion": "Las horas de luz de cada día del año en Madrid",
  "explica": "Es la duración del día en Madrid, del 1 de julio al 30 de junio. Lo más bajo es el 21 de diciembre (unas 9 h 17 min) y los extremos, junto al 21 de junio, unas 15 h 4 min."
 },
 {
  "id": "tec",
  "img": "tec",
  "titulo": "¿Qué representa este trazo?",
  "vale": [
   [
    "raton"
   ],
   [
    "mouse"
   ]
  ],
  "casi": [
   [
    "teclado"
   ],
   [
    "palabra"
   ]
  ],
  "solucion": "La palabra «ratón» tecleada en un teclado",
  "explica": "La línea une, sobre un teclado español, las teclas R-A-T-O-N, empezando en el punto gordo. Es un ratón… ¡escrito con su vecino de mesa!"
 },
 {
  "id": "idl",
  "img": "idl",
  "titulo": "¿Qué representa esta línea?",
  "vale": [
   [
    "cambio",
    "fecha"
   ],
   [
    "linea",
    "fecha"
   ],
   [
    "antimeridiano"
   ],
   [
    "date",
    "line"
   ]
  ],
  "casi": [
   [
    "180"
   ],
   [
    "meridiano"
   ]
  ],
  "solucion": "La línea internacional de cambio de fecha",
  "explica": "Está girada 90°: el sur a la izquierda y el norte a la derecha. Va casi siempre por el meridiano 180, justo al otro lado del mundo de Greenwich, y se desvía para rodear el estrecho de Bering, las Aleutianas, Kiribati (el «gancho») y Samoa y Tonga. Si la cruzas en barco o en avión, cambias de día."
 }
];
