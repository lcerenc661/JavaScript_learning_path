console.log("JS enabled");

function operate(){

    const form = document.getElementById("form")
    let argA = form["argumentA"];
    let argB = form["argumentB"];
    console.log(argA)
    let result = parseInt(argA.value) + parseInt(argB.value);
    if (isNaN(result))
        result = "One or both arguments are invalid"
    document.getElementById('result').innerHTML = `Result: ${result}`;
    console.log(`Result: ${result}`)
}
