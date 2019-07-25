function getDays(year, month, day) {
    const week = ['sun','mon','tue','wed','thu','fri','sat'];
    var result = new Date(year, month - 1, day).getDay();
    return result;
}


getDays(2019,7,25);