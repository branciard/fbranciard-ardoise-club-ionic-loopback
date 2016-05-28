angular.module('starter.controllers', [])


.controller('loginCtrl', function($scope,$rootScope,$state,$localStorage,AuthService) {
    // Form data for the login modal
    $scope.loginData = $localStorage.getObject('userinfo','{}');
    $scope.registration = {};
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
    
    
    // Perform the login action when the user submits the login form
    $scope.doRegister = function () {
        console.log('Doing registration', $scope.registration);
        $scope.loginData.username = $scope.registration.username;
        $scope.loginData.password = $scope.registration.password;

        AuthService.register($scope.registration);

    };
       
    $rootScope.$on('registration:Successful', function () {
        $localStorage.storeObject('userinfo',$scope.loginData);
        $state.go('tab.profile');
    });
    
    
    
    
})

.controller('ProfileCtrl', function($scope,$rootScope,$ionicModal,Profile,Shop,DailyBoard) {
	
	$scope.shopData = {};
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
        $scope.newShop =Profile.shop.create({ id: $rootScope.currentProfile.id },$scope.shopData
        		, function() {
        	  console.log('shop created:')
        	  Profile.prototype$updateAttributes({ id: $rootScope.currentProfile.id }, 
        			  { shopId: $scope.newShop.id });
            
            $scope.newDailyBoard =Shop.dailyBoard.create(
          		  { id: $scope.newShop.id },
          		  { title: ' Jazz menu today !'}, function() {
          			$scope.newShop.dailyBoardId=$scope.newDailyBoard.id;
          			$scope.newShop.$save();
 		  
                      console.log('daily board created and link to shop')
                  });

          });		
        
 
        $scope.closeAddShopModal();
    };
	
})
.controller('DailyBoardsCtrl', function($scope,$rootScope,DailyBoardSubscription) {
	$scope.subscriptionData = {};
	$scope.doSubscribe = function () {
		DailyBoardSubscription.create({ profileId:$rootScope.currentProfile.id , dailyBoardId:$scope.subscriptionData.dailyBoardId });
		console.log('DailyBoardSubscription created !');
	}
	
})

.controller('DailyBoardCtrl', function($scope,$rootScope,Profile,Shop,DailyBoard) {
	$scope.dailyItemData = {};

	
	/*$scope.theProfile = Profile.findById({id: $rootScope.currentProfile.id})
    .$promise.then(
        function (response) {
        	$scope.theProfile = response;
        	console.log($scope.theProfile.id);
        },
        function (response) {
        	console.log("Error: " + response.status + " " + response.statusText);
        }
    ); 
	
	Profile.shop({id:$rootScope.currentProfile.id, "filter":
    {}
	})
    .$promise.then(
    function (response) {
    	$scope.theshop = response;
    	console.log($scope.theshop.id);
    },
    function (response) {
    	console.log("Error: " + response.status + " " + response.statusText);
    });
	*/
	

	

	$scope.addDailyItem = function () {
		console.log($rootScope.currentProfile.id);
	
		
		
		Profile.shop({id:$rootScope.currentProfile.id
		})
	    .$promise.then(
	    function (response) {
	    	$scope.theshop = response;
	    	console.log($scope.theshop.id);
	    	Shop.dailyBoard({id:$scope.theshop.id
			})  .$promise.then(
				    function (response) {
				    	$scope.thedailyBoard = response;
				    	console.log($scope.thedailyBoard.id);
				    	
				    	DailyBoard.dailyItems.create( { id: $scope.thedailyBoard.id },{ name:$scope.dailyItemData.name, price:$scope.dailyItemData.price, itemPosition:'1'});
				    	console.log('dailyItemList added !');
				    	
				    },
				    function (response) {
				    	console.log("Error: " + response.status + " " + response.statusText);
				    });
	    },
	    function (response) {
	    	console.log("Error: " + response.status + " " + response.statusText);
	    });
		
	}
	
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
