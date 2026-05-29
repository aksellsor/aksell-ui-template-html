import { showToast } from 'https://unpkg.com/@aksell/ui/src/components/Toast/standalone/toast.standalone.js';
import 'https://unpkg.com/@aksell/ui/src/components/PillArrowBtn/standalone/PillArrowBtn.standalone.js';

document.querySelectorAll('[data-toast]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const variant = btn.dataset.toast;
    const message = btn.dataset.toastMsg ?? 'Toast';
    showToast(message, { variant });
  });
});
