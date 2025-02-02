import { Injectable } from '@angular/core';

@Injectable()
export class odGroup {
    getData() {
        return [
            {
                itemImageSrc: 'images/od_group/DSC06840.jpg',
                thumbnailImageSrc: 'images/od_group/DSC06840 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/od_group/DSC06846.jpg',
                thumbnailImageSrc: 'images/od_group/DSC06846 (Thumbnail).jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};