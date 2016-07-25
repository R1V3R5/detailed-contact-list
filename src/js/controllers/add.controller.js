import $ from 'jquery';
function AddController(ContactService, $state) {
  let vm = this;

  vm.addContact = addContact;

  function addContact(contact) {
    getPhoto(contact)
  }

  function getPhoto(contact) {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      data: {
        inc: 'name, location, email, phone, picture'
      },
      success: function (data) {
        // let base = data.results[0]
        // contact.name = base.name.first
        // contact.phone = base.phone
        // contact.city = base.location.city
        // contact.state = base.location.state
        // contact.email = base.email
        contact.photoUrl = data.results[0].picture.large;
        ContactService.createContact(contact).then(res => {
          $state.go('root.home')
          // console.log(res)
        });
      }
    });
  }
}

AddController.$inject = ['ContactService', '$state'];
export { AddController };