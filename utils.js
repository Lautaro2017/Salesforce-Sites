function loadParameters(){
  debugger;
  const queryString = window.location.search;
  let leadId = queryString.split('id=')[1];
  let discordId = document.getElementsByClassName('discordId')[0];
  discordId.value = leadId;
}
