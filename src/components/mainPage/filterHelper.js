export const getUnique = (array) => {
  var uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i].id) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
};

export const filterProperty = (data, attr) => {
  var hasProperty = [];
  data.filter((val) => {
    if (val.hasOwnProperty(attr)) {
      hasProperty.push(val);
    }
  });

  return hasProperty;
};

export const filterList = (data, num1, num2) => {
  var filtered = [];
  data.filter((val) => {
    if (val.price_level >= num1 && val.price_level < num2) {
      filtered.push(val);
    }
  });

  return filtered;
};

export const filterListRate = (data, num1, num2) => {
  var filtered = [];
  data.filter((val) => {
    if (val.rating >= num1 && val.rating < num2) {
      filtered.push(val);
    }
  });

  return filtered;
};
