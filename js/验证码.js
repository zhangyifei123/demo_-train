 var time1;
    function time(ele){
        if(ele.value == "获取手机验证码"){
           time1 = setInterval(fun,1000);          
        }
    } 
    var a1 = 59;
    function fun(){
        var b1 = document.getElementById('btn'); 
        if(a1 == 0){
            clearInterval(time1);
            b1.value = "获取手机验证码";
            a1 = 59;
        }else{
           b1.value = "重新发送("+a1--+")"; 
        }    
    }

    
 		var a = document.querySelectorAll("input")[0];
 		var b = document.querySelectorAll("input")[1];
 		var form = document.forms[0];
 		function fun1(){
 			if(a.value.length == 0){
 				a.focus();
 			}else if(b.value.length == 0){
 				b.focus();
 			}else{
   				form.submit();
 			}
 		}