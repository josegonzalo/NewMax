angular.module('starter.controllers', [])

.controller('categories', function($scope) {
  $scope.categories = 
  [
  {
    nombre:"TV y Videos",
    icono:"ion-ios-monitor"
  },
  {
    nombre:"Celulares",
    icono:"ion-iphone"
  },
  {
    nombre:"Lineas Blancas",
    icono:"fas fa-blender-phone"
  },
  {
    nombre:"Videos Juegos",
    icono:"ion-playstation"
  },
  {
    nombre:"Computadoras y tables",
    icono:"fas fa-laptop"
  },
  {
    nombre:"Audios",
    icono:"ion-speakerphone"
  },
  {
    nombre:"Audios para Vehiculos",
    icono:"ion-volume-high"
  },
  {
    nombre:"Camaras y Drones",
    icono:"ion-camera"
  },
   {
    nombre:"Audifonos y Bocinas",
    icono:"ion-headphone"
   },
   {
    nombre:"Prendas electronicas",
    icono:"fas fa-clock"
   },
   {
    nombre:"Cuidados Personales",
    icono:"ion-bag "
   },
   {
    nombre:"Ambientadores",
    icono:"ion-earth"
   },
   {
    nombre:"Contenido Digital",
    icono:"ion-printer"
   },
   {
    nombre:"Telefonos fijos",
    icono:"ion-ios-telephone"
   },
   {
    nombre:"Bicicletas electronicas",
    icono:"fas fa-bicycle"
   },
   {
    nombre:"Hogar",
    icono:"ion-ios-home"
   },
   {
    nombre:"Paneles solares",
    icono:"fas fa-solar-panel"
   }
  ]
  /*
  "TV y Videos": "ion-ios-monitor",
  "celulares": "ion-iphone",
  "Lineas Blancas": "ion-beaker",
  "Videos Juegos": "ion-game-controller-b",
  "Computadoras y tables": "ion-laptop",
  "Audios": "ion-ios-settings",
  "Audios para Vehiculos": "ion-volume-high",
  "Camaras y Drones": "ion-camera",
  "Audifonos y Bocinas": "ion-headphone",
  "Prendas electronicas": "ion-outlet",
  "Cuidados Personales":"fa-person-booth",
  "Ambientadores": "tree",
  "Contenido Digital": "digital-tachograph",
  "Telefonos fijos": "tty",
  "Bicicletas electronicas": "bicycle",
  "Hogar": "home-heart",
  "Paneles solares": "solar-panel", 
  */
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
