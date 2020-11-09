import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    // tslint:disable-next-line: whitespace
    new Quote(1, 'Zephon Makale', 'Steve Jobs', "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ",new Date(2020,6,10)),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'," Steve ", new Date(2020,6,10)),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', "Steve", new Date(2020,6,10)),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
