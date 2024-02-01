function init(){
    const click = document.getElementById('leven');

    const outputs = [
        'wat voor cadeau zou je willen geef me hints zoals: leeftijd, intresses, naam',
        'zou hij games leuk vinden',
        'wat denk je van een platform game of misschien iets meer actie een spel met wapens',
        'zou hij een goed verhaal leuk vinden', 
        'ik raad je gta V en red dead redemption aan maar heb meerdere keuzes die uw geliefde blij zal maken',
        'een oude call of duty is een goede keus als de vorige niet goed is'
    ];
    let body = document.querySelector("html");
    const button = document.getElementById('button');
    let chat = document.getElementById('chat');
    let i = 0;
    let el = null;

    button.addEventListener("click", (event) => {
        button.disabled = true;
        chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
        click.value = '';
        chat.innerHTML += `<label>GiftGenie:</label><p></p>`;
        el = document.querySelector('#chat>p:last-child');
        chat.scrollTop = chat.scrollHeight;
        typeWriter(`${outputs[i]}`);
        button.disabled = false;
        i++;
    });
    click.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            chat.disabled = true;
            chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
            click.value = '';
            chat.innerHTML += `<label>GiftGenie:</label><p></p>`;
            el = document.querySelector('#chat>p:last-child');
            chat.scrollTop = chat.scrollHeight;
            typeWriter(`${outputs[i]}`);
            chat.disabled = false;
            i++;
        }
    });

    let wait = delay => new Promise(r => setTimeout(r, delay));

    let typeWriter = async sentence => {
        const DELAYS = {'.': 500, ',': 200, default: 55};

        for (let c of sentence) {
            el.textContent += c;
            await wait(DELAYS[c] || DELAYS.default);
        }
    };
}


