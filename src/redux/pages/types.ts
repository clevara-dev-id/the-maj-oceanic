import { SliderItem } from "../../components/base/Slider/SliderAwesome";
import { CarouselCardTextItem } from "../../components/base/Carousel/CarouselCardText";

export interface PageItem {
    id?: React.ReactText;
    page_name?: string;
    
    heading: string;
    text: string;
    images: string;

    slider?: SliderItem[];

    carousel_card_text?: CarouselCardTextItem[];
    
    data?: Array<{
        id: number;
        title: string;
        value: string;
        created_at?: string;
        updated_at?: string;
    }>
};
/**
 * PageState Interface
 * 
 * Is interface reducer of page reducer
 */
export interface PageState {
    activePage?: PageItem;
    pages: Array<PageItem>;
    loading: string,
};

export interface NavigationState {
    navigations?: Array<{
        id: number;
        page: string;
        path: string;
    }>;
};