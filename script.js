$(function () {
    const spotlightEl = $('.focus');
    $(document).mousemove(e => {
        const {pageX, pageY} = e;
        spotlightEl.css('background', `radial-gradient(circle at ${pageX}px ${pageY}px, transparent, rgb(6 9 16 / 90%) 35%)`);
    })
});
