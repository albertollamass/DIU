/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.nombreJA";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Lucía",
                Photo: "lucia.png",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere preparar un viaje con sus amigas (5 amigas y ella) para el puente de mayo (30 abril, 1, 2 mayo)",
                touch1: "Agenda",
                feel1: "5",
                con1: "Ver si sus amigas no trabajan y ver cuantas pueden ir a Granada en la fecha deseada",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en Internet ofertas de hoteles para esas fechas y pregunta a compañeros de clase que hayan estado en Granada por lugares para hospedarse",
                touch2: "Ordenador",
                feel2: "3",
                con2: "No encuentra un hotel barato, situado en el centro y que ofrezca actividades para hacer en el hotel",
                ima2: "cartoon-PCsurprised.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Un día mirando Instagram, le aparece un anuncio de un hostel en Barcelona y decide buscar hostels en Granada",
                touch3: "Móvil (Instagram)",
                feel3: "3",
                con3: "Esta preocupada por si a sus amigas no les gusta su idea del 'hostel'",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca en Youtube vídeos acerca de gente contando su experiencia en 'hostels'",
                touch4: "Ipad",
                feel4: "3",
                con4: "No le convence del todo la idea de quedarse en un 'hostel' pero viendo que es lo más asequible y entretenido decide informarse más sobre hostels en Granada",
                ima4: "cartoon-thinking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Lucía descubre que en Granada hay únicamente 3 hostels por lo que decide analizar cuál es el mejor",
                touch5: "Móvil (videollamada)",
                feel5: "4",
                con5: "Algo más animada, realiza una videollamada con sus amigas presentándoles las opciones disponibles y viendo la disponibilidad de ellas",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Lucía consigue reservar en el Hostel Carlota Braun una habitación para 6 personas",
                touch6: "ordenador",
                feel6: "3",
                con6: "Tras tener ciertos problemas con la reserva ya que no coincidian los precios de la página web con los de la página de reserva, Lucía acaba satisfecha de haber podido organizar la escapada a Granada con sus amigas",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Nacho Cordero",
                Photo: "nacho.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere visitar una ciudad emblemática de España y compartirlo con sus followers",
                touch1: "móvil(instagram y calendario)",
                feel1: "5",
                con1: "Mirar que fecha no le coincide con ninguna reunión ni ningún otro proyecto",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca información en Internet para alojarse en un hostel",
                touch2: "Ordenador",
                feel2: "3",
                con2: "La mayoría de los hostels tienen su aforo al máximo",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Otro amigo influencer, que tenía planeado irse con él, se raja y lo deja tirado",
                touch3: "móvil (whatsApp)",
                feel3: "2",
                con3: "Se ralla y piensa que su amigo le ha traicionado",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su agencia de social media le envia ofertas de viajes y las mira detenidamente",
                touch4: "móvil (llamada)",
                feel4: "3",
                con4: "Tiene que alquilar un coche para moverse por la ciudad porque el suyo está en el taller",
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Selecciona tres ciudades con hostels a buenos precios",
                touch5: "móvil (telegram)",
                feel5: "5",
                con5: "Su agencia le dice que le paga todo el viaje",
                ima5: "cartoon-phone-sitting.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Hace la reserva y se lo comenta a sus followers a través de las RRSS ",
                touch6: "móvil (instagram, tiktok y twitter)",
                feel6: "4",
                con6: "Se acuerda de su pánico a los aviones, pero desconecta tomándose algo con sus amigos",
                ima6: "cartoon-resting.png",
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



