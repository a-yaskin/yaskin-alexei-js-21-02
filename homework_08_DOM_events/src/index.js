const form = document.getElementsByTagName('form')[0];
const nameInput = document.getElementById('nameInput');
const phoneInput = document.getElementById('phoneInput');
const submitButton = document.querySelector('button[type="submit"]');

const table = document.getElementsByTagName('table')[0];
const tBody = table.tBodies[0];
const templateRow = tBody.rows[0];

const nameRegExp = /^[А-я ]*$/;
const phoneRegExp = /^\+?[0-9()\- ]*$/;

const validateValue = (value, regExp) => regExp.test(value);

const attachControllerTo = (input, regexp) => {
  let inputValue = "";
  const handleInput = (e) => {
    if (validateValue(e.target.value, regexp)) {
      inputValue = e.target.value;
    }
    input.value = inputValue;
  }
  input.addEventListener('input', handleInput);
};
attachControllerTo(nameInput, nameRegExp);
attachControllerTo(phoneInput, phoneRegExp);

const handleSubmitButtonState = (e) => {
  submitButton.disabled = ((e.target.id === 'nameInput' || e.target.id === 'phoneInput')
    && (nameInput.value === '' || phoneInput.value === ''));
};
form.addEventListener('input', handleSubmitButtonState);

const handleDelete = (e) => {
  const isButtonClicked = e.target.classList.contains('delete');
  if (isButtonClicked) {
    e.currentTarget.remove();
  }
};

const addRecord = (name, phone) => {
  const newRow = templateRow.cloneNode(true);
  newRow.style.display = 'table-row';
  newRow.cells[0].innerText = name;
  newRow.cells[1].innerText = phone;
  newRow.addEventListener('click', handleDelete);
  tBody.lastElementChild.after(newRow);// or tBody.append(newRow);
};

const handleSubmission = (e) => {
  e.preventDefault();
  addRecord(nameInput.value, phoneInput.value);
  nameInput.value = phoneInput.value  = '';
  submitButton.disabled = true;
};
submitButton.addEventListener('click', handleSubmission);

const prefillContacts = [
  ['Сидоров Петр Сергеевич', '+7 (910) 344-55-34'],
  ['Иванов Иван Михайлович', '+7 (911) 990-35-53'],
  ['Терентьева Зинаида Васильевна', '+7 (910) 334-54-44'],
  ['Леонов Михаил Денисович', '+7 (916) 614-25-23'],
  ['Тарасов Дмитрий Сергеевич', '+7 (914) 354-53-71']
];

prefillContacts.forEach(contact => addRecord(...contact));

const themes = Array.from(form.querySelectorAll('[type="button"]'))
  .map(el => el.dataset.theme);

const handleTheming = (e) => {
  if (e.target.type === 'button') {
    const theme = e.target.dataset.theme;
    const tClasses = table.classList;
    if (tClasses.length) {
      tClasses.forEach(tClass => {
          if (themes.includes(tClass)) {
            tClasses.remove(tClass);
            form.querySelector(`[data-theme=${tClass}]`).disabled = false;
          }
      });
    }
    tClasses.add(theme);
    form.querySelector(`[data-theme=${theme}]`).disabled = true;
  }
};
form.addEventListener('click', handleTheming);
form.querySelector('[data-theme=theme1]').click();
nameInput.focus();
