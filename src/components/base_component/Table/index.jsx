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
                        <h6 className="tracking-widest leading-normal"> {data.title} </h6> 
                    </td>

                    <td 
                        className={`px-4 py-2 w-1/2 ${props.dataTableClassName}`} 
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
                                    className={`body-1 ${!i % 2 ? `mb-${props.marginValueList}` : `mt-${props.marginValueList}`}`}
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
        <div className={`max-w-container-2 mx-auto ${props.containerClassName}`}>
            <h5 className={`px-4 py-8 ${props.headClassName}`}> {props.head} </h5>
            <table className="w-full">
                <tbody>
                    {renderTbody(props.store && props.store)}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    containerClassName: PropTypes.string,
    store: PropTypes.arrayOf(PropTypes.object).isRequired,
    head: PropTypes.string.isRequired,
    headClassName: PropTypes.string,
    dataTableClassName: PropTypes.string,
    marginValueList: PropTypes.number
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
