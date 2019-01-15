/*jshint esversion: 6 */

if (typeof hljs !== 'undefined') {
    hljs.initHighlightingOnLoad();
}

for (let rippleObject of document.querySelectorAll(".ripple")) {
    mdc.ripple.MDCRipple.attachTo(rippleObject);
}

const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector(".mdc-drawer"));
document.querySelector(".menu-icon").addEventListener("click", function() {
    drawer.open = true;
});

for (let drawerItem of document.querySelectorAll(".mdc-list-item")) {
    drawerItem.addEventListener("click", function() {
        drawer.open = false;
    });
}

if (typeof MicroModal !== 'undefined') {
    MicroModal.init();
}