function deleteUser(userRow){
    $(userRow).closest('tr').remove();
}
function saveEmployee(){
    var role =$("#role-select :selected").val();
    var firstName=$("#first-name-input").val();
    var lastName=$("#last-name-input").val();
    if(role=="0" || firstName=="" || lastName==""){
        $("#validation_message").text('All fields are required')
    }else{
         
        if(role=="1"){           
            addUser(firstName, lastName);
        }
        else if(role=="2"){
            addSeniorUser(firstName, lastName);
            
        }
        else if(role=="3"){
            addWfm(firstName,lastName);
            
        }
        $("#add-user-modal").modal('hide');
    }
   
}
$(".add_user").click(function(){
    $("#role-select").val(0);
    $("#first-name-input").val("");
    $("#last-name-input").val("");
    $("#validation_message").text("");
})


