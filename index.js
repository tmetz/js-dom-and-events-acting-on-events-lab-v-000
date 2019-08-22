let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list');
  let name = retrieveEmployeeInformation();
  list.insertAdjacentHTML('beforeend', `<li> ${name} </li>`);
}

function resetInput(){
  document.querySelector('input').value = ''
}

function addNewLiOnClick() {
  document.querySelector('form').addEventListener('submit', function(event){
    event.addNewElementAsLi();
    resetInput();
  })
}

function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
