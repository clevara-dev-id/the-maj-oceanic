import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CardTextImageRLItem } from "../components/base_component/Card/CardTextImage/CardTextImageRL";
import { CarouselCardTextItem } from "../components/base_component/Carousel/CarouselCardText";

export type OffersProps = {
    slider: SliderItem[],

    heading: string,
    text: string,
    image: string,

    card_text: CardTextImageRLItem[],

    carousel_card_text: CarouselCardTextItem[],
};

const staticOffers: OffersProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/11.png'),
        text: 'occasions'
    }],
    heading: 'lorem ipsum dolor sit amet',
    text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
    image: require('../assets/img/LargeImages/6.png'),

    card_text: [{
        id: 0,
        heading: 'Exclusive Savings',
        text: 'Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure.',
        list: [
            'Luxury accomodation',
            'Booking confition apply',
        ],
        image: require('../assets/img/CardTextImage/4.png'),
        linkTo: '#',
    },{
        id: 1,
        heading: 'Exclusive Savings',
        text: 'Book in advance and enjoy great savings. It’s the perfect excuse for an unforgettable adventure.',
        list: [
            'Luxury accomodation',
            'Booking confition apply',
        ],
        image: require('../assets/img/CardTextImage/5.png'),
        linkTo: '#'
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
        images: require('../assets/img/CarouselCard/5.png'),
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
        images: require('../assets/img/CarouselCard/5.png'),
        linkTo: '#',
    }],
};

export default staticOffers;