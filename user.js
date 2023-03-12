const sendBtn=document.getElementById("sendBtn").addEventListener("click",userInfo);

function userInfo(){
    const info=(id)=>document.getElementById(id).value;
    const name=info("userName");
    const password=info("userPass");
    const email=info("userEmail");
    const phone=info("userPhone");
    const address=info("userAddress");
    const gender=info("userGender")


    if(name==""){
        alert("fullfill here")
    }else if(password==""){
        alert("password not fill")
    }else if(email==""){
        alert("email not fill")
    }else if(phone==""){
        alert("phone not fill")
    }else if(address==""){
        alert("address not fill")
    }
    else{
    const allInfo={name,password,email,phone,address,gender};
    let user=[]
    if(localStorage.getItem("info")){
        user=JSON.parse(localStorage.getItem("info"))
    }
    user=allInfo
    localStorage.setItem("info",JSON.stringify(user))

    window.location.href="login.html"
    }
}
