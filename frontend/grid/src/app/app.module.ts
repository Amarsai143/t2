import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { RouterModule,  Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';



const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'head', component:HeadComponent },
  { path: 'other-page', component: OtherPageComponent },
  { path: 'grid', component: GridComponent },
  // Add this line for the new page
];
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    OtherPageComponent,
    HomeComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
