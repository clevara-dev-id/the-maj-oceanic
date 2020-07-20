import * as React from 'react';
import _ from 'lodash';
import { Link, LinkProps } from 'react-router-dom';

import ImgLogo from '../assets/logo.svg'
import ImgLogoXp from '../assets/logo_the_maj_experience.svg'
import ImgLogoG from '../assets/logo_the_maj_group.svg'
import './style.scss'

const Button = React.lazy(() => import('./base/Button/Button'));

/** Sosial Media */
type SM = { id: React.ReactText, iconName: string, href: string };
const SOCIAL_MEDIA: Array<SM> = [{
    id: 0, iconName: 'instagram', href: 'https://instagram.com/themajbekasi?igshid=4qhtyng01dj0',
},{
    id: 1, iconName: 'facebook', href: 'https://m.facebook.com/themajbekasi',
},{
    id: 2, iconName: 'twitter', href: 'https://mobile.twitter.com/themajbekasi',
},{
    id: 3, iconName: 'youtube', href: 'https://www.youtube.com/channel/UCWZI1rSfvLMLKBWpTEgGbXg',
}];


const Footer: React.FC = (props): JSX.Element => {
    /** social link */
    const MemoSocialMediaAnchor = React.useMemo<(
        params: React.AnchorHTMLAttributes<HTMLAnchorElement>
    ) => JSX.Element>(
        () => (params) => (
            <a key={params.title} {...params} />
        ),
    []);

    /** list link */
    const MemoItemLink = React.useMemo<(
        params: LinkProps, className?: string
    ) => JSX.Element>(
        () => (params, liClassName="mb-2") => (
            <li key={params.title} className={liClassName}>
                <Link {...params} />
            </li>
        ),
    []);

    /** Option */
    const MemoOption = React.useMemo<(
        params: React.OptionHTMLAttributes<HTMLOptionElement>
    ) => JSX.Element>(
        () => (params) => <option {...params} />,
    []);

    /** Input */
    const MemoInput = React.useMemo<(
        params: React.InputHTMLAttributes<HTMLInputElement>
    ) => JSX.Element>(
        () => (params) => <input {...params} />,
    []);

    /** Img */
    const MemoImage = React.useMemo<(
        params: React.ImgHTMLAttributes<HTMLImageElement>
    ) => JSX.Element>(
        () => (params) => <img draggable={false} {...params} />,
    []);
    
    return (
        <div className="w-100 bg-dark">
            <div className="container mx-auto px-4 pt-16 pb-24">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/4 w-full">
                        {MemoImage({
                            title: "The Maj Oceanic",
                            src: ImgLogo,
                            alt: "the maj oceanic",
                            className: "select-none"
                        })}
                        <div className="text-white mt-8 mb-10 lg:mb-24">
                            {
                                _.map(SOCIAL_MEDIA, (data, index): JSX.Element => (
                                    MemoSocialMediaAnchor({
                                        href: data.href,
                                        title: data.iconName,
                                        target: "_blank",
                                        className: data.id <= 2 ? "mr-5 outline-none" : "outline-none",
                                        children: <i className={`fa fa-${data.iconName}`}></i>
                                    })
                                ))
                            }
                        </div>
                        <div>
                            <h6 className="text-white mb-3 select-none">PART OF</h6>
                            <div className="flex select-none">
                                {MemoImage({
                                    title: "The Maj Experience",
                                    src: ImgLogoXp,
                                    className: "mr-8 select-none",
                                    alt: "the maj experience",
                                })}
                                {MemoImage({
                                    title: "The Maj Group",
                                    src: ImgLogoG,
                                    className: "select-none",
                                    alt: "the maj group"
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 border-white my-10 w-full lg:hidden"></div>
                    <div className="text-white lg:w-1/5 lg:mb-0 w-full mb-10 select-none">
                        <h5 className="mb-6 text-white">JOIN OUR FAMILY</h5>
                        <ol>
                            {_.map(new Array(
                                    {to: "#", title: "Careers"},
                                    {to: "#", title: "Investor"}
                                ), 
                                (data, index): JSX.Element => MemoItemLink({
                                    title: data.title,
                                    to: data.to,
                                    children: data.title
                                }) 
                            )}
                        </ol>

                    </div>
                    <div className="text-white lg:w-1/5 w-full mb-10 lg:mb-0 select-none">
                        <h5 className="mb-6 text-white">EXPLORE OUR WORLD</h5>
                        <ol>
                            {_.map(new Array(
                                    { to: "#", title: "Contact Us" },
                                    { to: "#", title: "Ancora Capital Management" },
                                    { to: "#", title: "Media Center" },
                                    { to: "#", title: "Privacy" }
                                ),
                                (data, index): JSX.Element => MemoItemLink({
                                    title: data.title,
                                    to: data.to,
                                    children: data.title
                                })
                            )}
                        </ol>
                    </div>

                    <div className="lg:w-1/3 w-full">
                        <div className="grid grid-rows-1 mb-6 select-none">
                            <h5 className="text-white">Sign up for news {`&`} Offers</h5>
                        </div>

                        <div className="grid grid-rows-1" id="childOurFamily">
                            <div className="grid grid-cols-12 gap-2 mb-4" id="firstrowform">
                                <div className="col-span-4 select-none">
                                    <div className="relative">
                                        <select defaultValue="Title" className="rounded-none block appearance-none w-full bg-gray-200 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                            {MemoOption({disabled: true, className: "titleformselect focus:outline-none", placeholder: "Title", children: "Title"})}
                                            {MemoOption({value: "mr", children: "Mr."})}
                                            {MemoOption({value: "ms", children: "Ms."})}
                                        </select>

                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-8">
                                    {MemoInput({
                                        type: "text",
                                        // id: "grid-last-name",
                                        placeholder: "Fullname",
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                    })}

                                    {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-last-name" 
                                    type="text" 
                                    placeholder="Fullname"
                                    value={props.valueName}
                                    onChange={props.onChangeName}
                                    onBlur={props.onBlurName}
                                    /> */}

                                    {/* {(props.nameError) ? <p className="text-red-500 text-xs italic">{props.nameError}</p> : ""} */}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-rows-1 mb-4" id="secondrowrform">
                            <div className="col-span-12">
                                {MemoInput({
                                    type: "text",
                                    // id="grid-last-name",
                                    placeholder: "Email Address",
                                    className: "appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                })}
                                {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-last-name" 
                                type="text" 
                                placeholder="Email Address"
                                value={props.valueEmail}
                                onChange={props.onChangeEmail}
                                onBlur={props.onBlurEmail}
                                />
                                {(props.emailError) ? <p className="text-red-500 text-xs italic">{props.emailError}</p> : ""} */}
                            </div>
                        </div>

                        <div className="grid select-none grid-rows-1 mb-4" id="buttonrowrform">
                            <Button className="bg-white border-2 border-white hover:bg-nero hover:text-white" mode="custom" to={{ hash: "#" }}>
                                subscribe
                            </Button>
                        </div>

                        <div className="grid grid-rows-1 select-none" id="creditrowrform">
                            <div className="grid grid-cols-12">
                                <div className="col-span-11 text-white">
                                    By entering your details you consent to be contacted via email by the Maj group with offers
                                    and updates. To opt out, use the unsubscribe link or email unsubscribe@themaj.com.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container select-none mx-auto px-4 py-10 text-center">
                <p className="text-white">Copyright &copy; 2020 All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;