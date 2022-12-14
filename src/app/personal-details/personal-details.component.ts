import { Component, OnInit } from '@angular/core';
import { PersonalDetails } from '../models/personal-details';
import { FormDataService } from '../services/form-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  personalDetails: PersonalDetails;

  constructor(private formDataService: FormDataService) {
    this.personalDetails = formDataService.personalDetails;
  }

  ngOnInit() {
    /* TODO document why this method 'ngOnInit' is empty */
  }
}
