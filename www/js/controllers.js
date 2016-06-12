angular.module('starter.controllers', [])


.controller('loginCtrl', function ($scope, $rootScope, $state, $ionicModal, $localStorage, AuthService) {
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


	$rootScope.$on('login:Successful', function () {

		console.log('login:Successful');
		$scope.loggedIn = AuthService.isAuthenticated();
		$scope.username = AuthService.getUsername();
		$state.go('user-tabs.user-dailyboards-tab');
	});


	// Create the login modal that we will use later
	$ionicModal.fromTemplateUrl('templates/register.html', {
		scope: $scope
	}).then(function (modal) {
		$scope.registerform = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeRegister = function () {
		$scope.registerform.hide();
	};

	// Open the login modal
	$scope.register = function () {
		$scope.registerform.show();
	};



	// Perform the login action when the user submits the login form
	$scope.doRegister = function () {
		$rootScope.$broadcast('loading:show');
		console.log('Doing registration', $scope.registration);


		AuthService.register($scope.registration);
		$rootScope.$broadcast('loading:hide');
		$scope.closeRegister();
	};

	$rootScope.$on('registration:Successful', function () {
		// auto login after register ok
		console.log('registration:Successful');
		$scope.loginData.username = $scope.registration.username;
		$scope.loginData.password = $scope.registration.password;
		$scope.doLogin();

	});

})

.controller('OwnerProfileCtrl', function ($scope, $rootScope, $state, $ionicModal, $ionicLoading, $ionicPopup, Profile, Shop, DailyBoard, DailyBoardSubscription, NoWasteBoard, NoWasteBoardSubscription, AuthService) {

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


	$scope.logOut = function () {
		AuthService.logout();
	};
	$rootScope.$on('logout:Successful', function () {
		console.log('logout:Successful');
		$state.go('login');
	});


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

										DailyBoardSubscription.find({
											filter: {
												where: {
													dailyBoardId: $scope.dailyboardToRemove.id
												}
											}
										}).$promise.then(
											function (response) {
												$scope.dailyBoardSubscriptionsToRemove = response;
												for (var i = 0; i < $scope.dailyBoardSubscriptionsToRemove.length; i++) {
													DailyBoardSubscription.deleteById({
															id: $scope.dailyBoardSubscriptionsToRemove[i].id
														})
														.$promise
														.then(function () {
															console.log(' dailyBoardSubscription ' + $scope.dailyBoardSubscriptionToRemove[i].id + ' deleted');
														});
												}
												$rootScope.$broadcast('loading:hide');
											},
											function (response) {
												console.log("Error: " + response.status + " " + response.statusText);
												$rootScope.$broadcast('loading:hide');
											});

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

										NoWasteBoardSubscription.find({
											filter: {
												where: {
													noWasteBoardId: $scope.noWasteboardToRemove.id
												}
											}
										}).$promise.then(
											function (response) {
												$scope.noWasteBoardSubscriptionsToRemove = response;
												for (var i = 0; i < $scope.noWasteBoardSubscriptionsToRemove.length; i++) {

													DailyBoardSubscription.deleteById({
															id: $scope.noWasteBoardSubscriptionsToRemove[i].id
														})
														.$promise
														.then(function () {
															console.log(' dailyBoardSubscription ' + $scope.noWasteBoardSubscriptionsToRemove[i].id + ' deleted');
														});
												}
												$rootScope.$broadcast('loading:hide');
											},
											function (response) {
												console.log("Error: " + response.status + " " + response.statusText);
												$rootScope.$broadcast('loading:hide');
											});



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


.controller('OwnerDailyBoardCtrl', function ($scope, $rootScope, $ionicModal, Profile, Shop, DailyBoard) {
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
	.controller('OwnerNoWasteBoardCtrl', function ($scope, $rootScope, $ionicModal, Profile, Shop, NoWasteBoard, NoWasteBoardSubscription) {
		$scope.noWasteItemData = {};
		$scope.noWasteBoard = {};
		$scope.shouldShowDelete = false;
		$scope.shouldShowAdd = true;
		$scope.itemId = {};
		$scope.itemName = {};
		$scope.noWasteBoardSubcribers = {};
		$scope.theshop = {};
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


		$ionicModal.fromTemplateUrl('templates/owner-nowasteboard-tab-give-nowaste-item-modal.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.giveNoWasteItemModal = modal;
		});


		$scope.closeGiveNoWasteItemModal = function () {
			$scope.giveNoWasteItemModal.hide();
		};

		$scope.openGiveNoWasteItemModal = function (itemId, itemName) {
			$scope.giveNoWasteItemModal.show();
			$scope.itemId = itemId;
			$scope.itemName = itemName;
			$rootScope.$broadcast('loading:show');
			NoWasteBoardSubscription.find({
				filter: {
					where: {
						noWasteBoardId: $scope.noWasteBoard.id
					},
					"include": ["profile"]
				}
			}).$promise.then(
				function (response) {
					$scope.noWasteBoardSubcribers = response;
					console.log('noWasteBoardSubcribers found :');
					console.log($scope.noWasteBoardSubcribers);
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				});
		};


		$scope.giveItemToSubscriber = function (profileId, itemId) {
			console.log('giveItemToSubscriber profileId : ' + profileId + ', itemId : ' + itemId);
			//remove item remaining number
			for (var i = 0; i < $scope.noWasteBoard.noWasteItemList.length; i++) {
				if ($scope.noWasteBoard.noWasteItemList[i].id == itemId) {
					console.log('id giveItemToSubscriber found : ' + $scope.noWasteBoard.noWasteItemList[i].id);
					$scope.noWasteBoard.noWasteItemList[i].itemRemainingNumber = $scope.noWasteBoard.noWasteItemList[i].itemRemainingNumber - 1;
					$scope.noWasteBoard.$save();
					break;
				}
			}
			//+1 peps for subscriber
			Profile.findById({
				id: profileId
			}).$promise.then(
				function (response) {
					$scope.subscriber = response;
					$scope.subscriber.peps = $scope.subscriber.peps + 1;
					Profile.prototype$updateAttributes({
						id: profileId
					}, {
						peps: $scope.subscriber.peps
					});
				});


			//+1 peps for the shop
			$scope.theshop.pepsShop = $scope.theshop.pepsShop + 1;
			$scope.theshop.$save();

			$scope.closeGiveNoWasteItemModal();


		};







	})

.controller('OwnerClientsCtrl', function ($scope, $rootScope, Profile, Shop, DailyBoardSubscription, NoWasteBoardSubscription) {
	$scope.dailyBoardSubcribers = [];
	$scope.noWasteBoardSubcribers = [];
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
						console.log("Load dailyBoard id: " + $scope.dailyBoard.id);


						DailyBoardSubscription.find({
							filter: {
								where: {
									dailyBoardId: $scope.dailyBoard.id
								},
								"include": ["profile"]
							}
						}).$promise.then(
							function (response) {
								$scope.dailyBoardSubcribers = response;
								console.log('dailyBoardSubcribers found ');
								$rootScope.$broadcast('loading:hide');
							},
							function (response) {
								console.log("Error: " + response.status + " " + response.statusText);
								$rootScope.$broadcast('loading:hide');
							});

						$rootScope.$broadcast('loading:hide');
					},
					function (response) {
						console.log("Error: " + response.status + " " + response.statusText);
						$rootScope.$broadcast('loading:hide');
					});



				Shop.noWasteBoard({
					id: $scope.theshop.id
				}).$promise.then(
					function (response) {
						$scope.noWasteBoard = response;
						console.log("Load noWasteBoard id: " + $scope.noWasteBoard.id);

						NoWasteBoardSubscription.find({
							filter: {
								where: {
									noWasteBoardId: $scope.noWasteBoard.id
								},
								"include": ["profile"]
							}
						}).$promise.then(
							function (response) {
								$scope.noWasteBoardSubcribers = response;
								console.log('noWasteBoardSubcribers found :');
								console.log($scope.noWasteBoardSubcribers);
								$rootScope.$broadcast('loading:hide');
							},
							function (response) {
								console.log("Error: " + response.status + " " + response.statusText);
								$rootScope.$broadcast('loading:hide');
							});

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

})




.controller('UserProfileCtrl', function ($scope, $rootScope, $state, Profile, AuthService) {
		console.log('username ' + $rootScope.currentProfile.username + ' has ' + $rootScope.currentProfile.peps + ' peps');

		$scope.username = $rootScope.currentProfile.username;
		$scope.peps = $rootScope.currentProfile.peps;


		$scope.logOut = function () {
			AuthService.logout();
		};
		$rootScope.$on('logout:Successful', function () {
			console.log('logout:Successful');
			$state.go('login');
		});



	})
	.controller('UserSearchCtrl', function ($scope, $rootScope, Shop) {

		$scope.resultShopList = {};
		$rootScope.$broadcast('loading:show');
		$scope.resultShopList = Shop.find({
			filter: {
				limit: 20
			}
		});
		$rootScope.$broadcast('loading:hide');


	})

.controller('UserDailyBoardsCtrl', function ($scope, $rootScope, Profile) {
		$scope.dailyBoards = {};

		$rootScope.$broadcast('loading:show');
		Profile.dailyBoards({
				id: $rootScope.currentProfile.id
			})
			.$promise.then(
				function (response) {
					$scope.dailyBoards = response;
					$rootScope.$broadcast('loading:hide');
					console.log("dailyBoards found : " + response);
				}
			);
	})
	.controller('UserNoWasteBoardsCtrl', function ($scope, $rootScope, Profile) {
		$scope.noWasteBoards = {};

		$rootScope.$broadcast('loading:show');
		Profile.noWasteBoards({
				id: $rootScope.currentProfile.id
			})
			.$promise.then(
				function (response) {
					$scope.noWasteBoards = response;
					$rootScope.$broadcast('loading:hide');
					console.log("noWasteBoards found : " + response);
				}
			);
	})

.controller('UserShopDetailCtrl', function ($scope, $rootScope, $stateParams, Shop, DailyBoardSubscription, NoWasteBoardSubscription) {

	$scope.dailyBoard = {};
	$scope.dailyBoardSubscription = {};
	$scope.hasSubscribedToDailyBoard = false;
	$scope.noWasteBoard = {};
	$scope.noWasteBoardSubscription = {};
	$scope.hasSubscribedToNoWasteBoard = false;
	$scope.shop = {};

	$rootScope.$broadcast('loading:show');
	$scope.shop = Shop.findById({
		id: $stateParams.shopId
	});

	Shop.dailyBoard({
		id: $stateParams.shopId
	}).$promise.then(
		function (response) {
			$scope.dailyBoard = response;

			console.log("Load dailyBoard id: " + $scope.dailyBoard.id);

			DailyBoardSubscription.findOne({
				filter: {
					where: {
						profileId: $rootScope.currentProfile.id
					},
					where: {
						dailyBoardId: $scope.dailyBoard.id
					}
				}
			}).$promise.then(
				function (response) {
					$scope.dailyBoardSubscription = response;
					console.log('dailyBoardSubscription found, id :' + $scope.dailyBoardSubscription.id);
					$scope.hasSubscribedToDailyBoard = true;
				},
				function (response) {
					$scope.hasSubscribedToDailyBoard = false;
					console.log("Error: " + response.status + " " + response.statusText);
				});
		},
		function (response) {
			console.log("Error: " + response.status + " " + response.statusText);
		});


	Shop.noWasteBoard({
		id: $stateParams.shopId
	}).$promise.then(
		function (response) {
			$scope.noWasteBoard = response;
			console.log("Load noWasteBoard id: " + $scope.noWasteBoard.id);

			NoWasteBoardSubscription.findOne({
				filter: {
					where: {
						profileId: $rootScope.currentProfile.id
					},
					where: {
						noWasteBoardId: $scope.noWasteBoard.id
					}
				}
			}).$promise.then(
				function (response) {
					$scope.noWasteBoardSubscription = response;
					console.log('noWasteBoardSubscription found, id :' + $scope.noWasteBoardSubscription.id);
					$scope.hasSubscribedToNoWasteBoard = true;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					$scope.hasSubscribedToNoWasteBoard = false;
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				});
		},
		function (response) {
			console.log("Error: " + response.status + " " + response.statusText);
		});

	$scope.subscribeToDailyBoard = function (currentDailyBoardId) {

		$rootScope.$broadcast('loading:show');
		DailyBoardSubscription.create({
				profileId: $rootScope.currentProfile.id,
				dailyBoardId: currentDailyBoardId
			}).$promise
			.then(function () {
					console.log('NoWasteBoardSubscription created !');
					$scope.hasSubscribedToDailyBoard = true;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				}
			);

	}
	$scope.unSubscribeToDailyBoard = function (currentDailyBoardSubscriptionId) {
		console.log('unSubscribeToDailyboard call for id !' + currentDailyBoardSubscriptionId);
		$rootScope.$broadcast('loading:show');
		DailyBoardSubscription.deleteById({
				id: currentDailyBoardSubscriptionId
			})
			.$promise
			.then(function () {
					console.log(' DailyBoardSubscription ' + currentDailyBoardSubscriptionId + ' deleted');
					$scope.hasSubscribedToDailyBoard = false;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				}
			);
	}




	$scope.subscribeToNoWasteBoard = function (currentNoWasteBoardId) {

		$rootScope.$broadcast('loading:show');
		NoWasteBoardSubscription.create({
				profileId: $rootScope.currentProfile.id,
				noWasteBoardId: currentNoWasteBoardId
			}).$promise
			.then(function () {
					console.log('NoWasteBoardSubscription created !');
					$scope.hasSubscribedToNoWasteBoard = true;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				}
			);

	}
	$scope.unSubscribeToNoWasteBoard = function (currentNoWasteBoardSubscriptionId) {
		console.log('unSubscribeToNoWasteBoard call for id !' + currentNoWasteBoardSubscriptionId);
		$rootScope.$broadcast('loading:show');
		NoWasteBoardSubscription.deleteById({
				id: currentNoWasteBoardSubscriptionId
			})
			.$promise
			.then(function () {
					console.log(' NoWasteBoardSubscription ' + currentNoWasteBoardSubscriptionId + ' deleted');
					$scope.hasSubscribedToNoWasteBoard = false;
					$rootScope.$broadcast('loading:hide');
				},
				function (response) {
					console.log("Error: " + response.status + " " + response.statusText);
					$rootScope.$broadcast('loading:hide');
				}
			);
	}

});