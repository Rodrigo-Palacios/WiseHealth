const base = import.meta.env.BASE_URL;

export function copyRef ( order ) {
    const btnClipboard = document.querySelector('.infoCopyRef');
    btnClipboard.addEventListener('click', async () => {
        await navigator.clipboard.writeText(order);
        const textOrig = btnClipboard.textContent;

        btnClipboard.textContent = '¡Copiado!'

        setTimeout(() => {
            btnClipboard.textContent = textOrig;
        }, 2000);
    })
}