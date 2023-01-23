import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>`,
  styles: [`h1 { white-space: nowrap; }`]
})
export class AppComponent {
  public title: string = 'Minimal Angular';
}

@NgModule({
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule).catch(error => console.error(error));
