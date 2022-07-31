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

    refresh = () => {
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
    };
    // refresh();

    // For deleting info..

    deleteRow = (id) => {
        // alert(id);
        let retrieveForDelete = localStorage.getItem('itemJson');
        let retrieveForConvert = JSON.parse(retrieveForDelete);
        retrieveForConvert.splice(id, 1);
        // console.log(retrieveForConvert);
        localStorage.setItem('itemJson', JSON.stringify(retrieveForConvert));
    };
    refresh();                   // Rearranging id again after deleting any task..

    // For editing info..

    editRow = (id) => {
        let retrieveForEdit = localStorage.getItem('itemJson');
        let retrieveForConvert = JSON.parse(retrieveForEdit);
        let newChange = prompt('Editing started..');
        if (newChange == '') {
            alert('Nothing to change..Please give some changes!!');
        } else {
            retrieveForConvert[id][1] = newChange;
            localStorage.setItem('itemJson', JSON.stringify(retrieveForConvert));
        };
    };
});
