import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    // tslint:disable-next-line: whitespace
    new Quote(
      1,
      'Zephon Makale',
      'Steve Jobs',
      'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.” ',
      new Date(2020, 9, 11)
    ),
    new Quote(
      2,
      'Michael Jordan',
      'Kevin Hart',
      'Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.',
      new Date(2020, 6, 10)
    ),
  ];
  // tslint:disable-next-line: typedef
  addNewQuote(quote) {
    // tslint:disable-next-line: prefer-const
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  // tslint:disable-next-line: typedef
  deleteQuote(isComplete, index) {
    if (isComplete) {
      // tslint:disable-next-line: prefer-const
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].description}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  // tslint:disable-next-line: typedef
  upvote(index) {
    this.quotes[index].upvote++;
  }
  // tslint:disable-next-line: typedef
  downvote(index) {
    this.quotes[index].downvote++;
    // tslint:disable-next-line: no-trailing-whitespace
  }
  constructor() {}

  ngOnInit(): void {}
}
