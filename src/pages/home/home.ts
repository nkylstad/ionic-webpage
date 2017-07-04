import { 
  Component,
  HostListener 
} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  keyValue: string;
  backgroundColorClass: string;

  @HostListener('document:keypress', ['$event'])
  keypress(e: KeyboardEvent)
  {
    console.log('Key pressed! ' + e.key);
    this.keyValue = e.key;
    if (e.key == 'r'){
      this.backgroundColorClass = 'red';
    }
    if (e.key == 'g'){
      this.backgroundColorClass = 'green';
    }
    if (e.key == 'b'){
      this.backgroundColorClass = 'blue';
    }
  }

  constructor(public navCtrl: NavController) {
    this.keyValue = 'Test123';
    this.backgroundColorClass = "default";
  }

}
