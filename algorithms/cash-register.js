function checkCashRegister(price, cash, cid) {
  const currencies = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
  }

  const change = [];
  let status = '';

  let totalCID = cid.reduce((acc, current) => acc + current[1]*100, 0);
  const availableChange = cid.filter((elem) => elem[1] !== 0).reverse();
  let diff = cash * 100 - price * 100;
  let originalDiff = diff;
  
    availableChange.forEach(elem => {
    let currency = elem[0];
    let amount = elem[1] * 100;
    let noteValue = currencies[currency]
    let total = 0;
    while(diff >= noteValue && amount > 0) {
      total += noteValue;
      amount -= noteValue;
      diff -= noteValue;
    }
    if (total !== 0) {
      change.push([currency, total / 100]);
    }
  })

  if (diff > 0 ) {
    status = 'INSUFFICIENT_FUNDS';
    change.length = 0;
  } else if (diff === 0 && originalDiff === totalCID) {
    status = 'CLOSED';
    //empty change array populated in while loop since it won't include the 0 denominations (which were filtered out), set it to cid 
    change.length = 0;
    cid.forEach(elem => change.push(elem));
  } else {
    status = 'OPEN';
  }

  return {status, change};
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])