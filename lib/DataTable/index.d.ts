/// <reference types="react" />
import { DataTable } from './DataTable';
import { TableHead, TableBody, TableRow, TableHeader, TableCell, TableCellPlaceholder, TableContainer, TableTitle, TableSubtitle, TableActions, TableDivider, TableSkeleton } from './Table';
declare const Table: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> & {
    'aria-describedby'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    gridTemplateColumns?: import("csstype").Property.GridTemplateColumns<string | number> | undefined;
    cellPadding?: "normal" | "condensed" | "spacious" | undefined;
} & import("react").RefAttributes<HTMLTableElement>> & {
    Container: typeof TableContainer;
    Title: typeof TableTitle;
    Subtitle: typeof TableSubtitle;
    Actions: typeof TableActions;
    Divider: typeof TableDivider;
    Skeleton: typeof TableSkeleton;
    Head: typeof TableHead;
    Body: typeof TableBody;
    Header: typeof TableHeader;
    Row: typeof TableRow;
    Cell: typeof TableCell;
    CellPlaceholder: typeof TableCellPlaceholder;
};
export { DataTable, Table };
export type { DataTableProps } from './DataTable';
export type { TableProps, TableHeadProps, TableBodyProps, TableRowProps, TableHeaderProps, TableCellProps, TableContainerProps, TableTitleProps, TableSubtitleProps, TableActionsProps, TableSkeletonProps, } from './Table';
