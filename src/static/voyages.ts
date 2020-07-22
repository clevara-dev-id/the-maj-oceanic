import { SliderItem } from "../components/base/Slider/SliderAwesome";
import { CarouselThreeItem } from "../components/base/Carousel/CarouselThree";
import { CarouselCardTextItem } from "../components/base/Carousel/CarouselCardText";

export type VoyagesProps = {
    slider: Array<SliderItem>,

    tabs: Array<{
        id: React.ReactText,
        label: string,
        heading?: string,
        text?: string,
        video?: any,
        image?: string,
    }>,

    carousel_three: {
        caption?: string | null,
        heading: string,
        data: Array<CarouselThreeItem>,
    },

    carousel_card_text: Array<CarouselCardTextItem>,
};

const staticVoyages: VoyagesProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/8.png'),
        text: 'Voyages'
    }],

    tabs: [{
        id: 0,
        label: 'Flores Sea',
        heading: 'lorem ipsum dolor sit amet (flores sea)',
        text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
        video: require('../assets/video/videoplayback.mp4'),
    },{
        id: 1,
        label: 'Raja Ampat',
        heading: 'lorem ipsum dolor sit amet (raja ampat)',
        text: 'Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.',
        video: require('../assets/video/videoplayback.mp4'),
    }],

    carousel_three: {
        caption: 'Gallery',
        heading: 'Excertation Commodo',
        data: [{
            id: 0,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/7.png'),
        },{
            id: 1,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/8.png'),
        },{
            id: 2,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/9.png'),
        },{
            id: 1,
            caption: 'Caption Text',
            image: require('../assets/img/CardThreeImage/8.png'),
        }]
    },

    carousel_card_text: [{
        id: 0,
        heading: 'Lorem ipsum dolor',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        image: require('../assets/img/CarouselCard/3.png'),
        linkTo: '#',
    },{
        id: 1,
        heading: 'Lorem ipsum dolor',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        image: require('../assets/img/CarouselCard/3.png'),
        linkTo: '#',
    }],
}

export default staticVoyages;