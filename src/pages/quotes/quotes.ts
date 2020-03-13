import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string}[];

constructor(private navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService){

}


// ionViewDidLoad(){
//   this.quoteGroup = this.navParams.data;
// }

ngOnInit(){
  this.quoteGroup = this.navParams.data;
}

onAddToFavourite(selectedQuote: Quote){
  const alert = this.alertCtrl.create({
    title: 'Add Quote',
    message: 'Are you sure you want to add the quote?',
    buttons: [
      {
        text: 'NOPE',
        handler: () =>{
          this.quotesService.removeQuoteFromFavourites(selectedQuote);
        },
        role: 'cancel'

      },
      {
        text: 'Yebo Yes',
        handler: () =>{
          this.quotesService.addQuoteToFavourites(selectedQuote);
        }
      }
    ]
  });

  alert.present();
}

onAddRemoveFromFavourites(selectedQuote: Quote){
  this.quotesService.removeQuoteFromFavourites(selectedQuote);
}

isFavourite(selectedQuote: Quote){
  this.quotesService.isQuoteFavourite(selectedQuote);
}

}
