if (!customElements.get('product-modal')) {
  customElements.define('product-modal', class ProductModal extends ModalDialog {
    constructor() {
      super();
      this.querySelector('.product-media-modal__thumbs')?.addEventListener('click', (event) => {
        const thumb = event.target.closest('[data-target]');
        if (!thumb) return;
        window.pauseAllMedia();
        this.showActiveMedia(thumb.dataset.target);
      });
    }

    hide() {
      super.hide();
      window.pauseAllMedia();
    }

    show(opener) {
      super.show(opener);
      this.showActiveMedia();
    }

    showActiveMedia(mediaId = this.openedBy.getAttribute('data-media-id')) {
      this.querySelectorAll(`[data-media-id]:not([data-media-id="${mediaId}"])`).forEach((element) => {
          element.classList.remove('is-active');
        }
      )
      const activeMedia = this.querySelector(`[data-media-id="${mediaId}"]`);
      const activeMediaTemplate = activeMedia.querySelector('template');
      const activeMediaContent = activeMediaTemplate ? activeMediaTemplate.content : null;
      activeMedia.classList.add('is-active');

      this.querySelectorAll('.product-media-modal__thumb').forEach((thumb) => {
        thumb.classList.toggle('is-active', thumb.dataset.target === String(mediaId));
      });

      if (activeMedia.nodeName == 'DEFERRED-MEDIA' && activeMediaContent && activeMediaContent.querySelector('.js-youtube'))
        activeMedia.loadContent();
    }
  });
}
