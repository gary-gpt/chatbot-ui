# Table Component Documentation

This file exports a set of React components that can be used to construct a table. Each component is a part of the table and can be used independently. The components are:

- `Table`
- `TableHeader`
- `TableBody`
- `TableFooter`
- `TableRow`
- `TableHead`
- `TableCell`
- `TableCaption`

## Table

This is the main component that represents the table. It accepts all HTML table attributes as props and forwards the ref to the underlying table element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table.

## TableHeader

This component represents the table header. It accepts all HTML table section attributes as props and forwards the ref to the underlying `thead` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table header.

## TableBody

This component represents the table body. It accepts all HTML table section attributes as props and forwards the ref to the underlying `tbody` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table body.

## TableFooter

This component represents the table footer. It accepts all HTML table section attributes as props and forwards the ref to the underlying `tfoot` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table footer.

## TableRow

This component represents a row in the table. It accepts all HTML table row attributes as props and forwards the ref to the underlying `tr` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table row.

## TableHead

This component represents a header cell in the table. It accepts all HTML `th` attributes as props and forwards the ref to the underlying `th` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table header cell.

## TableCell

This component represents a cell in the table. It accepts all HTML `td` attributes as props and forwards the ref to the underlying `td` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table cell.

## TableCaption

This component represents the table caption. It accepts all HTML table caption attributes as props and forwards the ref to the underlying `caption` element. It also accepts a `className` prop which is used to customize the CSS classes applied to the table caption.