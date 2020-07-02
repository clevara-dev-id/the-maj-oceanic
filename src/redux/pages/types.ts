/**
 * Slider Interface
 * 
 * Type Array with property:
 * 
 * @param id number
 * @param images string
 * @param text string
 * @param created_at string
 * @param updated_at string
 */
export type SliderInterface = Array<{
    id: number;
    images: string;
    text: string;
    created_at?: string;
    updated_at?: string;
}>;
/**
 * Carousel Interface
 * 
 * Type Array with property:
 * 
 * @param id number
 * @param caption string (optional)
 * @param heading string 
 * @param text string (optional)
 * @param images string
 * @param created_at string
 * @param updated_at string
 */
export type CarouselInterface = Array<{
    id: number;
    caption?: string;
    heading: string;
    text?: string;
    images: string;
    created_at: string;
    updated_at: string;
}>;

export interface PageItem {
    id: number;
    page_name: string;
    heading: string;
    text: string;
    images: string;
    slider?: SliderInterface;
    carousel?: CarouselInterface;
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