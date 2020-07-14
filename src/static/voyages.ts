import { SliderItem } from "../components/base_component/Slider/SliderAwesome/SliderAwesome";
import { CarouselThreeItem } from "../components/base_component/Carousel/CarouselThree";
import { CarouselCardTextItem } from "../components/base_component/Carousel/CarouselCardText";

export type VoyagesProps = {
    slider: SliderItem[],
    carousel_three: {
        caption?: string | null,
        heading: string,
        data: CarouselThreeItem[],
    },
    carousel_card_text: CarouselCardTextItem[],
};

const staticVoyages: VoyagesProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/8.png'),
        text: 'Voyages'
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
        images: require('../assets/img/CarouselCard/3.png'),
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
        images: require('../assets/img/CarouselCard/3.png'),
        linkTo: '#',
    }],
}

export default staticVoyages;