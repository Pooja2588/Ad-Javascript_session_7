   /*problem statment 1  */     

(function firstIFFY()
{
    alert("Hello world!!");
})();
     

/*problem statement 2*/


           var emailCheck=function(email)
           {
               var emailId = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               if(emailId.test(email))
                   {
                       return true;
                   }
               else{
                   return false;
               }
           }
           
           emailCheck("abc@newgen.com");


/*problem statement 3*/

           var formCheck=(function()
           {
               
              
               return function() 
               {
                  var name=document.getElementById('name');
                  var email=document.getElementById('email');
                  var phone=document.getElementById('phone');
                   var msg="Entry should not be blank";
                   var emailMsg="Enter valid email";
                    var emailId = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                   var errorid="";
                   if(name.value=="")
                       {
                           errorid="err_"+name.id;
                         name.className="errorClass";
                           document.getElementById(errorid).innerHTML=msg;
                           document.getElementById(errorid).style.color="red";
                           return false;
                       }
                   else{
                     name.className="txtBox";  
                   }
                   if(email.value=="")
                       {
                           errorid="err_"+email.id;
                         email.className="errorClass";
                           document.getElementById(errorid).innerHTML=msg;
                           document.getElementById(errorid).style.color="red";
                             return false;
                       }
                    else{
                     email.className="txtBox";  
                   }
                     if(!emailId.test(email.value))
                       {
                          errorid="err_"+email.id;
                         email.className="errorClass";
                           document.getElementById(errorid).innerHTML=emailMsg; 
                           document.getElementById(errorid).style.color="red";
                             return false;
                       }
                    else{
                     email.className="txtBox";  
                   }
                   
                     if(phone.value=="")
                       {
                           errorid="err_"+phone.id;
                         phone.className="errorClass";
                           document.getElementById(errorid).innerHTML=msg;
                           document.getElementById(errorid).style.color="red";
                             return false;
                       }
                    else{
                     phone.className="txtBox";  
                   }
                 
                   return true;
               }
           })();
        
       