function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function createColorSwitcher({ startBtn, stopBtn, body }) {
    let intervalId;

    function start() {
        startBtn.disabled = true;
        stopBtn.disabled = false;

        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    }

    function stop() {
        startBtn.disabled = false;
        stopBtn.disabled = true;

        clearInterval(intervalId);
    }

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);

    return { start, stop };
}

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('[data-start]');
    const stopBtn = document.querySelector('[data-stop]');
    const body = document.body;

    const colorSwitcher = createColorSwitcher({ startBtn, stopBtn, body });
});
