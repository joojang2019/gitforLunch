angular.module('app.routes', [])

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

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('selectschool', {
    url: '/selectschool',
    templateUrl: 'templates/selectschool.html',
    controller: 'selectschoolCtrl'
  })

  .state('schoolName', {
    url: '/school/:schoolId',
    
      
        templateUrl: 'templates/schoolName.html',
        controller: 'schoolNameCtrl'
    
    
  })

 

.state('mySchools', {
    url: '/page2',
   
        templateUrl: 'templates/mySchools.html',
        controller: 'mySchoolsCtrl'

    
  })



$urlRouterProvider.otherwise('/login')

  

});