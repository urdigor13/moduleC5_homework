function addElement(source) {
    var img = document.createElement("img");
    img.src = source;
    var src = document.getElementById('forImage');
    src.appendChild(img);
}

function eraseElementIn(tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = '';
};

function errorMsgIn(tagId) {
    var src = document.getElementById(tagId);
    src.innerHTML = '<p>число вне диапазона от 1 до 10</p>';
};

function useRequest(async) {
    var xhr = new XMLHttpRequest();
    const reqUrl = "https://picsum.photos/v2/list?limit=";
    const value = Number(document.querySelector('input').value);
    if (value < 11 && value > 0) {
        eraseElementIn('forImage');
        xhr.open('GET', reqUrl+value, async);
        xhr.send();
        xhr.onload = function() {
            var result = [];
            const imgList = JSON.parse(xhr.response);
            for(var i=0; i<imgList.length; i++) {
                result.push(imgList[i].download_url);
                addElement(imgList[i].download_url);
            };
        };
    } else {
        errorMsgIn('forImage');
    };
};

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    useRequest(true);
});