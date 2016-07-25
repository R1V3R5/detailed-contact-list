function SingleController (ContactService, $stateParams, $state) {

  let vm = this;

  init();

  function init() {
    ContactService.readContact($stateParams.id).then( res => {
      vm.contact = res.data;
      console.log(res)
    })
  }

  vm.delete = (id) => {
    ContactService.deleteContact(id).then( res => {
      $state.go('root.home');
    })
  }

}

SingleController.$inject = ['ContactService', '$stateParams', '$state'];
export { SingleController };