class PersonList extends HTMLElement {

    set person(person) {
        this._person = person;
        this.render();
    }

    render() {
        this.innerHTML = "";
        let card = "";
        const row = document.createElement('div');
        row.classList.add('owl-carousel', 'owl-theme', 'person');
        this.appendChild(row);
        this._person.forEach(e => {
            card += this.renderCard(e);
            row.innerHTML = card;
        });
        $('.person').owlCarousel({
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
        const actor = e.voice_actors[0];
        return `
        <div class="item">
        <div class="card bg-dark text-white border-0 shadow-custom">
        <img class="owl-lazy rounded-sm h-img" src="http://placehold.it/5x5/000000/000000" data-src="${actor.image_url}" class="card-img" alt="...">
            <div class="card-img-overlay d-flex flex-column justify-content-between anime-detail">
            <div style="padding:5px;" class="anime-detail">
                <span class="badge badge-primary">${actor.language || '-'}</span>
            </div>
            <div style="background-color:rgba(0,0,20,0.7);padding:5px;border-radius:10px 10px 0 0;" class="anime-detail">
                <small class="text-sm">${actor.name}</small>
            </div>
            </div>
        
    </div>
        </div>
        `;
    }

}

customElements.define('person-list', PersonList);