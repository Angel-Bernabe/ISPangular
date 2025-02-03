import { Injectable } from '@angular/core';

@Injectable()
export class SixSenses {
    getData() {
        return [
            {
                itemImageSrc: 'images/six_senses/IMG_6379.jpg',
                thumbnailImageSrc: 'images/six_senses/IMG_6379 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/six_senses/IMG_6386.jpg',
                thumbnailImageSrc: 'images/six_senses/IMG_6386 (Thumbnail).jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/six_senses/sixsenses1.jpg',
                thumbnailImageSrc: 'images/six_senses/sixsenses1 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};