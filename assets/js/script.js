window.addEventListener('resize', function() {
    adjustStyles();
});

function adjustStyles() {
    var screenWidth = window.innerWidth;
    var hero = document.querySelector('.hero');
    var logo = document.querySelector('.logo');
    var h1 = document.querySelector('.hero h1');

    if (screenWidth <= 768) {
        hero.style.padding = '10px'; // Corrected here
        h1.style.fontSize = '16px'; // Adjusting font size for better visibility
        logo.style.fontSize = '16px'; // Adjusting font size for better visibility
        
    } 

    const textElement=document.querySelector('.animation');
    const text =textElement.textContent;
    let count =0;

    const interval =setInterval(()=>{
        textElement.textContent=text.slice(0,count+1);
        if(count===text.length)
        clearInterval(interval);
        count++;

    }, 70);

    
}

adjustStyles();