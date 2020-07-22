import { SliderItem } from "../components/base/Slider/SliderAwesome";
import { CarouselCardTextItem } from "../components/base/Carousel/CarouselCardText";
import { CardTextImageSmallItem } from "../components/base/Card/CardTextImage/CardTextImageSmall";

export type OffersDetailProps = {
    slider: SliderItem[],

    heading: string;
    text: string;
    image: string;

    card_text_image_small: CardTextImageSmallItem[],
    
    carousel_card_text: CarouselCardTextItem[],
};

const staticOffersDetail: OffersDetailProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/11.png'),
        text: 'offers detail'
    }],

    heading: 'exclusive saving',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/7.png'),

    card_text_image_small: [{
        id: 0,
        heading: 'Duis commodo',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/3.png')
    }],

    carousel_card_text: [{
        id: 0,
        heading: 'Lorem ipsum dolor 1',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        image: require('../assets/img/CarouselCard/5.png'),
        linkTo: '#',
    },{
        id: 1,
        heading: 'Lorem ipsum dolor 2',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        image: require('../assets/img/CarouselCard/5.png'),
        linkTo: '#',
    }],
};

export default staticOffersDetail