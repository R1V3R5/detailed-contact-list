function ContactService ($http, SERVER) {
  let url = SERVER.URL
  this.createContact = createContact;
  this.readContacts  = readContacts;
  this.readContact   = readContact;
  this.updateContact = updateContact;
  this.deleteContact = deleteContact;


  function createContact (contact) {
    return $http.post(url, contact);
  } 

  function readContacts () {
    return $http.get(url);
  }

  function readContact (id) {
    return $http.get(url + id);
  }

  function updateContact (contact) {
    return $http.put(url + contact._id, contact);
  }

  function deleteContact (id) {
    return $http.delete(url + id);
  }

}

ContactService.$inject = ['$http', 'SERVER'];
export { ContactService };