// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
//  та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let users = [];
let btnShowUser = document.getElementById("btn");

btnShowUser.onclick = function() {
    const name = document.getElementById("nameInput").value;
    const surname = document.getElementById("surnameInput").value;
    const age = document.getElementById("ageInput").value;

    const user = { name, surname, age };

    users.push(user);

    let newBlock = document.createElement('div');
    newBlock.innerText = `${user.name}, ${user.surname}, ${user.age}`;
    document.getElementById("result").appendChild(newBlock);
};

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const counterElement = document.getElementById("number");

let currentCount = parseInt(localStorage.getItem("count")) || 0;

currentCount += 1;

localStorage.setItem("count", currentCount);

counterElement.innerText = currentCount;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація 
// про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

function saveSessionInfo() {
    var currentDate = new Date();
    var sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push({ date: currentDate });
    localStorage.setItem('sessions', JSON.stringify(sessions));
}

// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const dataArray = Array.from({ length: 100 }, (_, index) => ({ id: index + 1, content: `Об'єкт ${index + 1}` }));
const itemsPerPage = 10;
let currentPage = 1;

const container = document.getElementById('container');

function displayItems() {
    container.innerHTML = dataArray
        .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        .map(item => `<div class="item">${item.content}</div>`)
        .join('');

    document.querySelector('button:first-of-type').disabled = currentPage === 1;
    document.querySelector('button:last-of-type').disabled = currentPage === Math.ceil(dataArray.length / itemsPerPage);
}

function changePage(delta) {
    currentPage = Math.max(1, Math.min(currentPage + delta, Math.ceil(dataArray.length / itemsPerPage)));
    displayItems();
}

displayItems();


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let getEl = document.getElementById("hider")

getEl.onclick = function() {
    document.getElementById("text").hidden = true;
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити 
// вік чи меньше він ніж 18, та повідомити про це користувача

// function onButtonClick() {
//     let checkAge = document.getElementById("idForAge").value;

//     if (checkAge < 18) {
//         alert("Error: Registration is only 18+");
//         return false
//     }

//     return true;
// }

function onButtonClick() {
    var today = new Date();
    var year = today.getFullYear();
    var valueInputDate = document.getElementById("idForAge").value;
    var getYearInput = new Date(valueInputDate);
    var getUserYear = getYearInput.getFullYear();

    if (getUserYear > (year - 18)) {
        alert("Error, registration only 18+");
        return false;
    };
    return true;
};

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається