import { Injectable } from '@angular/core';

@Injectable()
export class oficinasSampol {
    getData() {
        return [
            {
                itemImageSrc: 'images/sampol/portadasampol.jpg',
                thumbnailImageSrc: 'images/sampol/portadasampol (Thumbnail).jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};