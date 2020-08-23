import * as React from 'react';

export interface StrokedTextProps {
    style?: React.CSSProperties,
    children?: string
    stroke?: string
    strokeWidth?: number, 
    fill?: string
    paintOrder?: string
    textStyle?: React.CSSProperties
    textClassName?: string
    className?: string
}

export class StrokedText extends React.Component<StrokedTextProps> {
    private svgRef = React.createRef<SVGSVGElement>();
    render() {
        return <svg style={{
            overflow: 'visible',
            ...this.props.style
        }} ref={this.svgRef} className={this.props.className ?? ''}>
            <text className={this.props.textClassName ?? ''} style={{
                stroke: this.props.stroke ?? 'black',
                fill: this.props.fill ?? 'white',
                paintOrder: this.props.paintOrder ?? 'stroke fill markers',
                strokeWidth: this.props.strokeWidth ?? 2,
                ...this.props.textStyle
            }}>{this.props.children}</text>
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