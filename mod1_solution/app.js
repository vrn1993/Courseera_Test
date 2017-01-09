(function(){
'use strict'
angular.module("LunchCheck",[]).controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
$scope.stringText="";
$scope.message="";

$scope.checkIfTooMuch=function()
{
  var text=$scope.stringText;
if(text!=""){
  var res=text.split(",").length;
console.log(res);
   if(res<=3){
     $scope.message="Enjoy";
   }
   else {
     $scope.message="Too much!";
   }

}
else {
   $scope.message="Enter Data First";
}


}}
})();
