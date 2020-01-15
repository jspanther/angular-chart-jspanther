import { Component,ViewChild,ElementRef,AfterViewInit,Input } from '@angular/core';
declare var Chart:any;
@Component({
  selector: 'angular-chart-jspanther',
  template: `<div class="chart" [style.width]="width" [style.height]="height">
    <canvas id="myChart1" height="200" width="200" #myCanvas></canvas>
    
    </div>`
})
export class SampleComponent {
 @ViewChild('myCanvas') myCanvas: ElementRef;
  @Input() type:String;
  @Input() data:Object = {};
  @Input() options:Object= {};
  @Input() height:any;
  @Input() width:any;
  
  /*############################# TO CHECK OBJECT IS EMPTY ############################*/
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    	return true;
	}


  constructor() {
  }


  public ngAfterViewInit() {

    /*####################IF TYPE IS NOT PROVIDED , DEFAULT TO LINE CHART###################*/
    if(this.type == undefined || this.type == '' || (typeof this.type != 'string')){
      this.type = 'line'
    }	

    /*####################IF DATA OBJECT IS NOT PROVIDED , DEFAULT APPLIED ###################*/
    if(this.data == undefined || this.isEmpty(this.data) || (typeof this.data != 'object')){
        this.data = {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      }
    
    }
    /*#################### IF OPTION OBJECT IS NOT PROVIDED , DEFAULT APPLIED ###################*/
    if(this.options == undefined || this.isEmpty(this.options) || (typeof this.options != 'object')) {
      this.options = {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    }
    
    
    /*#################### IF HEIGHT VARIABLE IS NOT PROVIDED , DEFAULT APPLIED TO 400PX###################*/
    if(this.height == '' || (typeof this.height != 'string') || this.height == undefined){
      this.height = '400px';
    }
    

    /*#################### IF WIDTH VARIABLE IS NOT PROVIDED , DEFAULT APPLIED TO 400PX###################*/
    if(this.width == '' || (typeof this.width != 'string') || this.width == undefined){
      this.width = '400px';
    }

    var ctx = CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: this.type, // also try bar or other graph types

        // The data for our dataset
      data: this.data,

      // Configuration options
      options:this.options
    });
  }
}
