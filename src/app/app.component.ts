import { Component} from '@angular/core';
import {Content, Projects} from './interaceCP';
import codata from '../assets/data/content.json';
import prodata from '../assets/data/project.json';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Portfolio_DoheeKim';
  content: Content = codata.ContentInfo;
  projects: Projects[] = prodata.projects;
  darkMode : boolean = false;
  
  onCheckbox(event: MatCheckboxChange) {
    this.darkMode = event.checked;
  }

}
