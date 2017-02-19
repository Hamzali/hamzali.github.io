let pages = $('.page').addClass('hidden');

const SPACE = 32;
const KEY_A = 65;
const KEY_D = 68;

function show(elem) {
    elem.className = elem.className.split(' ').slice(0, 2).join(' ');
}

function hide(elem) {
    elem.className += ' hidden';
}

show(pages[0]);

let currentPage = 0;

$(window).keypress(function (e) {
    let lastPage = currentPage;
    console.dir(e);
    console.log(e.key);
    switch(e.key) {
        case 'd':
            if(currentPage >= pages.length - 1) currentPage = 0;
            else currentPage++;

            hide(pages[lastPage]);
            show(pages[currentPage]);
            break;
        case 'a':
            if(currentPage <= 0) currentPage = pages.length - 1;
            else currentPage--;

            hide(pages[lastPage]);
            show(pages[currentPage]);
            break;
    } 
});

$('body').on('click', function (e) {
    let lastPage = currentPage;
    if(currentPage >= pages.length - 1) currentPage = 0;
    else currentPage++;

    hide(pages[lastPage]);
    show(pages[currentPage]);
});