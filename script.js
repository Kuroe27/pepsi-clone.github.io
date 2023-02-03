const tab1= document.querySelector('#tab1')
const tab2= document.querySelector('#tab2')
const tab3= document.querySelector('#tab3')
var image = document.querySelector('#imgs')


tab1.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('body').classList.remove('water-gray', 'water-black');
    document.querySelector('body').classList.add('water-blue');
    image.src = 'https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757'
});

tab2.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('body').classList.remove('water-blue', 'water-black');
    document.querySelector('body').classList.add('water-gray');
    image.src = 'https://hsto.org/webt/nn/nw/_g/nnnw_gbbjrjaq8dt5fj8lq8-v04.png';
});

tab3.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('body').classList.remove('water-blue', 'water-gray');
    document.querySelector('body').classList.add('water-black');
    image.src = 'https://hsto.org/webt/pv/_j/bb/pv_jbbusqdcol_5enuwgk-dypsm.png';
});

