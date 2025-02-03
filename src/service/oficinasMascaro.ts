import { Injectable } from '@angular/core';

@Injectable()
export class oficinasMascaro {
    getData() {
        return [
            {
                itemImageSrc: 'images/mascaro/mascaro1.jpg',
                thumbnailImageSrc: 'images/mascaro/mascaro1 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};