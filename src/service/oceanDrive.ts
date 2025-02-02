import { Injectable } from '@angular/core';

@Injectable()
export class OceanDrive {
    getData() {
        return [
            {
            itemImageSrc: 'images/ocean_drive/DSC06800.jpg',
                thumbnailImageSrc: 'images/ocean_drive/DSC06800 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/ocean_drive/DSC06808.jpg',
                thumbnailImageSrc: 'images/ocean_drive/DSC06808 (Thumbnail).jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/ocean_drive/DSC06817.jpg',
                thumbnailImageSrc: 'images/ocean_drive/DSC06817 (Thumbnail).jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};