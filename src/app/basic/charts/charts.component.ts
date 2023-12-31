import { Component } from '@angular/core';

import { Chart } from 'angular-highcharts';
import * as Highcharts from "highcharts/highmaps";
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { Options } from "highcharts";  
// import * as Highcharts from 'highcharts';
// import * as Highcharts from 'highcharts';
// import * as Highcharts from 'highcharts';
// import { HighchartsChartModule } from 'highcharts-angular';

// var Highcharts = require('highcharts/highmaps');

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  // standalone: true,
  // imports: [HighchartsChartModule],
})
export class ChartsComponent {
  title = 'highcharts';
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [10, 2, 3,15,8],
      } as any,
      {
        name:'Line 2',
        data:[4,7,6,-5,3]
      },
      {
        name:'Line 3',
        data:[18,-7,10,2,-15]
      },
    ]
  });


  pipeChart = new Chart({
    chart:{
      type:'pie',
      plotShadow:false
    },
    credits:{
      enabled:false
    },
    plotOptions:{
      pie:{
        innerSize:'99%',
        borderWidth: 10,
        borderColor:'',
        slicedOffset:10,
        dataLabels:{
          connectorWidth:0,
        },
      },
    },

    title:{
      verticalAlign:'middle',
      floating:true,
      text:'Diseases'
    },

    legend:{
      enabled:false,
    },

    series:[
      {
        type:'pie',
        data:[
          {name:'COVID 19', y:1, color:'yellow'},
        //   {name:'HIV/AIDS 19', y:2, color:'#393e46'},
        //   {name:'EBOLA', y:3, color:'#00adb5'},
        //   {name:'DISPORA', y:4, color:'green'},
        //   {name:'DIABETES', y:5, color:'red'},
        ],
      },
    ],
  });


  barChart = new Chart({
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Fruit Consumption'
  },
  xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
      title: {
          text: 'Fruit eaten'
      }
  },
  series: [
    {
      name: 'Jane',
      data: [1]
  } as any, 
  {
      name: 'John',
      data: [5]
  }
]
  })





  Highcharts: typeof Highcharts = Highcharts;  
  chartConstructor = "mapChart";  
  updateFlag = false;  
  chartData = [{  
      code3: "ABW",  
      z: 105  
  }, {  
      code3: "AFG",  
      z: 35530  
  }];  

  chartOptions: Options = {  
      chart: {  
          map: worldMap as any  
      },  
      title: {  
          text: "Angualr Highchart World Map"  
      },  
      subtitle: {  
          text: 'Sub title: <a href="http://code.highcharts.com/mapdata/custom/world.js"> xyzzzz</a>'  
      },  
      exporting: {  
          enabled: true  
      },  
      credits: {  
          enabled: true  
      },  
      mapNavigation: {  
          enabled: true,  
          buttonOptions: {  
              alignTo: "spacingBox"  
          }  
      },  
      legend: {  
          enabled: true  
      },  
      colorAxis: {  
          dataClasses: [{  
              to: 25,  
              color: '#922291'  
          }, {  
              from: 26,  
              to: 50,  
              color: '#c893c7'  
          }, {  
              from: 51,  
              to: 75,  
              color: '#00a2ad'  
          }, {  
              from: 76,  
              to: 100,  
              color: '#7fd0d6'  
          }],  
          type: 'linear',  
      },  
      series: [{  

          point: {  
              events: {  
                  click: (e:any) => {  
                      this.getDataByCountryKey(e.point['hc-key'])  
                  }  

                  // click: this.getDataByCountryKey.bind(this)    
              }  
          },  
          type: "map",  
          name: "Random Data",  
          states: {  
              hover: {  
                  color: "#BADA55"  
              }  
          },  
          dataLabels: {  
              enabled: true,  
              format: "{point.name}"  
          },  
          allAreas: false,  
          data: [  
              ["fo", 0],  
              ["um", 1],  
              ["us", 2],  
              ["jp", 3],  
              ["sc", 4],  
              ["in", 5],  
              ["fr", 6],  
              ["fm", 7],  
              ["cn", 8],  
              ["pt", 9],  
              ["sw", 10],  
              ["sh", 11],  
              ["br", 12],  
              ["ki", 13],  
              ["ph", 14],  
              ["mx", 15],  
              ["es", 16],  
              ["bu", 17],  
              ["mv", 18],  
              ["sp", 19],  
              ["gb", 20],  
              ["gr", 21],  
              ["as", 22],  
              ["dk", 23],  
              ["gl", 24],  
              ["gu", 25],  
              ["mp", 26],  
              ["pr", 27],  
              ["vi", 28],  
              ["ca", 29],  
              ["st", 30],  
              ["cv", 31],  
              ["dm", 32],  
              ["nl", 33],  
              ["jm", 34],  
              ["ws", 35],  
              ["om", 36],  
              ["vc", 37],  
              ["tr", 38],  
              ["bd", 39],  
              ["lc", 40],  
              ["nr", 41],  
              ["no", 42],  
              ["kn", 43],  
              ["bh", 44],  
              ["to", 45],  
              ["fi", 46],  
              ["id", 47],  
              ["mu", 48],  
              ["se", 49],  
              ["tt", 50],  
              ["my", 51],  
              ["pa", 52],  
              ["pw", 53],  
              ["tv", 54],  
              ["mh", 55],  
              ["cl", 56],  
              ["th", 57],  
              ["gd", 58],  
              ["ee", 59],  
              ["ag", 60],  
              ["tw", 61],  
              ["bb", 62],  
              ["it", 63],  
              ["mt", 64],  
              ["vu", 65],  
              ["sg", 66],  
              ["cy", 67],  
              ["lk", 68],  
              ["km", 69],  
              ["fj", 70],  
              ["ru", 71],  
              ["va", 72],  
              ["sm", 73],  
              ["kz", 74],  
              ["az", 75],  
              ["tj", 76],  
              ["ls", 77],  
              ["uz", 78],  
              ["ma", 79],  
              ["co", 80],  
              ["tl", 81],  
              ["tz", 82],  
              ["ar", 83],  
              ["sa", 84],  
              ["pk", 85],  
              ["ye", 86],  
              ["ae", 87],  
              ["ke", 88],  
              ["pe", 89],  
              ["do", 90],  
              ["ht", 91],  
              ["pg", 92],  
              ["ao", 93],  
              ["kh", 94],  
              ["vn", 95],  
              ["mz", 96],  
              ["cr", 97],  
              ["bj", 98],  
              ["ng", 99],  
              ["ir", 100],  
              ["sv", 101],  
              ["sl", 102],  
              ["gw", 103],  
              ["hr", 104],  
              ["bz", 105],  
              ["za", 106],  
              ["cf", 107],  
              ["sd", 108],  
              ["cd", 109],  
              ["kw", 110],  
              ["de", 111],  
              ["be", 112],  
              ["ie", 113],  
              ["kp", 114],  
              ["kr", 115],  
              ["gy", 116],  
              ["hn", 117],  
              ["mm", 118],  
              ["ga", 119],  
              ["gq", 120],  
              ["ni", 121],  
              ["lv", 122],  
              ["ug", 123],  
              ["mw", 124],  
              ["am", 125],  
              ["sx", 126],  
              ["tm", 127],  
              ["zm", 128],  
              ["nc", 129],  
              ["mr", 130],  
              ["dz", 131],  
              ["lt", 132],  
              ["et", 133],  
              ["er", 134],  
              ["gh", 135],  
              ["si", 136],  
              ["gt", 137],  
              ["ba", 138],  
              ["jo", 139],  
              ["sy", 140],  
              ["mc", 141],  
              ["al", 142],  
              ["uy", 143],  
              ["cnm", 144],  
              ["mn", 145],  
              ["rw", 146],  
              ["so", 147],  
              ["bo", 148],  
              ["cm", 149],  
              ["cg", 150],  
              ["eh", 151],  
              ["rs", 152],  
              ["me", 153],  
              ["tg", 154],  
              ["la", 155],  
              ["af", 156],  
              ["ua", 157],  
              ["sk", 158],  
              ["jk", 159],  
              ["bg", 160],  
              ["qa", 161],  
              ["li", 162],  
              ["at", 163],  
              ["sz", 164],  
              ["hu", 165],  
              ["ro", 166],  
              ["ne", 167],  
              ["lu", 168],  
              ["ad", 169],  
              ["ci", 170],  
              ["lr", 171],  
              ["bn", 172],  
              ["iq", 173],  
              ["ge", 174],  
              ["gm", 175],  
              ["ch", 176],  
              ["td", 177],  
              ["kv", 178],  
              ["lb", 179],  
              ["dj", 180],  
              ["bi", 181],  
              ["sr", 182],  
              ["il", 183],  
              ["ml", 184],  
              ["sn", 185],  
              ["gn", 186],  
              ["zw", 187],  
              ["pl", 188],  
              ["mk", 189],  
              ["py", 190],  
              ["by", 191],  
              ["cz", 192],  
              ["bf", 193],  
              ["na", 194],  
              ["ly", 195],  
              ["tn", 196],  
              ["bt", 197],  
              ["md", 198],  
              ["ss", 199],  
              ["bw", 200],  
              ["bs", 201],  
              ["nz", 202],  
              ["cu", 203],  
              ["ec", 204],  
              ["au", 205],  
              ["ve", 206],  
              ["sb", 207],  
              ["mg", 208],  
              ["is", 209],  
              ["eg", 210],  
              ["kg", 211],  
              ["np", 212]  
          ]  
      }]  

  };  

  onClick() {  
    let newData1:any = ["eg", 555];  
    let newData2:any = ["kg", 555];  
    let newData3:any = ["ru", 555];  
  
    // console.log(...(this.chartOptions.series[0] as any).data);  
    this.chartOptions = {  
        title: {    
        text: "updated"    
        },    
        series: [{  
            type: "map",  
            data: [  
                // ...(this.chartOptions.series[0] as any).data,  
  
                // ["eg", 555],    
                // ["kg", 555],    
                // ["np", 555] ,   
                newData1,  
                newData2,  
                newData3  
            ]  
        }]  
    };  
  
    this.updateFlag = true;  
}  

