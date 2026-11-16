function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
}

function getDateNDaysAgo(n) {
    const date = new Date();
    date.setDate(date.getDate() - n);
    return formatDate(date);
}

export const dates = {
    startDate: getDateNDaysAgo(3),
    endDate: getDateNDaysAgo(1)
};

console.log(dates);