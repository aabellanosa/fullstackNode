var myApp = angular.module("myApp");

myApp.controller("BooksController", [
  "$scope",
  "$http",
  "$location",
  "$routeParams",
  function ($scope, $http, $location, $routeParams) {
    console.log("BooksController laoded...");

    $scope.getBooks = function () {
      console.log("yeah getbooks");
      $http.get("/api/books").then(function (response) {
        console.log(response.data);
        $scope.books = response.data;
      });
    };

    $scope.getBook = function () {
      console.log("hit this");
      var id = $routeParams.id;
      $http.get("/api/books/" + id).then(function (response) {
        console.log(response.data);
        $scope.book = response.data;
      });
    };

    $scope.addBook = function () {
      console.log($scope.book);
      $http.post("/api/books/", $scope.book).then(function (response) {
        window.location.href = "#!books";
      });
    };

    $scope.updateBook = function () {
      console.log($scope.book);
      var id = $routeParams.id;
      console.log(id);
      $http.put("/api/books/" + id, $scope.book).then(function (response) {
        window.location.href = "#!books";
      });
    };

    $scope.removeBook = function (id) {
      console.log("abut here");
      console.log(id);
      $http.delete("/api/books/" + id, $scope.book).then(function (response) {
        window.location.href = "#!books";
      });
    };
  },
]);
