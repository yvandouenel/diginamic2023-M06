export function render(tag: string, text: { name: { official: string } }[]) {
    console.log(text);
    for (let item of text) {
        const domElement = document.createElement(tag);
        domElement.textContent = item.name.official;
        document.body.appendChild(domElement);
        console.log(item);
    }
}




