import { LitElement, html } from '@polymer/lit-element';
import 'chart.js/dist/Chart.bundle.min.js';
class BaseChart extends LitElement {
    static get properties() {
        return {
            type: String,
            data: Object,
            options: Object,
            height: String,
            width: String
        };
    }
    _render({ width, height }) {
        return html `
            <style>
                .chart-size{
                    position: relative; 
                }
            </style>
            <div class="chart-size">
                <canvas></canvas>
            </div>
        `;
    }
    constructor() {
        super();
        window.addEventListener('resize', () => {
            this.chart.resize();
        });
    }
    _didRender(props) {
        const ctx = this.shadowRoot.querySelector('canvas').getContext('2d');
        this.chart = new Chart(ctx, {
            type: props.type,
            data: props.data,
            options: props.options
        });
    }
}
customElements.define('base-chart', BaseChart);
//# sourceMappingURL=base.js.map