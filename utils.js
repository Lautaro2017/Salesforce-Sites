function loadParameters(){
  debugger;
  const queryString = window.location.search;
  let leadId = queryString.split('id=')[1];
  let idInput = document.getElementsByName('discordId')[0].setAttribute('value', leadId);
}
