import * as d3select from 'd3-selection';
import { getDrawingSubsystem } from '../constants/PresetsData';
import '../css/svg.css'; // need svgBorder class from it

class LSystemRenderSVG {
  setSVG (svg) {
    this.width = this.height = 1000;
    this.svg = d3select.select(svg);
    this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);
    this.translate = [0, 0];
    this.scale = 1;
    this.svg.append('rect')
      .attr('class', 'svgBorder')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.width)
      .attr('height', this.height);
    let container = this.svg.append('g').attr('class', 'container')
      .attr('transform', 'translate(' + this.translate[0] + ',' + this.translate[1] + '),scale(' + this.scale + ')');
    this.container = container;
    this.drawingCanvas = this.container.append('g').attr('class', 'drawingCanvas');
  }

  // a system that takes a string and gives the individual symbols a meaning. Usually a turtle drawing system
  setDrawingSubsystem (subSystemIndex) {
    // defined in ../constants/PresetsData.js
    let SubsystemClass = getDrawingSubsystem(subSystemIndex);
    this.drawingSystem = new SubsystemClass(this.drawingCanvas, this.width, this.height);
  }

  renderString (s, iteration) {
    this.drawingCanvas.selectAll('*').remove(); // clear children
    this.drawingSystem.renderString(s, iteration);
  }
}

export default LSystemRenderSVG;