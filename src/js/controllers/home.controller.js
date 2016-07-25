function HomeController (ContactService) {
  let vm = this;

  init ()
  
  function init() {
    ContactService.readContacts().then( res => {
      vm.contacts = res.data;
    });
  }
}

HomeController.$inject = ['ContactService'];
export { HomeController }
