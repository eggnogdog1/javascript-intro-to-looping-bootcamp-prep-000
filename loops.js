function forLoop(array){

  for (let i=0; i < 25;i++){

  array[i] = `I am ${i} strange loop${i < 2 ? '' : 's'}`

     }
  return array

}

function whileLoop(n){

while(n>0){
  console.log("n");
  n--;}
return "done";
}


function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){

  do {
    array.pop(array.length)
  } while (maybeTrue() && array.length>0);
return array

}
