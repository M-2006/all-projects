function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var darkModeButton = document.querySelector('.btn-dark-mode');
    if (element.classList.contains("dark-mode")) {
        darkModeButton.textContent = 'Light Mode';
    } else {
        darkModeButton.textContent = 'Dark Mode';
    }
}

const refreshPage = () =>{
    window.location.reload();
}
function toggleMoreInfo() {
    var moreInfo = document.querySelector('.more-info');
    var seeMoreLink = document.querySelector('.see-more');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
        seeMoreLink.textContent = 'See less info';
    } else {
        moreInfo.style.display = 'none';
        seeMoreLink.textContent = 'See more info';
    }
}
