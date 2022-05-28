const guitar = document.querySelector('.closed')
const trumpet = document.querySelector('.open')

// add event listener 
guitar.addEventListener('click', () => {
    if(trumpet.classList.contains('open'))
    {trumpet.classList.add('active');
    guitar.classList.remove('active');
}
});

trumpet.addEventListener('click', () => {
    if(guitar.classList.contains('closed')) {
        guitar.classList.add('active');
        trumpet.classList.remove('active');
    }
});