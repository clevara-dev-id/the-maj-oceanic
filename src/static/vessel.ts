import { SliderInterface } from "../redux/pages/types";
import { CarouselThreeItem } from '../components/base_component/Carousel/CarouselThree';
import { CarouselCardTextItem } from "../components/base_component/Carousel/CarouselCardText";


export interface VesselProps {
    slider: SliderInterface;
    heading: string;
    text: string;
    images: string;
    carousel_three: {
        caption?: string | null,
        heading: string,
        data: CarouselThreeItem[],
    },
    carousel: CarouselCardTextItem[],
    carousel_three_team: {
        caption?: string | null,
        heading: string,
        data: CarouselThreeItem[],
    },
    card_text_image: {
        caption?: string | null,
        heading: string,
        text?: string,
        list?: string[],
        image: string,
    }
};

const staticVessel: VesselProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/2.png'),
        text: 'the vessel',
    }],
    heading: 'The future of travel, on the traditions of the past',
    text: 'One of our missions is to preserve and introduce to the world the glory of the Indonesian maritime history. The MAJ Oceanic is hand built and handcrafted in Bira, Sulawesi based on the heritage of ancestral knowledge.',
    images: require('../assets/img/LargeImages/1.png'),
    carousel_three: {
        caption: 'the vessel',
        heading: 'Be inspired by the ancient seamen',
        data: [{
            id: 0,
            heading: 'Zheng He',
            image: require('../assets/img/CardThreeImage/1.png'),
        },{
            id: 1,
            heading: 'Christopher Columbus',
            image: require('../assets/img/CardThreeImage/2.png'),
        },{
            id: 2,
            heading: 'Ibn Battuta',
            image: require('../assets/img/CardThreeImage/3.png'),
        }]
    },
    carousel: [{
        id: 0,
        caption: 'spesification',
        heading: 'Lorem Ipsum',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        images: require('../assets/img/CarouselCard/1.png'),
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip'
        ]
    },{
        id: 1,
        caption: 'spesification',
        heading: 'Lorem Ipsum',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        images: require('../assets/img/CarouselCard/1.png'),
    }],
    carousel_three_team: {
        caption: 'the team',
        heading: 'Lorem ipsum dolor',
        data: [{
            id: 0,
            heading: 'Christophe Beltrando',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/4.png'),
        },{
            id: 1,
            heading: 'Mohamad Arief',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/5.png'),
        },{
            id: 2,
            heading: 'Syamsudin',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/5.png'),
        }]
    },
    card_text_image: {
        caption: 'sustainbility',
        heading: 'Lorem Ipsum Dolor',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Lorem lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Lorem lar aliquip',
        ],
        image: require('../assets/img/CardTextImage/1.png'),
    }
};

export default staticVessel;
