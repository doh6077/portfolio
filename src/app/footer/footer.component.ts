import { Component, Input, OnInit } from '@angular/core';
import {Content, Projects} from '../interaceCP';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  content: Content = {
    name: '',
    linkedIn: '',
    role: '',
    motto: '',
    image: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.content = data['content'];
    });
  }

}
