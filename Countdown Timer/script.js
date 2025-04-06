
    function startTimer() {
        const hours = parseInt(document.getElementById('hours').value) || 0;
        const minutes = parseInt(document.getElementById('minutes').value) || 0;
        const seconds = parseInt(document.getElementById('seconds').value) || 0;

        const targetDate = new Date().getTime() + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);

        let interval = setInterval(function() {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference < 0) {
                document.getElementById('time').innerHTML  ;

                clearInterval(interval);
                return;
            }

            const displayHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const displayMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const displaySeconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('time').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}`;
        }, 1000);
    }
