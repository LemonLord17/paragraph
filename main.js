/*function submit1(){
    for (var j = 1; j <=4; j++){
    var name1 = document.getElementById("name_of_the_student_"+j).value
    names.push(name1);

    }
    console.log(names)
    var display = [];
    for (var c = 0; c<names.length;c++){
display.push("<h4>name:"+names[c]+"</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML=display
    var nocom = display.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=nocom

    document.getElementById("submit_button").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"


}*/ 

var inputs1 = [];

function submit2(){

    for(var i = 1 ; i <=4 ; i++)
{
    inputs1.push(document.getElementById("2name_of_the_student_" + i).value)
    

}
document.getElementById("show2").innerHTML = inputs1.join(". ");

}

var inputs = [];

function submit1(){

    for(var i = 1 ; i <=4 ; i++)
{
    inputs.push(document.getElementById("name_of_the_student_" + i).value)
    

}
document.getElementById("show1").innerHTML = inputs.join(". ");

}