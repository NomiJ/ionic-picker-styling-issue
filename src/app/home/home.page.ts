import {Component, OnInit} from '@angular/core';
import {PickerController} from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public profileForm: FormGroup;

  public times = [{ text: 'Less than 1 year', value: 1 }, { text: 'Between 1 and 3 years', value: 2 }];
  constructor(public pickerCtrl: PickerController, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      times: [null, [Validators.required]],
    });
  }
  async showPicker() {
    const opts: PickerOptions = {
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Done',
        },
      ],
      columns: [{ name: 'time', options: this.times }],
    };
    const picker = await this.pickerCtrl.create(opts);
    await picker.present();
  }
}
