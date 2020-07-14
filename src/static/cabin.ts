import { SliderInterface } from '../redux/pages/types';
import { CarouselCardTextItem } from '../components/base_component/Carousel/CarouselCardText';
import { CarouselTextItem } from '../components/base_component/Carousel/CarouselText';
import { CarouselThreeItem } from '../components/base_component/Carousel/CarouselThree';

export type CabinProps = {
    slider: SliderInterface,
    carousel_card_text: CarouselCardTextItem[],
    carousel_text: CarouselTextItem[],
    carousel_three: {
        caption?: string | null,
        heading: string,
        data: CarouselThreeItem[],
    }
};

const staticCabin: CabinProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/2.png'),
        text: 'the cabins', 
    }],
    carousel_card_text: [{
        id: 0,
        caption: 'presidential suite 1',
        heading: 'Zheng He',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        images: require('../assets/img/CarouselCard/2.png')
    },{
        id: 1,
        caption: 'presidential suite 2',
        heading: 'Zheng He',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        images: require('../assets/img/CarouselCard/1.png')
    }],
    carousel_text: [{
        id: 1,
        image: require('../assets/img/home/carousel-text/1.png'),
        caption: "Cabin 1",
        heading: "Carousel Text 1",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ]
    },{
        id: 2,
        image: require('../assets/img/home/carousel-text/1.png'),
        caption: "Cabin 2",
        heading: "Carousel Text 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ]
    },{
        id: 3,
        image: require('../assets/img/home/carousel-text/1.png'),
        caption: "Cabin 2",
        heading: "Carousel Text 2",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ]
    }],
    carousel_three: {
        caption: 'Delux Suite',
        heading: 'Lorem ipsum dolor',
        data: [{
            id: 0,
            heading: 'Ibn Battuta',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/1.png'),
            buttonTitle: 'Discover More',
            linkTo: '#',
        },{
            id: 1,
            heading: 'Marco Polo',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/2.png'),
            buttonTitle: 'Discover More',
            linkTo: '#',
        },{
            id: 2,
            heading: 'James Cook',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/3.png'),
            buttonTitle: 'discover more',
            linkTo: '#',
        },{
            id: 3,
            heading: 'James Cook',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/4.png'),
            buttonTitle: 'discover more',
            linkTo: '#',
        }]
    }
};

export default staticCabin;
