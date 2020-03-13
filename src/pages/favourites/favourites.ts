import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  favouriteQuotes: Quote[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private favouriteService: QuotesService, private modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

  ionViewWillEnter(){
    this.favouriteQuotes = this.favouriteService.getFavouriteQuotes();
    console.log(this.favouriteQuotes);
  }

  presentModal(selectedQuote: Quote){
    console.log('Selected quote:', selectedQuote);
    const modal = this.modalCtrl.create(QuotePage, selectedQuote);

    modal.present();

    modal.onDidDismiss((remove: boolean) =>{
      if(remove){
        this.onUnFavourite(selectedQuote);
      }
    });
  }

  onUnFavourite(selectedQuote: Quote){
    this.favouriteService.removeQuoteFromFavourites(selectedQuote);
        const position = this.favouriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == selectedQuote.id;
        });
        this.favouriteQuotes.splice(position, 1);
  }

}



