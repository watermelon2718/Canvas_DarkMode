document.body.style.backgroundColor = 'black';

// document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, ul, div, tr, .container').forEach(function(element) {
//     element.style.backgroundColor = 'black';
//     element.style.color = 'white';
//     link.style.color = 'cyan';
// });

// // done
document.querySelectorAll('p').forEach(function(p) {
    p.style.color = 'white';
});

document.querySelectorAll('p').forEach(function(p) {
    p.style.backgroundColor = 'black';
});


document.querySelectorAll('.container').forEach(function(container) {
    container.style.backgroundColor = 'black';
});

// document.querySelectorAll('a').forEach(function(header) {
//     primary.style.color = 'white';
//     secondary.style.color = 'white';
// });

document.querySelectorAll('a').forEach(function(header) {
    header.style.color = 'white';
    header.style.backgroundColor = 'black';
});

// document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a').forEach(function(element) {
//     element.style.color = 'white';
// });

document.querySelectorAll('span').forEach(function(span) {
    span.style.backgroundColor = 'black';
    span.style.color = 'white';
});

document.querySelectorAll('ul').forEach(function(ul) {
    ul.style.backgroundColor = 'black';
    ul.style.color = 'white';
    ul.style.accentColor = 'green';
});

document.querySelectorAll('div').forEach(function(div) {
    div.style.color = 'white';
});

document.querySelectorAll('div').forEach(function(div) {
    div.style.backgroundColor = 'black';
});

document.querySelectorAll('tr').forEach(function(tr) {
    tr.style.backgroundColor = 'black';
    tr.style.color = 'white';
});

document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(header) {
    header.style.color = 'white';
});

document.querySelectorAll('a').forEach(function(link) {
    link.style.color = 'cyan';
});


