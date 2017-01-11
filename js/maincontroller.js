var app = angular.module("myApp", []);

app.controller("PageController", function($scope,$http){
    $scope.fontStyle="'Orbitron', sans-serif";
    $scope.changeFontStyle=function (style){
        $scope.fontStyle=style;
    };
});