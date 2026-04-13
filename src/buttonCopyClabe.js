const base = import.meta.env.BASE_URL;
export function btnCopy() {
    const btnClipboard = document.querySelector('.infoCopy');
    btnClipboard.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText('000012345678901234');

            const textOrig = btnClipboard.textContent;

            btnClipboard.textContent = '¡Copiado!';

            setTimeout(() => {
                const containerBtn = document.querySelector('.clabePflex');
                containerBtn.removeChild(btnClipboard)

                containerBtn.innerHTML = `
                    <div class="clabeP">
                        <p>CLABE (18 Dígitos)</p>
                        <p><strong>0000 1234 5678 9012 34</strong></p>
                    </div>
                    <button class="infoCopy"><img class="infoImgCopy" src="${base}public/content_copy.svg"/>CLABE</button>
                `;

                
            }, 2000);

            console.log(textOrig)
            
        } catch (error) {
            console.error('Error al compiar: ', error);
            alert('No se pudo copiar el texto');
            
        }
    })
}