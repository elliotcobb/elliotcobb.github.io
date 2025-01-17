window.addEventListener('scroll', () => {
    const itemsToAnimate = document.querySelectorAll('.animateMoveRight');
    const windowHeight = window.innerHeight;

    itemsToAnimate.forEach((item, index) => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < 200 && itemPosition > 0) {
            item.classList.add('move-right');
        } else {
            item.classList.remove('move-right');
        }
    });
});
