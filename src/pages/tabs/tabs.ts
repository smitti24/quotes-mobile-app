import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  template:`
    <ion-tabs selectedIndex="1">
      <ion-tab [root]="favouritesPage" tabTitle="Favourites" tabIcon="star"></ion-tab>
      <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs>
  `
})
export class TabsPage {
  favouritesPage =  FavouritesPage;
  libraryPage = LibraryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
