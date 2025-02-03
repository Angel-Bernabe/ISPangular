import { Injectable } from '@angular/core';

@Injectable()
export class sonVida {
    getData() {
        return [
            {
                itemImageSrc: 'images/son_vida/sonvida1.png',
                thumbnailImageSrc: 'images/son_vida/sonvida1 (Thumbnail).png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/son_vida/sonvida2.png',
                thumbnailImageSrc: 'images/son_vida/sonvida2 (Thumbnail).png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/son_vida/sonvida3.png',
                thumbnailImageSrc: 'images/son_vida/sonvida3 (Thumbnail).png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};