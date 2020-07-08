import * as React from 'react';
import _ from 'lodash';

/**
 * @type Table Item
 * 
 * @param id number
 * @param title string
 * @param value string
 */
export type TableItem = {id: number, title: string, value: string};
/**
 *
 * @interface TableProps
 * 
 * @param store `Array<TableItem>`
 */
export interface TableProps {
    containerClassName?: string;
    headClassName?: string;
    dataTableClassName?: string;
    store: Array<TableItem>
}
const Table: React.FC<TableProps> = (props) => {

    const RenderItem = React.useMemo(
        () => 
            (args: TableItem, index: number): JSX.Element => (
                <tr key={index}>
                    <td 
                        className="px-4 py-2 w-1/2" 
                        style={{
                            border: "1px solid #EFE1DC", 
                            borderLeft: "none", 
                            borderRight: "none"
                        }}
                    > 
                        <h6 className="tracking-widest leading-normal text-left">{args.title}</h6> 
                    </td>

                    <td 
                        className={`px-4 py-2 w-1/2 ${props.dataTableClassName}`} 
                        style={{
                            border: "1px solid #EFE1DC", 
                            borderLeft: "none", 
                            borderRight: "none"
                        }}
                    > 
                        {args.value && _.map(args.value.split('\n'), (item, i) => (
                            <p key={i} className={`body-1 text-left ${i? 'mt-4' : 'mt-0'}`}>{item}</p>
                        ))}
                    </td>
                </tr>
            ),
    [])

    return (
        <div className={`max-w-container-2 mx-auto ${props.containerClassName}`}>
            <h5 className={`px-4 py-8 ${props.headClassName}`}>Table Of Spesifications</h5>
            <table className="w-full">
                <tbody>
                    {_.map(props.store, RenderItem)}
                </tbody>
            </table>
        </div>
    )
}

Table.defaultProps = {
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
        value: `6 Paddle board\n6 Sea Kayaks \nFishing Gear \nComplete diving equipment\nComplete snorkeling equipment`
    }]
}

export default Table
