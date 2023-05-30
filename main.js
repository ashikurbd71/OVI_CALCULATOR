function deleteMe(){

     document.getElementById("my_result").value = ""


}


function calculator(NewValue){

document.getElementById("my_result").value  += NewValue


}

function answer(){


    var a = document.getElementById("my_result").value;
    var b  = eval(a);
    document.getElementById("my_result").value = b
 

}

 