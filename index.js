const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const clearButton = document.querySelector("#btn-clear")
const addButton = document.querySelector("#btn-add")
const expenseList = document.querySelector("#expense-list")

addButton.addEventListener("click", () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    const reasonNotEnteredValidEntry = enteredReason.trim().length <= 0
    const negativeCheck = enteredAmount <= 0
    const amountNotEnteredValidEntry = enteredAmount.trim().length <= 0
    if (reasonNotEnteredValidEntry || negativeCheck || amountNotEnteredValidEntry) {
        return
    }
    const newItem = document.createElement("ion-item");
    newItem.textContent = enteredReason + `: $ ` + enteredAmount;
    expenseList.appendChild(newItem)
})