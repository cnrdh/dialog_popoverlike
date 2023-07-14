/**
 * Add open/close handlers to menu button and dialog element combo
 * Only meant to use when [popover](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) is not supported).
 * @param {string} id dialog element id
 * @returns {HTMLDialogElement}
 */
export const dialogPopoverlike = (id) => {
  const menuButton = document.querySelector(
    `button[popovertarget="${id}"]`,
  );
  const dialog = document.querySelector(`#${id}`);
  const modal = Boolean(dialog.getAttribute(`aria-modal`));

  if (menuButton && dialog) {
    menuButton.addEventListener("click", () => {
      // Notice: menu button click events are not fired when a modal dialog is open,
      // since everything outside the dialog is inert
      const { open } = dialog;
      if (open) {
        dialog.close();
      } else {
        if (modal) {
          dialog.showModal();
        } else {
          dialog.show();
        }
      }
    });

    const closeButton = dialog.querySelector(`button`);
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        dialog.close();
      });
    }
    // Alternative to the above: move the close button inside a form[method=dialog] inside the dialog
    // const dialogForm = dialog.querySelector(`form[method="dialog"]`);
    // if (dialogForm && closeButton) {
    //   dialogForm.appendChild(closeButton);
    // }
    return dialog;
  }
};

export const supportsPopover = () =>
  HTMLElement.prototype.hasOwnProperty("popover");
