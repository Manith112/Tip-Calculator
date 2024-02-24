const bill = document.getElementById("bill");
const people = document.getElementById("people");
const emptyBill = document.getElementById("empty");
const emptyPeople = document.getElementById("empty-people")
document.querySelectorAll(".tipButton").forEach(function(item){
    item.addEventListener('click', event => {
        const billsValue = bill.value;;
        const peopleValue = people.value
        if (billsValue === "" && peopleValue === "") {
            people.style.border = "1px solid red";
            bill.style.border = "1px solid red";
            emptyBill.textContent = "Can't be zero";
            emptyPeople.textContent = "Can't be zero";
            console.log("ok");
        }else if(billsValue === "" && peopleValue !== "") {
            people.style.border = "";
            bill.style.border = "1px solid red";
            emptyBill.textContent = "Can't be zero";
            emptyPeople.textContent = "";
        }else if(billsValue !== "" && peopleValue === "") {
            bill.style.border = "";
            people.style.border = "1px solid red";
            emptyPeople.textContent = "Can't be zero";
            emptyBill.textContent = ""; 
        } else {
            people.style.border = "";
            emptyPeople.textContent = "";
            bill.style.border = "";
            emptyBill.textContent = "";
            document.getElementById("customTip").value = "";
            // Remove active class from all buttons
            document.querySelectorAll(".tipButton").forEach(function(btn){
                btn.classList.remove("active");
            });
            // Add active class to the clicked button
            event.target.classList.add("active");
            calculateTip(event.target.value);
        }
    })
})

document.getElementById("customTip").addEventListener("input", function(){
    const billsValue = bill.value;
    const peopleValue = people.value;
    if (billsValue === "" && peopleValue === "") {
        people.style.border = "1px solid red";
        bill.style.border = "1px solid red";
        emptyBill.textContent = "Can't be zero";
        emptyPeople.textContent = "Can't be zero";
        console.log("ok");
    }else if(billsValue === "" && peopleValue !== "") {
        people.style.border = "";
        bill.style.border = "1px solid red";
        emptyBill.textContent = "Can't be zero";
        emptyPeople.textContent = "";
    }else if(billsValue !== "" && peopleValue === "") {
        bill.style.border = "";
        people.style.border = "1px solid red";
        emptyPeople.textContent = "Can't be zero";
        emptyBill.textContent = ""; 
    } else {
        people.style.border = "";
        emptyPeople.textContent = "";
        bill.style.border = "";
        emptyBill.textContent = "";
        document.querySelectorAll(".tipButton").forEach(function(btn){
            btn.classList.remove("active");
        });
        calculateTip(this.value);
    }
   
})

function calculateTip(tipPercentage){
    const billValue = parseFloat(bill.value)

   
    const peopleValue = parseInt(people.value);
    
    // if(peopleValue === null){
    //     people.style.border = "1px solid red";   
    // } else {
    //     people.style.border = "";

    // }

    if(tipPercentage === ""){
        tipPercentage = 0;
    } else {
        tipPercentage = parseFloat(tipPercentage);
    }

    const tipAmount = ((billValue * tipPercentage) / 100) / peopleValue;
    const totalAmount = (billValue / peopleValue) + tipAmount;

    document.getElementById('billBeforeTip').innerText = "$" + tipAmount.toFixed(2);
    document.getElementById('billAfterTip').innerText =  "$" + totalAmount.toFixed(2);
}

function reset() {
    // animation 

    // 
    bill.value = "";
    bill.style.border = "";
    emptyBill.textContent = "";
    document.getElementById('billBeforeTip').innerText = "$0.00";
    document.getElementById('billAfterTip').innerText = "$0.00";
    document.getElementById("customTip").value = "";
    document.getElementById("people").value = "";
    // Remove active class from all buttons
    document.querySelectorAll(".tipButton").forEach(function(btn){
        btn.classList.remove("active");
    });
   
}
