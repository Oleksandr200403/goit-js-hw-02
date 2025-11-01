function getElementWidth(content, padding, border) {
    const width= parseFloat(content);
    const pad= parseFloat(padding);
    const bord= parseFloat(border);
    const totalWidth = width + pad * 2 + bord * 2;
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
