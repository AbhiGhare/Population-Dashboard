import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Chart } from 'highcharts';
import { Chart } from 'angular-highcharts';
import * as Highcharts from "highcharts/highmaps";
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { Options } from "highcharts";  
import { style } from '@angular/animations';
import { PopulationService } from 'src/app/worldData/population.service';
import { ChartsServicesService } from 'src/app/worldData/charts-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show:boolean=false
  showGraph:boolean=false
  showSideG:boolean=true
  toggle(){
    this.show =!this.show
  }
  togglegraph(){
    this.showGraph=!this.showGraph
  }
  toggleSideG(){
    this.showSideG=!this.showSideG
  }
// data:any
  // @Input()
  // data!: any[];
  constructor(private services:PopulationService,private chartService:ChartsServicesService){}
 

  AllData:any[]=[];
  AllValuesPopulation:any[]=[];

  avg:any;
  waterAvg:any;

  // Alltop5Data:any[]=[]

  country:any[]=[]
  population:any[]=[]

  AreaCountryName:any[]=[];
  AreaCountryValue:any[]=[];

  GDPCountryName:any[]=[];
  GDP:any[]=[];
  GDPGrowth:any[]=[];

  waterCountryName:any[]=[];
  waterResourceKm:any[]=[]
  waterPercent:any[]=[];

  chartOptions!:Options;
  AllTop5GDP!:Options;
  AllTop5Water!:Options;

  Top5Population!:Options;
  Top5Area!:Options;
  Top5GDP!:Options;
  Top5GDP_Growth!:Options;
  Top5WaterKM!:Options;
  Top5WaterPr!:Options;

  // GDPpipeChart!:Chart;
  // WaterpipeChart!:Chart;

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

  // displayArrayOnTime() {
  //   setTimeout(() => {
  //     this.AllData
  //   }, 500);
  // }

 ngOnInit(): void {
  // this.displayArrayOnTime()
  // if(this.AllData.length===0){
  //   this.AllData.splice(0,0)

  // }
  
  
  console.log(typeof(this.AllData));
  
  this.all()
  


 }

//   onClick() {  
//     let newData1:any = ["eg", 5];  
//     let newData2:any = ["kg", 55];  
//     let newData3:any = ["ru", 555];  
  
//     // console.log(...(this.chartOptions.series[0] as any).data);  
//     this.chartOptions = {  
//         title: {    
//         text: "updated"    
//         },    
//         series: [{  
//             type: "map",  
//             data: [  
//                 // ...(this.chartOptions.series[0] as any).data,  
  
//                 // ["eg", 555],    
//                 // ["kg", 555],    
//                 // ["np", 555] ,   
//                 newData1,  
//                 newData2,  
//                 newData3  
//             ]  
//         }]  
//     };  
  
//     this.updateFlag = true;  
// }  

africa(){

  this.services.get().subscribe(item=>{
    console.log('africa',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="Africa")
    console.log('data',data);
    this.AllData = data
    console.log('af',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "updated"    
      },    
      series: [{  
          type: "map", 
          data:this.AllValuesPopulation 
            
      }]  
    };  
    this.getAllServices()
    this.updateFlag = true;  
    
  })
    
    this.chartOptions = {  
        title: {    
        text: "updated"    
        },    
        series: [{  
            type: "map", 
            data:this.AllValuesPopulation 
              
        }]  
    }; 
    this.updateFlag = true;  
}

asia(){

  this.services.get().subscribe(item=>{
    console.log('Asia',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="Asia")
    console.log('data',data);
    this.AllData = data
    console.log('Asia',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "Asia"    
      },    
      series: [{  
          type: "map",  
          data:this.AllValuesPopulation 
      }]  
    };  
    this.getAllServices()
  })
  
    this.chartOptions = {  
        title: {    
        text: "Asia"    
        },    
        series: [{  
            type: "map",  
            data:this.AllValuesPopulation 
        }]  
    };  
    this.updateFlag = true;  
}

