 var form = document.getElementById("form1");
       function confirm(ele) {
          var nickname = document.getElementById('nickname');
          var sex = document.getElementById("sex");
          var phone = document.getElementById("phone");
          var loction = document.getElementById("loction");
          var height = document.getElementById("height");
          var weight = document.getElementById("weight");
          if (nickname.value.length==0) {
            nickname.focus();
          }else if (sex.value.length==0) {
                sex.focus();
          }else if (phone.value.length==0) {
              phone.focus();
          }else if (loction.value.length==0) {
              loction.focus();
          }else if (height.value.length==0) {
              height.focus();
          }else if (weight.value.length==0) {
              weight.focus();
          }else{
            // form.submit();
            var fun = document.createElement("div");
            fun.id = "nickname";
            fun.textContent  = nickname.value;
            nickname.parentElement.replaceChild(fun,nickname);
            var fun1 = document.createElement("div");
            fun1.id = "sex";
            fun1.textContent  = sex.value;
            sex.parentElement.replaceChild(fun1,sex);
             var fun2 = document.createElement("div");
             fun2.id = "phone";
            fun2.textContent  = phone.value;
            phone.parentElement.replaceChild(fun2,phone);
             var fun3 = document.createElement("div");
             fun3.id = "loction";
            fun3.textContent  = loction.value;
            loction.parentElement.replaceChild(fun3,loction);
             var fun4 = document.createElement("div");
             fun4.id = "height";
            fun4.textContent  = height.value;
            height.parentElement.replaceChild(fun4,height);
             var fun5 = document.createElement("div");
             fun5.id = "weight";
            fun5.textContent  = weight.value;
            weight.parentElement.replaceChild(fun5,weight);
            ele.setAttribute("disabled","");
            var cancel = document.getElementById('cancel');
            cancel.removeAttribute('disabled');
          }
       }
       var cancel = document.getElementById("cancel");
       cancel.onclick = function(){
          var nickname = document.getElementById('nickname');
          var sex = document.getElementById("sex");
          var phone = document.getElementById("phone");
          var loction = document.getElementById("loction");
          var height = document.getElementById("height");
          var weight = document.getElementById("weight");
          var input =document.createElement("input");
          input.setAttribute("type","text");
          input.setAttribute("placeholder","Grace");
          input.setAttribute("id","nickname");
          nickname.parentElement.replaceChild(input,nickname);
          var input1 =document.createElement("input");
          input1.setAttribute("type","text");
          input1.setAttribute("placeholder","请输入性别");
          input1.setAttribute("id","sex");
          sex.parentElement.replaceChild(input1,sex);
          var input2 =document.createElement("input");
          input2.setAttribute("type","text");
          input2.setAttribute("placeholder","130****5454");
          input2.setAttribute("id","phone");
         phone.parentElement.replaceChild(input2,phone);
          var input3 =document.createElement("input");
          input3.setAttribute("type","text");
          input3.setAttribute("placeholder","江苏省  徐州市");
          input3.setAttribute("id","loction");
          loction.parentElement.replaceChild(input3,loction);
          var input4 =document.createElement("input");
          input4.setAttribute("type","text");
          input4.setAttribute("placeholder","170cm");
          input4.setAttribute("id","height");
          height.parentElement.replaceChild(input4,height);
          var input5 =document.createElement("input");
          input5.setAttribute("type","text");
          input5.setAttribute("placeholder","55kg");
          input5.setAttribute("id","weight");
         weight.parentElement.replaceChild(input5,weight);
         var cancel = document.getElementById('true');
         cancel.removeAttribute('disabled');
          this.setAttribute('disabled','');}