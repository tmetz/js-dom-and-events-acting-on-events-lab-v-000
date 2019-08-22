let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let list = document.querySelector('.employee-list');
  let name = retrieveEmployeeInformation();
  list.insertAdjacentHTML('beforeend', '<li> ${name} </li>');
}

function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()
