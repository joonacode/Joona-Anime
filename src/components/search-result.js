import $ from "jquery";

class SearchResult extends HTMLElement {

    set srchresult(srchresult) {
        this._srchresult = srchresult;
        this.render();
    }

    render() {

        this.innerHTML = "";
        let card = "";
        const row = document.createElement('div');
        row.classList.add('owl-carousel', 'owl-theme', 'srchresult');
        this.appendChild(row);
        this._srchresult.forEach(e => {
            card += this.renderCard(e);
            row.innerHTML = card;
        });
        $('.srchresult').owlCarousel({
            nav: true,
            stagePadding: 50,
            lazyLoad: true,
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
        let titlea = e.title;
        let title = (titlea.length >= 40) ? titlea.substr(0, 40) + '...' : titlea;
        return `
        <div class="item">
        <div class="card bg-dark text-white border-0 shadow-custom">
        <img class="owl-lazy rounded-sm h-img" src="http://placehold.it/5x5/000000/000000" data-src="${e.image_url}" class="card-img" alt="...">
            <div class="card-img-overlay d-flex flex-column justify-content-between anime-detail" data-id="${e.mal_id}" data-toggle="modal" data-target="#detailModal">
                    <div style="padding:5px;">
                    <span class="badge badge-warning">${e.score || '-'}</span>
                    <span class="badge badge-dark">${e.type || '-'}</span>
                    </div>
                    <div class="anime-detail" data-id="${e.mal_id}" data-toggle="modal" data-target="#detailModal" style="background-color:rgba(0,0,20,0.7);padding:5px;border-radius:10px 10px 0 0;">
                        <small class="text-sm anime-detail" data-id="${e.mal_id}" data-toggle="modal" data-target="#detailModal">${title}</small>
                    </div>
            </div>
        
    </div>
        </div>
        `;
    }

}

customElements.define('search-result', SearchResult);