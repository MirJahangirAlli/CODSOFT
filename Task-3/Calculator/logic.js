let buttons = document.querySelector('.subMain');
let btn = document.querySelectorAll('span');
let ans = document.getElementById('value');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (this.innerHTML === '=') {
            ans.innerHTML = eval(ans.innerHTML);
        } else if (this.innerHTML === 'Clear') {
            ans.innerHTML = "";
        } else if (this.innerHTML === '%') {
            ans.innerHTML = eval(ans.innerHTML) / 100;
        } else if (this.innerHTML === '÷') {
            ans.innerHTML += '/';
        } else {
            ans.innerHTML += this.innerHTML;
        }
    });
}
