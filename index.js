const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const clearButton = document.querySelector("#btn-clear")
const addButton = document.querySelector("#btn-add")
const expenseList = document.querySelector("#expense-list")
const totalExpensesOutput = document.querySelector("#total")
const alertCtrl = document.querySelector("ion-alert-controller")

let totalExpenses = 0
const clear = () => {
    reasonInput.value = "";
    amountInput.value = "";
}
addButton.addEventListener("click", () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    const reasonNotEnteredValidEntry = enteredReason.trim().length <= 0
    const negativeCheck = enteredAmount <= 0
    const amountNotEnteredValidEntry = enteredAmount.trim().length <= 0
    if (reasonNotEnteredValidEntry || negativeCheck || amountNotEnteredValidEntry) {
        return alertCtrl.create({
            header: 'Invalid Input',
            subHeader: 'Fill proper input',
            message: '',
            buttons: ['OK']
        }).then(alertElement => {
            alertElement.present()
        })

    }
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + `: $ ` + enteredAmount;
    expenseList.appendChild(newItem)
    totalExpenses += parseInt(enteredAmount);
    totalExpensesOutput.textContent = totalExpenses
})
clearButton.addEventListener("click", () => clear())
clear()