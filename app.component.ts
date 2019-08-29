import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openweather';

  // variables that will hold server data 
  // cities rated best global cities one color 
  // cities rated destinations for 2026 world cup another color
  // cities for both (only a couple) a different color
  // legend
  houston_data;
  cali_data;

  liverpool_data;
  mexico_city_data;
  porto_alegre_data;
  london_data;
  rio_de_janeiro_data;
  montevideo_data;
  madrid_data;
  milan_data;
  buenos_aires_data;
  sao_paulo_data;

  // our HttpClient Object that is constructed here is called http 
  constructor(public http: HttpClient){
    // liverpool
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=2644210&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((liv_data) => {
      console.log(liv_data)
      this.liverpool_data = liv_data;
    }, (err) => {console.error(err)
    })

    // mexico city
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3530597&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((mxcty_data) => {
      console.log(mxcty_data)
      this.mexico_city_data = mxcty_data;
    }, (err) => {console.error(err)
    })

     // porto alegre
     this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3452925&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
     .subscribe((porale_data) => {
       console.log(porale_data)
       this.porto_alegre_data = porale_data;
     }, (err) => {console.error(err)
     })

      // london data
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=2643743&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((lndn_data) => {
      console.log(lndn_data)
      this.london_data = lndn_data;
    }, (err) => {console.error(err)
    })

     // rio de janeiro
     this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3451190&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
     .subscribe((riodej_data) => {
       console.log(riodej_data)
       this.rio_de_janeiro_data = riodej_data;;
     }, (err) => {console.error(err)
     })

      // montevideo
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3441575&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((monvid_data) => {
      console.log(monvid_data)
      this.montevideo_data = monvid_data;
    }, (err) => {console.error(err)
    })

     // madrid
     this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3117735&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
     .subscribe((mdrd_data) => {
       console.log(mdrd_data)
       this.madrid_data = mdrd_data;
     }, (err) => {console.error(err)
     })

      // milan
    this.http.get('https://api.openweathermap.org/data/2.5/weather?id=6542283&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
    .subscribe((mil_data) => {
      console.log(mil_data)
      this.milan_data = mil_data;
    }, (err) => {console.error(err)
    })

     // buenos aires
     this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3435910&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
     .subscribe((bueair_data) => {
       console.log(bueair_data)
       this.buenos_aires_data = bueair_data;
     }, (err) => {console.error(err)
     })

     // sao paulo 
     this.http.get('https://api.openweathermap.org/data/2.5/weather?id=3448439&units=imperial&APPID=4e28d51992b0332264a6fdc6011d6d71')
     .subscribe((saopau_data) => {
       console.log(saopau_data)
       this.sao_paulo_data = saopau_data;
     }, (err) => {console.error(err)
     })


  }


}
