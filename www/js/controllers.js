angular.module('starter.controllers', [])


.controller('loginCtrl', function ($scope, $rootScope, $state, $localStorage, AuthService) {
	// Form data for the login modal

	$scope.loginData = $localStorage.getObject('userinfo', '{}');
	$scope.registration = {};
	$scope.loggedIn = false;
	
	if (AuthService.isAuthenticated()) {
		$scope.loggedIn = true;
		$scope.username = AuthService.getUsername();
	}

	// Perform the login action when the user submits the login form
	$scope.doLogin = function () {
		  $rootScope.$broadcast('loading:show');
		console.log('Doing login', $scope.loginData);
		$localStorage.storeObject('userinfo', $scope.loginData);
		AuthService.login($scope.loginData);
		$rootScope.$broadcast('loading:hide');
	};

	$scope.logOut = function () {
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
		 $rootScope.$broadcast('loading:show');
		console.log('Doing registration', $scope.registration);
		$scope.loginData.username = $scope.registration.username;
		$scope.loginData.password = $scope.registration.password;

		AuthService.register($scope.registration);
		$rootScope.$broadcast('loading:hide');
	};

	$rootScope.$on('registration:Successful', function () {
		$localStorage.storeObject('userinfo', $scope.loginData);
		$state.go('user-tabs.user-dailyboards-tab');
	});

})

.controller('OwnerProfileCtrl', function ($scope, $rootScope, $state, $ionicModal, $ionicLoading,$ionicPopup, Profile, Shop, DailyBoard, DailyBoardSubscription, NoWasteBoard, NoWasteBoardSubscription) {

	    $rootScope.$broadcast('loading:show');
		$scope.shopCreateData = {};
		$scope.shop = {};
		$scope.showDeleteShopBtn = false;
		$scope.showCreateShopBtn = false;
		$scope.showModifyShopBtn = false;


		Profile.shop({
				id: $rootScope.currentProfile.id
			})
			.$promise.then(
				function (response) {
					$scope.shop = response;
					console.log("shop found : " + response);

					$scope.showCreateShopBtn = false;
					$scope.showModifyShopBtn = true;
					$scope.showDeleteShopBtn = true;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$scope.showCreateShopBtn = true;
					$scope.showModifyShopBtn = false;
					$scope.showDeleteShopBtn = false;
					$rootScope.$broadcast('loading:hide');
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
		    $rootScope.$broadcast('loading:show');
			Profile.shop.create({
				id: $rootScope.currentProfile.id
			}, $scope.shopCreateData).$promise.then(
				function (response) {
					$scope.shop = response;

					console.log('shop created and link to current profile')
					Profile.prototype$updateAttributes({
						id: $rootScope.currentProfile.id
					}, {
						shopId: $scope.shop.id
					});
					//create a default dailyboard
					$scope.newDailyBoard = Shop.dailyBoard.create({
						id: $scope.shop.id
					}, {
						title: $scope.shop.name + ' DailyBoard !'
					}, function () {
						$scope.shop.dailyBoardId = $scope.newDailyBoard.id;
						$scope.shop.$save();

						console.log('daily board created and link to shop')
					});

					//create a default noWasteBoard
					$scope.newNoWasteBoard = Shop.noWasteBoard.create({
						id: $scope.shop.id
					}, {
						title: $scope.shop.name + ' NoWasteBoard !'
					}, function () {
						$scope.shop.noWasteBoardId = $scope.newNoWasteBoard.id;
						$scope.shop.$save();

						console.log('no waste board created and link to shop')
					});


					$rootScope.$broadcast('loading:hide');
					$scope.closeAddShopModal();
					$state.go($state.current, {}, {
						reload: true
					});

				}
					
			);


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
		    $rootScope.$broadcast('loading:show');
			$scope.shop.$save();
			$rootScope.$broadcast('loading:hide');
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
				    $rootScope.$broadcast('loading:show');

					Profile.shop({
							id: $rootScope.currentProfile.id
						})
						.$promise.then(
							function (response) {
								$scope.shop = response;
								console.log("shop found : " + response);


								Shop.dailyBoard({
										id: $scope.shop.id
									})
									.$promise.then(
										function (response) {
											$scope.dailyboardToRemove = response;
											console.log(' have DailyBoard ' + $scope.dailyboardToRemove.id + ' to deleted');

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
											DailyBoard.deleteById({
													id: $scope.dailyboardToRemove.id
												})
												.$promise
												.then(function () {
													console.log(' DailyBoard ' + $scope.dailyboardToRemove.id + ' deleted');
												});

										}
									);


								Shop.noWasteBoard({
										id: $scope.shop.id
									})
									.$promise.then(
										function (response) {
											$scope.noWasteboardToRemove = response;
											console.log(' have NoWasteBoard ' + $scope.noWasteboardToRemove.id + ' to deleted');

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
											NoWasteBoard.deleteById({
													id: $scope.noWasteboardToRemove.id
												})
												.$promise
												.then(function () {
													console.log(' NoWasteBoard ' + $scope.noWasteboardToRemove.id + ' deleted');
												});


										}
									);


								Shop.deleteById({
										id: $scope.shop.id
									})
									.$promise
									.then(function () {
										console.log(' shop ' + $scope.shop.id + ' deleted');
									});

								Profile.prototype$updateAttributes({
									id: $rootScope.currentProfile.id
								}, {
									shopId: ''
								});

								$scope.showCreateShopBtn = true;
								$scope.showModifyShopBtn = false;
								$scope.showDeleteShopBtn = false;
								$rootScope.$broadcast('loading:hide');

							},
							function (response) {
								$scope.showCreateShopBtn = true;
								$scope.showModifyShopBtn = false;
								$scope.showDeleteShopBtn = false;
								console.log("Error: " + response.status + " " + response.statusText);
								$rootScope.$broadcast('loading:hide');
							}
						);

				} else {
					console.log('Canceled delete');
				}
			});
		};




	})
	.controller('DailyBoardsCtrl', function ($scope, $rootScope, DailyBoardSubscription) {
		$scope.subscriptionData = {};
		 
		$scope.doSubscribe = function () {
			  $rootScope.$broadcast('loading:show');
			DailyBoardSubscription.create({
				profileId: $rootScope.currentProfile.id,
				dailyBoardId: $scope.subscriptionData.dailyBoardId
			});
			$rootScope.$broadcast('loading:hide');
			console.log('DailyBoardSubscription created !');
		}

	})

