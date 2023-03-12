const loginData=JSON.parse(localStorage.getItem("info"));

const loginBtn=document.getElementById("loginBtn").addEventListener("click",success);

function success(){
    const userValue=(id)=>document.getElementById(id).value;
    const userName=userValue("name");
    const password=userValue("password")

    if(userName==loginData.name && password==loginData.password){
        window.location.href="ok.html"
    }else if(userName!=loginData.name || userName==""){
        alert("incorret username")
    }else if(password!=loginData.password || password==""){
        alert("password incorrect")
    }
}