// import Calculator from 'model/calculator.js?';
// tidak perlu import lagi?

const form = document.getElementById("form");
form.addEventListener("submit", onSubmit);

function encodeURL(data) {
    const ret = [];
    for (let d in data) {
        ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
    return ret.join('&');
}

function onSubmit(event) {
    event.preventDefault();

    let formElements = event.currentTarget.elements;
    const data = {
        a: parseInt(formElements.a.value),
        b: parseInt(formElements.b.value),
        operation: formElements.opt.value
    };

    let input = encodeURL(data);

    const promise = fetch('calculate?' + input);
    promise.then(function (response) {
        console.log(response.status);
        response.text().then(function (text) {
            console.log(text);
            const resultElement = document.getElementById('result');
            resultElement.textContent = text;
        });
    });

    let init = {
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: input
    };

    const promise2 = fetch('calculate', init);
    const request = promise2.then(function (response) {
        return response.json();
    });

    request.then(function (result) {
        console.log(result);
        const resultJsonElement = document.getElementById('result_json');
        resultJsonElement.textContent = result;
    });
}