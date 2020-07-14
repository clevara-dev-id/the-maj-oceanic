import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CardTextImageSmallProps } from "../components/base_component/Card/CardTextImage/CardTextImageSmall";
import { CarouselCardTextItem } from "../components/base_component/Carousel/CarouselCardText";

export type DiningProps = {
    slider: SliderItem[],

    heading: string;
    text: string;
    image: string;
    
    card_text_image_small: CardTextImageSmallProps[],
    
    carousel_card_text: CarouselCardTextItem[],
};

const staticDining: DiningProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/9.png'),
        text: 'Dining'
    }],

    heading: 'lorem ipsum dolor sit amet',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/4.png'),

    card_text_image_small: [{
        heading: 'Lorem Ipsum doloer sit',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/5.png')
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
        images: require('../assets/img/CarouselCard/4.png'),
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
        images: require('../assets/img/CarouselCard/4.png'),
        linkTo: '#',
    }],
}

export default staticDining;