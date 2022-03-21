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
		$scope.Grupo_ID ="DIU2.nombreJA";
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
				Name: "Lucía Rodríguez",
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
                goal1: "Quiere grabar un nuevo vídeo en España y le apetece visitar el sur de España ya que lleva mucho tiempo sin ir",
                touch1: "Móvil(instagram y calendario)",
                feel1: "5",
                con1: "Mirar en que fechas podría ir a visitar el sur de España sin que le coincida con reuniones u otros proyectos",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca información en Internet e informarse sobre los hostels y el tipo de servicio que ofrecen",
                touch2: "Ordenador",
                feel2: "3",
                con2: "Para simular la experiencia de un usuario real de un hostel, planea él mismo su viaje sin ayuda de su agencia personal, y observa que, en las fechas en las que le viene bien ir, hay alta ocupación",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Planea irse con otro influencer y hacer el vídeo juntos, pero su amigo no puede asistir en la misma fecha que él",
                touch3: "Móvil (whatsApp)",
                feel3: "2",
                con3: "Se enfada ya que es más complicado grabar el vídeo solo y piensa en cancelar el viaje",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Su agencia de social media insiste en que realice el viaje y le envía más información de experiencias de usuarios en hostels del mundo",
                touch4: "Móvil (llamada), Ordenador",
                feel4: "3",
                con4: "Sigue sin estar del todo contento por tener que realizar sólo el viaje debido a su miedo a los aviones pero decide seguir adelante",
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Busca en diferentes planes para hacer en Granada, así como hostels para hospedarse",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Observa que al coincidir su tiempo de estancia con Semana Santa, los precios son más elevados pero su agencia contacta con él y le comenta que el Hostel Carlota Braun le ofrece hospedarse gratuitamente a cambio de una promoción en sus redes sociales",
                ima5: "cartoon-PCtyping.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Nacho hace la reserva y se lo comenta a sus followers a través de las RRSS",
                touch6: "Móvil (instagram, tiktok, twitter, youtube)",
                feel6: "5",
                con6: "Feliz por haber realizado la reserva fácil y correctamente, Nacho llama a su familia que vive en Almería y les dice que cuando acabe su visita a Granada, iría a verlos tras muchos años",
                ima6: "cartoon-resting.png",
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



