function loadParameters(){
  debugger;
  console.log('here');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const leadId = urlParams.get('id');
  let idInput = document.getElementById('00N6g00000VFlh4');
  idInput.value = leadId;
}
