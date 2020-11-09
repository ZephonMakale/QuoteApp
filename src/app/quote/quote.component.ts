import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',"",new Date(2020,6,10)),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',"",new Date(2020,6,10)),
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',"",new Date(2020,6,10)),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
