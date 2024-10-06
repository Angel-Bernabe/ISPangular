import { Injectable } from '@angular/core';

@Injectable()
export class JuanedaMuro {
    getData() {
        return [
            {
                itemImageSrc: 'images/juaneda_muro/arquitectura.jpg',
                thumbnailImageSrc: 'images/juaneda_muro/arquitectura (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/juaneda_muro/IMG_0165.jpg',
                thumbnailImageSrc: 'images/juaneda_muro/IMG_0165 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};