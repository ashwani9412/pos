import React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";

const data: partyTable[] = [
  {
    id: "m5gr84i9",
    partyName: "Ashwani Singh",
    mobileNo: "9876543210",
    partyType: "suplier",
    balance: 316,
    category: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    partyName: "Beniwal",
    mobileNo: "9887543210",
    partyType: "consumer",
    balance: 242,
    category: "pending",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    partyName: "Tarun Tomar",
    mobileNo: "9909865610",
    partyType: "distributor",
    balance: 837,
    category: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    partyName: "Silas Singh",
    mobileNo: "7777543210",
    partyType: "costomer",
    balance: 874,
    category: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    partyName: "Lav Singh",
    mobileNo: "9876543210",
    partyType: "suplier",
    balance: 721,
    category: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "brrrj4p",
    partyName: "Sanjeev Shah",
    mobileNo: "0987656689",
    partyType: "suplier",
    balance: 721,
    category: "failed",
    email: "carmella@hotmail.com",
  },
];

export type partyTable = {
  id: string;
  partyName: string;
  mobileNo: string;
  partyType: string;
  balance: number;
  category: string;
  email: string;
};

export const columns: ColumnDef<partyTable>[] = [
  {
    accessorKey: "partyName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Party Name
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("partyName")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "mobileNo",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mobile Number
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("mobileNo")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "partyType",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Party Type
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("partyType")}</div>
    ),
  },
  {
    accessorKey: "balance",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Balance
          <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balance"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      // return (
      //   <DropdownMenu>
      //     <DropdownMenuTrigger asChild>
      //       <Button variant="ghost" className="h-8 w-8 p-0">
      //         <span className="sr-only">Open menu</span>
      //         {/* <DotsHorizontalIcon className="h-4 w-4" /> */}
      //       </Button>
      //     </DropdownMenuTrigger>
      //     <DropdownMenuContent align="end">
      //       <DropdownMenuLabel>Actions</DropdownMenuLabel>
      //       <DropdownMenuItem
      //         onClick={() => navigator.clipboard.writeText(payment.id)}
      //       >
      //         Copy payment ID
      //       </DropdownMenuItem>
      //       <DropdownMenuSeparator />
      //       <DropdownMenuItem>View customer</DropdownMenuItem>
      //       <DropdownMenuItem>View payment details</DropdownMenuItem>
      //     </DropdownMenuContent>
      //   </DropdownMenu>
      // )
    },
  },
];

export default function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div> */}
    </div>
  );
}

export function DataTableDemo() {}
