import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './tabcomponents/about/about.component';
import { ProjectsComponent } from './tabcomponents/projects/projects.component';
import { ContactComponent } from './tabcomponents/contact/contact.component';

import { MatCardModule } from "@angular/material/card"; 
import { MatButtonModule } from "@angular/material/button"; 
import {MatCheckboxModule} from '@angular/material/checkbox';

import {Routes, RouterModule, RouterLink} from '@angular/router';
import {Content, Projects} from './interaceCP';
import codata from '../assets/data/content.json';

const content: Content = codata.ContentInfo;
const approutes: Routes = [
  {path: "", component: AboutComponent},
  {path: "about", component: AboutComponent, data:{codata}},
  {path: "projects", component: ProjectsComponent},
  {path: "contact", component: ContactComponent} ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,  
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule.forRoot(approutes),
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { 
  
}
