'use strict'

let ficheros = ['datos_entrada.txt','datos_entrada2.txt']

ficheros.forEach ( f => {cargarFichero(f)})

function cargarFichero(fichero){
	fetch(fichero)					//Carga de fichero
		.then(respuesta => respuesta.text()) 	//Sacar el texto
		.then(funcion1)							//Pasar el texo a la función
}
	
	
	
const DIAS = ["MARTES","MIERCOLES","JUEVES","VIERNES","SABADO","DOMINGO"]

function funcion1(entrada){
	const listaVentas = entrada.split("\r\n")
	let ventas = []
	for(let i=0;i<listaVentas.length;i++){
		if(listaVentas[i] === '-1')
			break
		ventas [i] = +listaVentas[i]
	}
	
	let supera = 'true'
	
	let j=1
	let posMin=0
	let posMax=0
	
	for(let j=1;j<ventas.length;j++){
		if(ventas[posMin]>ventas[j]){posMin=j}
		if(ventas[posMax]<ventas[j]){posMax=j}
	}
	
	let media = (ventas[0]+ventas[1]+ventas[2]+ventas[3]+ventas[4]+ventas[5])/6
	
	if(media<ventas[5]){supera='true'}
	else{supera='false'}
	
	console.log(ventas)
	
	let diaMax = DIAS[posMax]
	let diaMin = DIAS[posMin]
	
	let superaTexto = 'NO'
	if(supera)
		superaTexto='SI'

	console.log(diaMax+" "+diaMin+" "+superaTexto)
}