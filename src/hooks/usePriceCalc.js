const usePriceCalc = (total, discountPercentage) => {
    const discounted = parseFloat((discountPercentage / 100) * total).toFixed(2);
    const payable = parseFloat(total - discounted).toFixed(2);
    return {
        discounted,
        payable
    };
}
 
export default usePriceCalc;