function timeConversion(s) {
    const period = s.slice(-2);
    let [hh, mm, ss] = s.slice(0, 8).split(":");

    if (period === "AM") {
        if (hh === "12") hh = "00";
    } else {
        if (hh !== "12") hh = String(Number(hh) + 12);
    }

    return [hh, mm, ss].join(":");
}

// Sample tests
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:45:54PM")); // 12:45:54
