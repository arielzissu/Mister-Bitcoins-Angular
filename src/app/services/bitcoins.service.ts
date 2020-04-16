import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class bitcoinService {

  constructor() { }

  async getRateBTC(price) {
    const rate = await axios(`https://blockchain.info/tobtc?currency=USD&value=${price}`);
    return rate.data;
  }
  
  async getCharts() {
    let rate = localStorage.getItem('RATE')
    if (!rate){
      console.log('data mining...');
      const rate = await axios(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
      localStorage.setItem('RATE', JSON.stringify(rate.data))
      return rate.data;
    }
    rate = JSON.parse(rate)
    return rate;
  }
}
