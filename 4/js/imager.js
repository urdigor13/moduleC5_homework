function addElement(source) {
    // <div class="img"><img src="img/photo-1.jpeg" width=500></div>
    var img = document.createElement("img");
    img.src = source;
    var src = document.getElementById('forImage');
    src.appendChild(img);
}

function eraseElementIn(tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = '';
}

function errorMsgIn(tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = '<p>одно из чисел вне диапазона от 100 до 300</p>';
}

const useRequest = () => {

    const reqUrl = "https://picsum.photos/";
    const value1 = Number(document.querySelector('#number1').value);
    const value2 = Number(document.querySelector('#number2').value);
    if (value1 < 301 && value1 > 99 && value2 < 301 && value2 > 99) {
        eraseElementIn('forImage')
        const fullUrl = reqUrl+value1+'/'+value2;
        return fetch(fullUrl)
            .then((response) => {
//        console.log('response', response);
                addElement(fullUrl)
                return fullUrl;
            })
            .catch(() => { console.log('error') });
    } else {
        errorMsgIn('forImage');
    };
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
    const requestResult = await useRequest();
});