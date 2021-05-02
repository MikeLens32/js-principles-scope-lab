// Write your solution in this file
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob'
    if (bestCustomer === 'not bob') {
        return bestCustomer
    }
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    if (bestCustomer === 'maybe bob') {
        return bestCustomer
    }
}

const leastFavoriteCustomer = 'billy bob'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'jeff'
    if (leastFavoriteCustomer === 'jeff') {
        return leastFavoriteCustomer
    }
}