export function observeDarkModeDialog() {
    const observer = new MutationObserver(() => {
        const dialog = document.querySelector<HTMLDialogElement>('.p-dialog.p-component.dialog')
        const isDark = document.body.classList.contains('dark-mode')
        if (dialog) {
            dialog.classList.toggle('dark-mode', isDark)
        }
    })
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
    })
}