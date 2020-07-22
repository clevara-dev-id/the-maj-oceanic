import { SliderItem } from "../components/base/Slider/SliderAwesome";
import { CarouselCardTextItem } from "../components/base/Carousel/CarouselCardText";

/**
 * ## Home PropType
 * 
 * @param heading ` string ` 
 * @param text ` string ` 
 * @param images ` string ` (large image) 
 * @param slider ` Array<{id: number, text: string, images: string}> `* 
 * @param carousel ` Array<{id: number, caption?: string, heading: string, text: string, images: string}> `
 */
export type HomeProps = {
    slider: SliderItem[],

    heading: string,
    text: string,
    images: string,

    carousel_card_text: CarouselCardTextItem[]
}

/**
 * ### Example Usage
 * ```
 */
const staticHome: HomeProps = {
    heading: "Traces of the ancient maritime glory with touches of modern-day comfort",
    text: "The MAJ Oceanic is a traditional hand-crafted two-masted Phinisi yacht with 7 resort-standard suites outfitted with modern design and technology. <br/><br/> Learn, feel, understand, taste, and touch new things while awakening your inner explorer. Get up close with the world's largest lizard species. Huddle together along the railings to spot nature's great displays. Enjoy seafood the Jack Sparrow way. Or practice yoga to the sound of waves. <br/><br/> If to travel is to live, then this might be the life you never knew existed.",
    images: require("../assets/img/home/image-large/1.png"),
    
    slider: [{
        id: 0,
        images: require("../assets/img/header/5.png"),
        text: "Know where you want to be. Else is secondary."
    }],

    carousel_card_text: [{
        id: 0,
        caption: "the vessel 1",
        heading: "Craftmanship lives on 1",
        text: "Sailing 1 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
        image: require("../assets/img/home/carousel-text-image/1.png"),
    },{
        id: 1,
        caption: "the vessel 2",
        heading: "Craftmanship lives on 2",
        text: "Sailing 2 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
        image: require("../assets/img/home/carousel-text-image/1.png"),
    }]
};

export default staticHome;