function addUser(firstName, lastName){
    var employeeData="";
    var usersData = $("#users tbody") ;
    var rowCount=$('#users tbody tr:last th').text();
    employeeData+="<tr><th scope='row'>"+(parseInt(rowCount)+1)+"<td >"+firstName+"</td>"+"<td >"+lastName+"</td><td>User</td><td><button type='button' class='btn btn-outline-danger btn-sm' onClick='deleteUser(this)'>Delete</button></td></tr>";
        usersData.append(employeeData);

}

function addSeniorUser(firstName,lastName){
    var employeeData="";
    var seniorUserData = $("#senior-users tbody") ;
                var rowCount=$('#senior-users tbody tr:last th').text();
                employeeData+="<tr><th scope='row'>"+(parseInt(rowCount)+1)+"<td >"+firstName+"</td>"+"<td >"+lastName+"</td><td>Senior User</td><td><button type='button' class='btn btn-outline-danger btn-sm' onClick='deleteUser(this)'>Delete</button></td></tr>";
                    seniorUserData.append(employeeData);
}

function addWfm(firstName,lastName){
    var employeeData="";
    var wfmData = $("#wfm-users tbody") ;
                var rowCount=$('#wfm-users tbody tr:last th').text();
                employeeData+="<tr><th scope='row'>"+(parseInt(rowCount)+1)+"<td >"+firstName+"</td>"+"<td >"+lastName+"</td><td>WFM Professional</td><td><button type='button' class='btn btn-outline-danger btn-sm' onClick='deleteUser(this)'>Delete</button></td></tr>";
                    wfmData.append(employeeData);
}