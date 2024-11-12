document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const playerName = document.getElementById('playername').value;
    sessionStorage.setItem('playerName', playerName);
    setTimeout(()=>{
        window.location.href = "./pages/homePage.html"
    },900)
})