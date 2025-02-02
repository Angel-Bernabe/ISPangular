import { Injectable } from '@angular/core';

@Injectable()
export class oficinaOracle {
    getData() {
        return [
            {
                itemImageSrc: 'images/oracle/IMG_7066.JPG',
                thumbnailImageSrc: 'images/oracle/IMG_7066 (Thumbnail).JPG',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/oracle/IMG_8688.JPG',
                thumbnailImageSrc: 'images/oracle/IMG_8688 (Thumbnail).JPG',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/oracle/IMG_8689.JPG',
                thumbnailImageSrc: 'images/oracle/IMG_8689 (Thumbnail).JPG',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};