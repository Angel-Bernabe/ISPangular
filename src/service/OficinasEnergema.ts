import { Injectable } from '@angular/core';

@Injectable()
export class oficinasEnergema {
    getData() {
        return [
            {
                itemImageSrc: 'images/energema/IMG_0588.jpg',
                thumbnailImageSrc: 'images/energema/IMG_0588 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/energema/IMG_0590.jpg',
                thumbnailImageSrc: 'images/energema/IMG_0590 (Thumbnail).jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};