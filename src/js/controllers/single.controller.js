function SingleController (ContactService, $stateParams) {

  let vm = this;

  init();

  function init() {
    ContactService.readContact($stateParams.id).then( res => {
      vm.contact = res.data;
      console.log(res)
    })
  }
}

SingleController.$inject = ['ContactService', '$stateParams'];
export { SingleController };