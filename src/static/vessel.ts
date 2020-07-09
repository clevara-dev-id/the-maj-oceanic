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
        data: CarouselThreeItem[]
    },
    carousel: CarouselCardTextItem[]
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
    }]
};

export default staticVessel;
