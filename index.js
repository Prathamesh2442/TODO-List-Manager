/*
let sejalValue = false;

function ram(){
    return 'Ram says: I am coming..';
};
function sejal(){
    return new Promise((resolve, reject)=>{
        sejalValue = true;
        setTimeout(()=>{
            resolve('Sejal says: I am coming..');
        },5000);
    });
};
function rahul(){
    if(sejalValue){
        return 'Rahul says: I am coming..';
    }else{
        return 'Rahul says: I am not coming..';
    };
};

async function responsesOfAll(){
    let ramResponse = ram();
    console.log(ramResponse);
    let sejalResponse = await sejal();
    console.log(sejalResponse);
    let rahulResponse = rahul();
    console.log(rahulResponse);
};
responsesOfAll();
*/

/*
let main = document.getElementById('main');
async function usersData() {
    let response = await fetch('https://api.github.com/users');
    let users = await response.json();
    for (let i = 0; i < users.length; i++) {
        main.innerHTML += `
        <div id ="img">
            <img src="${users[i]['avatar_url']}" alt="${users[i]['id']}">
        </div>
        `;
    };
};
usersData();
*/

/*
let main = document.getElementById('main');
function usersData() {
    fetch('https://api.github.com/users').then((response) => {
        return response.json();
    }).then((users) => {
        for (let i = 0; i < users.length; i++) {
            main.innerHTML += `
            <div id ="img">
            <img src="${users[i]['avatar_url']}" alt="${users[i]['id']}">
            </div>
            `
        };
    });
};
usersData();
*/

/*

let year = 2016;
let month = 7;
let dayCount;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayCount = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayCount = 30;
    break;
  case 2:
    // leap year
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      dayCount = 29;
    } else {
      dayCount = 28;
    }
    break;
  default:
    dayCount = -1; // invalid month
}

console.log(dayCount); // 29

*/

/*
try {
    primeNumber();
} catch (error) {
    console.log('This is an error: ', error);
};
*/


// TODO List Manager

$('document').ready(() => {

    // Storing in localstorage..

    let table = document.getElementById('table');
    submitDetails = () => {
        let taskID = prompt('Enter taskID: ');
        let taskName = prompt('Enter taskName: ');
        if (taskID === '' || taskName === '') {
            alert('Empty values are not allowed..');
        } else {
            if (localStorage.getItem('itemJson') == null) {
                arrayOfInfo = [];
                arrayOfInfo.push([taskID, taskName]);
                localStorage.setItem('itemJson', JSON.stringify(arrayOfInfo));
                table.innerHTML += `
                <tr class='info'>
                <td>${taskID}</td>
                <td>${taskName}</td>
                <td><button id="deleteBtn" class="dButton" onclick="deleteRow()">Delete</button>
                <button class= "eButton" id="editRow" onclick="editRow()">Edit</button>
                </td>
                </tr>`
            } else {
                let retrievedInfo = localStorage.getItem('itemJson');
                let convertedInfo = JSON.parse(retrievedInfo);
                convertedInfo.push([taskID, taskName]);
                localStorage.setItem('itemJson', JSON.stringify(convertedInfo));
                table.innerHTML += `
         <tr class='info'>
         <td>${taskID}</td>
         <td>${taskName}</td>
         <td><button class="dButton" id="${id}" onclick="deleteRow()">Delete</button>
         <button class= "eButton" id="editRow" onclick="editRow()">Edit</button>
         </td>
         </tr>`
            };
        };
    };

    // For rendering info..

    let StroredInfoInJson = localStorage.getItem('itemJson');
    let inJson = JSON.parse(StroredInfoInJson);
    let id = 0;
    for (let row = 0; row < inJson.length; row++) {
        table.innerHTML += `
         <tr class='info'>
         <td>${inJson[row][0]}</td>
         <td>${inJson[row][1]}</td>
         <td><button class= "dButton" onclick="deleteRow(${id})">Delete</button>
         <button class= "eButton" id="editRow" onclick="editRow(${id})">Edit</button>
         </td>
         </tr>`
        id += 1;
    };

    // For deleting info..

    deleteRow = (id) => {
        // alert(id);
        let retrieveForDelete = localStorage.getItem('itemJson');
        let retrieveForConvert = JSON.parse(retrieveForDelete);
        retrieveForConvert.splice(id, 1);
        // console.log(retrieveForConvert);
        localStorage.setItem('itemJson', JSON.stringify(retrieveForConvert));
    };

    // For editing info..

    editRow = (id) => {
        let retrieveForEdit = localStorage.getItem('itemJson');
        let retrieveForConvert = JSON.parse(retrieveForEdit);
        let newChange = prompt('Editing startd..');
        if (newChange == '') {
            alert('Nothing to change..Please give some changes!!');
        } else {
            retrieveForConvert[id][1] = newChange;
            localStorage.setItem('itemJson', JSON.stringify(retrieveForConvert));
        };
    };
});
