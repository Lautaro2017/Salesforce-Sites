function loadParameters(){
  debugger;
  const queryString = window.location.search;
  let leadId = queryString.split('id=')[1];
  document.getElementById('00N6g00000VFlh4').value = leadId;
}
