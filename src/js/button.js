
{
    window.onload = () => {
        const body = document.body;
        const btnEl = document.createElement('button');
        let summ = 0;
        body.appendChild(btnEl);
        btnEl.textContent = summ;
        btnEl.addEventListener('click', ev => {
            btnEl.textContent = ++summ
        })
    }
}