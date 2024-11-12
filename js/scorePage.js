document.addEventListener('DOMContentLoaded', () =>{
    document.getElementsByTagName('span')[0].textContent = sessionStorage.getItem('numberOfCorrectAnswer');
    document.getElementsByTagName('span')[1].textContent = sessionStorage.getItem('playerName');
});