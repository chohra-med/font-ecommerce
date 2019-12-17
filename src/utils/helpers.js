

// date2 >= date1
export const differenceTwoDatesInDays = (date1, date2) => {
    const diffTime = date2.getTime() - date1.getTime();
    return diffTime / (1000 * 3600 * 24);
};
