$(document).ready(function () {
    $.getJSON("employees.json",function( employees ) {
        
        $(employees.users).each(function( i, employee ) {
            
            if(employee.role=="1"){
                addUser(employee.firstName, employee.lastName);
                }
            if(employee.role=="2"){
                addSeniorUser(employee.firstName, employee.lastName);
            }
            if(employee.role=="3"){
                addWfm(employee.firstName, employee.lastName);
            }
              
        });
       
    });
})