europe(){

  this.services.get().subscribe(item=>{
    console.log('Europe',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="Europe")
    console.log('data',data);
    this.AllData = data
    console.log('Europe',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "Europe"    
      },    
      series: [{  
          type: "map",  
          data:this.AllValuesPopulation 
      }]  
    };  
    this.getAllServices()
  })
  
    this.chartOptions = {  
        title: {    
        text: "Europe"    
        },    
        series: [{  
            type: "map",  
            data:this.AllValuesPopulation 
        }]  
    };  
    this.updateFlag = true;  
}

northAmerica(){
  this.services.get().subscribe(item=>{
    console.log('North America',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="North America")
    console.log('data',data);
    this.AllData = data
    console.log('North America',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "North America"    
      },    
      series: [{  
          type: "map",  
          data:this.AllValuesPopulation 
          
      }]  
    };  
    this.getAllServices()
  })

  this.chartOptions = {  
    title: {    
    text: "North America"    
    },    
    series: [{  
        type: "map",  
        data:this.AllValuesPopulation 
        
    }]  
  };  
  this.updateFlag = true;  
}

southAmerica(){
  this.services.get().subscribe(item=>{
    console.log('South America',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="South America")
    console.log('data',data);
    this.AllData = data
    console.log('South America',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "South America"    
      },    
      series: [{  
          type: "map",  
          data:this.AllValuesPopulation 
           
      }]  
    }; 
    this.getAllServices()
  })
  this.chartOptions = {  
    title: {    
    text: "South America"    
    },    
    series: [{  
        type: "map",  
        data:this.AllValuesPopulation 
         
    }]  
  }; 
  this.updateFlag = true;  
}

oceania(){
  this.services.get().subscribe(item=>{
    console.log('Oceania',item);
    const worldData:any[] = item
    console.log(worldData);
    const data = worldData.filter(item=>item.Continent==="Oceania")
    console.log('data',data);
    this.AllData = data
    console.log('Oceania',this.AllData);
    
    this.getAllData()
    this.chartOptions = {  
      title: {    
      text: "Oceania"    
      },    
      series: [{  
          type: "map",  
          data:this.AllValuesPopulation 
          
      }]  
    };  
    this.getAllServices()
  })
  this.chartOptions = {  
    title: {    
    text: "Oceania"    
    },    
    series: [{  
        type: "map",  
        data:this.AllValuesPopulation 
        
    }]  
  };  
this.updateFlag = true;  
}

// antarctica(){
//   this.chartOptions = {  
//     title: {    
//     text: "South America"    
//     },    
//     series: [{  
//         type: "map",  
//         data: [  
//           ['aq', 10], 
//         ]  
//     }]  
// };  

// this.updateFlag = true; 
// }

