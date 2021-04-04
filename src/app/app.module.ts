import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const CAROUSEL_MODULES = [
	BrowserAnimationsModule
];

@NgModule({
	declarations: [
		AppComponent,
		CarouselComponent
	],
	imports: [
		...CAROUSEL_MODULES,
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
