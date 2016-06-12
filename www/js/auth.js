'use strict';

angular
	.module('starter.services', [])
	.constant("baseURL", "http://fbranciard-coursera-loopback-api.mybluemix.net/")
	.factory('AuthService', ['Profile', '$q', '$rootScope', '$ionicPopup',
    function (Profile, $q, $rootScope, $ionicPopup) {
			function login(loginData) {
				return Profile
					.login(loginData)
					.$promise
					.then(function (response) {
							$rootScope.currentProfile = {
								id: response.user.id,
								tokenId: response.id,
								username: loginData.username,
								peps:response.user.peps
							};
							$rootScope.$broadcast('login:Successful');
						},
						function (response) {

							var message = '<div><p>' + response.data.error.message +
								'</p><p>' + response.data.error.name + '</p></div>';

							var alertPopup = $ionicPopup.alert({
								title: '<h4>Login Failed!</h4>',
								template: message
							});

							alertPopup.then(function (res) {
								console.log('Login Failed!');
							});
						});
			}

			function isAuthenticated() {
				if ($rootScope.currentProfile) {
					return true;
				} else {
					return false;
				}
			}

			function getUsername() {
				return $rootScope.currentProfile.username;
			}

			function logout() {
				return Profile
					.logout()
					.$promise
					.then(function () {
						$rootScope.currentProfile = null;
						$rootScope.$broadcast('logout:Successful');
					});
			}

			function register(registerData) {
				return Profile
					.create({
						username: registerData.username,
						email: registerData.email,
						password: registerData.password
					})
					.$promise
					.then(function (response) {
						$rootScope.$broadcast('registration:Successful');
						},
						function (response) {

							var message = '<div><p>' + response.data.err.message +
								'</p><p>' + response.data.err.name + '</p></div>';

							var alertPopup = $ionicPopup.alert({
								title: '<h4>Registration Failed!</h4>',
								template: message
							});

							alertPopup.then(function (res) {
								console.log('Registration Failed!');
							});

						});
			}

			return {
				login: login,
				logout: logout,
				register: register,
				isAuthenticated: isAuthenticated,
				getUsername: getUsername
			};
  }])

.factory('$localStorage', ['$window', function ($window) {
	return {
		store: function (key, value) {
			$window.localStorage[key] = value;
		},
		get: function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		remove: function (key) {
			$window.localStorage.removeItem(key);
		},
		storeObject: function (key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function (key, defaultValue) {
			return JSON.parse($window.localStorage[key] || defaultValue);
		}
	}
}]);