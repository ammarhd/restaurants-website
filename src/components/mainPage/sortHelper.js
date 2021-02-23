export const sortRestaurants = (value, data) => {
  var sorted = [];
  var hasProperty = [];

  if (value == 1 || value == 2) {
    data.filter((val) => {
      if (val.hasOwnProperty("rating")) {
        hasProperty.push(val);
      }
    });

    if (value == 1) {
      sorted = hasProperty
        .slice()
        .sort((a, b) => (b.rating > a.rating ? 1 : -1));
    } else if (value == 2) {
      sorted = hasProperty
        .slice()
        .sort((a, b) => (a.rating > b.rating ? 1 : -1));
    }
  } else {
    data.filter((val) => {
      if (val.hasOwnProperty("price_level")) {
        hasProperty.push(val);
      }
    });
    if (value == 3) {
      sorted = hasProperty
        .slice()
        .sort((a, b) => (b.price_level > a.price_level ? 1 : -1));
    } else if (value == 4) {
      sorted = hasProperty
        .slice()
        .sort((a, b) => (a.price_level > b.price_level ? 1 : -1));
    }
  }

  return sorted;
};
