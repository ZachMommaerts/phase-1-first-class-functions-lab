const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier () {
    return number => number * number;
}

const fareDoubler = createFareMultiplier => createFareMultiplier * 2;

const fareTripler = createFareMultiplier => createFareMultiplier * 3;

function selectDifferentDrivers(drivers, returnsDrivers) {
    let finalDrivers;
    
    if (returnsDrivers === returnFirstTwoDrivers) {
        finalDrivers = returnFirstTwoDrivers(drivers);
    } else if (returnsDrivers === returnLastTwoDrivers) {
        finalDrivers = returnLastTwoDrivers(drivers);
    }

    return finalDrivers;
}