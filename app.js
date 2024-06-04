let form = document.getElementById('form');
const inputItem = document.getElementById('input');
const submit = document.getElementById("submit");
const bazarList = document.getElementById('bazar-list');
const list = document.getElementById("list");


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputItem.value) {
    alert('Enter a data');
    return;
  } 
  const div = document.createElement('div');
  div.classList.add('list');

  const input = document.createElement('input');
  input.classList.add('list-item');
  input.value = inputItem.value;
  input.setAttribute('readonly', 'readonly');
  div.appendChild(input);

  bazarList.appendChild(div);

  const  deleteBtn = document.createElement('button');
  deleteBtn.classList.add('remove');
  deleteBtn.innerText = 'Delete';
  div.appendChild(deleteBtn);

  const edit = document.createElement('button');
  edit.classList.add('delete');
  edit.innerText = 'Edit';
  div.appendChild(edit);

  edit.addEventListener('click', (e) => {
    if (e.target.innerText === 'Edit') {
      input.removeAttribute('readonly');
      edit.innerText = 'Save';
      // input.focus();
    } else {
      edit.innerText = 'Edit';
        input.setAttribute('readonly', 'readonly');
    }
  })

  deleteBtn.addEventListener('click', (e) => {
    bazarList.removeChild(div);
  })

  inputItem.value = '';
  
})




