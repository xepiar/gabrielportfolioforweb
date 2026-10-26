const oneclick = document.getElementById("oneclick");
const doubleclick = document.getElementById("doubleclick");
const inputname = document.getElementById("inputname");
const cname = document.getElementById("cname");

oneclick.addEventListener("click", function (){
    cname.innerHTML = "TOTOONG JEROME NGA!"
});
doubleclick.addEventListener("dblclick",function(){
    cname.innerHTML = "EH NUNG NAKAPAGBIHIS";
    cname.style.color = "red";

});
inputname.addEventListener("click", function(){
    inputname.style.backgroundColor = "orange"

})







