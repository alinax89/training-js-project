function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('amodal');
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span>Modal View</span>
                    <span aria-hidden="true">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Ok</button>
                    <button type="button" class="btn btn-danger">Close</button>
                </div>
            </div>
        </div>    
    `);

    document.body.appendChild(modal);
    return modal;
}

$.modal = function (options) {
    const $modal = _createModal(options);
    const ANIMATION_SPEED = 300;
    let closing = false;


    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false
            }, ANIMATION_SPEED)
        }
    }
}