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
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html'
      }
    }
  })
  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html'
      }
    }
  })
    .state('tab.nowasteboards', {
    url: '/nowasteboards',
    views: {
      'tab-nowasteboards': {
        templateUrl: 'templates/tab-nowasteboards.html'
      }
    }
  })
     .state('tab.dailyboards', {
    url: '/dailyboards',
    views: {
      'tab-dailyboards': {
        templateUrl: 'templates/tab-dailyboards.html',
        controller: 'DailyBoardsCtrl' 
      }
    }
  })
  
  
      .state('tab-owner', {
    url: '/tab-owner',
    abstract: true,
    templateUrl: 'templates/tabs-owner.html'
  })
   .state('tab-owner.dailyboard', {
    url: '/dailyboard',
    views: {
      'tab-owner-dailyboard': {
        templateUrl: 'templates/tab-owner-dailyboard.html',
        controller: 'DailyBoardCtrl' 
      }
    }
  })
     .state('tab-owner.nowasteboard', {
    url: '/nowasteboard',
    views: {
      'tab-owner-nowasteboard': {
        templateUrl: 'templates/tab-owner-nowasteboard.html'
      }
    }
  })
       .state('tab-owner.clients', {
    url: '/clients',
    views: {
      'tab-owner-clients': {
        templateUrl: 'templates/tab-owner-clients.html'
      }
    }
  })
         .state('tab-owner.profile', {
    url: '/profile',
    views: {
      'tab-owner-profile': {
        templateUrl: 'templates/tab-owner-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
 

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

});
