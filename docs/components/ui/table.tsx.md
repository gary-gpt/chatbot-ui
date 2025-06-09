---
source: components/ui/table.tsx
generated: 2025-06-08T22:09:46.000Z
tags: []
hash: 49729e096c6ba34a1cdf7043f0f506b43e67788958bb636e295a93524b11dd70
---

# Table Component Documentation

This TypeScript file defines a set of React components that are used to create a table UI in a web application. The components are designed to be used together to form a complete table, but can also be used individually if needed.

## Table of Contents

- [Table](#table)
- [TableHeader](#tableheader)
- [TableBody](#tablebody)
- [TableFooter](#tablefooter)
- [TableRow](#tablerow)
- [TableHead](#tablehead)
- [TableCell](#tablecell)
- [TableCaption](#tablecaption)

## Table

The `Table` component is the main component that represents the table itself. It is a wrapper around the HTML `<table>` element and it accepts all the standard HTML attributes that a `<table>` element would accept. 

```ts
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"
```

## TableHeader

The `TableHeader` component represents the header section of the table. It is a wrapper around the HTML `<thead>` element.

```ts
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"
```

## TableBody

The `TableBody` component represents the body section of the table. It is a wrapper around the HTML `<tbody>` element.

```ts
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"
```

## TableFooter

The `TableFooter` component represents the footer section of the table. It is a wrapper around the HTML `<tfoot>` element.

```ts
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"
```

## TableRow

The `TableRow` component represents a row in the table. It is a wrapper around the HTML `<tr>` element.

```ts
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"
```

## TableHead

The `TableHead` component represents a header cell in the table. It is a wrapper around the HTML `<th>` element.

```ts
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "text-muted-foreground h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"
```

## TableCell

The `TableCell` component represents a cell in the table. It is a wrapper around the HTML `<td>` element.

```ts
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"
```

## TableCaption

The `TableCaption` component represents the caption of the table. It is a wrapper around the HTML `<caption>` element.

```ts
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("text-muted-foreground mt-4 text-sm", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"
```

## Exports

All the components are exported at the end of the file so they can be imported and used in other parts of the application.

```ts
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
}
```