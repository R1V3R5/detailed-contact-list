import $ from 'jquery';
function AddController(ContactService, $state) {
  let vm = this;

  vm.addContact = addContact;

  function addContact(contact) {
    console.log(contact)
    contact.photoUrl = getPhoto(contact)
    console.log(contact)
    ContactService.createContact(contact).then( res => {
      $state.go('root.home')
    });
  }

  function getPhoto(contact) {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      data: {
        inc: 'picture'
      },
      success: function (data) {
        contact.photoUrl = data.results[0].picture.thumbnail;
      }
    });
  }
}

AddController.$inject = ['ContactService', '$state'];
export { AddController };