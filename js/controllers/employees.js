var app = angular.module('employeeDemoApp');
app.controller('employeesCtrl', function($scope, $state) {
	console.log("Hello")

	$scope.employeeslist = [
	{firstname : "hima", lastname : "pp", emailid : "hima@gmail.com", dob : "01/01/1995" },
	{firstname : "hima", lastname : "bindu", emailid : "bindu@gmail.com", dob : "23/10/1995"}
	
	];
	$scope.saveEmployee = function(formname){
	{firstName : "Sam", lastName : "Reddy", email : "abc@gmail.com", dob : "21-3-1887", gender : "F", profession : "IT", designation : "Developer"},
	{firstName : "Saadvika", lastName : "Reddy", email : "xyz@gmail.com", dob : "22-3-1887", gender : "F", profession : "IT", designation : "Programmer"},
	{firstName : "Sreeja", lastName : "Reddy", email : "mno@gmail.com", dob : "23-3-1887", gender : "F", profession : "IT", designation : "Developer"},
	{firstName : "Sujatha", lastName : "Reddy", email : "pqr@gmail.com", dob : "24-3-1887", gender : "F", profession : "IT", designation : "Programmer"}
	];
	$scope.saveEmployee = function(formname){
		console.log($scope.employee);
		console.log("test", formname.$invalid, formname.$error)
		$state.go("employees")
	}

	$scope.updateEmployee = function(req){
        console.log("test", formname.$invalid, formname.$error)
		$state.go("employees")
	}
	      
		$state.go("employees")
	      {
	        $scope.addNew = function(employeeslist)
	            $scope.employeeslist.push({ 
	                'firstname': employeeslist.firstName, 
	                'lastname': employeeslist.lastName,
	                'email': employeeslist.email,
	                'dob': employeeslist.dob
	            });
	        } 
	    }
	});
		
	