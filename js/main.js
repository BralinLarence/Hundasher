// Get the values from the Page
// Starts or controller function
function getValues() {
    let startValue = parseInt(document.getElementById("startValue").value);
    let endValue = parseInt(document.getElementById("endValue").value);

    // We need to validate our input
    if(Number.isInteger(startValue) && Number.isInteger(endValue))
    {
      //Call generate numbers array
      let numbers = generateNumbers(startValue, endValue);
      //Call display numbers
      displayNumbers(numbers);
    }
    else
    {
        alert("You must enter integers");
    }

    
}

// Generate numbers from the start value to the end value
// Logic function(s)/Model
function generateNumbers(_sValue, _eValue){
    
    let numbers = [];
    //Get  all numbers from start to end
    for(let index = _sValue; index <= _eValue; index++)
    {
        numbers.push(index);
    }
    return numbers;
}


// Display the numbers and mark the even numbers bold
// Display or VIEW functions
function displayNumbers(_numbers){

    let templateRows = ""; // variable holds our html
    for(let index = 0; index < _numbers.length; index++)
    {
        let className = "even";
        let number = _numbers[index];
        if(number % 2 == 0)
        {
            className = "even";
        }
        else
        {
            className = "odd";
        }

        templateRows += `<tr><td class=${className}>${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}