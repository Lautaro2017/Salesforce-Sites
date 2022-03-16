function loadParameters(){
  debugger;
  const queryString = window.location.search;
  let leadId = queryString.split('id=')[1];
  let inputId = document.getElementsByName('discordId')[0].id;
  let idInput = document.getElementsById(inputId).value = leadId;
}
