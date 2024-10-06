import { Injectable } from '@angular/core';

@Injectable()
export class SonLlatzer {
    getData() {
        return [
            {
                itemImageSrc: '/images/son_llatzer/sonllatzer1.JPG',
                thumbnailImageSrc: '/images/son_llatzer/sonllatzer1s.jpg',
                alt: 'Hospital sonllatzer mallorca',
                title: 'Sonllatzer1'
            },
            {
                itemImageSrc: '/images/son_llatzer/sonllatzer2.JPG',
                thumbnailImageSrc: '/images/son_llatzer/sonllatzer2s.jpg',
                alt: 'Hospital sonllatzer mallorca',
                title: 'Sonllatzer2'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};