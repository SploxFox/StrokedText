"use strict";
exports.__esModule = true;
exports.determineBBox = void 0;
function createNode(name, options) {
    if (options === void 0) { options = {}; }
    var el = document.createElementNS("http://www.w3.org/2000/svg", name);
    for (var key in options) {
        el.setAttribute(key, options[key]);
    }
    return el;
}
/**
 * Determines if the browser includes the stroke in the bounding box. Some browsers do and others don't.
 */
function determineBBox() {
    var testSVG = createNode('svg', { width: '100', height: '100' });
    var testRect = createNode('rect', { x: '10', y: '10', width: '30', height: '30', fill: 'black', stroke: 'red', 'stroke-width': '10' });
    testSVG.appendChild(testRect);
    document.body.appendChild(testSVG);
    console.log(testSVG.getBBox().width);
}
exports.determineBBox = determineBBox;
