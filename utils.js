function loadParameters(){
  debugger;
  const queryString = window.location.search;
  let leadId = queryString.split('id=')[1];
  let idInput = document.getElementById('00N6g00000VFlh4');
  idInput.value = leadId;
}
