namespace inkedin {

  let app = angular.module('inkedin', ['ui.router', 'ngResource']);

  app.config((
    $stateProvider,
    $urlRouterProvider,
    $locationProvider
  ) => {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/static/home.html',
      controller: inkedin.controllers.HomeController,
      controllerAs: 'controller'
    })
    .state('404', {
      url: '/404',
      templateUrl: '/views/static/404.html'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/views/artist/register.html',
      controller: inkedin.controllers.RegisterController,
      controllerAs: 'controller'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/artist/login.html',
      controller: inkedin.controllers.LoginController,
      controllerAs: 'controller'
    })
    .state('dashboard', {
      url: '/artist/dashboard/:id',
      templateUrl: '/views/artist/dashboard.html',
      controller: inkedin.controllers.DashboardController,
      controllerAs: 'controller'
    })
    .state('edit', {
      url: '/artist/profile/edit/:id',
      templateUrl: '/views/artist/edit.html'
    })

    .state('gallery', {
      url: '/artists/gallery',
      templateUrl: '/views/public/gallery.html'
    });

    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(true);
  });

}
