document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('theme-link');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        link.setAttribute('href', '../css/dark-theme.css');
    } else {
        link.setAttribute('href', '../css/light-theme.css');
    }
});
