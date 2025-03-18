
// 1. Declare global customerName with var
var customerName = 'bob';

// 2. upperCaseCustomerName()
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. setBestCustomer()
function setBestCustomer() {
    bestCustomer = 'not bob'; // creates a global variable without var/let/const
}

// 4. overwriteBestCustomer()
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // modifies the global variable bestCustomer
}

// 5. leastFavoriteCustomer and changeLeastFavoriteCustomer()
const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
    // This will throw an error because you cannot reassign a const variable
    leastFavoriteCustomer = 'someone else';
}
