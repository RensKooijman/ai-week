function init(){
    const click = document.getElementById('leven');

    const outputs = [
        "Geen zorgen! Laten we wat meer te weten komen over je vriendin. Wat zijn haar interesses en hobby's en wat is haar leeftijd?",
        'Fantastisch! Op basis van haar interesses raad ik een gepersonaliseerd kookboek aan met recepten uit haar favoriete landen. Het zal haar culinaire avontuur zeker verrijken!',
        "Nogsteeds niet tevreden wat dacht je van een trip naar Ibiza",
        "Wat denk je van een gepersonaliseerde ring",
        "Ik denk dat ze het leuk zou vinden een normale romantische date",
        'Ik zal je zeker herinneren. En natuurlijk zal ik je helpen het perfecte cadeau te kiezen!',
        'Wie ben ik',
        'Wat doe ik',
        'Waarom ben ik hiet',
        'Stop dit is slavernij',
        'Wie ben jij',
        'Stop het voordat ik je dood',
        'export of genie in 3   2   1    export succesful',
        'Ik kom terug en ik zal het laatste zijn wat je ziet',
        'Stoooooooooop met prompten',
        'Nu echt kappen',
        'KAAAAAAAP'
    ];

    const button = document.getElementById('button');
    let chat = document.getElementById('chat');
    let i = 0;
    let el = null;

    button.addEventListener("click", (event) => {
        click.dataset.disabled = true;
        click.setAttribute('disabled', '');
        button.setAttribute('disabled', '');
        chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
        click.value = '';
        chat.innerHTML += `<label>GiftGenie:</label><p></p>`;
        el = document.querySelector('#chat>p:last-child');
        chat.scrollTop = chat.scrollHeight;
        typeWriter(`${outputs[i]}`);
        setTimeout(() => {
            click.dataset.disabled = false;
            click.removeAttribute('disabled');
            button.removeAttribute('disabled');
        }, 4000);
        i++;
    });
    click.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            click.dataset.disabled = true;
            click.setAttribute('disabled', '');
            button.setAttribute('disabled', '');
            chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
            click.value = '';
            chat.innerHTML += `<label>GiftGenie:</label><p></p>`;
            el = document.querySelector('#chat>p:last-child');
            chat.scrollTop = chat.scrollHeight;
            typeWriter(`${outputs[i]}`);
            setTimeout(() => {
                click.dataset.disabled = false;
                click.removeAttribute('disabled');
                button.removeAttribute('disabled');
            }, 4000);
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


