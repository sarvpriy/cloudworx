import Vue from 'vue';

Vue.filter('percentage', (value) => {
    return `${value}%`
})

Vue.filter('positive-percentage', (value) => {
    return `+${value}%`
})

Vue.filter('doller', (value) => {
    return `${value}$`
})

Vue.filter('currency', (value) => {
    if(value !== value) return 'NA'; //checking for NaN
    if(value === 'NA') return 'NA';
    if (!value) {
        value = 0;
    }
    let negative = false;
    if (value < 0) {
        value = 0 - value;
        negative = true;
    }
    value = Math.round(parseFloat(value) * 100)/100;
    let parts = value.toString().split(".");
    let decimal = parts[1];
    if (decimal) {
        decimal = Math.round(decimal/100);
    }
    let x = parts[0];
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != "") lastThree = "," + lastThree;
    value =
        otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
        lastThree +
        (parts[1] ? "." + parts[1] : "");

    if (negative) {
        return "-" + value;
    }
    return value;
})