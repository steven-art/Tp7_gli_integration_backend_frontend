import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { from } from 'rxjs';
import { FilterCardPipePipe } from './filter-card--pipe.pipe';

@NgModule({
  declarations: [AppComponent, MyCardComponent, FilterCardPipePipe],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
