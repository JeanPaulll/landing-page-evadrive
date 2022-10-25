import {AfterViewInit, Component} from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        $('.mobile-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            margin: 0,
            mouseDrag: false,
            touchDrag: false,
        });
        let owlC = $('.mobile-slider');
        owlC.owlCarousel();
    }

    public goHome(): boolean {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    }
}
