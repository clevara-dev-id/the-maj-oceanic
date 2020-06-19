
export type text_large_image = {
    heading: string;
    text: string;
    images: string;
};

export type slider_awesome = {
    slider: Array<{
        id: number;
        images: string;
        text: string;
    }>;
};

export type carousel_card_text = {
    carousel: Array<{
        id: number;
        caption?: string;
        heading: string;
        text: string;
        images: string;
    }>;
};

/**
 * @property Home View
 * 
 * @param heading ` string `
 * 
 * @param text ` string `
 * 
 * @param images ` string ` (large image)
 * 
 * @param slider ` Array<{id: number, text: string, images: string}> `
 * 
 * @param carousel ` Array<{id: number, caption?: string, heading: string, text: string, images: string}> `
 */
export interface HomeProps extends slider_awesome, text_large_image, carousel_card_text {};

/**
 * @example
 * heading: "Traces of the ancient maritime glory with touches of modern-day comfort",
 * text: "The MAJ Oceanic is a traditional hand-crafted two-masted Phinisi yacht with 7 resort-standard suites outfitted with modern design and technology. <br/><br/> Learn, feel, understand, taste, and touch new things while awakening your inner explorer. Get up close with the world's largest lizard species. Huddle together along the railings to spot nature's great displays. Enjoy seafood the Jack Sparrow way. Or practice yoga to the sound of waves. <br/><br/> If to travel is to live, then this might be the life you never knew existed.",
 * images: require("../assets/img/home/image-large/1.png"),
 * slider: [{
 *  id: 0,
 *  images: require("../assets/img/header/5.png"),
 *  text: "1. Know where you want to be. Else is secondary."
 * },{
 *  id: 1,
 *  images: require("../assets/img/header/5.png"),
 *  text: "2. Know where you want to be. Else is secondary."
 * }],
 * carousel: [{
 *  id: 0,
 *  caption: "the vessel 1",
 *  heading: "Craftmanship lives on 1",
 *  text: "Sailing 1 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
 *  images: require("../assets/img/home/carousel-text-image/1.png"),
 * },{
 *  id: 1,
 *  caption: "the vessel 2",
 *  heading: "Craftmanship lives on 2",
 *  text: "Sailing 2 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
 * images: require("../assets/img/home/carousel-text-image/1.png"),
 * }]
 */
const staticHomeProps: HomeProps = {
    heading: "Traces of the ancient maritime glory with touches of modern-day comfort",
    text: "The MAJ Oceanic is a traditional hand-crafted two-masted Phinisi yacht with 7 resort-standard suites outfitted with modern design and technology. <br/><br/> Learn, feel, understand, taste, and touch new things while awakening your inner explorer. Get up close with the world's largest lizard species. Huddle together along the railings to spot nature's great displays. Enjoy seafood the Jack Sparrow way. Or practice yoga to the sound of waves. <br/><br/> If to travel is to live, then this might be the life you never knew existed.",
    images: require("../assets/img/home/image-large/1.png"),
    slider: [{
        id: 0,
        images: require("../assets/img/header/5.png"),
        text: "1. Know where you want to be. Else is secondary."
    },{
        id: 1,
        images: require("../assets/img/header/5.png"),
        text: "2. Know where you want to be. Else is secondary."
    }],
    carousel: [{
        id: 0,
        caption: "the vessel 1",
        heading: "Craftmanship lives on 1",
        text: "Sailing 1 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
        images: require("../assets/img/home/carousel-text-image/1.png"),
    },{
        id: 1,
        caption: "the vessel 2",
        heading: "Craftmanship lives on 2",
        text: "Sailing 2 on a modern-take of the Phinisi is the best way to enjoy the beauty of the Indonesian archipelago. An icon of Indonesia's seafaring tradition, the Phinisi boat-building is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage of Humanity.",
        images: require("../assets/img/home/carousel-text-image/1.png"),
    }]
}

export default staticHomeProps;