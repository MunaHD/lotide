const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      // if the item doesn't already exist create a key for it and assign 1
      // otherwise increment by 1
      !results[item] ? results[item] = 1 : results[item] += 1;
    }
  }
  return results;
};

module.exports = countOnly;

