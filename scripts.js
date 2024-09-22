// Flip card functionality
document.getElementById('flipToRegister').addEventListener('click', function() {
    document.getElementById('flip-card-inner').style.transform = "rotateY(180deg)";
});

document.getElementById('flipToLogin').addEventListener('click', function() {
    document.getElementById('flip-card-inner').style.transform = "rotateY(0deg)";
});
