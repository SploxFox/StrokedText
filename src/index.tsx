import * as React from 'react';

export interface StrokedTextProps {
    style?: React.CSSProperties,
    children: string
    stroke?: string
    strokeWidth?: number, 
    fill?: string
    paintOrder?: string
}


const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;

function getTextWidth(text: string, font: string) {
    ctx.font = font;
    var metrics = ctx.measureText(text);
    return metrics;
}

export class StrokedText extends React.Component<StrokedTextProps> {
    private svgRef = React.createRef<SVGSVGElement>();
    render() {
        return <svg style={this.props.style} ref={this.svgRef}>
            <text style={{
                stroke: this.props.stroke ?? 'black',
                fill: this.props.stroke ?? 'white',
                paintOrder: this.props.paintOrder ?? 'stroke fill markers'
            }}></text>
        </svg>
    }

    updateSVG() {
        const bbox = this.svgRef.current!.getBBox();

        this.svgRef.current!.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
        this.svgRef.current!.setAttribute('width',   bbox.width + '');
        this.svgRef.current!.setAttribute('height',  bbox.height + '');
    }

    componentDidMount() {
        this.updateSVG();
    }

    componentDidUpdate() {
        this.updateSVG();
    }
}