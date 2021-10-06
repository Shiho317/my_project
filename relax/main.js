console.log('hello js');

const allcafes = document.querySelectorAll('.cafe');
console.log(allcafes);

const revealCafe = function(entries, observer){
    const [entry] = entries;
    console.log(entry);

    if(entry.isInteresting) return;

    entry.target.classList.remove('bestcafe--hidden');
    observer.unobserve(entry.target);
};

const cfObserver = new IntersectionObserver(revealCafe,{
    root: null,
    threshold: 0.40,
});

allcafes.forEach(function (cafe){
    cfObserver.observe(cafe);
    cafe.classList.add('bestcafe--hidden');
});

document.querySelector('.submit').addEventListener('click', function(){
    const hide = document.querySelector('.input');
    hide.remove();

    document.querySelector('.comment').textContent = "Thank you for recommendation and comment!!"
    document.querySelector('.comment').style.textAlign = "center";
});