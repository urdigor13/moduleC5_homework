function loadImg(requestResult) {
    var result = [];
    for(var i=0; i<requestResult.length; i++) {
        // console.log(requestResult[i].download_url);
        result.push(requestResult[i].download_url);
        addElement(requestResult[i].download_url);
    };
}

function addElement(source) {
    // <img src="https://picsum.photos/id/4/5000/3333">
    var img = document.createElement("img");
    img.src = source;
    var src = document.getElementById('forImage');
    src.appendChild(img);
}

function eraseElementIn(tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = '';
}

function errorMsgIn(msg, tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = `<p>${msg}</p>`;
}

const useRequest = () => {
    const value1 = Number(document.querySelector('#number1').value);
    localStorage.setItem('photoNumber', value1);
    const value2 = Number(document.querySelector('#number2').value);
    localStorage.setItem('photoLimit', value2);
    const reqUrl = `https://picsum.photos/v2/list?page=${value1}&limit=${value2}`;
    // console.log(reqUrl);
    if (value1 < 11 && value1 > 0) {
        if (value2 < 11 && value2 > 0) {
            eraseElementIn('forImage');
            return fetch(reqUrl)
                .then((response) => {
                    // console.log('response', response);
                    return response.json();
                })
                .then((json) => { return json; })
                .catch(() => { console.log('error') });
        } else {
            errorMsgIn('Лимит вне диапазона от 1 до 10', 'forImage');
        };
    } else {
        if (value2 < 11 && value2 > 0) {
            errorMsgIn('Номер страницы вне диапазона от 1 до 10', 'forImage');
        } else {
            errorMsgIn('Номер страницы и лимит вне диапазона от 1 до 10', 'forImage');
        }
    };
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
    const requestResult = await useRequest();
    loadImg(requestResult);
});

document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById('number1').value = localStorage.getItem("photoNumber");
    document.getElementById('number2').value = localStorage.getItem("photoLimit");
    const requestResult = await useRequest();
    loadImg(requestResult);
});