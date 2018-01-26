import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidExoplayer } from '@ionic-native/android-exoplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
    private _androidExoplayer: AndroidExoplayer) {

  }

  playExo(){
    this._androidExoplayer.show({url:"ttp://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"});
    console.log("Exos!!");
  }

}
