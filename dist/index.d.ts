import * as React from 'react';
export interface StrokedTextProps {
    style?: React.CSSProperties;
    children: string;
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
    paintOrder?: string;
}
export declare class StrokedText extends React.Component<StrokedTextProps> {
    private svgRef;
    render(): JSX.Element;
    updateSVG(): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
}
//# sourceMappingURL=index.d.ts.map