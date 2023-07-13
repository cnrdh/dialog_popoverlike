# dialogPopoverlike

## Use

```html
<button popovertarget="dialog1">open</button>

<dialog id="dialog1" aria-modal="true" popover>
  <h2>Modal dialog</h2>
  <button>close</button>
</dialog>
<script type="module">
  if (!HTMLElement.prototype.hasOwnProperty("popover")) {
    const mod = await import("https://deno.land/x/dialog_popoverlike@0.0.1/mod.js");
    mod.dialogPopoverlike("dialog1");
  }
</script>
```
