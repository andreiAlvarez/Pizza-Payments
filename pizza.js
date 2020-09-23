//solution 1
function michaelPays(costs) {
  if (costs<5) return parseFloat((costs).toFixed(2))
  return costs/3>10?parseFloat((costs-10).toFixed(2)):parseFloat((costs/3+costs/3).toFixed(2));
}

//clever solution 

michaelPays=c=>+Math.max(c<5?c:2/3*c,c-10).toFixed(2)
