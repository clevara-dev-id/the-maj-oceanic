import * as React from 'react';
import _ from 'lodash';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../../../helper/ErrorFallback';
import './styles.css';

export type TableItem = {id: number, title: string, value: string};
export type TableProps = {
    containerClassName?: string;
    headClassName?: string;
    dataTableClassName?: string;
    store: Array<TableItem>
}

/**
 * ## Table
 *
 * @param {TableProps} props
 * @see TableProps
 * @returns {JSX.Element}
 */
const Table: React.FC<TableProps> = (props): JSX.Element => {
    /**
     * Render Item
     */
    const RenderItem = React.useMemo<(args: TableItem, index: number) => JSX.Element>(
        () => (args, index) => (
                <tr key={index}>
                    <td className="px-2 py-2 w-1/2"> 
                        <h6 className="tracking-widest leading-normal text-left">{args.title}</h6> 
                    </td>

                    <td className={`px-2 py-2 w-1/2 ${props.dataTableClassName}`}> 
                        {args.value && _.map(args.value.split('\n'), (item, i) => (
                            <p key={i} className={`body-1 text-left ${i? 'mt-4' : 'mt-0'}`}>{item}</p>
                        ))}
                    </td>
                </tr>
            ),
    [props.dataTableClassName]);

    return (
        <div className={`max-w-container-2 select-none mx-auto px-8 xl:px-0 lg:px-4 md:px-6 ${props.containerClassName}`}>
            <h5 className={`py-8 ${props.headClassName} text-left`}>Table Of Spesification</h5>
            <table className="w-full">
                <tbody>
                    {_.map(props.store, RenderItem)}
                </tbody>
            </table>
        </div>
    );
};

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
};

const TableWithErrorBoundary = withErrorBoundary(Table, {FallbackComponent: ErrorFallback});
export default React.memo(TableWithErrorBoundary, (prevProps, nextProps) => _.isEqual(prevProps, nextProps));
