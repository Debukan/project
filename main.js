document.addEventListener('DOMContentLoaded', function() {

    let count = 0;

    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    button1.addEventListener('click', function() {
        count++;
    });

    button2.addEventListener('click', function() {
        count++;
    });
});
