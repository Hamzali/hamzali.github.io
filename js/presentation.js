let pages = $('.page').addClass('hidden');

const SPACE = 32;
const KEY_A = 97;
const KEY_D = 100;

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
    switch(e.keyCode) {
        case SPACE:
            if(currentPage >= pages.length - 1) currentPage = 0;
            else currentPage++;

            hide(pages[lastPage]);
            show(pages[currentPage]);
            break;
        case KEY_A:
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