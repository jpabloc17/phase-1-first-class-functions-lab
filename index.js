// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [];
selectingDrivers.unshift(returnFirstTwoDrivers,returnLastTwoDrivers);

function createFareMultiplier(n){
    return function(fare){
        return fare * n;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDrivers){
    return returnDrivers(drivers);
}