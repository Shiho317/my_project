console.log('hello js');

window.onload = function(){
    let loading = document.querySelector('.load');
    loading.classList.add('.onload');
}

const allProducts = document.querySelectorAll('.prd');
console.log(allProducts);

const revealProducts = function(entries, observer){
    const [entry] = entries;
    console.log(entry);

    if(entry.isInteresting) return;

    entry.target.classList.remove('prd--hidden');
    observer.unobserve(entry.target);
};

const prdObserver = new IntersectionObserver(revealProducts,{
    root: null,
    threshold: 0.45,
});

allProducts.forEach(function (product){
    prdObserver.observe(product);
    product.classList.add('prd--hidden');
});
