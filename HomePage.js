function getCurrentDateAndTime() {
    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeString = currentDate.toLocaleTimeString();
    document.getElementById('dateStamp').innerHTML = `Current Date and Time: ${dateString} ${timeString}`;
}

getCurrentDateAndTime();
