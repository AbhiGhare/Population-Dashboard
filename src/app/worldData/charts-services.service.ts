import { Injectable } from '@angular/core';

import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Injectable({
  providedIn: 'root'
})
export class ChartsServicesService {

  Highcharts: typeof Highcharts = Highcharts;


  constructor() { }

  generateTop5Population(country:any,population:any):Highcharts.Options{
    const data = population
    const Top5Population:Highcharts.Options={
  colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'],

      chart: {
        backgroundColor:'#0e1c2f',
        type: 'pie',
        
    },
    title: {
        text: 'top 5 country population wise',
        style:{
          color:'#8d98a9'
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:country,
        title:{
          text:'country',
          style:{
            // color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
        title: {
            text: 'population range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    // plotOptions: {
      
    //     colors: ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00'], // Set custom colors for the bars
      
    // },
    series: [
      {
        name: 'population',
        
        data:data
        
    } as any, 
    
    
  ],
    }
    return Top5Population
  }

  generateTop5Area(AreaCountryName:any,AreaCountryValue:any):Highcharts.Options{
    const Top5Area:Highcharts.Options={
      chart: {
        backgroundColor:'#0e1c2f',
        type: 'pie',
        // zoomType: 'x'
    },
    title: {
        text: 'top 5 country Area wise',
        style:{
          color:'#8d98a9'
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:AreaCountryName,
        title:{
          text:'country',
          style:{
            // color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
        title: {
            text: 'area range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    series: [
      {
        name: 'area',
        
        data:AreaCountryValue
        
    } as any, 
    
    
  ]
    }
    return Top5Area
  }

  generateTop5GDP(GDPCountryName:any,GDP:any):Highcharts.Options{
    const Top5GDP:Highcharts.Options={
      chart: {
        backgroundColor:'#0e1c2f',
        type: 'line',
        
    },
    title: {
        text: 'top 5 country GDP',
        style:{
          color:'#8d98a9'
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:GDPCountryName,
        labels: {
          style: {
            color:'#fff' // Set the colors of the categories
          }
        },
        title:{
          text:'country',
          style:{
            color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
      labels: {
        style: {
          color:'#fff' // Set the colors of the categories
        }
      },
        title: {
            text: 'area range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    series: [
      {
        name: 'Country GDP',
        
        data:GDP
        
    } as any, 
    
    
  ]
    }

    return Top5GDP
  }

  generateTopGDPGrowth(GDPCountryName:any,GDPGrowth:any):Highcharts.Options{
    const Top5GDP_Growth:Highcharts.Options={
      chart: {
        backgroundColor:'#0e1c2f',
        type: 'line',
        
    },
    title: {
        text: 'top 5 country GDP[%]',
        style:{
          color:'#8d98a9'
        
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:GDPCountryName,
        labels: {
          style: {
            color:'#fff' // Set the colors of the categories
          }
        },
        title:{
          text:'country',
          style:{
            // color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
      labels: {
        style: {
          color:'#fff' // Set the colors of the categories
        }
      },
        title: {
            text: 'area range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    series: [
      {
        name:'GDP growth',
      data:GDPGrowth
        
    } as any, 
    
  ]
    }

    return Top5GDP_Growth
  }

  generateTop5WaterKM(waterCountryName:any,waterResourceKm:any):Highcharts.Options{
    const Top5WaterKM:Highcharts.Options={
      chart: {
        backgroundColor:'#0e1c2f',
        type: 'area',
        
    },
    title: {
        // text: 'top 5 country water resources',
        text: ' water resources',
        style:{
          color:'#8d98a9'
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:waterCountryName,
        labels: {
          style: {
            color:'#fff' // Set the colors of the categories
          }
        },
        title:{
          text:'country',
          style:{
            // color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
      labels: {
        style: {
          color:'#fff' // Set the colors of the categories
        }
      },
        title: {
            text: 'area range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    series: [
      {
        name: 'Country water km^2',
        
        data:waterResourceKm
        
    } as any, 
    
    
  ]
    }
    return Top5WaterKM
  }

  generateTop5WaterPr(waterCountryName:any,waterPercent:any):Highcharts.Options{
    const Top5WaterPr:Highcharts.Options={
      chart: {
      backgroundColor:'#0e1c2f',
        type: 'area',
        
    },
    title: {
        text: 'water resources[%]',
        style:{
          color:'#8d98a9'
        }
    },
    xAxis: {
        // categories: ['Apples', 'Bananas', 'Oranges'],
        categories:waterCountryName,
        labels: {
          style: {
            color:'#fff' // Set the colors of the categories
          }
        },
        title:{
          text:'country',
          style:{
            // color:'white',
            // lineColor:'black'
          }
        },
        // lineColor:'black'
    },
    yAxis: {
      labels: {
        style: {
          color:'#fff' // Set the colors of the categories
        }
      },
        title: {
            text: 'area range',
            style:{
              // color:'white',
              // lineColor:'black'
            }
        },
        
  
    },
    series: [
      {
        name:'water %',
      data:waterPercent
        
    } as any, 
    
  ]
    }

  return Top5WaterPr
  }

  generateAllTop5GDP(data:any):Highcharts.Options{
    const AllTop5GDP:Highcharts.Options={
    chart: {
      backgroundColor:'#0e1c2f',
      width: 300,
    },
    title: {  
      text: "%GDP contributed from top 5% country"  ,
      style:{
        color:'#8d98a9'
      }
  }, 
    series: [
      {
        type: 'pie',
        innerSize: '80%',
        animation: true,
        allowPointSelect: true,
        slicedOffset: 0,
        states: {
          hover: {
            halo: null,
            brightness: 0,
          },
        },
        data: [
          // {
          //   color: '#aaf',
          //   borderColor: '#aaf',
          //   y: 4,
          //   // events: this.getEventHandlers(),
          // },
          // {
          //   color: '#afa',
          //   borderColor: '#afa',
          //   y: 3,
          //   // events: this.getEventHandlers(),
          // },
          // {
          //   color: '#faa',
          //   borderColor: '#faa',
          //   y: 8,
          //   // events: this.getEventHandlers(),
          // },

          { name: 'Average Value', y: data ,borderWidth: 20, color: '#afa',
          borderColor: '#afa',},
          { name: 'Other', y: 100 - data ,borderWidth: 10,color: '#aaf',
          borderColor: '#aaf',}
        ],
      },
    ],
    };

    return AllTop5GDP
  }

  generateAllTop5Water(data:any):Highcharts.Options{
    const AllTop5Water: Highcharts.Options={
      chart: {
        backgroundColor:'#0e1c2f',
        width: 300,
      },
      title: {  
        text: "%water resource contributed from top 5 country"  ,
        style:{
          color:'#8d98a9'
        }
    }, 
      series: [
        {
          type: 'pie',
          innerSize: '80%',
          animation: true,
          allowPointSelect: true,
          slicedOffset: 0,
          states: {
            hover: {
              halo: null,
              brightness: 0,
            },
          },
          data: [
            // {
            //   color: '#aaf',
            //   borderColor: '#aaf',
            //   y: 4,
            //   // events: this.getEventHandlers(),
            // },
            // {
            //   color: '#afa',
            //   borderColor: '#afa',
            //   y: 3,
            //   // events: this.getEventHandlers(),
            // },
            // {
            //   color: '#faa',
            //   borderColor: '#faa',
            //   y: 8,
            //   // events: this.getEventHandlers(),
            // },
  
            { name: 'Average Value', y: data,borderWidth: 20, color: '#faa',
            borderColor: '#faa', },
            { name: 'Other', y: 100 - data,borderWidth: 10,color: '#aaf',
            borderColor: '#aaf', }
          ],
        },
      ],
    };
    return AllTop5Water
  }
}
