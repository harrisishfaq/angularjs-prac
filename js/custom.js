var app = angular.module("testapp" , []);
app.controller("myctrl" , function($scope){
$scope.click = function(){
  alert("clicked");
}
})