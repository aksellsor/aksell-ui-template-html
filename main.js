document.querySelectorAll('[data-toast]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const variant = btn.dataset.toast;
    const message = btn.dataset.toastMsg ?? 'Toast';
    showToast(message, { variant });
  });
});