onclick2(){
  let newData1:any = ["fo", 0]; 
    let newData2:any =  ["um", 1];   
    let newData3:any =  ["us", 2];    
  
    // console.log(...(this.chartOptions.series[0] as any).data);  
    this.chartOptions = {  
        title: {    
        text: "updated"    
        },    
        series: [{  
            type: "map",  
            data: [  
                // ...(this.chartOptions.series[0] as any).data,  
  
                // ["eg", 555],    
                // ["kg", 555],    
                // ["np", 555] ,   
                newData1,  
                newData2,  
                newData3  
            ]  
        }]  
    };  
  
    this.updateFlag = true;  
}

all(){
  this.chartOptions= {  
    chart: {  
        map: worldMap as any  
    },  
    title: {  
        text: "Angualr Highchart World Map"  
    },  
    subtitle: {  
        text: 'Sub title: <a href="http://code.highcharts.com/mapdata/custom/world.js"> xyzzzz</a>'  
    },  
    exporting: {  
        enabled: true  
    },  
    credits: {  
        enabled: true  
    },  
    mapNavigation: {  
        enabled: true,  
        buttonOptions: {  
            alignTo: "spacingBox"  
        }  
    },  
    legend: {  
        enabled: true  
    },  
    colorAxis: {  
        dataClasses: [{  
            to: 25,  
            color: '#922291'  
        }, {  
            from: 26,  
            to: 50,  
            color: '#c893c7'  
        }, {  
            from: 51,  
            to: 75,  
            color: '#00a2ad'  
        }, {  
            from: 76,  
            to: 100,  
            color: '#7fd0d6'  
        }],  
        type: 'linear',  
    },  
    series: [{  

        point: {  
            events: {  
                click: (e:any) => {  
                    this.getDataByCountryKey(e.point['hc-key'])  
                }  

                // click: this.getDataByCountryKey.bind(this)    
            }  
        },  
        type: "map",  
        name: "Random Data",  
        states: {  
            hover: {  
                color: "#BADA55"  
            }  
        },  
        dataLabels: {  
            enabled: true,  
            format: "{point.name}"  
        },  
        allAreas: false,  
        data: [  
            ["fo", 0],  
            ["um", 1],  
            ["us", 2],  
            ["jp", 3],  
            ["sc", 4],  
            ["in", 5],  
            ["fr", 6],  
            ["fm", 7],  
            ["cn", 8],  
            ["pt", 9],  
            ["sw", 10],  
            ["sh", 11],  
            ["br", 12],  
            ["ki", 13],  
            ["ph", 14],  
            ["mx", 15],  
            ["es", 16],  
            ["bu", 17],  
            ["mv", 18],  
            ["sp", 19],  
            ["gb", 20],  
            ["gr", 21],  
            ["as", 22],  
            ["dk", 23],  
            ["gl", 24],  
            ["gu", 25],  
            ["mp", 26],  
            ["pr", 27],  
            ["vi", 28],  
            ["ca", 29],  
            ["st", 30],  
            ["cv", 31],  
            ["dm", 32],  
            ["nl", 33],  
            ["jm", 34],  
            ["ws", 35],  
            ["om", 36],  
            ["vc", 37],  
            ["tr", 38],  
            ["bd", 39],  
            ["lc", 40],  
            ["nr", 41],  
            ["no", 42],  
            ["kn", 43],  
            ["bh", 44],  
            ["to", 45],  
            ["fi", 46],  
            ["id", 47],  
            ["mu", 48],  
            ["se", 49],  
            ["tt", 50],  
            ["my", 51],  
            ["pa", 52],  
            ["pw", 53],  
            ["tv", 54],  
            ["mh", 55],  
            ["cl", 56],  
            ["th", 57],  
            ["gd", 58],  
            ["ee", 59],  
            ["ag", 60],  
            ["tw", 61],  
            ["bb", 62],  
            ["it", 63],  
            ["mt", 64],  
            ["vu", 65],  
            ["sg", 66],  
            ["cy", 67],  
            ["lk", 68],  
            ["km", 69],  
            ["fj", 70],  
            ["ru", 71],  
            ["va", 72],  
            ["sm", 73],  
            ["kz", 74],  
            ["az", 75],  
            ["tj", 76],  
            ["ls", 77],  
            ["uz", 78],  
            ["ma", 79],  
            ["co", 80],  
            ["tl", 81],  
            ["tz", 82],  
            ["ar", 83],  
            ["sa", 84],  
            ["pk", 85],  
            ["ye", 86],  
            ["ae", 87],  
            ["ke", 88],  
            ["pe", 89],  
            ["do", 90],  
            ["ht", 91],  
            ["pg", 92],  
            ["ao", 93],  
            ["kh", 94],  
            ["vn", 95],  
            ["mz", 96],  
            ["cr", 97],  
            ["bj", 98],  
            ["ng", 99],  
            ["ir", 100],  
            ["sv", 101],  
            ["sl", 102],  
            ["gw", 103],  
            ["hr", 104],  
            ["bz", 105],  
            ["za", 106],  
            ["cf", 107],  
            ["sd", 108],  
            ["cd", 109],  
            ["kw", 110],  
            ["de", 111],  
            ["be", 112],  
            ["ie", 113],  
            ["kp", 114],  
            ["kr", 115],  
            ["gy", 116],  
            ["hn", 117],  
            ["mm", 118],  
            ["ga", 119],  
            ["gq", 120],  
            ["ni", 121],  
            ["lv", 122],  
            ["ug", 123],  
            ["mw", 124],  
            ["am", 125],  
            ["sx", 126],  
            ["tm", 127],  
            ["zm", 128],  
            ["nc", 129],  
            ["mr", 130],  
            ["dz", 131],  
            ["lt", 132],  
            ["et", 133],  
            ["er", 134],  
            ["gh", 135],  
            ["si", 136],  
            ["gt", 137],  
            ["ba", 138],  
            ["jo", 139],  
            ["sy", 140],  
            ["mc", 141],  
            ["al", 142],  
            ["uy", 143],  
            ["cnm", 144],  
            ["mn", 145],  
            ["rw", 146],  
            ["so", 147],  
            ["bo", 148],  
            ["cm", 149],  
            ["cg", 150],  
            ["eh", 151],  
            ["rs", 152],  
            ["me", 153],  
            ["tg", 154],  
            ["la", 155],  
            ["af", 156],  
            ["ua", 157],  
            ["sk", 158],  
            ["jk", 159],  
            ["bg", 160],  
            ["qa", 161],  
            ["li", 162],  
            ["at", 163],  
            ["sz", 164],  
            ["hu", 165],  
            ["ro", 166],  
            ["ne", 167],  
            ["lu", 168],  
            ["ad", 169],  
            ["ci", 170],  
            ["lr", 171],  
            ["bn", 172],  
            ["iq", 173],  
            ["ge", 174],  
            ["gm", 175],  
            ["ch", 176],  
            ["td", 177],  
            ["kv", 178],  
            ["lb", 179],  
            ["dj", 180],  
            ["bi", 181],  
            ["sr", 182],  
            ["il", 183],  
            ["ml", 184],  
            ["sn", 185],  
            ["gn", 186],  
            ["zw", 187],  
            ["pl", 188],  
            ["mk", 189],  
            ["py", 190],  
            ["by", 191],  
            ["cz", 192],  
            ["bf", 193],  
            ["na", 194],  
            ["ly", 195],  
            ["tn", 196],  
            ["bt", 197],  
            ["md", 198],  
            ["ss", 199],  
            ["bw", 200],  
            ["bs", 201],  
            ["nz", 202],  
            ["cu", 203],  
            ["ec", 204],  
            ["au", 205],  
            ["ve", 206],  
            ["sb", 207],  
            ["mg", 208],  
            ["is", 209],  
            ["eg", 210],  
            ["kg", 211],  
            ["np", 212]  
        ]  
    }]  

}; 
}

  getDataByCountryKey(ckey: any) {  
      console.log('CountryKey:' + ckey);  
  }  

}
