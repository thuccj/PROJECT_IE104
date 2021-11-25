function signup(){
    var user=document.getElementById("username");
    var pass1=document.getElementById("password1");
    var pass2=document.getElementById("password2");
    if(user.value==""){
        alert("Bạn chưa nhập tên đăng nhập");
    }
    else if(pass1.value==""){
        alert("Bạn chưa nhập mật khẩu");
    }
    else if(pass2.value==""){
        alert("Bạn chưa nhập lại mật khẩu");
    }
    else{
        alert("Chào mừng "+user.value);
    }
}
function showpass1(){
    var pass1=document.getElementById("password1");
    if(pass1.type==="password"){
    confirm("bạn có muốn hiện mật khẩu")
        pass1.type="text";
    }
    else if(pass1.type==="text"){
        pass1.type="password";
    }
}
function showpass2(){
    var pass2=document.getElementById("password2");
    if(pass2.type==="password"){
    confirm("bạn có muốn hiện mật khẩu")
        pass2.type="text";
    }
    else if(pass2.type==="text"){
        pass2.type="password";
    }
}