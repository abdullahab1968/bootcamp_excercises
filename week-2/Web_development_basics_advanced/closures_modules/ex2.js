const Bank = function () {
    let _budget = 500

    const depositCash = function (cash) {
        _budget += cash

    }
    const showBalance = function () {
        console.log(_budget)
    }
    return {
        depositCash: depositCash,
        showBalance: showBalance
    }
}

const bank = Bank()
bank.depositCash(200)
bank.depositCash(250)
bank.showBalance() //should print 950