/**
 * 
 */
function validate()
{
	var mypwd=document.getElementById("pwd");
	var pos=mypwd.value.search(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
	var x = document.forms["myForm"]["username"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
	if(pos!=0)
		{
		alert("Password must be atleast 8 characters long and must contain atleast one upper case letter, one lower case letter, one digit, and one special character!!");
		return false;
		}
}