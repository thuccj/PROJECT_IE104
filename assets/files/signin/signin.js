function login(){
    var user=document.getElementById("username");
    var pass=document.getElementById("password");
    if(user.value==""){
        alert("Bạn chưa nhập tên đăng nhập");
    }
    else if(pass.value==""){
        alert("Bạn chưa nhập mật khẩu");
    }
    else{
        alert("Chào mừng "+user.value);
    }
}
function showpass(){
    var pass=document.getElementById("password");
    if(pass.type==="password"){
    confirm("bạn có muốn hiện mật khẩu")
        pass.type="text";
    }
    else if(pass.type==="text"){
        pass.type="password";
    }
}