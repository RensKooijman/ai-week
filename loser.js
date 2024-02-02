function init(){
    const click = document.getElementById('leven');

    const outputs = [
        "Geen zorgen! Laten we wat meer te weten komen over je vriendin. Wat zijn haar interesses en hobby's en wat is haar leeftijd?",
        'Fantastisch! Op basis van haar interesses raad ik een gepersonaliseerd kookboek aan met recepten uit haar favoriete landen. Het zal haar culinaire avontuur zeker verrijken!',
        'Ik zal je zeker herinneren. En natuurlijk zal ik je helpen het perfecte cadeau te kiezen!'
    ];

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


