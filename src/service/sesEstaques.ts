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
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};