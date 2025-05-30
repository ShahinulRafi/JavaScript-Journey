function AgeCalculator()
{
    const currentYear = new Date().getFullYear();
    let birthYear = parseFloat(document.getElementById("age").value);
    age = currentYear-birthYear;
    document.getElementById("output").textContent = "Age : " + age;
}