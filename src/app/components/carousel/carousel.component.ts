import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

const fadeIn = animation([
	style({ opacity: 0 }),
	animate('{{time}}', style({ opacity: 1 }))
]);

const fadeOut = animation([
	animate('{{time}}', style({ opacity: 0 }))
]);

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	animations: [
		trigger('carouselAnimation', [
			transition('void => *', [useAnimation(fadeIn, { params: { time: '750ms' } })]),
			transition('* => void', [useAnimation(fadeOut, { params: { time: '750ms' } })])
		])
	],
	encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

	@Input() isMobileDisabled = false;

	currentSlide = 0;

	slides = [
		// tslint:disable-next-line:max-line-length
		{ image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
		// tslint:disable-next-line:max-line-length
		{ image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1393&q=80' },
		// tslint:disable-next-line:max-line-length
		{ image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }
	];

	constructor() {
	}

	ngOnInit() {
		setInterval(() => {
			this.onNextClick();
		}, 4000);
	}

	onPreviousClick() {
		const previous = (this.currentSlide - 1);

		this.currentSlide = (previous < 0)
			? this.slides.length - 1
			: previous;
	}

	onNextClick() {
		const next = (this.currentSlide + 1);

		this.currentSlide = (next === this.slides.length)
			? 0
			: next;
	}

}
