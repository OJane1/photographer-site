const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', function() {
    removeFocus();
    item.classList.add('selected');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})