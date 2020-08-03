class DetailItem extends HTMLElement {

    set detail(detail) {
        this._detail = detail;
        this.render();
    }

    render() {
        this.innerHTML = '';
        const e = this._detail;
        let genres = '';
        let genresOnly = '';
        e.genres.forEach(v => {
            genres += `<span class="btn btn-sm btn-secondary mr-2 mb-2">${v.name || '-'}</span>`;
            genresOnly += `${v.name || '-'} `;
        })
        const modalTitle = document.querySelector('.modal-title');
        modalTitle.innerText = `Detail : ${e.title}`;
        const row = document.createElement('div');
        row.classList.add('row');
        this.appendChild(row);
        row.innerHTML = `
        <div class="col-md-3 text-center mb-3">
            <img class="img-thumbnail" src="${e.image_url}">
        </div>
        <div class="col-md-9">
            <h4 class="color-title">${e.title}</h4>
            <span class="badge badge-warning"><i class="fas fa-star"></i> ${e.score || '-'}</span> <span class="badge badge-primary">${e.type || '-'}</span> <span class="badge badge-dark">${e.episodes || '-'} eps</span>
            <p class="mt-3">
                ${e.synopsis || 'Sinopsis tidak ada'}
            </p>
            <div>
                ${genres}
            </div>
        </div>
        <div class="col-md-12 border-top my-4 pt-3">
            <h4 class="color-title">Detail Anime</h4>
        </div>
        <div class="col-md-4">
            <iframe width="100%" height="500" src="${e.trailer_url || 'https://www.youtube.com/embed/Ix5G7zJH2BY'}">
            </iframe>
        </div>
        <div class="col-md-8">
            <ul class="list-group">
                <li class="list-group-item"><strong>English</strong> : ${e.title_english || '-'}</li>
                <li class="list-group-item"><strong>Japanese</strong> : ${e.title_japanese}</li>
                <li class="list-group-item"><strong>Type</strong> : ${e.type}</li>
                <li class="list-group-item"><strong>Eps</strong> : ${e.episodes || '-'}</li>
                <li class="list-group-item"><strong>Duration</strong> : ${e.duration || '-'}</li>
                <li class="list-group-item"><strong>Premiered</strong> : ${e.premiered || '-'}</li>
                <li class="list-group-item"><strong>Rating</strong> : ${e.rating}</li>
                <li class="list-group-item"><strong>Source</strong> : ${e.source}</li>
                <li class="list-group-item"><strong>Genres</strong> : ${genresOnly}</li>
                <li class="list-group-item"><strong>Status</strong> : ${e.status}</li>
                <li class="list-group-item"><strong>Studios</strong> : ${e.studios.length == 0 ? '-' : e.studios[0].name}</li>
                <li class="list-group-item"><strong>Aired</strong> : ${e.aired.string}</li>
            </ul>
        </div>
        <div class="col-md-12 border-top my-4 pt-3">
            <h4 class="color-title">Character</h4>
        </div>
        `;
    }

}

customElements.define('detail-item', DetailItem);