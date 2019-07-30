const getDay = (year,month,day) => {
    const week = ['sun','mon','tue','wed','thu','fri','sat'];
    const calculateDay = new Date(year, month - 1, day).getDay();
    const result = week[calculateDay];
}

getDay(2019,7,24);