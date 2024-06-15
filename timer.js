function OTP() {

    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.8)";
    document.getElementById("loginbox").style.backgroundColor = "rgba(0,0,0,0.6)";
    document.getElementById("otp").style.display = "block";

    let text = 30;
    function display(){ 
    if(text == 0){
        document.getElementById('seconds').innerHTML = `<a id="Resend" href='#'>Click Here</a>`;
    }
    else{
            document.getElementById('seconds').innerHTML = '00:'+text;
        }
    }

    function timer(){
        if(text>0){
            text--;
            display();
            setTimeout(timer,1000);
        }
    }

    timer();

}

function log(){
    document.getElementById("main").style.backgroundColor="";
    document.getElementById("loginbox").style.backgroundColor="";
    document.getElementById("otp").style.display = "none";

}