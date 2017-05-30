'use strict';

angular.module('meanappApp')
  .controller('MainCtrl', function ($scope, $http) {
   	

  	var loadData = function()
  	{
  		$http.get('/lista_estudiante').success(function(response){

  		console.log(response); 

  		$scope.lista_estudiante = response; 
  		}); 
  	}; 



  	$scope.RegistrarEstudiante = function(estudiante)   
  	{
  		
  		$http.post('/RegistrarEstudiante', estudiante).sucess(function(res){

  			console.log(res); 

  			txtnombre.value = ""; 
  			txtapellido.value = ""; 
  			txttelefono.value = ""; 
  			txtcurso.value = ""; 
  			txtpuntos.value = ""; 
  			loadData();  
  		 
  		}); 
  	}; 


    $scope.EliminarRegistro  = function(estudiante)
    {
        $http.post('/EliminarRegistro', { 'id' : estudiante._id }).success(function(res){
          console.log(res); 
              loadData(); 
        }); 
    }; 


    $scope.ActualizarEstudiante = function(estudiante)
    { 
       $http.post('/ActualizarEstudiante', estudiante  ).success(function(res){
          console.log(res); 

        }); 

       console.log(estudiante); 

    }; 

    $scope.copy = {}; 
    $scope.editing = false; 

    $scope.Editar = function(estudiante)
    {
        $scope.editing = $scope.lista_estudiante.indexOf(estudiante);
        $scope.copy = angular.copy(estudiante); 
    }

    $scope.Cancelar = function(estudiante)
    {
       $scope.lista_estudiante[$scope.editing] = $scope.copy; 
    }


  	//Inicia aplicacion 
  	loadData(); 
  

  });
  