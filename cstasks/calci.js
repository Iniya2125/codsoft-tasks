document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerText;

            if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else if (value === 'C') {
                display.innerText = '';
            } else if (value === '←') {
                display.innerText = display.innerText.slice(0, -1) || '0';
            } else if (value === '%') {
                display.innerText = (parseFloat(display.innerText) / 100).toString();
            } else if (value === '√') {
                display.innerText = Math.sqrt(parseFloat(display.innerText)).toString();
            } else {
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
        });
    });
});

