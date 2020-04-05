import React from 'react'
import PropTypes from 'prop-types'

const Table = props => {

    const renderTbody = (args) => {
        return args && args.map((data, index) => {
            return (
                <tr key={index}>
                    <td 
                        className="px-4 py-2 w-1/2" 
                        style={{
                            border: "1px solid #EFE1DC", 
                            borderLeft: "none", 
                            borderRight: "none"
                        }}
                    > 
                        <h6 style={{letterSpacing: "3px"}}> {data.title} </h6> 
                    </td>

                    <td 
                        className="px-4 py-2 w-1/2" 
                        style={{
                            border: "1px solid #EFE1DC", 
                            borderLeft: "none", 
                            borderRight: "none"
                        }}
                    > 
                        {typeof(data.value) === 'object'? (
                            data.value.map((d, i) => (
                                <p 
                                    key={i}
                                    className={`body-1 ${!i? "mb-2": i === data.value.length? "mt-2": "my-2"}`}
                                > {d} </p>
                            ))
                        ) : (
                            <p className="body-1"> {data.value} </p>
                        )} 
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className={`max-w-container-2 ${props.containerClassName}`}>
            <h5 className="px-4 py-8"> {props.head} </h5>
            <table style={{width: "1110px"}}>
                <tbody>
                    {renderTbody(props.store && props.store)}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    store: PropTypes.arrayOf(PropTypes.object),
    containerClassName: PropTypes.string,
    head: PropTypes.string.isRequired,
}

Table.defaultProps = {
    head: "Table Of Specification",
    store: [{
        id: 1,
        title: "Build",
        value: "Bira, Sulawesi, Indonesia in 2019"
    },{
        id: 2,
        title: "Type",
        value: "Traditional gaft-rigged timber phinisi (ironwood & teak)"
    },{
        id: 3,
        title: "Length",
        value: "55 m /180 ft"
    },{
        id: 4,
        title: "Beam",
        value: "11,3 m / 36 ft"
    },{
        id: 5,
        title: "Watersports Equipment",
        value: [
            "6 Paddle board",
            "6 Sea Kayaks",
            "Fishing Gear",
            "Complete diving equipment",
            "Complete snorkeling equipment"
        ]
    }]
}

export default Table
