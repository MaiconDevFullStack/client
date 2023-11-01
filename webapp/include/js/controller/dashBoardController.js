var app = angular.module("dashBoard",[]).controller("dashBoardController", ['$scope', 'dashBoardAPI', function($scope, dashBoardAPI){
	
	$scope.dashBoards = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	$scope.dashBoard = {};
	$scope.space = ' ';
	
	//refresh();
	
	//setInterval(refresh, 3000);
	
	function refresh(){
		dashBoardAPI.get().then(function(response){
			$scope.dashBoards = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			for(a in $scope.dashBoards)
			if($scope.dashBoards[a].variable){
				var test = Math.floor(Math.random() * 10);
				$scope.dashBoards[a].test2 = ($scope.dashBoards[a].variable*test);
				if($scope.dashBoards[a].test2 >= 5){
					$scope.dashBoards[a].condition = 'Ruim';
				}
				else if($scope.dashBoards[a].test2 == 5){
					$scope.dashBoards[a].condition = 'Regular';
				}
				else if($scope.dashBoards[a].test2 < 5){
					$scope.dashBoards[a].condition = 'Normal';
				}
			}
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
	
	const form = document.getElementById('uploadForm')
    	
	const sendFiles = async()=>{
		const myFiles = document.getElementById('myFiles').files
		
		const formData = new FormData()
		
		Object.keys(myFiles).forEach(key => {
			formData.append(myFiles.item(key).name, myFiles.item(key))
		})
		
		
		const response = await fetch('http://localhost:8081/dashBoard/insert',{
			method: 'POST',
			body: formData
		})
		
		
		const json = await response.json()
		
		const h2 = document.querySelector('h2')
		h2.textContent = `Status: ${json?.status}`
		
		const h3 = document.querySelector('h3')
		h3.textContent = json?.message
		
		console.log(json)
	
	}
	
	form.addEventListener('submit', (e) => {
		console.log('ENTROU')
		e.preventDefault()
		sendFiles()
		$('#insertModal').modal('hide');
	})
	
	
	
	/*
	var cAnexo1 = document.getElementById("cAnexo1");
	
	cAnexo1.addEventListener("change", function() {
	    var name = null;
	    
	    if(cAnexo1.files.length > 0) {
	    	name = cAnexo1.files[0].name;
	    } 
	    
	    $scope.dashBoard.name = name.replace(" ", "_");
	    $scope.dashBoard.file = document.getElementById("cAnexo1").files;
	    console.log($scope.dashBoard.file);
	});
	
	
	$scope.inserirArquivo = function(){
		
		var param = $scope.dashBoard;
		
		//var dashBoard = document.getElementById("iName").files;
		
		//console.log(dashBoard);
		/*
		if(!$scope.dashBoard){
			$scope.error = true;
			$scope.modalMessage = 'Por Favor Selecione os Arquivos!';
			document.getElementById("iName").focus();
			return;
		}
		
		//else {
			dashBoardAPI.post(param).then(function(){
				delete $scope.dashBoard;
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$('#insertModal').modal('hide');
				refresh();
			});
		//}
	}
	*/
	
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
	
}])