all(){
  this.services.get().subscribe(items=>{
    console.log('data',items);
    //get all data in array
    this.AllData = items
    console.log(items.length);
    this.getAllData()
    this.chartOptions= {  
    chart: {  
      // backgroundColor:'#0e1c2f',
    backgroundColor: '#061325',

        map: worldMap as any  
    },  
    title: {  
        text: "World population Map",
        style: {
          color: '#FF0000', // Set the color of the title text
        },  
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
        
        min: 801,
        max: 1439323776,
        type: 'linear',
        minColor: '#535579', // Change the default color for the lowest value
        maxColor: '#C20000',
        // maxColor: 'white',

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
        lineWidth: 1, 
        states: {  
            hover: {  
                color: "#7CB9E8"  ,
                // lineWidthPlus: 0
            }  
        },  
        dataLabels: {  
            enabled: true,  
            format: "{point.name}"  
        },  
        allAreas: false,  
        data:this.AllValuesPopulation
        
    }]  

    }; 
    this.getAllServices()
    this.updateFlag = true;  

  })
  
  this.chartOptions= {  
    chart: {  
      // backgroundColor:'black',

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
        // dataClasses: [{  
        //     to: 25,  
        //     color: '#922291'  
        // }, {  
        //     from: 26,  
        //     to: 50,  
        //     color: '#c893c7'  
        // }, {  
        //     from: 51,  
        //     to: 75,  
        //     color: '#00a2ad'  
        // }, {  
        //     from: 76,  
        //     to: 100,  
        //     color: '#7fd0d6'  
        // }],  
        // type: 'linear',  
        min:0
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
        data:this.AllValuesPopulation
        // data.push(...a)
        // data: [  
        //     ["fo", 0],  
        //     ["um", 1],  
        //     ["us", 2],  
        //     ["jp", 3],  
        //     ["sc", 4],  
        //     ["in", 5],  
        //     ["fr", 6],  
        //     ["fm", 7],  
        //     ["cn", 8],  
        //     ["pt", 9],  
        //     ["sw", 10],  
        //     ["sh", 11],  
        //     ["br", 12],  
        //     ["ki", 13],  
        //     ["ph", 14],  
        //     ["mx", 15],  
        //     ["es", 16],  
        //     ["bu", 17],  
        //     ["mv", 18],  
        //     ["sp", 19],  
        //     ["gb", 20],  
        //     ["gr", 21],  
        //     ["as", 22],  
        //     ["dk", 23],  
        //     ["gl", 24],  
        //     ["gu", 25],  
        //     ["mp", 26],  
        //     ["pr", 27],  
        //     ["vi", 28],  
        //     ["ca", 29],  
        //     ["st", 30],  
        //     ["cv", 31],  
        //     ["dm", 32],  
        //     ["nl", 33],  
        //     ["jm", 34],  
        //     ["ws", 35],  
        //     ["om", 36],  
        //     ["vc", 37],  
        //     ["tr", 38],  
        //     ["bd", 39],  
        //     ["lc", 40],  
        //     ["nr", 41],  
        //     ["no", 42],  
        //     ["kn", 43],  
        //     ["bh", 44],  
        //     ["to", 45],  
        //     ["fi", 46],  
        //     ["id", 47],  
        //     ["mu", 48],  
        //     ["se", 49],  
        //     ["tt", 50],  
        //     ["my", 51],  
        //     ["pa", 52],  
        //     ["pw", 53],  
        //     ["tv", 54],  
        //     ["mh", 55],  
        //     ["cl", 56],  
        //     ["th", 57],  
        //     ["gd", 58],  
        //     ["ee", 59],  
        //     ["ag", 60],  
        //     ["tw", 61],  
        //     ["bb", 62],  
        //     ["it", 63],  
        //     ["mt", 64],  
        //     ["vu", 65],  
        //     ["sg", 66],  
        //     ["cy", 67],  
        //     ["lk", 68],  
        //     ["km", 69],  
        //     ["fj", 70],  
        //     ["ru", 71],  
        //     ["va", 72],  
        //     ["sm", 73],  
        //     ["kz", 74],  
        //     ["az", 75],  
        //     ["tj", 76],  
        //     ["ls", 77],  
        //     ["uz", 78],  
        //     ["ma", 79],  
        //     ["co", 80],  
        //     ["tl", 81],  
        //     ["tz", 82],  
        //     ["ar", 83],  
        //     ["sa", 84],  
        //     ["pk", 85],  
        //     ["ye", 86],  
        //     ["ae", 87],  
        //     ["ke", 88],  
        //     ["pe", 89],  
        //     ["do", 90],  
        //     ["ht", 91],  
        //     ["pg", 92],  
        //     ["ao", 93],  
        //     ["kh", 94],  
        //     ["vn", 95],  
        //     ["mz", 96],  
        //     ["cr", 97],  
        //     ["bj", 98],  
        //     ["ng", 99],  
        //     ["ir", 100],  
        //     ["sv", 101],  
        //     ["sl", 102],  
        //     ["gw", 103],  
        //     ["hr", 104],  
        //     ["bz", 105],  
        //     ["za", 106],  
        //     ["cf", 107],  
        //     ["sd", 108],  
        //     ["cd", 109],  
        //     ["kw", 110],  
        //     ["de", 111],  
        //     ["be", 112],  
        //     ["ie", 113],  
        //     ["kp", 114],  
        //     ["kr", 115],  
        //     ["gy", 116],  
        //     ["hn", 117],  
        //     ["mm", 118],  
        //     ["ga", 119],  
        //     ["gq", 120],  
        //     ["ni", 121],  
        //     ["lv", 122],  
        //     ["ug", 123],  
        //     ["mw", 124],  
        //     ["am", 125],  
        //     ["sx", 126],  
        //     ["tm", 127],  
        //     ["zm", 128],  
        //     ["nc", 129],  
        //     ["mr", 130],  
        //     ["dz", 131],  
        //     ["lt", 132],  
        //     ["et", 133],  
        //     ["er", 134],  
        //     ["gh", 135],  
        //     ["si", 136],  
        //     ["gt", 137],  
        //     ["ba", 138],  
        //     ["jo", 139],  
        //     ["sy", 140],  
        //     ["mc", 141],  
        //     ["al", 142],  
        //     ["uy", 143],  
        //     ["cnm", 144],  
        //     ["mn", 145],  
        //     ["rw", 146],  
        //     ["so", 147],  
        //     ["bo", 148],  
        //     ["cm", 149],  
        //     ["cg", 150],  
        //     ["eh", 151],  
        //     ["rs", 152],  
        //     ["me", 153],  
        //     ["tg", 154],  
        //     ["la", 155],  
        //     // [d[0],d[1]],
        //     ["af", 156], 
        //     // ["af", 38928346], 
        //     ["ua", 157],  
        //     ["sk", 158],  
        //     ["jk", 159],  
        //     ["bg", 160],  
        //     ["qa", 161],  
        //     ["li", 162],  
        //     ["at", 163],  
        //     ["sz", 164],  
        //     ["hu", 165],  
        //     ["ro", 166],  
        //     ["ne", 167],  
        //     ["lu", 168],  
        //     ["ad", 169],  
        //     ["ci", 170],  
        //     ["lr", 171],  
        //     ["bn", 172],  
        //     ["iq", 173],  
        //     ["ge", 174],  
        //     ["gm", 175],  
        //     ["ch", 176],  
        //     ["td", 177],  
        //     ["kv", 178],  
        //     ["lb", 179],  
        //     ["dj", 180],  
        //     ["bi", 181],  
        //     ["sr", 182],  
        //     ["il", 183],  
        //     ["ml", 184],  
        //     ["sn", 185],  
        //     ["gn", 186],  
        //     ["zw", 187],  
        //     ["pl", 188],  
        //     ["mk", 189],  
        //     ["py", 190],  
        //     ["by", 191],  
        //     ["cz", 192],  
        //     ["bf", 193],  
        //     ["na", 194],  
        //     ["ly", 195],  
        //     ["tn", 196],  
        //     ["bt", 197],  
        //     ["md", 198],  
        //     ["ss", 199],  
        //     ["bw", 200],  
        //     ["bs", 201],  
        //     ["nz", 202],  
        //     ["cu", 203],  
        //     ["ec", 204],  
        //     ["au", 205],  
        //     ["ve", 206],  
        //     ["sb", 207],  
        //     ["mg", 208],  
        //     ["is", 209],  
        //     ["eg", 210],  
        //     ["kg", 211],  
        //     ["np", 212]  
        // ]  
    }]  

  }; 
  this.updateFlag = true;   
}

  getDataByCountryKey(ckey: any) {  
      console.log('CountryKey:' + ckey);  
  }  

