function config ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tmpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tmpl.html',
      controller: 'HomeController as vm'
    })
    .state('root.add', {
      url: '/add',
      templateUrl: 'templates/add.tmpl.html',
      controller: 'AddController as vm'
    });

  $urlRouterProvider.otherwise('/')
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };