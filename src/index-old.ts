/*export interface StrokedTextOptions {
    text: string,
    strokeWidth: number,
    cssClass?: string,
    bBoxType?: 'stroke' | 'fill'
}

const defaultOptions: Required<StrokedTextOptions> = {
    text: 'Stroked Text',
    bBoxType: 'fill',
    strokeWidth: 2,
    cssClass: ''
}

// Some browsers include the stroke in the SVG bounding box while others do not
function determineBBox() {
    try {

    } catch (e) {
        // Didn't work but not that important anyways
        console.warn(`[StrokedText] Failed to determine the browser's implementation of svg.bBox(), assuming it does not include stroke`)
    }
}

function getStrokedTextClass(defaults?: Partial<StrokedTextOptions>) {
    return class StrokedText {
        private options: Required<StrokedTextOptions>;
        readonly element: SVGElement;
        constructor (options: StrokedTextOptions) {
            this.options = {
                ...defaultOptions,
                ...defaults,
                ...options
            };

            this.element = document.createElement('svg') as SVG;
        }

        private updateElement() {
            
        }

        getBBoxWithStroke() {
            let padding = 0;
            if (this.options.bBoxType == 'fill') {
                padding = this.options.strokeWidth / 2;
            }

            let bbox = this.element.getBBox();
        }
    }
}
*/