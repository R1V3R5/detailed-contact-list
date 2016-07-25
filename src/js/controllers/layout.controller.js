function LayoutController ($state, $rootScope) {

  let vm = this;

  init($state.current);

  function init (state) {
    vm.class = state.name.slice(5);

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
      vm.class = toState.name.slice(5);
    });

  }

}

LayoutController.$inject = ['$state', '$rootScope'];
export { LayoutController };