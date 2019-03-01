var hombre;
var juego;

window.onload = function(){

	 var juego = function(){
		var letra = ["Hola","Perdo","Juan","Camino","Asalto",
		"Comida","Carga","pintura","agua","fuego",
		"tierra","crema","azul","cielo","tecla",
		"silla","perro","gato","salsa","automovil","carro",
		"lora", "libro", "bus", "pantalla", "aereonave", "hola", "pajaro",
		"salida", "marcador", "lapiz", "traje", "bruja", "mejorando", 
		"trampa", "ahorcado", "reloj", "programa", "tinta", "balanza",
		"juego", "peluche", "sandia", "melon", "uvas", "musica",
		"Nicaragua", "abanico", "consola", "ropa", "sapo", "aves", "pelota",
		"caramelo", "estuche", "zapato", "caballo", "camilla", "enfermero",
		"tonto", "juego", "comida", "manzana", "animal", "clave",
		"sirena", "corazon", "pasado", "muerte",
		"coche", "mano", "pie", "pastel", "pasta", "puerta", "edificio",
		"facebook", "twitter", "calle", "callejon", "sopa", "suerte",
		"villano", "sal", "mar", "oso", "pollo", "cerdo", "piña", 
		"colombia", "carta", "sentimiento", "destino", "verdad",
		"mirar", "espejo", "sombra", "siempre", "eternidad", 
		"olvidar", "luz", "primero", "conocer", "oscuridad",
		"color", "salvacion", "hoy", "entrentar"
		];
		var rnd, largo;
		var palabra, palabraOriginal;
		var letrasElegidas = [];
		this.quedan;
		this.escogidas;
		return {

			generar: function(){
				var largo = letra.length;
				rnd = Math.floor((Math.random()*largo));
				palabraOriginal = letra[rnd];
				palabra = palabraOriginal;
				this.quedan = palabra.length;
				trazo.lineWidth = 6;
				console.log('palabra: ' + palabra)
				return rnd;
			},

			verificarLetra: function(l){
				palabra = palabra.toLowerCase();
				l = l.toLowerCase();
				if (l!=""){
					if (this.quedan<=0) {
						console.log("Ganaste :')")
					}
					else{
						var palabraResto = palabra;
						var correcta = false;
						for (var i = palabra.length; i >= 0; i--) {
							
							if (palabra.charAt(i) == l){
								palabraResto = palabraResto.substring(0,i)+palabraResto.substring(i+1,palabra.length);
								this.quedan--;
								correcta = true;
							}
						};
						palabra = palabraResto;
						if (this.quedan == 0) {
							console.log("Ganaste :')")
						};
						console.log('Quedan: ' + this.quedan)
						return correcta;
					}
					
				}
				return true;
			},

			dibujarCampo: function(l){
				var ancho = 350;
				var anchoCanvas = 400;
				var espacio = ((ancho * 0.20)/(this.quedan-1));
				var anchoLinea = (ancho* 0.80)/this.quedan;
				var inicioX = (anchoCanvas - ancho) / 2;

				for (var i = 0; i < (this.quedan); i++) {
					trazo.beginPath();
					trazo.lineWidth = 6;
					trazo.moveTo(inicioX,380);
					trazo.lineTo(inicioX = inicioX + anchoLinea,380);
					inicioX += espacio;
					trazo.strokeStyle = "#272822";
					trazo.stroke();
					trazo.closePath();
				};

			},

			dibujarLetra: function(l){
				var ancho = 350;
				var anchoCanvas = 400;
				var espacio = ((ancho * 0.20)/(palabraOriginal.length-1));
				var anchoLinea = (ancho* 0.80)/palabraOriginal.length;
				var inicioX = (anchoCanvas - ancho) / 2;

				palabraOriginal = palabraOriginal.toLowerCase();
				l = l.toLowerCase();

				for (var i = 0; i < (palabraOriginal.length); i++) {
					trazo.beginPath();
					trazo.lineWidth = 6;
					trazo.moveTo(inicioX,380);
					puntoInicio = inicioX + ((anchoLinea-30)/2); // Para centrar la letra en la linea
					inicioX = inicioX + anchoLinea
					if (palabraOriginal.charAt(i) == l) {
						trazo.lineTo(inicioX,380);
						trazo.font = "bold 30px sans-serif";
						trazo.fillStyle = "#0080FF";
						trazo.fillText(l.toUpperCase(),puntoInicio,375);
					};
					
					inicioX += espacio;
					trazo.strokeStyle = "#0080FF";
					trazo.stroke();
					trazo.closePath();
				};

			},
			gane: function(){
				if (this.quedan <= 0){
					return true;
				}
				else{
					return false;
				}
			},
			generarPalabra: function(){
				var ancho = 350;
				var anchoCanvas = 400;
				var espacio = ((ancho * 0.20)/(palabraOriginal.length-1));
				var anchoLinea = (ancho* 0.80)/palabraOriginal.length;
				var inicioX = (anchoCanvas - ancho) / 2;

				palabraOriginal;

				var indiceLetra = [];

				for (var i = 0; i < (palabraOriginal.length); i++) {
					trazo.beginPath();
					trazo.lineWidth = 6;
					trazo.moveTo(inicioX,380);
					puntoInicio = inicioX + ((anchoLinea-30)/2); // Para centrar la letra en la linea
					inicioX = inicioX + anchoLinea
					trazo.lineTo(inicioX,380);
					trazo.font = "bold 30px sans-serif";
					trazo.fillStyle = "#E9070D";
					trazo.fillText(palabraOriginal.charAt(i).toUpperCase(),puntoInicio,375);
					inicioX += espacio;
					trazo.strokeStyle = "#E9070D";
					trazo.stroke();
					trazo.closePath();
				};

			},
		};
	};



	var ahorcado = function(con){
		this.contexto = con;
		this.maximo = 5;
		this.intentos = 0;
	}

	var hombre = new ahorcado('2d');
	var can = document.getElementById('ahorcado');
	var trazo = can.getContext(hombre.contexto);
	trazo.fillStyle = '#FFFFFF';
	trazo.fillRect(0,0,400,400);
	
	function dibujarPoste(){
		var fondo = new Image (); 
		fondo.src = "img/fondo.png";
		fondo.onload = function (){
			trazo.drawImage(fondo, 0, 0);
			palabra.dibujarCampo();
		}
	};

	
	palabra = new juego();
	palabra.generar();
	console.log("Quedan: " + palabra.quedan);
	dibujarPoste();
	var g=0;
	var p=0;

	ahorcado.prototype.dibujar = function(){
		can = document.getElementById('ahorcado');
		trazo = can.getContext(hombre.contexto);

		var tex = puestas.innerHTML;
		puestas.innerHTML = "<li class='text-danger'>" + letra.value + "</li>";
		puestas.innerHTML += tex;

		if (palabra.verificarLetra(letra.value.charAt(0)) && this.intentos <=5){
			palabra.dibujarLetra(letra.value.charAt(0));

			if (palabra.gane()){
				texto.innerHTML = "Ganaste :D";
				btn.value = "Reiniciar?";
				letra.disabled = true;
				this.intentos = 10;
				contento = new Image();
				contento.src = "img/contento.png";
				contento.onload = function(){
					dibujarContento();
					
				}
			} 
		}
		else{
			trazo.fillStyle = '#F5EBA0';
			trazo.strokeStyle = '#F5EBA0';
			if (palabra.quedan==0) {
				reset();
				g++;
				ganadas.innerHTML = g;
			};
			if (this.intentos >= 0){
				cabeza = new Image();
				cabeza.src = "img/cabeza.png";
				cabeza.onload = function(){
					dibujarCuerpo(0);
				}
			};
			if (this.intentos >= 1){
				cuerpo = new Image();
				cuerpo.src = "img/cuerpo.png";
				cuerpo.onload = function(){
					dibujarCuerpo(1);
				}
			};
			if (this.intentos >= 2){
				piernaizq = new Image();
				piernaizq.src = "img/piernaizq.png";
				piernaizq.onload = function(){
					dibujarCuerpo(2);
				}
			};
			if (this.intentos >= 3){
				piernader = new Image();
				piernader.src = "img/piernader.png";
				piernader.onload = function(){
					dibujarCuerpo(3);
				}
			};
			if (this.intentos >= 4){
				brazoder = new Image();
				brazoder.src = "img/brazoder.png";
				brazoder.onload = function(){
					dibujarCuerpo(4);
				}
			};
			if (this.intentos >= 5){
				brazoizq = new Image();
				brazoizq.src = "img/brazoizq.png";
				brazoizq.onload = function(){
					dibujarCuerpo(5);
				}
				
				cabezamuerta = new Image();
				cabezamuerta.src = "img/cabezamuerta.png";
				cabezamuerta.onload = function(){
					dibujarCuerpo(6);
				}
				// Perdiste
				btn.value = 'Reiniciar?';
				texto.innerHTML = "Perdiste :(";
				letra.value = "";
				letra.disabled = true;
				letra.enable = false;
			};
			if(this.intentos >= 6) {
				// Cuando ya perdio y se va a reiniciar 
				// alert(palabra.perdidas);
				p++;
				perdidas.innerHTML = p;
				reset();
			}
			this.intentos++;

		}
		letra.value = '';


	}; // fin de la funcion dibujar


	var letra = document.getElementById('letra');
	var btn = document.getElementById('btn');
	var texto = document.getElementById('texto');
	var form = document.getElementById("formulario");
	var puestas = document.getElementById("puestas");
	var ganadas = document.getElementById("ganadas");
	var perdidas = document.getElementById("perdidas");


	form.addEventListener('submit',function(e){
		e.preventDefault();
		hombre.dibujar();
		letra.focus();
		if (letra.value != "") {
			return false;

		}
	});

	var cabeza = new Image();
	var cabezamuerta = new Image();
	var cuerpo = new Image();
	var piernaizq = new Image();
	var piernader = new Image();
	var brazoder = new Image();
	var brazoizq = new Image();
	var contento = new Image();


	function dibujarCuerpo(i){
		if (i>=2) {
			trazo.drawImage(piernaizq,99,246);
		};
		if (i>=3) {
			trazo.drawImage(piernader,139,246);
		};
		if (i>=4) {
			trazo.drawImage(brazoder,168,190);
		};
		if (i>=5) {
			trazo.drawImage(brazoizq,58,190);
			
		};
		if (i>=1) {
			trazo.drawImage(cuerpo,99,180);
		};
		if (i>=0) {
			trazo.drawImage(cabeza,95,90);
		};
		if (i >= 6) {
			trazo.drawImage(cabezamuerta,95,90);
			palabra.generarPalabra();
		};
		if (true) {};
	}

	function reset(){
		trazo.clearRect(0,0,400,400);
		btn.value = 'Boom';
		hombre.intentos = -1;
		dibujarPoste();
		palabra.generar();
		palabra.dibujarCampo();
		texto.innerHTML = "Elige una letra";
		letra.disabled = false;
		puestas.innerHTML = "";
		letra.focus();
	}

	function dibujarContento(){
		trazo.drawImage(contento,95,90);
	}

	
}; // fin del onload;