getAllData(){
   // get code value and population 
    // console.log(this.data1.map((item) => [item.Code_Value, item.Population]));
    this.AllValuesPopulation=this.AllData.map((item) => [item.Code_Value, item.Population])
    console.log(this.AllValuesPopulation);

    // const alldata = items;
    // const ArrayData = [...alldata];
    

    // decreasing ---get top 5 country population
    this.AllData.sort((a,b)=> b.Population - a.Population);
  
    console.log('low',this.AllData.sort((a,b)=> b.Population - a.Population));
    
    console.log(this.AllData.slice(0,5));
    const topData=this.AllData.slice(0,5)
    

    this.country = topData.map((item)=>item.Country)
    console.log(this.country);
    console.log(topData.map((item)=>[item.Country,item.Population]));
    
    this.population=topData.map((item)=>[item.Country,item.Population])
    // this.population = topData.map((item)=>item.Population)
    console.log(this.population);
    
    // decreasing ---get top5 country area wise
    this.AllData.sort((a,b)=>b.Land_Area - a.Land_Area)
    console.log(this.AllData.slice(0,5));
    const topArea = this.AllData.slice(0,5)

    this.AreaCountryName = topArea.map((item)=>item.Country)
    console.log(this.AreaCountryName);
    
    this.AreaCountryValue=topArea.map((item)=>[item.Country,item.Land_Area])
    // this.AreaCountryValue=topArea.map((item)=>item.Land_Area)
    console.log(this.AreaCountryValue);


    // decreasing --get top 5 country GDP wise
    this.AllData.sort((a,b)=>b.GDP - a.GDP)
    console.log(this.AllData.slice(0,5));
    const topGDP = this.AllData.slice(0,5);

    this.GDPCountryName = topGDP.map((item)=>item.Country)
    console.log(this.GDPCountryName );
    
    this.GDP=topGDP.map((item)=>item.GDP)
    console.log(this.GDP);
    
    this.GDPGrowth = topGDP.map((item)=>item.GDP_growth*100)
    console.log(this.GDPGrowth);

    const Top5avg = topGDP.reduce((total,item)=>total + item.GDP,0)
    const TotalGDP  = this.AllData.reduce((total,item)=>total + item.GDP,0)

    console.log('avg',Top5avg/TotalGDP);
    
    this.avg = (Top5avg/TotalGDP)*100;

    console.log(this.avg);
    

    // decreasing --get top 5 country for water resources
    this.AllData.sort((a,b)=>b.Water_km - a.Water_km)
    const topWater =  this.AllData.slice(0,5);
    this.waterCountryName = topWater.map((item)=> item.Country )
    this.waterResourceKm = topWater.map((item)=> item.Water_km )
    this.waterPercent = topWater.map((item=>item.Water_pr))

    const Top5waterAvg =  topWater.reduce((total,item)=>total + item.Water_km,0)
    console.log(Top5waterAvg);
    const TotalWtaer  = this.AllData.reduce((total,item)=>total + item.Water_km,0)
    
    this.waterAvg=(Top5waterAvg/TotalWtaer)*100
    console.log(this.waterAvg);
}

getAllServices(){
  this.Top5Population = this.chartService.generateTop5Population(this.country,this.population)



  this.Top5Area = this.chartService.generateTop5Area(this.AreaCountryName,this.AreaCountryValue)



  this.Top5GDP = this.chartService.generateTop5GDP(this.GDPCountryName,this.GDP)
 


  this.Top5GDP_Growth = this.chartService.generateTopGDPGrowth(this.GDPCountryName,this.GDPGrowth)



  this.Top5WaterKM = this.chartService.generateTop5WaterKM(this.waterCountryName,this.waterResourceKm)
 


  this.Top5WaterPr = this.chartService.generateTop5WaterPr(this.waterCountryName,this.waterPercent)

  

  this.AllTop5GDP=this.chartService.generateAllTop5GDP(this.avg )

 

  this.AllTop5Water =this.chartService.generateAllTop5Water(this.waterAvg)
}

}
