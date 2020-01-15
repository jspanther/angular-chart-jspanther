# angular-chart-jspanther

## Installation

To install this library, run:

```bash
$ npm install angular-chart-jspanther --save
```

### Dependency

```bash
$ npm install chart.js --save
```
or use cdn

```bash
$  https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.js
```
for more information of installation and integration of chart.js, please refer [installation](http://www.chartjs.org/docs/latest/getting-started/installation.html) and [integration](http://www.chartjs.org/docs/latest/getting-started/integration.html) documentation

## Consuming library

you can import library in any Angular application by running:

```bash
$ npm install angular-chart-jspanther
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import library
import { ChartModule } from 'angular-chart-jspanther';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify library as an import
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once library is imported, you can use it in your component in your Angular application:

**HTML**

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<angular-chart-jspanther [type]="type" [height]="height" [width]="width" [data]="data" [options]="options"></angular-chart-jspanther>
```
**TS/JS**

```xml
<!-- You can now use your library component in app.component.ts -->
export class AppComponent implements OnInit {
  constructor(){
  
    this.type = 'bar'; // also try bar or other graph types
  
    this.height = '400px';
  
    this.width = '400px';
  
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
```





## Parameters


| Name          | Type          | Default value       |  Description                            |
|:--------------|:--------------|:--------------------|:----------------------------------------|
| type          | string        | line                | The type of chart we want to create     for                                                     example bar,radar,pie etc [docs](http://www.chartjs.org/docs/latest/charts/)               
| height        | string        | 400px               | Height of the chart in px               |
| width         | string        | 400px               | Width of the chart in px                |
| data          | object        | - (random)          | Please refer [chart.js](http://www.chartjs.org/docs/latest/getting-started/usage.html) documentation     |
| options       | object        | - (random)          | Please refer [chart.js](http://www.chartjs.org/docs/latest/getting-started/usage.html) documentation     |

for complete feature documentation please refer [chart.js](http://www.chartjs.org/docs/latest/)

## Feature

* AOT(ahead of time)/JIT(just in time) compatible
* supports all major browsers
* support all latest angular version(version > 2)
* supports all feature of chart.js
* designed with simplicity in mind, yet is extremely customizable


## License

MIT © [jspanther](mailto:info@jspanther.com)