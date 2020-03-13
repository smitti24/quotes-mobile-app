import { Quote } from "../data/quote.interface";

export class QuotesService{
    private favouriteQuotes:Quote[] = [];

    addQuoteToFavourites(quote: Quote){
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    }

    removeQuoteFromFavourites(quote: Quote){
        //To get the position of the quote in the array we want to remove.
        //findIndex expects to get an function as an argument. 
        const position = this.favouriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });

        this.favouriteQuotes.splice(position, 1);
        console.log(this.favouriteQuotes);
    }

    //Gives us back the array. Slice => Creates a copy of the array.
    //Copied in order to not directly edit the favouriteQuotes array.
    getFavouriteQuotes(){
        return this.favouriteQuotes.slice();
    }

    isQuoteFavourite(quote: Quote){
        return this.favouriteQuotes.find((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
    }
}