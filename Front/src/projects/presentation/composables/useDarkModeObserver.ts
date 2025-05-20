type StyleClass = {
    selector: string;
};

const stylesClass: StyleClass[] = [
    { selector: '.p-dialog.p-component.dialog' },
    { selector: '.p-dialog-mask.p-overlay-mask.p-overlay-mask-enter' }
];

export function observeDarkModeDialog() : void {
    const observer = new MutationObserver(() => {
        stylesClass.forEach(({ selector }) => {
            const dialog = document.querySelector<HTMLElement>(selector);
            const isDark = document.body.classList.contains('dark-mode');
            if (dialog) {
                dialog.classList.toggle('dark-mode', isDark);
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    });
}
