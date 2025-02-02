import { Injectable } from '@angular/core';

@Injectable()
export class SesEstaques {
    getData() {
        return [
            {
                itemImageSrc: 'images/ses_estaques/sesestaques1.jpg',
                thumbnailImageSrc: 'images/ses_estaques/sesestaques1 (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/ses_estaques/DJI_20241115034116_0238_D.JPG',
                thumbnailImageSrc: 'images/ses_estaques/DJI_20241115034116_0238_D (Thumbnail).JPG',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/ses_estaques/DJI_20241115034043_0235_D.JPG',
                thumbnailImageSrc: 'images/ses_estaques/DJI_20241115034043_0235_D (Thumbnail).JPG',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};