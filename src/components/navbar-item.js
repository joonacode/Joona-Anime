class NavbarItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-dark-cus py-3">
        <div class="container-fluid px-4">

            <a class="navbar-brand" href="#">Joona Anime</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mr-3">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section-anime">Top Movie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section-season">Seasonal Anime</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#section-search">Search</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        `;
    }

}

customElements.define('navbar-item', NavbarItem);