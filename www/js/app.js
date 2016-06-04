// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','lbServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

  // setup an abstract state for the tabs directive
    .state('user-tabs', {
    url: '/user-tabs',
    abstract: true,
    templateUrl: 'templates/user-tabs.html'
  })


  // Each tab has its own nav history stack:

  .state('user-tabs.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('user-tabs.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('user-tabs.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('user-tabs.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('user-tabs.user-profile-tab', {
    url: '/user-profile-tab',
    views: {
      'user-profile-tab': {
        templateUrl: 'templates/user-profile-tab.html'
      }
    }
  })
  .state('user-tabs.user-search-tab', {
    url: '/user-search-tab',
    views: {
      'user-search-tab': {
        templateUrl: 'templates/user-search-tab.html'
      }
    }
  })
    .state('user-tabs.user-nowasteboards-tab', {
    url: '/user-nowasteboards-tab',
    views: {
      'user-nowasteboards-tab': {
        templateUrl: 'templates/user-nowasteboards-tab.html'
      }
    }
  })
     .state('user-tabs.user-dailyboards-tab', {
    url: '/user-dailyboards-tab',
    views: {
      'user-dailyboards-tab': {
        templateUrl: 'templates/user-dailyboards-tab.html',
        controller: 'DailyBoardsCtrl' 
      }
    }
  })
  
  
      .state('owner-tabs', {
    url: '/owner-tabs',
    abstract: true,
    templateUrl: 'templates/owner-tabs.html'
  })
   .state('owner-tabs.owner-dailyboard-tab', {
    url: '/owner-dailyboard-tab',
    views: {
      'owner-dailyboard-tab': {
        templateUrl: 'templates/owner-dailyboard-tab.html',
        controller: 'DailyBoardCtrl' 
      }
    }
  })
     .state('owner-tabs.owner-nowasteboard-tab', {
    url: '/owner-nowasteboard-tab',
    views: {
      'owner-nowasteboard-tab': {
        templateUrl: 'templates/owner-nowasteboard-tab.html'
      }
    }
  })
       .state('owner-tabs.owner-clients-tab', {
    url: '/owner-clients-tab',
    views: {
      'owner-clients-tab': {
        templateUrl: 'templates/owner-clients-tab.html'
      }
    }
  })
         .state('owner-tabs.owner-profile-tab', {
    url: '/owner-profile-tab',
    views: {
      'owner-profile-tab': {
        templateUrl: 'templates/owner-profile-tab.html',
        controller: 'ProfileCtrl'
      }
    }
  })
 

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

});
