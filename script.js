
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
 
    if (!birthdateInput) {
        document.getElementById('result').innerText = "Please select your birthdate.";
        return;
    }
 
    const birthdate = new Date(birthdateInput);
    const today = new Date();
 
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();
 
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
 
    document.getElementById('result').innerText = `Your age is: ${age} years old.`;
}
 