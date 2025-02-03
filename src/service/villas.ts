import { Injectable } from '@angular/core';

@Injectable()
export class villas {
    getData() {
        return [
            {
                itemImageSrc: 'images/villas/IMG_7361 2.jpg',
                thumbnailImageSrc: 'images/villas/IMG_7361 2 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/villas/IMG_9255.jpg',
                thumbnailImageSrc: 'images/villas/IMG_9255 (Thumbnail).jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/villas/IMG_7999.jpg',
                thumbnailImageSrc: 'images/villas/IMG_7999 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: 'images/villas/IMG_8003.jpg',
                thumbnailImageSrc: 'images/villas/IMG_8003 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 4'
            },
            {
                itemImageSrc: 'images/villas/IMG_8132.jpg',
                thumbnailImageSrc: 'images/villas/IMG_8132 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 5'
            },
            {
                itemImageSrc: 'images/villas/IMG_8972 2.jpg',
                thumbnailImageSrc: 'images/villas/IMG_8972 2 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 6'
            },
            {
                itemImageSrc: 'images/villas/IMG_9245.jpg',
                thumbnailImageSrc: 'images/villas/IMG_9245 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 7'
            },
            {
                itemImageSrc: 'images/villas/IMG_9247.jpg',
                thumbnailImageSrc: 'images/villas/IMG_9247 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 8'
            },
            {
                itemImageSrc: 'images/villas/IMG_9248.jpg',
                thumbnailImageSrc: 'images/villas/IMG_9248 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 9'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};