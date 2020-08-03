class FooterItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer
        class="container-fluid px-5 py-4 text-white bg-dark text-muted">
        <span>Copyright &copy; 2020 JoonaAnime</span> <span>Developed By Cep Guna Widodo</span>
    </footer>
        `;
    }

}

customElements.define('footer-item', FooterItem);