// import amazonScraper from 'amazon-buddy';
// const amazonScraper = require('amazon-buddy');
// const SellingPartner = require("amazon-sp-api");


function init(){

    const click = document.getElementById('leven');

    // click.addEventListener("input", (event) => {
    //     let data = document.getElementById('leven').value;
    //     console.log(data);
    //     getProducts(data);
    // });

    // function getProducts(data) {
    //     (async () => {
    //         try {
    //             const products = await amazonScraper.products({ keyword: `${data}`, number: 50, country: 'NL' });
    //             display(products);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     })();
    // }
    // function display(products) {
    //     console.log(products);
    // }


const outputs = [
    'val van een brug',
    'leef maar voor 1 dag',
    'dit is voor slechte mmensen',
    'tyf van een brug', 'val ter plekke dood',
    'krijg een leven'
];

    const button = document.getElementById('button');
    let chat = document.getElementById('chat');
    let i = 0;
    button.addEventListener("click", (event) => {
        chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
        click.value = '';
        chat.innerHTML += `<label>GiftGenie:</label><p>${outputs[i]}</p>`
        i++;
    });
    click.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            chat.innerHTML += `<label>you:</label><p>${click.value}</p>`;
            click.value = '';
            chat.innerHTML += `<label>GiftGenie:</label><p>${outputs[i]}</p>`
            i++;
        }
    });
}


