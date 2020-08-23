"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.StrokedText = void 0;
var React = __importStar(require("react"));
var StrokedText = /** @class */ (function (_super) {
    __extends(StrokedText, _super);
    function StrokedText() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.svgRef = React.createRef();
        return _this;
    }
    StrokedText.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f;
        return React.createElement("svg", { style: __assign({ overflow: 'visible' }, this.props.style), ref: this.svgRef, className: (_a = this.props.className) !== null && _a !== void 0 ? _a : '' },
            React.createElement("text", { className: (_b = this.props.textClassName) !== null && _b !== void 0 ? _b : '', style: __assign({ stroke: (_c = this.props.stroke) !== null && _c !== void 0 ? _c : 'black', fill: (_d = this.props.fill) !== null && _d !== void 0 ? _d : 'white', paintOrder: (_e = this.props.paintOrder) !== null && _e !== void 0 ? _e : 'stroke fill markers', strokeWidth: (_f = this.props.strokeWidth) !== null && _f !== void 0 ? _f : 2 }, this.props.textStyle) }, this.props.children));
    };
    StrokedText.prototype.updateSVG = function () {
        var bbox = this.svgRef.current.getBBox();
        this.svgRef.current.setAttribute('viewBox', bbox.x + " " + bbox.y + " " + bbox.width + " " + bbox.height);
        this.svgRef.current.setAttribute('width', bbox.width + '');
        this.svgRef.current.setAttribute('height', bbox.height + '');
    };
    StrokedText.prototype.componentDidMount = function () {
        this.updateSVG();
    };
    StrokedText.prototype.componentDidUpdate = function () {
        this.updateSVG();
    };
    return StrokedText;
}(React.Component));
exports.StrokedText = StrokedText;
