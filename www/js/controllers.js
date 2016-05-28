angular.module('starter.controllers', [])


.controller('loginCtrl', function($scope,$rootScope,$state,$localStorage,AuthService) {
    // Form data for the login modal
    $scope.loginData = $localStorage.getObject('userinfo','{}');
    $scope.loggedIn = false;
       
    if(AuthService.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthService.getUsername();
    }
    
  		
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $localStorage.storeObject('userinfo',$scope.loginData);

        AuthService.login($scope.loginData);
     
    };
    
    $scope.logOut = function() {
        AuthService.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
      
    $rootScope.$on('login:Successful', function () {
    	
    	 console.log('login:Successful');
        $scope.loggedIn = AuthService.isAuthenticated();
        $scope.username = AuthService.getUsername();
        $state.go('tab.profile');
    });
    
})

.controller('ProfileCtrl', function($scope,$rootScope,$ionicModal,Profile,Shop,Address) {
	
	$scope.shopData = {};
	$scope.addressData = {};
    $ionicModal.fromTemplateUrl('templates/addShopModal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.addShopModal = modal;
    });
	
   
    $scope.closeAddShopModal = function () {
        $scope.addShopModal.hide();
    };

    $scope.openAddShopModal = function () {
        $scope.addShopModal.show();
    };
    
    $scope.addShop = function () {
        console.log('addShop', $scope.shopData);
        console.log('addShop with address', $scope.addressData);
    
        $scope.newShop =Profile.shop.create({ id: $rootScope.currentProfile.id },$scope.shopData
        		, function() {
        	  console.log('shop created:')
            $scope.newAddress =Shop.address.create(
          		  { id: $scope.newShop.id },
          		  $scope.addressData, function() {
          			$scope.newShop.addressId=$scope.newAddress.id;
          			$scope.newShop.$save();
          		
          			//Address.shop({id:$scope.newAddress.id},{shopId:$scope.newShop.id});
          			//Address.shop.create({id:$scope.newAddress.id},{id:$scope.newShop.id});
 		  
                      console.log('address created and link to shop')
                  }) 

          });		
        
 
        $scope.closeAddShopModal();
    };
	
})
.controller('DashCtrl', function($scope) {})

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
