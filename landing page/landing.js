// Add smooth animation to Add to Cart buttons
document.querySelectorAll('.add-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = btn.closest('.product-card');
        btn.classList.add('added');
        card.classList.add('animated');
        btn.textContent = 'Added!';
        setTimeout(function() {
            btn.classList.remove('added');
            card.classList.remove('animated');
            btn.textContent = 'Add to Cart';
        }, 1200);
    });
});
// Add smooth animation to Order Now button
const orderBtn = document.getElementById('orderNowBtn');
if(orderBtn) {
    orderBtn.addEventListener('click', function(e) {
        orderBtn.classList.add('order-animate');
        setTimeout(function() {
            orderBtn.classList.remove('order-animate');
        }, 600);
    });
}