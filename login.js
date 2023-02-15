function loginBtn(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;

    if(email === 'humaionkobir@gmail.com' && password === '12345678'){
        const mainContainer = document.getElementById('main-container');
        mainContainer.style.display = 'block';

        const bannerArea = document.getElementById('banner-area');
        bannerArea.style.display = 'none';
    }
    else{
        alert('please enter email (humaionkobir@gmail.com) and password (12345678)');
    }
}