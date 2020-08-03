class CharacterList extends HTMLElement {

    set character(character) {
        this._character = character;
        this.render();
    }

    render() {
        this.innerHTML = "";
        let card = "";
        const row = document.createElement('div');
        row.classList.add('owl-carousel', 'owl-theme', 'character');
        this.appendChild(row);
        if (this._character.length > 1) {
            this._character.forEach(e => {
                card += this.renderCard(e);
                row.innerHTML = card;
            });
        } else {
            this.innerHTML = "<h5 class='text-danger'>Karakter tidak ditemukan</h5>";
        }

        $('.character').owlCarousel({
            nav: true,
            lazyLoad: true,
            stagePadding: 50,
            dots: false,
            loop: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 4
                },
                1000: {
                    items: 7
                }
            }
        })
    }

    renderCard(e) {
        return `
        <div class="item">
        <div class="card bg-dark text-white border-0 shadow-custom">
        <img class="owl-lazy rounded-sm h-img" src="http://placehold.it/5x5/000000/000000" data-src="${e.image_url}" class="card-img" alt="...">
            <div class="card-img-overlay d-flex flex-column justify-content-between">
            <div style="padding:5px;">
                <span class="badge badge-primary">${e.role || '-'}</span>
            </div>
            <div style="background-color:rgba(0,0,20,0.7);padding:5px;border-radius:10px 10px 0 0;">
                <small class="text-sm">${e.name || '-'}</small>
            </div>
            </div>
        
    </div>
        </div>
        `;
    }

}

customElements.define('character-list', CharacterList);