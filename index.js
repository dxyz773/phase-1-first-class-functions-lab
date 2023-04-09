// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (num) {
  return (num) => num * num;
};
const fareDoubler = function (fare) {
  createFareMultiplier(fare);
  return fare * 2;
};
const fareTripler = function (fare) {
  createFareMultiplier(fare);
  return fare * 3;
};

const selectDifferentDrivers = function (drivers, func) {
  return func(drivers);
};
