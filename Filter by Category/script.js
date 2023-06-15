function filterByCategory(products, category) {
    function filterFunc(product) {
        return product.category === category;
    }

    return filter(products, filterFunc);
}
