function dayOfProgrammer(year) {
    if (year === 1918) return "26.09.1918";

    const isJulianLeap = year < 1918 && year % 4 === 0;
    const isGregorianLeap = year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
    const day = (isJulianLeap || isGregorianLeap) ? 12 : 13;

    return `${String(day).padStart(2, '0')}.09.${year}`;
}

// Sample tests
console.log(dayOfProgrammer(2017)); // 13.09.2017
console.log(dayOfProgrammer(2016)); // 12.09.2016
console.log(dayOfProgrammer(1800)); // 12.09.1800
console.log(dayOfProgrammer(1918)); // 26.09.1918
