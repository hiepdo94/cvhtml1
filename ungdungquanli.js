let arr = ['SonyXpera', 'SamSungGalaxy', 'Nokia6', 'Xiaomi Remid Note4', 'AppleIphone6s', 'Xiaomi Mi 5s Plus', 'Oppo A71'];
function main() {
    let html = '';
    html += '<table border="1">';
    for (let i = 0; i < arr.length; i++) {
        html += `<tr>`;
        html += `<td> ${arr[i]} </td>`;
        html += `<td>  <input type="button", value="edit" onclick= "edit(${i})" /> </td>`;
        html += `<td> <input type="button", value="delete" onclick="deletel(${i})" /> </td>`;
        html += `</tr>`;
        html += `<tr id="hidden${i}" style="display: none">`;
        html += `<td> <input type= "text" id ="valueid${i}"></td>`;
        html += `<td> <input type= "button" value= "edit" onclick= "okedit(${i})"></td>`;
        html += `</tr>`
    }
    html += '</table>';
    document.getElementById('content').innerHTML = html;
}
main();

function add() {
    let newvalue = document.getElementById('input').value;
    arr.push(newvalue);
    main();
}
function deletel(number){
   arr.splice(number,1);
   main();
}

function edit(number){
    document.getElementById(`hidden${number}`).style.removeProperty('display');
}

function okedit(number){
    let newvalue2 = document.getElementById(`valueid${number}`).value;
    arr [number] = newvalue2;
    main();
}
