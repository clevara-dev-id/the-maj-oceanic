import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CardTextImageSmallProps } from "../components/base_component/Card/CardTextImage/CardTextImageSmall";

export type SustainabilityProps = {
    slider: SliderItem[],
    caption?: string,
    heading: string,
    text: string,
    image: string,
    card_text_image_small: CardTextImageSmallProps[],
}

const staticSustainability: SustainabilityProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/7.png'),
        text: 'Sustainability'
    }],
    caption: 'presidential suite',
    heading: 'Lorem Dulur sit Amet',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/3.png'),
    card_text_image_small: [{
        heading: 'Duis commodo',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/3.png')
    },{
        heading: 'Aute culpa',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/4.png')
    }],
};

export default staticSustainability;