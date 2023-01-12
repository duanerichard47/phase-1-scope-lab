// Write your solution in this file!
var bestCustomer;
var customerName = 'bob';
const leastFavoriteCustomer = 'blank';

function upperCaseCustomerName() {
    customerName= customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new least';
}

