import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react'
import Button from '../../Button'

export const Card = props => {
    const [indexActive, setIndex] = useState(0)

    useEffect(() => {
        setIndex(props.indexActive)
    },[props.indexActive])

    return (
        <div className={`card-text bg-white w-2/5 px-6 h-full py-12 inset-y-0 right-0 mt-12 absolute ${props.containerClassName}`}>
            {props.store.length && props.store.map((data, index) => {
                if (indexActive === index) {
                    return (
                        <div key={index}>
                            <h6 className="primary tracking-caption2"> {data.caption} </h6>
                            <h2> {data.heading} </h2>
                            <p className="body-1 my-6">
                                {data.text}
                            </p>

                            {data.list && data.list.length? (
                                <ul className="mb-5">
                                    {data.list.map((itemList, indexList) => (
                                        <li key={indexList}> 
                                            <p className="body-1"> {itemList} </p>
                                        </li>
                                    ))}
                                </ul>
                            ): null}
                            <Button 
                                className={`uppercase focus:outline-none btn-2 ${props.buttonClassName}`} 
                                onClick={props.onClick}> 
                                {props.buttonTitle} 
                            </Button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

Card.propTypes = {
  buttonClassName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  indexActive: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  store: PropTypes.arrayOf(PropTypes.object).isRequired
}
