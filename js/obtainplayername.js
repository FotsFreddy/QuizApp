document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    if (document.getElementById('playername').value.length === 0) 
        return;
    
    const playerName = document.getElementById('playername').value;
    sessionStorage.clear(); // clears sessionStorage
    setTimeout(()=>{
        sessionStorage.setItem('playerName', playerName);
        window.location.href = "./pages/homePage.html"
    },900)
})