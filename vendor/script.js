$('.navbar-toggler').on('click', function () {
    $(this).toggleClass('menu-open');
});


 // Get the current year copyright
 document.getElementById('year').innerHTML = new Date().getFullYear();
