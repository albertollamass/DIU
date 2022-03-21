/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.nombreJA";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Lucia Rodríguez",
				Photo: "lucia.png",
				Quote: "Pequeños momentos, grandes recuerdos",
				Age: 25,
				Occupation: "Estudiante de Master en Bioinformática",
				Family: "Con pareja desde hace 2 años",
				Location: "Barcelona, España",
				Character: "Le gusta leer, viajar, y especialmente cantar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Formarse adecuadamente y trabajar en una empresa que se centre en prevenir el cáncer", "Conseguir asistir al concierto de año nuevo en la Ópera de Viena", "Aprender a cocinar y preparar platos con su pareja", "Ayudar a sus padres a pagar la hipóteca"],
				Frustrations: ["No ser capaz de cantar en público delante de mucha gente", "No dedicar demasiado tiempo a la vida en pareja", "No ser capaz de sacar tiempo para aprender idiomas nuevos"],
				Bio: "Nacida en Águilas, Murcia, Lucía se formó en el IES Rey Carlos III y años más tarde se graduó en Biotecnología en la UPV (Universitat Politècnica de València). Finalizado el grado, decidió continuar con sus estudios en Barcelona, lugar donde se encuentran grandes empresas biotecnólogas realizando el Master en Bioinformática en la UAB (Universitat Autònoma de Barcelona). Hace tres años, mientras estudiaba el grado, conoció en Valencia a su actual pareja Daniel, que actualmente es Community Manager del FC Barcelona.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 3.5 },
					{ Name: "RRSS", Value: 2.5 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "Tras finalizar el periodo lectivo, quiere desconectar de la gran ciudad y pasar un fin de semana de vacaciones con sus amigas de Águilas",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Ignacio (Nacho) Cordero",
				Photo: "nacho.jpg",
				Quote: "Eres lo que publicas",
				Age: 22,
				Occupation: "Influencer",
				Family: "Soltero",
				Location: "Manchester, UK",
				Character: "Le gusta compartir sus experiencias personales en las redes sociales",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Independizarse cuanto antes y mudarse a EEUU", "Llegar al millón de seguidores en Instagram", "Conseguir que sus padres dejen de ver ser influencer como un hobbie y que vean que es su trabajo"],
				Frustrations: ["Le encanta viajar, pero tiene miedo a los aviones", "Confía demasiado rápido en personas que acaba de conocer y luego se lleva decepciones"],
				Bio: "Nacido en Almería, pero por trabajo, sus padres se mudaron al año de nacer él a Manchester. A medida que fue haciéndose mayor, se aficionó a las redes sociales y a los videos de influencers travellers por lo que decidió intentar convertirse en uno de ellos. Actualmente es influencer y comparte práctimente toda su vida en las redes sociales. Le encanta viajar y conocer gente nueva ya sea por España o en cualquier parte del mundo",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Su agencia le ha comentado que un nuevo tipo de hotel está apareciendo en España y pretende grabar un vídeo para Youtube promocionando los hostels",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			
			}
		];
		$scope.model = $scope.Personas[0];

	}])