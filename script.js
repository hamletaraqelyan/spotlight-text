$(function () {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua) || /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        $('.mobilePopup').addClass('show');
    } else {
        const spotlightEl = $('.focus');
        $(document).mousemove(e => {
            const {pageX, pageY} = e;
            spotlightEl.css('background', `radial-gradient(circle at ${pageX}px ${pageY}px, transparent, rgb(6 9 16 / 95%) 35%)`);
        })
    }
});
