



let sword1 = {name: "estoc", kind: "long"};
let sword2 = {name: "zweihander", kind: "long"};
let sword3 = {name: "broadsword", kind: "one-handed"};

let swords = [sword1, sword2, sword3];

// remember that state is the way by which we keep track of the current data and display info.
let state = {
    pageHeader: "Sword Keeper Page",
    swords: [sword1, sword2, sword3],
};

function renderSwords() {
    swordStr = "";
    state.swords.forEach(function (sword, index) {
      swordStr += `<div> ${sword.name} is a ${sword.kind} sword.<br />
        <span data-index='${index}' onclick='updateSword(this)'>Update</span>
        <span onclick='deleteSword(${index})'>Delete</span>
        </div>`;
    });
    return swordStr;
};

function addSword() {
    let sword = {};
    let sName = prompt("Enter name of sword:");
    sword.name = sName;
    let sKind = prompt("Enter kind or type of sword:");
    sword.kind = sKind;
    state.swords.push(sword);

    render();
};

function updateSword(swordDiv) {
    let index = swordDiv.dataset.index;
    let sword = state.swords[index];
    console.log(sword);
    let swordName = prompt("Enter name of sword:");
    sword.name = swordName;

    let swordKind = prompt("Enter kind or type of sword:");
    sword.kind = swordKind;

    render();

};

function deleteSword(clickedIndex) {
    console.log(clickedIndex);
    let newSwords = state.swords.filter(function (sword, index) {
    console.log("index: ", index);
    console.log("clickedIndex: ", clickedIndex);
    console.log(clickedIndex != index);
    return clickedIndex != index;
    });
    // let index = swordDiv.dataset.index;
    // let sword = state.swords[index];
    // console.log(sword);
    state.swords = newSwords;
    render();
};



function render() {

    stringOfHtml = `<div>
    <h1>${state.pageHeader}</h1>
    <div onclick='addSword()'>Add Sword</div>
    ${renderSwords()}</div>`;


    renderSwords();

    swordElement = document.getElementById("swordTypes");
    swordElement.innerHTML = stringOfHtml;

};

render();

