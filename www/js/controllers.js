angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicNavBarDelegate) {
  $ionicNavBarDelegate.showBar(true);
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicLoading, $ionicPopup) {
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
 $scope.$on('$ionicView.enter', function() {
  if(!$scope.positionok){
  directionsDisplay = new google.maps.DirectionsRenderer();
  var latLng;
  var infowindow;
  $scope.positionok = false;
  var options = {timeout: 10000, enableHighAccuracy: true};
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    var mapOptions = {
      center: latLng,
      location: 'McDonalds',   
      zoom: 15,
      types: ['restaurants'],
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      $ionicLoading.show({
        template: 'Carregando Restaurantes...'
      });
    function createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: place.geometry.location
      })};

    function calcRoute() {
      var start = document.getElementById("start").value;
      var end = document.getElementById("end").value;
      var request = {
        origin:start,
        destination:end,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);
        }
      });
    }      

var request = {
      location: latLng,
      keyword: 'McDonalds',
      name: 'McDonalds',
      radius: '50000'
    };  

  service = new google.maps.places.PlacesService($scope.map);
  directionsDisplay.setMap(map);
  service.nearbySearch(request, callback);


  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        console.log(results[i]);
        createMarker(results[i]);
        $scope.positionok = true;
        $ionicLoading.hide();
      }
    }
  }
  //esse aq porra
  }, function(error){
      var alertPopup = $ionicPopup.alert({
         title: 'Erro',
         template: 'Não foi possivel encontrar sua localização!'
      });
      alertPopup.then(function(res) {
        $scope.positionok = true;
        $ionicLoading.hide();
        $state.go('app.home');
      });
  });
}
});
})

.controller('HomeCtrl', function($scope, $http, $ionicPopup, $timeout, $ionicLoading, $ionicNavBarDelegate) {
  
  $ionicNavBarDelegate.showBar(true);
  $ionicNavBarDelegate.showBackButton(false);

  /*
      URLS - Que gera os cupons do McDonalds e o Link da campanha que retorna os cupons.
  */

  var apiUrl = "http://cupons.mcdonalds.com.br/campaigns?campaigns=57e3f1a79ec7c3c84dabd633%2C57e3f2f24559edf34c6bcfb7%2C57e3f9fe03a31fe24b618d45&pageId=br&json=true";
  var cupomUrl = "http://cupons.mcdonalds.com.br/campaign/coupon/generate"
  var config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }


  /*
      Essa função transforma uma String com conteúdo HTML novamente para HTML podendo ser manipulada.
  */

  var toDOM = function(html) {
      var el = document.createElement('div');
      el.innerHTML = html;
      console.log(html);
      return el.childNodes[18];
  }

  /*
      Nesse escopo se recebe o codigo do cupom e a posição do mesmo, faz a requisição para a URL
      cupomUrl e recebe o codigo do cupom diretamente do site do McDonalds
  */  

  $scope.pegaCupom = function(code, key){
        $scope.loading = false;
          if(!$scope.loading){
              $ionicLoading.show({
              template: 'Gerando cupom...'
        });        
        $scope.getCouponNum = {};
        console.log($scope.getCouponNum);
        $http({
            method: 'POST',
            url: cupomUrl,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: 'campaignId='+code+'&pageId=br'
        }).success(function (res) {
            var couponHtml = toDOM(res);
            console.log(couponHtml);
            $scope.getCouponNum[key] = couponHtml.querySelector('.campaign .coupon p').innerHTML;
            console.log('out', $scope.getCouponNum);
            $scope.loading = true;
            $ionicLoading.hide();
            $scope.showAlert($scope.getCouponNum[key]);

        });
      }
  }

  $scope.showAlert = function(cupom) {
      console.log(cupom);
      var alertPopup = $ionicPopup.alert({
         title: 'Cupom',
         template: cupom
      });
      alertPopup.then(function(res) {
      });
   };

  $scope.recebeCupom = function(){
            $scope.loading = false;
            if(!$scope.loading){
              $ionicLoading.show({
                  template: 'Carregando Cupons...'
              });
            $scope.mydata = {};
            $http.get(apiUrl)
            .then(function(result) {
                $scope.mydata = result.data.data;
                $scope.loading = true;
                $ionicLoading.hide();
                
             });
          }
    } 
  
})
