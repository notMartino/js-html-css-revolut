// Funzione comparsa dropdown
function dropAppear(){
    $('.primoLink > a').click(function () {
        dropDisappear();
    });
    $(window).off('click');

    // Controllo se ci sono altri drop attivi
    var links = $('.lista-nav > li');
    // Richiamo la funzione disappear per rimuoverli
    disappear(links);

    // Attivo il drop corrente
    var link = $(this);
    var dropdown = link.children('div.dropdown');
    dropdown.addClass('active');

    // Disattivo il click che toglie i dropdown se ci sono sopra
}

// Funzione scomparsa
function disappear(links) {
    links.each(function () {
        links.children('div.dropdown').removeClass('active');
    });
}

// Funzione scomparsa se clicco fuori
function dropDisappear() {
    console.log('aaaa');
    $(window).click(function () {
        var links = $('.lista-nav > li');
        disappear(links);
    });
}

// Funzione iniziale
function init(){
    $('.lista-nav > li').mouseenter(dropAppear);
    $('.lista-nav > li').mouseleave(dropDisappear);
}   

$(document).ready(init);