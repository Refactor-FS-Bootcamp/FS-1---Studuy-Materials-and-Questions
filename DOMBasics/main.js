//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#my-form'));

//Grab Multiple Elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// console.log([2,4,5]);

// const nodeItems = document.querySelectorAll('.item');
// const colItems = document.getElementsByClassName('item');

// nodeItems.forEach(item => console.log(item));
// colItems.forEach(item => console.log(item));
// for(let i=0; i<colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM Manipulation
// const ul = document.querySelector('.items');
// ul.remove();


// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'blue';
// btn.style.textTransform = 'uppercase';

//Event listener
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h4>JavaScript</h4>';
// })

//Form Validation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please add all the fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}
