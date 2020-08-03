class ModalItem extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        const detailItem = document.createElement('detail-item');
        this.innerHTML = `
        <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title color-title" id="detailModalLabel">Detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="detail">
                                <detail-item></detail-item>
                                <character-list></character-list>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger shaodw-sm" data-dismiss="modal"><i
                                class="fas fa-times"></i>
                            Close</button>
                    </div>
                </div>
            </div>
        </div>
        `
    }

}

customElements.define('modal-item', ModalItem);