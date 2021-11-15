console.log("hello world!");

var flipped = false;

function doStuff(element){
    if(flipped){
        element.innerText = "option 1";
    }else{
        element.innerText = "option 2";
    }
    flipped = !flipped;
}

function newDoStuff(){
    var element = document.querySelector("#paragraph");
    var body = document.querySelector("#body");
    console.log(element.style);

    var color = `rgb(${rand255()}, ${rand255()}, ${rand255()})`;
    alert(color);

    // prompt("what did you do last summer??");
    body.style = `background-color: ${color}`;
    // element.style = "background-color: orange";
}

function rand255(){
    return Math.floor(Math.random() * 256);
}

function remove(element){
    element.remove();
}