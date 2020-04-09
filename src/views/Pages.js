import React, { Component, lazy } from 'react'


const TextHeadingComponent = lazy(() => import('../components/TextHeadingComponent'))
const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))
const TextLargeImageComponent = lazy(() => import('../components/TextLargeImageComponent'))
const CarouselCardTextComponent = lazy(() => import('../components/CarouselCardTextComponent'))
const TextTabComponent = lazy(() => import('../components/TextTabComponent'))
const DeviderComponent = lazy(() => import('../components/DeviderComponent'))
const CardTextImageComponent = lazy(() => import('../components/CardTextImageComponent'))
const SingleButtonComponent = lazy(() => import('../components/SingleButtonComponent'))
const CardTextImageSmallComponent = lazy(() => import('../components/CardTextImageSmallComponent'))

class Pages extends Component {
    CommonComponent(args, props){
        if(args === 'SliderAwesome'){
            return(
                <SliderAwesome properties={props} />
            )
        }
        if(args === 'TextLargeImageComponent'){
            return(
                <TextLargeImageComponent properties={props} />
            )
        }
        if(args === 'CarouselCardTextComponent'){
            return(
                <CarouselCardTextComponent properties={props} />
            )
        }
        if(args === 'TextTabComponent'){
            return(
                <TextTabComponent properties={props} />
            )
        }
        if(args === 'TextHeadingComponent'){
            return(
                <TextHeadingComponent properties={props} />
            )
        }
        if(args === 'DeviderComponent'){
            return(
                <DeviderComponent properties={props} />
            )
        }
        if(args === 'CardTextImageComponent'){
            return(
                <CardTextImageComponent properties={props} />
            )
        }
        if(args === 'SingleButtonComponent'){
            return(
                <SingleButtonComponent properties={props} />
            )
        }
        if(args === 'CardTextImageSmallComponent'){
            return(
                <CardTextImageSmallComponent properties={props} />
            )
        }
        console.log(args)
    }
    render(){
        return(
            <div id={this.props.id}>
                {this.props.component.map((data, i) => {
                    return(
                        <div key={data.id || i}>
                            {this.CommonComponent(data.name, data.properties)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Pages