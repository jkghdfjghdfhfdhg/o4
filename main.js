1



function getFirstLiText() {
  const firstLi = document.querySelector('li');
  return firstLi.textContent;
}
 2
javascript


function getAllLiTexts() {
  const allLis = document.querySelectorAll('li');
  const texts = [];
  allLis.forEach(li => texts.push(li.textContent));
  return texts;
}
 3
javascript


function getListItemsTexts() {
  const listItems = document.querySelectorAll('.list-item');
  const texts = [];
  listItems.forEach(item => texts.push(item.textContent));
  return texts;
}



function getListItemsClasses() {
  const listItems = document.querySelectorAll('.list-item');
  const classes = [];
  listItems.forEach(item => classes.push(item.getAttribute('class')));
  return classes;
}


function getDataTestIdValues() {
  const listItems = document.querySelectorAll('.list-item');
  const values = [];
  listItems.forEach(item => values.push(item.getAttribute('data-test-id')));
  return values;
}



function getBrokenDataTestIdAttributes() {
  const listItems = document.querySelectorAll('.list-item');
  const brokenIds = listItems.filter(item => !item.getAttribute("class").includes(item.textContent))
                             .map(item => item.getAttribute("data-test-id"));
  return brokenIds;
}


const yourElementsArray = document.querySelectorAll(".list-item");

yourElementsArray.forEach((element, index) => {
  const position = index + 1;
  const text = element.textContent;
  const dataTestId = element.getAttribute("data-test-id");
  
  element.innerHTML = `<li class="list-item green" data-test-id=" ${dataTestId} ">${position} ${text}</li>`;
});




const inputField = document.querySelector('#secret-login');
inputField.value = 'You were hacked';