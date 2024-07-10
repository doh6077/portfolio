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

import {Routes, RouterModule} from '@angular/router';

const approutes: Routes = [
  {path: "about", component: AboutComponent},
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
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { 
  
}
