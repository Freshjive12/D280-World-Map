import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
import { AppComponent } from './app.component';
import { WorldComponent } from './components/world/world.component';
import { WorldInfoComponent } from './components/world-info/world-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    WorldInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
