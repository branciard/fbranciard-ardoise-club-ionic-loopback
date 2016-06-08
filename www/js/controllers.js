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
        $state.go('user-tabs.user-dailyboards-tab');
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
        $state.go('user-tabs.user-dailyboards-tab');
    });
    
    
    
    
})

.controller('OwnerProfileCtrl', function($scope,$rootScope,$state,$ionicModal,$ionicPopup,Profile,Shop,DailyBoard,DailyBoardSubscription,NoWasteBoard,NoWasteBoardSubscription) {
	
	$scope.shopCreateData = {};
	$scope.shop= {};
	$scope.showDeleteShopBtn = false;
    $scope.showCreateShopBtn = false;
    $scope.showModifyShopBtn = false;
	
    
    Profile.shop({id: $rootScope.currentProfile.id })
    .$promise.then(
        function (response) {
            $scope.shop = response;
        	console.log( "shop found : " + response );
        	
            $scope.showCreateShopBtn = false;
            $scope.showModifyShopBtn = true;
            $scope.showDeleteShopBtn = true;
            
        },
        function (response) {
        	console.log( "Error: " + response.status + " " + response.statusText);
        	$scope.showCreateShopBtn = true;
            $scope.showModifyShopBtn = false;
            $scope.showDeleteShopBtn = false;
        }
    );
	
	
    $ionicModal.fromTemplateUrl('templates/owner-profile-tab-add-shop-modal.html', {
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
        console.log('addShop', $scope.shopCreateData);   
        $scope.shop =Profile.shop.create({ id: $rootScope.currentProfile.id },$scope.shopCreateData
        		, function() {
        	  console.log('shop created and link to current profile')
        	  Profile.prototype$updateAttributes({ id: $rootScope.currentProfile.id }, 
        			  { shopId: $scope.shop.id });
            //create a default dailyboard
            $scope.newDailyBoard =Shop.dailyBoard.create(
          		  { id: $scope.shop.id },
          		  { title: $scope.shop.name +' DailyBoard !'}, function() {
          			$scope.shop.dailyBoardId=$scope.newDailyBoard.id;
          			$scope.shop.$save();
 		  
                      console.log('daily board created and link to shop')
                  });
            
            //create a default noWasteBoard
            $scope.newNoWasteBoard =Shop.noWasteBoard.create(
          		  { id: $scope.shop.id },
          		  { title: $scope.shop.name +' NoWasteBoard !'}, function() {
          			$scope.shop.noWasteBoardId=$scope.newNoWasteBoard.id;
          			$scope.shop.$save();
 		  
                      console.log('no waste board created and link to shop')
                  });

          }).$promise.then(
                  function (response) {
                      $scope.closeAddShopModal();
                      $state.go($state.current, {}, {reload: true});
                 
                  });

      
    };
    

    $ionicModal.fromTemplateUrl('templates/owner-profile-tab-modify-shop-modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modifyShopModal = modal;
    });
	
   
    $scope.closeModifyShopModal = function () {
        $scope.modifyShopModal.hide();
    };

    $scope.openModifyShopModal = function () {
    	$scope.modifyShopModal.show();
    };
    
    $scope.modifyShop = function () {
        console.log('modifyShop', $scope.shop);           
       	$scope.shop.$save();
        $scope.closeModifyShopModal();
          
    };
    
    
    
      $scope.deleteShopToConfirm = function () {
    	  
    	  
          var confirmPopup = $ionicPopup.confirm({
              title: '<h3>Confirm Delete</h3>',
              template: '<p>Are you sure you want to delete this shop? you will loose all boards and all your subcribers</p>'
          });

          confirmPopup.then(function (res) {
              if (res) {
                  console.log('Ok to delete');
         
                  
                  Profile.shop({id: $rootScope.currentProfile.id })
                  .$promise.then(
                      function (response) {
                         $scope.shop = response;
                      	console.log( "shop found : " + response );
                                      	 
                  	 
                  	  Shop.dailyBoard({id: $scope.shop.id  })
                      .$promise.then(
                          function (response) {
                              $scope.dailyboardToRemove = response;
                           	console.log(' have DailyBoard '+$scope.dailyboardToRemove.id+' to deleted');
                     
                          		 //delete subscription to do
                           
                           		/*$scope.dailyBoardSubscriptionToRemove= DailyBoardSubscription.find({ 
                           		  filter: { where: { dailyBoardId: $scope.$scope.dailyboardToRemove.id } }
                           		});
                                 for (var i = 0; i < $scope.dailyBoardSubscriptionToRemove.length; i++) {
                                     console.log('remove dailyBoardSubscription : ' + $scope.dailyBoardSubscriptionToRemove[i]);
                                     DailyBoardSubscription.deleteById({ id:  $scope.dailyBoardSubscriptionToRemove[i].id })
                    	         	  .$promise
                    	          	  .then(function() { console.log(' dailyBoardSubscription '+$scope.dailyBoardSubscriptionToRemove[i].id+' deleted'); });
                                 }
                           		 */
                 	          	 DailyBoard.deleteById({ id:  $scope.dailyboardToRemove.id })
                 	         	  .$promise
                 	          	  .then(function() { console.log(' DailyBoard '+$scope.dailyboardToRemove.id+' deleted'); });
                                                 
                          }
                      );
                  	  
                 	 
                  	  Shop.noWasteBoard({id: $scope.shop.id  })
                      .$promise.then(
                          function (response) {
                              $scope.noWasteboardToRemove = response;
                           	console.log(' have NoWasteBoard '+$scope.noWasteboardToRemove.id+' to deleted');
                     
                          		 //delete subscription to do
                           
                           		/*$scope.dailyBoardSubscriptionToRemove= DailyBoardSubscription.find({ 
                           		  filter: { where: { dailyBoardId: $scope.$scope.dailyboardToRemove.id } }
                           		});
                                 for (var i = 0; i < $scope.dailyBoardSubscriptionToRemove.length; i++) {
                                     console.log('remove dailyBoardSubscription : ' + $scope.dailyBoardSubscriptionToRemove[i]);
                                     DailyBoardSubscription.deleteById({ id:  $scope.dailyBoardSubscriptionToRemove[i].id })
                    	         	  .$promise
                    	          	  .then(function() { console.log(' dailyBoardSubscription '+$scope.dailyBoardSubscriptionToRemove[i].id+' deleted'); });
                                 }
                           		 */
                 	          	 NoWasteBoard.deleteById({ id:  $scope.noWasteboardToRemove.id })
                 	         	  .$promise
                 	          	  .then(function() { console.log(' NoWasteBoard '+$scope.noWasteboardToRemove.id+' deleted'); });
                           	
                              
                          }
                      );
                  	 
    
                      	Shop.deleteById({ id:  $scope.shop.id })
                      	  .$promise
                      	  .then(function() { console.log(' shop '+$scope.shop.id +' deleted'); });
                      	
                     	  Profile.prototype$updateAttributes({ id: $rootScope.currentProfile.id }, 
                    			  { shopId: '' });
                      	
                          $scope.showCreateShopBtn = true;
                          $scope.showModifyShopBtn = false;
                          $scope.showDeleteShopBtn = false;
                          
                      },
                      function (response) {
                    	    $scope.showCreateShopBtn = true;
                            $scope.showModifyShopBtn = false;
                            $scope.showDeleteShopBtn = false;
                      	console.log( "Error: " + response.status + " " + response.statusText);
                      	  $scope.closeModifyShopModal();
                      }
               );
                  
                  
                  
                  
                  
                  
              } else {
                  console.log('Canceled delete');
              }
          });
    	  
  
  
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
