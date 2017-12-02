exports.taxCounter = (price, taxSize = 20, currencySymbol = '$') => {
    let splittedPrice = price.trim().split(' ');
    if(splittedPrice[1] <= 0) {
        console.log(`Price should be greater than ${currencySymbol} 0.00, but got ${price}`);
        return undefined;
    }

    if(taxSize < 0) {
        console.log(`Tax size should be greater than or equal to 0, but got ${taxSize}`);
        return undefined;
    }

    if(splittedPrice[0] !== currencySymbol) {
        console.log(`Price currency does not match to provided currency`);
        return undefined;
    }

    return currencySymbol + ' ' + (parseFloat(splittedPrice[1]) + splittedPrice[1] * taxSize / 100).toFixed(2);
} 



