import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CardTextImageSmallItem } from "../components/base_component/Card/CardTextImage/CardTextImageSmall";
import { CarouselThreeItem } from "../components/base_component/Carousel/CarouselThree";

export type CabinDetailProps = {
    slider: SliderItem[],
    caption?: string,
    heading: string,
    text: string,
    image: string,
    card_text_image_small: CardTextImageSmallItem[],
    carousel_three: {
        caption?: string | null,
        heading: string,
        data: CarouselThreeItem[],
    }
};

const staticCabinDetail: CabinDetailProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/1.png'),
        text: 'Zheng He Cabin'
    }],
    
    caption: 'presidential suite',
    heading: 'Lorem Dulur sit Amet',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/2.png'),

    card_text_image_small: [{
        id: 0,
        heading: 'Duis commodo',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/1.png')
    },{
        id: 1,
        heading: 'Aute culpa',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/2.png')
    }],

    carousel_three: {
        caption: 'Gallery',
        heading: 'Excertation Commodo',
        data: [{
            id: 0,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/1.png'),
        },{
            id: 1,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/2.png'),
        },{
            id: 2,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/3.png'),
        },{
            id: 3,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/2.png'),
        }]
    }
}

export default staticCabinDetail;