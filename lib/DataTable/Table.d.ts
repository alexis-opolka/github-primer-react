import React from 'react';
import { SxProp } from '../sx';
import { Column, CellAlignment } from './column';
import { UniqueRow } from './row';
import { SortDirection } from './sorting';
export type TableProps = React.ComponentPropsWithoutRef<'table'> & {
    /**
     * Provide an id to an element which uniquely describes this table
     */
    'aria-describedby'?: string;
    /**
     * Provide an id to an element which uniquely labels this table
     */
    'aria-labelledby'?: string;
    /**
     * Column width definitions
     */
    gridTemplateColumns?: React.CSSProperties['gridTemplateColumns'];
    /**
     * Specify the amount of space that should be available around the contents of
     * a cell
     */
    cellPadding?: 'condensed' | 'normal' | 'spacious';
};
declare const Table: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> & {
    /**
     * Provide an id to an element which uniquely describes this table
     */
    'aria-describedby'?: string | undefined;
    /**
     * Provide an id to an element which uniquely labels this table
     */
    'aria-labelledby'?: string | undefined;
    /**
     * Column width definitions
     */
    gridTemplateColumns?: React.CSSProperties['gridTemplateColumns'];
    /**
     * Specify the amount of space that should be available around the contents of
     * a cell
     */
    cellPadding?: "normal" | "condensed" | "spacious" | undefined;
} & React.RefAttributes<HTMLTableElement>>;
export type TableHeadProps = React.ComponentPropsWithoutRef<'thead'>;
declare function TableHead({ children }: TableHeadProps): JSX.Element;
export type TableBodyProps = React.ComponentPropsWithoutRef<'tbody'>;
declare function TableBody({ children }: TableBodyProps): JSX.Element;
export type TableHeaderProps = Omit<React.ComponentPropsWithoutRef<'th'>, 'align'> & {
    /**
     * The horizontal alignment of the cell's content
     */
    align?: CellAlignment;
};
declare function TableHeader({ align, children, ...rest }: TableHeaderProps): JSX.Element;
type TableSortHeaderProps = TableHeaderProps & {
    /**
     * Specify the sort direction for the TableHeader
     */
    direction: SortDirection;
    /**
     * Provide a handler that is called when the sortable TableHeader is
     * interacted with via a click or keyboard interaction
     */
    onToggleSort: () => void;
};
declare function TableSortHeader({ align, children, direction, onToggleSort, ...rest }: TableSortHeaderProps): JSX.Element;
export type TableRowProps = React.ComponentPropsWithoutRef<'tr'>;
declare function TableRow({ children, ...rest }: TableRowProps): JSX.Element;
export type TableCellProps = Omit<React.ComponentPropsWithoutRef<'td'>, 'align'> & {
    /**
     * The horizontal alignment of the cell's content
     */
    align?: CellAlignment;
    /**
     * Provide the scope for a table cell, useful for defining a row header using
     * `scope="row"`
     */
    scope?: 'row';
};
declare function TableCell({ align, className, children, scope, ...rest }: TableCellProps): JSX.Element;
type TableCellPlaceholderProps = React.PropsWithChildren;
declare function TableCellPlaceholder({ children }: TableCellPlaceholderProps): JSX.Element;
export type TableContainerProps = React.PropsWithChildren<SxProp>;
declare function TableContainer({ children, sx }: TableContainerProps): JSX.Element;
export type TableTitleProps = React.PropsWithChildren<{
    /**
     * Provide an alternate element or component to use as the container for
     * `TableSubtitle`. This is useful when specifying markup that is more
     * semantic for your use-case, such as a heading tag.
     */
    as?: keyof JSX.IntrinsicElements | React.ComponentType;
    /**
     * Provide a unique id for the table subtitle. This should be used along with
     * `aria-labelledby` on `DataTable`
     */
    id: string;
}>;
declare function TableTitle({ as, children, id }: TableTitleProps): JSX.Element;
export type TableSubtitleProps = React.PropsWithChildren<{
    /**
     * Provide an alternate element or component to use as the container for
     * `TableSubtitle`. This is useful when specifying markup that is more
     * semantic for your use-case
     */
    as?: keyof JSX.IntrinsicElements | React.ComponentType;
    /**
     * Provide a unique id for the table subtitle. This should be used along with
     * `aria-describedby` on `DataTable`
     */
    id: string;
}>;
declare function TableSubtitle({ as, children, id }: TableSubtitleProps): JSX.Element;
declare function TableDivider(): JSX.Element;
export type TableActionsProps = React.PropsWithChildren;
declare function TableActions({ children }: TableActionsProps): JSX.Element;
export type TableSkeletonProps<Data extends UniqueRow> = React.ComponentPropsWithoutRef<'table'> & {
    /**
     * Specify the amount of space that should be available around the contents of
     * a cell
     */
    cellPadding?: 'condensed' | 'normal' | 'spacious';
    /**
     * Provide an array of columns for the table. Columns will render as the headers
     * of the table.
     */
    columns: Array<Column<Data>>;
    /**
     * Optionally specify the number of rows which should be included in the
     * skeleton state of the component
     */
    rows?: number;
};
declare function TableSkeleton<Data extends UniqueRow>({ cellPadding, columns, rows, ...rest }: TableSkeletonProps<Data>): JSX.Element;
export { TableContainer, TableTitle, TableSubtitle, TableActions, TableDivider, Table, TableHead, TableBody, TableRow, TableHeader, TableSortHeader, TableCell, TableCellPlaceholder, TableSkeleton, };
