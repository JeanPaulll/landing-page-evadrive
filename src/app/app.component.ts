import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

    public titulo: string = 'Wallace Miller';
    public click: number = 0;

    constructor() {
        console.log('constructor chamou');
    }

    public adicioarItem(): void {
        this.click = this.click + 1;
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit chamou');
        // $('.mobile-slider').owlCarousel({
        //     loop: true,
        //     nav: true,
        //     dots: false,
        //     items: 1,
        //     autoplay: true,
        //     autoplayTimeout: 4000,
        //     autoplayHoverPause: true,
        //     margin: 0,
        //     mouseDrag: false,
        //     touchDrag: false,
        // });
        // let owlC = $('.mobile-slider');
        // owlC.owlCarousel();
    }

    public goHome(): boolean {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    }

    ngOnInit(): void {
        console.log('ngOnInit chamou');
    }

}
