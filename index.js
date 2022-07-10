//Navbar


document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-bar').classList.toggle('open');
    document.body.style.backgroundColor = '#C7DFCA';
    document.querySelector('.line-one').style.backgroundColor = '#3D3F5D';
    document.querySelector('.line-two').style.backgroundColor = '#3D3F5D';
    document.querySelector('.line-three').style.backgroundColor = '#3D3F5D';
    if (document.querySelector('.nav-bar').classList.contains('open')) {
        document.body.style.backgroundColor = '#C7DFCA';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.querySelector('.line-one').style.backgroundColor = '#5CACD3';
        document.querySelector('.line-two').style.backgroundColor = '#5CACD3';
        document.querySelector('.line-three').style.backgroundColor = '#5CACD3';
    }

    
});


