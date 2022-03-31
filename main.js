var names=[]
function submit(){
    var name1=document.getElementById("student1").value 
    var name2=document.getElementById("student2").value
    var name3=document.getElementById("student3").value
    var name4=document.getElementById("student4").value
    names.push(name1)
    names.push(name2)
    names.push(name3)
    names.push(name4)
    document.getElementById("result").innerHTML=names
    document.getElementById("submit1").style.display="none"
}
function sort(){
    document.getElementById("result").innerHTML=names.sort()
}