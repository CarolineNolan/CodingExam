import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

/**
  Component for showing a bar chart
  Using the HTML5 canvas element
*/
@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: [ './bar-graph.component.css' ]
})
export class BarGraphComponent implements AfterViewInit {
  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl: ElementRef;
  
  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;
  u16Value: number;
  u43Value: number;
  u49Value: number;
  u64Value: number;
  seniorsValue: number;
  maxValue: number = 28;
  numberOfBars: number = 5;
  canvasWidth: number = 400;
  canvasHeight: number = 200;

  constructor() {
    // "Under 16": 22,
    // "16-43": 28,
    // "35-49": 22,
    // "50-64": 16,
    // "65+": 12 
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.draw();
  }

  /**
   * Draws something using the context
   */
  draw() {
    //First I want to draw a straight black line that I can start building my bar char on top of
    this.drawLine(this.context, 5, 170, 395, 170, '#000000');

    //Next I want to get some labels on the bottom. This could be done in a more efficient way, loop through and
    //pass the label each time and do a calculation on the X value. Use some padding and the width to set the distance
    // between the labels. The Y would stay the same because you want it to stay just under the line.
    this.drawLabels(this.context, 40, 190, 'Under 16');
    this.drawLabels(this.context, 110, 190, '16-43');
    this.drawLabels(this.context, 180, 190, '35-49');
    this.drawLabels(this.context, 260, 190, '50-64');
    this.drawLabels(this.context, 320, 190, '65+');


    //Take the height of the canvas. Multipy by the value and divide by the maxValue
    //need to scale all the bars according to this maxValue and according to the size of the canvas.
    this.u16Value = Math.round(this.canvasHeight * 22/this.maxValue);
    this.u43Value = Math.round(this.canvasHeight * 28/this.maxValue);
    this.u49Value = Math.round(this.canvasHeight * 22/this.maxValue);
    this.u64Value = Math.round(this.canvasHeight * 16/this.maxValue);
    this.seniorsValue = Math.round(this.canvasHeight * 12/this.maxValue);

    //How big the width of each bar can be
    let barSize = (this.canvasWidth)/this.numberOfBars;
    //The padding between each bar on the graph
    let padding = 10;
    //The actual barWidth
    let barWidth = padding * barSize;



    //Next I want to draw my bars on the chart. Set the barWidth, the barHeight, the bar Size and a colour for each bar
    //This could be done as part of a loop instead of calling manually each time.
    this.drawBar(this.context, barWidth, this.canvasHeight - this.u16Value - padding, barSize, this.u16Value, '#8A2BE2');
    this.drawBar(this.context, barWidth, this.canvasHeight - this.u43Value - padding, barSize, this.u43Value, '#0000FF');
    this.drawBar(this.context, barWidth, this.canvasHeight - this.u49Value -  padding, barSize, this.u49Value, '#7FFF00');
    this.drawBar(this.context, barWidth, this.canvasHeight - this.u64Value - padding, barSize, this.u64Value, '#8FBC8F');
    this.drawBar(this.context, barWidth, this.canvasHeight - this.seniorsValue - padding, barSize, this.seniorsValue, '#FFD700');

  }

  //context: reference to the drawing context
  //startX: the X coordinate of the line starting point
  //startY: the Y coordinate of the line starting point
  //endX: the X coordinate of the line end point
  //endY: the Y coordinate of the line end point
  //color: the color of the line
  drawLine(context, startX, startY, endX, endY,color){
    context.save();
    context.strokeStyle = color;//determines the colour used to draw the line
    context.beginPath();//draws the line
    context.moveTo(startX,startY);//the starting point
    context.lineTo(endX,endY);
    context.stroke();//do the drawing by calling stroke()
    context.restore();
  }

  //context: reference to the drawing context
  //startX: the X coordinate of the line starting point
  //startY: the Y coordinate of the line starting point
  //label: for each bar displayed
  drawLabels(context, startX, startY, label) {
    context.font = "15px Arial"
    context.textBaseline = "Hanging"; 
    context.fillText(label, startX, startY); 

  }

  //context: reference to the drawing context
  //upperLeftCornerX: the X coordinate of the bar's upper left corner
  //upperLeftCornerY: the X coordinate of the bar's upper left corner
  //width: the width of the bar
  //height: the height of the bar
  //color: the color of the bar
  drawBar(context, upperLeftCornerX, upperLeftCornerY, width, height, color){
    context.save();
    context.fillStyle=color;//setting the colour of the filled in rectangle
    context.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);//draws a filled rectangle with its top left corner at the starting coordinates and the specified width and height.
    context.restore();
}

}
