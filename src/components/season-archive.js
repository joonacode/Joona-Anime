class CurrentSeason extends HTMLElement {

    set sesarcv(sesarcv) {
        this._sesarcv = sesarcv;
        this.render();
    }

    render() {
        let card = '<li class="list-group-item active">Season Archive</li>';
        const row = document.createElement('ul');
        row.classList.add('list-group');
        this.appendChild(row);
        this._sesarcv.forEach(e => {
            card += this.renderCard(e);
            row.innerHTML = card;
        });

    }

    renderCard(e) {
        let [winter, spring, summer, fall] = e.seasons;
        return `
          <li class="list-group-item">${e.year} : <br><button type="button" data-year="${e.year}" data-season="winter" class="btn season-archive mt-1 btn-outline-primary btn-sm"><i class="fas fa-snowflake"></i> ${winter}</button> <button type="button" data-year="${e.year}" data-season="spring" class="btn season-archive mt-1 btn-outline-info btn-sm"><i class="fas fa-rainbow"></i> ${spring}</button> <button type="button" data-year="${e.year}" data-season="summer" class="btn season-archive mt-1 btn-outline-danger btn-sm"><i class="fas fa-umbrella-beach"></i> ${summer}</button> <button type="button" data-year="${e.year}" data-season="fall" class="btn season-archive mt-1 btn-outline-success btn-sm"><i class="fas fa-tree"></i> ${fall}</button></li>
        `;
    }

}

customElements.define('season-archive', CurrentSeason);