// Créer l'interface panier

function getCartArticleTemplate(article){
    let rowtab = document.createElement('tr');

    let colRef = document.createElement('td');
    colRef.textContent = article.ref;

    let colName = document.createElement('td');
    colName.textContent = article.name;

    let colDescrition = document.createElement('td');
    colDescrition.textContent = article.description;

    let colPrice = document.createElement('td');
    colPrice.textContent = article.price;
    
    let colSubTotal = document.createElement('td');
    colSubTotal.classList.add('subTotal');
    colSubTotal.textContent = article.subTotal();
    
    let colRemove = document.createElement('td');
    colRemove.classList.add('remove');
    colRemove.textContent = 'X';



    let colQuantity = document.createElement('td');
    let colQuantityInput = document.createElement('input');
    colQuantityInput.value = article.quantity;
    colQuantityInput.setAttribute('type', 'number');
    colQuantityInput.setAttribute('class', 'update');
    colQuantityInput.setAttribute('min', '1');
    
    colQuantity.appendChild(colQuantityInput);

    rowtab.appendChild(colRef);
    rowtab.appendChild(colName);
    rowtab.appendChild(colDescrition);
    rowtab.appendChild(colPrice);
    rowtab.appendChild(colQuantity);
    rowtab.appendChild(colSubTotal);
    rowtab.appendChild(colRemove);

    rowtab.setAttribute('data-article', article.ref);
    return rowtab;
}