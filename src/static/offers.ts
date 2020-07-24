import { SliderItem } from "../components/base/Slider/SliderAwesome";
import { CardTextImageItem } from "../components/base/Card/CardTextImage/CardTextImage";
// import { CarouselCardTextItem } from "../components/base/Carousel/CarouselCardText";

export type OffersProps = {
    slider: SliderItem[],

    heading: string,
    text: string,
    image: string,

    card_text: CardTextImageItem[],
};

const staticOffers: OffersProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/11.png'),
        text: 'offers'
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
};

export default staticOffers;