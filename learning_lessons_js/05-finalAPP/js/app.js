const incomes = [
    new Income('Salary', 2100.00),
    new Income('Car sold', 1500 )
];

const outcomes = [
    new Outcome('Rent',900),
    new Outcome('Clothes',600)
]

function getValues(){
    console.log("executing getValues");
    loadheader();
    loadIncomes();
    loadOutcomes();
}

function loadheader(){
    let totalIncomes = (getTotal(incomes))
    let totalOutcomes = getTotal(outcomes)
    let outcomePercentage = parseInt((totalOutcomes/totalIncomes) * 100)
    document.getElementById("totalIncomes").innerHTML = getFormat(totalIncomes)
    document.getElementById("totalOutcomes").innerHTML = getFormat(totalOutcomes)
    document.getElementById("totalBudget").innerHTML = getFormat(totalIncomes - totalOutcomes)
    document.getElementById("outcomePercentage").innerHTML = `${outcomePercentage}%`
}

function getTotal(arr){
    let total = 0;
    for (data of arr){
        total += parseInt(data.dataValue)
    }
    return total
    
}

function getFormat(total){
    return total.toLocaleString('en-US',{style:'currency', currency:'USD', minimunFractionDigits:2})
}

let loadIncomes = () =>{
    let incomesHTML = '';
    console.log("load Incomes loading")
    for (let income of incomes){
        incomesHTML += generateIncomeHTML(income);
    }
    document.getElementById("income-list").innerHTML = incomesHTML;
    }

let generateIncomeHTML = (income)=>{
    let data = income.description
    let value = getFormat(income.dataValue)
    return `<div class="element cleanStyle">
    <div class="element_description">${data} </div>
    <div class="right cleanStyle">
        <div class="value_element">+${value}</div> 
        <div class="delete_element">
            <button class="delete_element--btn">
                <ion-icon name="close-circle-outline" 
                onclick="deleteElement(${income.id},incomes);"></ion-icon>
            </button>
        </div>
    </div>
    </div>`
    }

let deleteElement = (id, arr)=>{
     let deletingIndex = arr.findIndex(element => element.id === id);
     arr.splice(deletingIndex,1);
     loadheader()
     loadIncomes()
     loadOutcomes()
}

let loadOutcomes = () =>{
    let outcomesHTML = '';
    console.log("loadOutcomes loading")
    for (let outcome of outcomes){
       outcomesHTML += generateOutcomeHTML(outcome);
    }
    document.getElementById("outcome-list").innerHTML = outcomesHTML;
    }

let generateOutcomeHTML = (outcome)=>{
    let data = outcome.description
    let value = getFormat(outcome.dataValue)
    let outcomePercentage = parseInt((outcome.dataValue/getTotal(outcomes))*100)
    return `<div class="element cleanStyle">
    <div class="element_description">${data} </div>
    <div class="right cleanStyle">
        <div class="value_element">-${value}</div>
        <div class="percentage_element">${outcomePercentage}%</div>
        <button class="delete_element--btn">
        <ion-icon name="close-circle-outline" 
        onclick="deleteElement(${outcome.id},outcomes);"></ion-icon>
    </button>
    </div>
</div>`}

let addElement = ()=>{
    let form = document.forms['form']
    let type = form['type']
    let description = form['description']
    let formValue = form['value']
    if(description.value !== '' && formValue.value !== ''){
        if (type.value == "income"){
            incomes.push(new Income(description.value, +formValue.value));
            loadIncomes();
        }
        else if (type. value == "outcome"){
            outcomes.push(new Outcome(description.value, +formValue.value));
            loadOutcomes();
        }
        loadheader();
    }

}