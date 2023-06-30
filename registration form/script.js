
function myfunction(){
    
    const fullName=document.getElementById('input-fullname').value;
    const email=document.getElementById('input-email').value;
    const number=document.getElementById('input-number').value;
    const date=document.getElementById('input-date').value;
    const gen=document.getElementsByName('gender');
    const address=document.getElementById('address').value;

    var gender='';
    for (i = 0; i < gen.length; i++) {
        if (gen[i].checked)
            gender=gen[i].value;
    }
    
    const spanName=document.getElementById('span-name');
    const spanEmail=document.getElementById('span-email');
    const spanPhone=document.getElementById('span-phone');
    const spanBirth=document.getElementById('span-birth');
    const spanGender=document.getElementById('span-gender');
    const spanAddress=document.getElementById('span-address');

    spanName.innerHTML=fullName;
    spanEmail.innerHTML=email;
    spanPhone.innerHTML=number;
    spanBirth.innerHTML=date;
    spanGender.innerHTML=gender;
    spanAddress.innerHTML=address;
}