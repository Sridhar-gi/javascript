let output= document.getElementById("output")

let no = Math.random(1)*100;
let round = Math.floor(no)

let no1 = Math.random(1)*100;
let round1 = Math.floor(no1)

output.innerHTML = `${round} + ${round1}`;

let num=()=>{

    let input1 = document.getElementById("number1").value
    let ans1 = document.getElementById("answer")
    let ans = round+round1;
    let userans2= parseInt(input1)
    if(ans === userans2){
        ans1.innerHTML=`Correct`
    }
    else{
        ans1.innerHTML="wrong"
    }
}
document.getElementById("sub").addEventListener("click",num);

let refresh=()=>{
    location.reload();

}
document.getElementById("sub1").addEventListener("click",refresh)
