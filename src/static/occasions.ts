import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CardTextImageRLItem } from "../components/base_component/Card/CardTextImage/CardTextImageRL";

export type OccasionsProps = {
    slider: SliderItem[];
    heading: string;
    text: string;
    image: string;
    card_text_image: CardTextImageRLItem[],
};

const staticOccasions: OccasionsProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/10.png'),
        text: 'occasions'
    }],
    heading: 'lorem ipsum dolor sit amet',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/5.png'),
    card_text_image: [{
        id: 0,
        heading: 'Lorem enim id',
        text: 'Sit enim enim enim pariatur et esse nostrud. Labore anim amet do adipisicing velit quis. Mollit esse qui aliquip irure nulla velit. Ex fugiat ullamco eu veniam pariatur cillum cupidatat duis eu. Eiusmod esse pariatur cillum velit. Veniam pariatur fugiat ut aute enim nisi duis voluptate officia reprehenderit consectetur velit et exercitation.',
        image: require('../assets/img/CardTextImage/2.png'),
        linkTo: '#',
    },{
        id: 1,
        heading: 'Lorem enim id',
        text: 'Sit enim enim enim pariatur et esse nostrud. Labore anim amet do adipisicing velit quis. Mollit esse qui aliquip irure nulla velit. Ex fugiat ullamco eu veniam pariatur cillum cupidatat duis eu. Eiusmod esse pariatur cillum velit. Veniam pariatur fugiat ut aute enim nisi duis voluptate officia reprehenderit consectetur velit et exercitation.',
        image: require('../assets/img/CardTextImage/3.png'),
    }]
};

export default staticOccasions;