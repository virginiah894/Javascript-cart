var deleteButton = document.getElementsByClassName('btn-danger')
console.log(deleteButton)
for(var i=0; i< deleteButton.length;i++){
    var button= deleteButton[i]
    button.addEventListener('click',function(event){
        var clickedButton=event.target
        clickedButton.parentElement.parentElement.remove()
    })
}
function updateTotal(){
    var cartItem= document.getElementsByClassName('cart-iems')[0]
    var cartRows = cartItem.getElementsByClassName('cart-row')
    for(var i=0;i< cartRows.length;i++){
        var cartRow = cartRows[i]
        var priceCart = cartRow.getElementsByClassName('cart-price')[0]
        var quantity
    }
}