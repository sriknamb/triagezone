"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  Button,
} from "@nextui-org/react";
import { DocumentIcon } from "./DocumentIcon";
import React from "react";
import { columns, patients } from "./data";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function DocPatientsPage() {
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    console.log(user[columnKey]);
    switch (columnKey) {
      case "treatment":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg  cursor-pointer">
                <DocumentIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "pastMedications":
        return (
          <div className="flex flex-wrap max-w-lg ">
            {user.pastMedications.map((medication: any) => {
              return (
                <div className="mr-2">
                  <Chip size="sm" className="basis-1/4">
                    {medication}
                  </Chip>
                </div>
              );
            })}
          </div>
        );
      case "pastIllnesses":
        return (
          <div className="flex flex-wrap max-w-lg ">
            {user.pastIllnesses.map((illness: any) => {
              return (
                <div className="mr-2">
                  <Chip size="sm" className="basis-1/4">
                    {illness}
                  </Chip>
                </div>
              );
            })}
          </div>
        );
      case "medicalStatus":
        return (
          // <Chip color="danger" variant="shadow">
          //   {user.medicalStatus}
          // </Chip>
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            New
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <main>
      <div className="flex justify-between mx-8 items-center mt-3">
        <img className="object-cover w-16 h-16" src="./triagezone.png"></img>
        <Button color="primary" variant="bordered">
          Sign Out
        </Button>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-5xl">Patients</h1>
      </div>
      <div className="mx-12 mt-20">
        <Table aria-label="Example static collection table">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align="start">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={patients}>
            {(patient: any) => (
              <TableRow key={patient.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(patient, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
