var app = angular.module("dashBoard",[]).controller("dashBoardController", ['$scope', 'dashBoardAPI', function($scope, dashBoardAPI){
	
	$scope.dashBoards = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		dashBoardAPI.get().then(function(response){
			$scope.dashBoards = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			atualizarDadosUsuario();
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
	
	$scope.toggleFullScreen = function() {
		
		if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
				$scope.message = 'Restaurar Tela';
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
				$scope.message = 'Restaurar Tela';
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
				$scope.message = 'Restaurar Tela';
			}
			$scope.maximize = true
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
				$scope.message = 'Tela Inteira';
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
				$scope.message = 'Tela Inteira';
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
				$scope.message = 'Tela Inteira';
			}
			$scope.maximize = false
		}
	}
	
	$scope.inserirArquivo = function(){	
		var dashBoard = document.getElementById("iName").files;
		/*
		if(!$scope.dashBoard){
			$scope.error = true;
			$scope.modalMessage = 'Por Favor Selecione os Arquivos!';
			document.getElementById("iName").focus();
			return;
		}
		*/
		//else {
			dashBoardAPI.post(dashBoard).then(function(){
				delete $scope.dashBoard;
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$('#insertModal').modal('hide');
				refresh();
			});
		//}
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
			console.log($scope.dashBoards[a].name);
			$scope.rotulosUsuario.push('Critério: '+$scope.dashBoards[a].name +' | Média: '+($scope.dashBoards.length*100).toFixed(1));
			console.log(($scope.dashBoards.length*100).toFixed(1));
			$scope.valoresUsuario.push(($scope.dashBoards.length*100).toFixed(1));
		}
	};
	
	
}])