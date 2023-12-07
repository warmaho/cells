function buscar() {
    const tableReg = document.getElementById('datos');
    const searchText = document.getElementById('search').value.toLowerCase();
    let total = 0;

    for (let i = 1; i < tableReg.rows.length; i++) {
        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            tableReg.rows[i].style.display = 'none';
        }
    }
}

class WebComponent extends HTMLElement {
    constructor() {
        const tpl = document.querySelector('template');

        const tplInts = tpl.content.cloneNode(true);

        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tplInts);

    }

}
customElements.define('mi-titulo', WebComponent);

class WebComponent2 extends HTMLElement {
    constructor() {
        const tpl = document.querySelector('hgroup');

        const tplInts = tpl.content.cloneNode(true);

        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tplInts);

    }

}
customElements.define('mi-encabezado', WebComponent2);