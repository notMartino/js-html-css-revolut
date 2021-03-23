// Funzione comparsa dropdown
function dropAppear(){
    // Disattivo il click che toglie i dropdown se ci sono sopra
    $(window).off('click');

    // Controllo se ci sono altri drop attivi e li rimuovo
    var links = $('.lista-nav > li');
    // Richiamo la funzione disappear per rimuoverli
    disappear(links);

    // Attivo il drop corrente
    var link = $(this);
    var dropdown = link.children('div.dropdown');
    dropdown.addClass('active');
}

// Funzione scomparsa
function disappear(links) {
    links.each(function () {
        links.children('div.dropdown').removeClass('active');
    });
}

// Funzione scomparsa se clicco fuori
function dropDisappear() {
    $(window).click(function () {
        var links = $('.lista-nav > li');
        disappear(links);
    })
}

// Funzione iniziale
function init(){
    $('.lista-nav > li').mouseenter(dropAppear);
    $('.dropdown').mouseleave(dropDisappear);
}   

$(document).ready(init);