.controller('DailyBoardCtrl', function ($scope, $rootScope, $ionicModal, Profile, Shop, DailyBoard) {
		$scope.dailyItemData = {};
		$scope.dailyBoard = {};
		$scope.shouldShowDelete = false;
		$scope.shouldShowAdd = true;
		  $rootScope.$broadcast('loading:show');
		Profile.shop({
				id: $rootScope.currentProfile.id
			})
			.$promise.then(
				function (response) {
					$scope.theshop = response;
					console.log($scope.theshop.id);
					Shop.dailyBoard({
						id: $scope.theshop.id
					}).$promise.then(
						function (response) {
							$scope.dailyBoard = response;
							$scope.checkAddItemButton();
							$rootScope.$broadcast('loading:hide');
							console.log("Load dailyBoard id: " + $scope.dailyBoard.id);
						},
						function (response) {
							$rootScope.$broadcast('loading:hide');
							console.log("Error: " + response.status + " " + response.statusText);
						});
				},
				function (response) {
					$rootScope.$broadcast('loading:hide');
					console.log("Error: " + response.status + " " + response.statusText);
				});

		$ionicModal.fromTemplateUrl('templates/owner-dailyboard-tab-add-daily-item-modal.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.addDailyItemModal = modal;
		});


		$scope.closeAddDailyItemModal = function () {
			$scope.addDailyItemModal.hide();
		};

		$scope.openAddDailyItemModal = function () {
			$scope.dailyItemData = {};
			$scope.addDailyItemModal.show();
		};

		$scope.toggleDelete = function () {
			$scope.shouldShowDelete = !$scope.shouldShowDelete;
			console.log($scope.shouldShowDelete);
		}

		$scope.checkAddItemButton = function () {
			if ($scope.dailyBoard.dailyItemList.length >= 5) {
				$scope.shouldShowAdd = false;
			} else {
				$scope.shouldShowAdd = true;
			}
		}

		$scope.deleteDailyItem = function (dailyItemListId) {
			  $rootScope.$broadcast('loading:show');
			for (var i = 0; i < $scope.dailyBoard.dailyItemList.length; i++) {
				if ($scope.dailyBoard.dailyItemList[i].id == dailyItemListId) {
					console.log('id: ' + $scope.dailyBoard.dailyItemList[i].id);
					$scope.dailyBoard.dailyItemList.splice(i, 1);
					break;
				}
			}
			$scope.checkAddItemButton();
			$scope.dailyBoard.$save();
			$rootScope.$broadcast('loading:hide');
		}

		$scope.addDailyItem = function () {

			$rootScope.$broadcast('loading:show');
			$scope.dailyBoard.dailyItemList.push({
				name: $scope.dailyItemData.name,
				price: $scope.dailyItemData.price
			});

			$scope.checkAddItemButton();
			$scope.dailyBoard.$save();
			console.log('dailyItemList added !');
			$scope.shouldShowDelete = false;
			$rootScope.$broadcast('loading:hide');
			$scope.closeAddDailyItemModal();

		}

	})
	.controller('NoWasteBoardCtrl', function ($scope, $rootScope, $ionicModal, Profile, Shop, NoWasteBoard) {
		$scope.noWasteItemData = {};
		$scope.noWasteBoard = {};
		$scope.shouldShowDelete = false;
		$scope.shouldShowAdd = true;
		$rootScope.$broadcast('loading:show');
		Profile.shop({
				id: $rootScope.currentProfile.id
			})
			.$promise.then(
				function (response) {
					$scope.theshop = response;
					console.log($scope.theshop.id);
					Shop.noWasteBoard({
						id: $scope.theshop.id
					}).$promise.then(
						function (response) {
							$scope.noWasteBoard = response;
							$scope.checkAddItemButton();
							console.log("Load noWasteBoard id: " + $scope.noWasteBoard.id);
							$rootScope.$broadcast('loading:hide');
						},
						function (response) {
							console.log("Error: " + response.status + " " + response.statusText);
							$rootScope.$broadcast('loading:hide');
						});
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				});


		$ionicModal.fromTemplateUrl('templates/owner-nowasteboard-tab-add-nowaste-item-modal.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.addNoWasteItemModal = modal;
		});


		$scope.closeAddNoWasteItemModal = function () {
			$scope.addNoWasteItemModal.hide();
		};

		$scope.openAddNoWasteItemModal = function () {
			$scope.noWasteItemData = {};
			$scope.addNoWasteItemModal.show();
		};

		$scope.toggleDelete = function () {
			$scope.shouldShowDelete = !$scope.shouldShowDelete;
			console.log($scope.shouldShowDelete);
		}

		$scope.checkAddItemButton = function () {
			if ($scope.noWasteBoard.noWasteItemList.length >= 5) {
				$scope.shouldShowAdd = false;
			} else {
				$scope.shouldShowAdd = true;
			}
		}

		$scope.deleteNoWasteItem = function (noWasteItemListId) {
			$rootScope.$broadcast('loading:show');
			for (var i = 0; i < $scope.noWasteBoard.noWasteItemList.length; i++) {
				if ($scope.noWasteBoard.noWasteItemList[i].id == noWasteItemListId) {
					console.log('id: ' + $scope.noWasteBoard.noWasteItemList[i].id);
					$scope.noWasteBoard.noWasteItemList.splice(i, 1);
					break;
				}
			}
			$scope.checkAddItemButton();
			$scope.noWasteBoard.$save();
			$rootScope.$broadcast('loading:hide');
		}

		$scope.addNoWasteItem = function () {

			$rootScope.$broadcast('loading:show');
			$scope.noWasteBoard.noWasteItemList.push({
				name: $scope.noWasteItemData.name,
				itemRemainingNumber: $scope.noWasteItemData.itemRemainingNumber
			});

			$scope.checkAddItemButton();
			$scope.noWasteBoard.$save();
			console.log('noWasteItemList added !');
			$scope.shouldShowDelete = false;
			$rootScope.$broadcast('loading:hide');
			$scope.closeAddNoWasteItemModal();

		}

	})
	.controller('UserProfileCtrl', function ($scope,$rootScope,Profile) {
		console.log('username '+$rootScope.currentProfile.username+' has '+$rootScope.currentProfile.peps+' peps');

		$scope.username=$rootScope.currentProfile.username;
		$scope.peps=$rootScope.currentProfile.peps;

		
		
	})

	.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function (chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
	$scope.settings = {
		enableFriends: true
	};
});