var app = angular.module("dashBoard",[]).controller("dashBoardController", ['$scope', 'dashBoardAPI', function($scope, dashBoardAPI){
	
	$scope.dashBoards = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		dashBoardAPI.get().then(function(response){
			atualizarDadosUsuario();
			$scope.dashBoards = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
		});
	}
	
	$scope.btnInsert = function(){
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insira os Arquivos';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	
		
		var dashBoard = document.getElementById("iName").files;
		
		if(!$scope.dashBoard){
			$scope.error = true;
			$scope.modalMessage = 'Por Favor Selecione os Arquivos!';
			document.getElementById("iName").focus();
			return;
		}
		else {
			dashBoardAPI.post(dashBoard).then(function(){
				delete $scope.dashBoard;
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$('#insertModal').modal('hide');
				refresh();
			});
		}
	
	
	$scope.btnDelete = function(){
		$scope.modalMessage = 'Do You Really Want Remove The Record?';
		$scope.modalTitle = 'Delete Gender!';
		$scope.modalMessageObject = $scope.selectedObject.name;
		$(document).ready(function() {
			$('#deleteModal').modal();
		});
	}
	
	$scope.deleteGender = function(){
		var parameter = $scope.selectedObject.id; 
		dashBoardAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(gender){
		$scope.gender = angular.copy(gender);
		$scope.modalTitle = 'Edit Gender';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.gender;
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.sail){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Sail!';
			document.getElementById("eSail").focus();
			return;
		}
		else {
			dashBoardAPI.put(parameter, parameter2).then(function(){
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$scope.error = false;
				$('#editModal').modal('hide');
				refresh();	
			});
		}
	}
	
	$scope.location = function(){
		location.href ="root.html";
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
	}
	
	
	/*
    /////////////////////////////////////////////////////////////////
	// 					DADOS GRAFICO USUARIO
    /////////////////////////////////////////////////////////////////
    */
  
    function atualizarDadosUsuario(){
			
		$scope.rotulosUsuario = [];
		$scope.valoresUsuario = [];
		
		for(var a = 0; a < $scope.dashBoards.length; a++){
			$scope.rotulosUsuario.push('Critério: '+$scope.dashBoards[a].name +' | Média: '+$scope.dashBoards[a].name.toFixed(1));
			$scope.valoresUsuario.push($scope.dashBoards.legth);
		}
	};
	
	
	const form = document.getElementById('uploadForm')
    	
	const sendFiles = async()=>{
		const myFiles = document.getElementById('iName').files
		
		const formData = new FormData()
		
		Object.keys(myFiles).forEach(key => {
			formData.append(myFiles.item(key).name, myFiles.item(key))
		})
		
		const response = await fetch('http://localhost:8081/dashBoard/insert',{
    			method: 'POST',
    			body: formData
    		})
		
		const json = await response.json()
		
		console.log(json)
	}
	
	form.addEventListener('submit', (e) => {
		console.log('ENTROU')
		e.preventDefault()
		sendFiles()
	})
	
	
}])