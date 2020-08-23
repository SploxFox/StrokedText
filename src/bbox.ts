function createNode(name: string, options: {[index: string]: string} = {}) {
    let el = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (let key in options){
        el.setAttribute(key, options[key]);
    }
    return el
}

/**
 * Determines if the browser includes the stroke in the bounding box. Some browsers do and others don't.
 */
export function determineBBox() {
    let testSVG = createNode('svg', { width: '100', height: '100' }) as SVGGraphicsElement;
    let testRect: SVGGraphicsElement = createNode('rect', { x: '10', y: '10', width: '30', height: '30', fill: 'black', stroke: 'red', 'stroke-width': '10'}) as SVGGraphicsElement;
    testSVG.appendChild(testRect); 
    document.body.appendChild(testSVG);
    console.log(testSVG.getBBox().width);
}