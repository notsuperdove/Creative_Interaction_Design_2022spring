document.write("Hello, world!");

function sayHello(){
  var responce = prompt("What's your name?")
  alert("Hello " + responce + ", have a nice day!")
}

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(30,500));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "red";
}
