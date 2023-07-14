# dialogPopoverlike

## Enhance dialog with open/close buttons
With the [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API), modal interactivity is finally possible using only declarative HTML.

The `dialogPopoverlike` function is meant for enhancing [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) elements in non-supporting browsers.

## Use

```html
<script type="module">
  if (!HTMLElement.prototype.hasOwnProperty("popover")) {
    const mod = await import("https://deno.land/x/dialog_popoverlike/mod.js");
    mod.dialogPopoverlike("dialog1");
  }
</script>

<button popovertarget="dialog1">open</button>

<dialog id="dialog1" aria-modal="true" popover>
  <section>
    <h2>Modal dialog</h2>
    …
  </section>
  <button popovertarget="dialog1" popovertargetaction="hide">close</button>
</dialog>

```
