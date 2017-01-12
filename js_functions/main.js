function myMessage(){
    console.log("This is my first function!");
}

function add(x, y){
    console.log("Your sum is", x + y);
}

function add2(x, y){
    return x + y;
}

var add2result = add2(24, 72);

function flipCard(element){
    $(element).hide();
}