console.log("Connected");
function registerStudent()
{
    let firstName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let studentId=document.getElementById("studentId").value;
    let email=document.getElementById("email").value;
    let creditCompleted=document.getElementById("creditCompleted").value;
    let department=document.getElementById("department").value;
    document.getElementById("firstNameError").innerHTML="";
    document.getElementById("lastNameError").innerHTML="";
    document.getElementById("studentIdError").innerHTML="";
    document.getElementById("emailError").innerHTML="";
    document.getElementById("creditCompletedError").innerHTML="";
    document.getElementById("departmentError").innerHTML="";
    if(!firstName)
    {
        document.getElementById("firstNameError").innerHTML="First name is required";
        document.getElementById("firstNameError").style.color="red";
        return false;
    }
    else{
        document.getElementById("firstNameError").innerHTML="";
    }
    if(!lastName)
    {
        document.getElementById("lastNameError").innerHTML="Last name is required";
        document.getElementById("lastNameError").style.color="red";
        return false;
    }
    else{
        document.getElementById("lastNameError").innerHTML="";
    }
    if(!studentId)
    {
        document.getElementById("studentIdError").innerHTML="Student ID is required";
        document.getElementById("studentIdError").style.color="red";
        return false;
    }
    else if(!studentId.includes("-"))
    {
        document.getElementById("studentIdError").innerHTML="Student ID must contain '-'";
        document.getElementById("studentIdError").style.color="red";
        return false;
    }
    else{
        document.getElementById("studentIdError").innerHTML="";
    }
    if(!email)
    {
        document.getElementById("emailError").innerHTML="Email is required";
        document.getElementById("emailError").style.color="red";
        return false;
    }
    else if(!email.includes("@student.aiub.edu"))
    {
        document.getElementById("emailError").innerHTML="Invalid Email";
        document.getElementById("emailError").style.color="red";
        return false;
    }
    else{
        document.getElementById("emailError").innerHTML="";
    }
    if(creditCompleted=="" || creditCompleted<0 || creditCompleted>=148)
    {
        document.getElementById("creditCompletedError").innerHTML="Completed Credit must be between 0 and 147 credits";
        document.getElementById("creditCompletedError").style.color="red";
        return false;
    }
    else{
        document.getElementById("creditCompletedError").innerHTML="";
    }
    if(!department)
    {
        document.getElementById("departmentError").innerHTML="Must select department";
        document.getElementById("departmentError").style.color="red";
        return false;
    }
    else{
        document.getElementById("departmentError").innerHTML="";
    }

    let table=document.getElementById("studentTable");
    let row=table.insertRow();
    row.insertCell(0).innerHTML=firstName;
    row.insertCell(1).innerHTML=lastName;
    row.insertCell(2).innerHTML=studentId;
    row.insertCell(3).innerHTML=email;
    row.insertCell(4).innerHTML=creditCompleted;
    row.insertCell(5).innerHTML=department;

    document.getElementById("firstName").value="";
    document.getElementById("lastName").value="";
    document.getElementById("studentId").value="";
    document.getElementById("email").value="";
    document.getElementById("creditCompleted").value="";
    document.getElementById("department").value="";
    return false;
}