function countTruthy() {
    let inputValues = document.getElementById("input").value;

 
    let valuesArray = inputValues.split(",");


    let truthyCount = valuesArray.filter(value => Boolean(value)).length;

    let resultDiv = document.getElementById("result");
    resultDiv.textContent = "Number of truthy values: " + truthyCount;
}