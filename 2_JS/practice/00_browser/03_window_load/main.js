// Only document
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

// After resources (css, images)
window.addEventListener("load", () => {
  console.log("load");
});

// Before unload
window.addEventListener("beforeunload", () => {
  console.log("beforeunload");
});

// Resource is being unloaded
window.addEventListener("unload", () => {
  console.log("unload");
});
