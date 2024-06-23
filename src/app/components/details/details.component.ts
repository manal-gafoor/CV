import { Component, Input } from '@angular/core';
import { statusDetails, languageDetails, contactDetails } from './boilerplate';

@Component({
  selector: 'contact-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  status = statusDetails;
  languages = languageDetails;
  contact = contactDetails;
}
