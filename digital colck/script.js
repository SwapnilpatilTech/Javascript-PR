// script.js
function startClock() {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const strTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
        document.getElementById('clock').innerText = strTime;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const strDate = now.toLocaleDateString(undefined, options);
        document.getElementById('date').innerText = strDate;
    }

    function padZero(num) {
        return num < 10 ? '0' + num : num;
    }

    updateClock();
    setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', startClock);
