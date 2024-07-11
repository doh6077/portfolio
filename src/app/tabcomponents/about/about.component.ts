import { Component, Input, OnInit } from '@angular/core';
import {Content, Projects} from '../../interaceCP';

import { ActivatedRoute } from '@angular/router';
import codata from '../../../assets/data/content.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  content: Content = codata.ContentInfo;


  constructor(private route: ActivatedRoute) { }

  

}
