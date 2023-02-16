document.getElementById("Calculate-btn").addEventListener("click", function () {
  const income = getElementByIdInput("income");
  // console.log(typeof  income);

  // expenses
  const food = getElementByIdInput("food");
  const rent = getElementByIdInput("rent");
  const clothes = getElementByIdInput("clothes");

  if (
    income === "" ||
    isNaN(income) ||
    income < 0 ||
    food === "" ||
    isNaN(food) ||
    food < 0 ||
    rent === "" ||
    isNaN(rent) ||
    rent < 0 ||
    clothes === "" ||
    isNaN(clothes) ||
    clothes < 0
  ) {
    alert("please enter a valid number ");
    return;
  }

  const totalEx = food + rent + clothes;

  const totalExpenses = setElementByID("total-expenses", totalEx);

  const totalBal = income - totalEx;

  if (totalBal < 0) {
    alert("please cut your coat according to your cloth");
  }

  const totalBalance = setElementByID("total-balance", totalBal);
});

// save button
document.getElementById("save-btn").addEventListener("click", function () {
  const save = getElementByIdInput("save");

  if (save === "" || isNaN(save) || save < 0) {
    alert("please enter a valid number");
    return;
  }

  const balance = getElementByIdText("total-balance");
  const newBal = (save / 100) * balance;

  // console.log(newBal)

  //    const saving =
  setElementByID("saving", newBal);

  const reamingBal = balance - newBal;

  setElementByID("reaming-balance", reamingBal);
});
