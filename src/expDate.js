
export function cardExpDate () {
    const expDate = document.getElementById('expDate');

    expDate.addEventListener('input', (e) => {
        let value = e.target.value.replace('/', '');
        
        if ( value.length >= 2 ) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        e.target.value = value;

    })
}