import $ from "jquery";

class UpcomingList extends HTMLElement {

    set upcoming(upcoming) {
        this._upcoming = upcoming;
        this.render();
    }

    render() {
        let card = "";
        const row = document.createElement('div');
        row.classList.add('owl-carousel', 'owl-theme', 'upcoming');
        this.appendChild(row);
        this._upcoming.forEach(e => {
            card += this.renderCard(e);
            row.innerHTML = card;
        });
        $('.upcoming').owlCarousel({
            nav: true,
            lazyLoad: true,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 15,
            responsive: {
                0: {
                    items: 1
                },
                300: {
                    items: 2
                },
                600: {
                    items: 3
                },
                768: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1200: {
                    items: 4
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
            <img class="owl-lazy rounded-sm h-u-img" src="http://placehold.it/5x5/000000/000000" data-src="${e.image_url}" class="card-img" alt="...">
                <div class="card-img-overlay d-flex flex-column justify-content-between anime-detail" data-id="${e.mal_id}" data-toggle="modal" data-target="#detailModal">
                        <div style="padding:5px;">
                            <span class="badge badge-primary">${e.type || '-'}</span>
                            <span class="badge badge-dark">${e.start_date || '-'}</span>
                        </div>
                        <div style="background-color:rgba(0,0,20,0.7);padding:5px;border-radius:10px 10px 0 0;">
                            <small class="text-sm">${title}</small>
                        </div>
                </div>
            
        </div>
            </div>
        `;
    }

}

customElements.define('upcoming-list', UpcomingList);