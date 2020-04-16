import { Component, OnInit } from '@angular/core';
import { bitcoinService } from '../../services/bitcoins.service';
import * as moment from 'moment';
@Component({
  selector: 'charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  title = null;
  type = 'AreaChart';
  data = [];
  columnNames = ['Date', 'USD'];
  options = { };
  width = 550;
  height = 400;
  constructor(private bitcoinService: bitcoinService ) { }

  ngOnInit(): void {
    this.bitcoinService.getCharts()
    .then(chart =>{
      this.title = chart.description;
       var newChart = chart.values.map(value => {
        var currX = moment(value.x*1000).format('YYYY-MM-DD');
        return value =[currX ,value.y]; 
      });
      this.data = newChart;
    }) 
  }
}
