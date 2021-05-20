import React, { useEffect, useMemo } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useTable } from "react-table";
import { Table } from "react-bootstrap";
import { Trash } from "@styled-icons/octicons";

import * as birdsAction from "./birdsAction";
import AddBird from "./AddBird";

function Birds(props) {
    const { birds, getBirds, removeBird } = props;

    useEffect(() => {
        getBirds();
    }, [getBirds]);

    const columns = useMemo(
        () => [
            {
                Header: "Nimi",
                accessor: "name",
            },
            {
                Header: "Suku",
                accessor: "genus",
            },
            {
                Header: "Laji",
                accessor: "species",
            },
            {
                Header: "2015",
                accessor: "cs2015",
            },
            {
                Header: "2010",
                accessor: "cs2010",
            },
            {
                Header: "2000",
                accessor: "cs2000",
            },
            {
                Header: "Yksilömäärä",
                accessor: "count2015",
            },
        ],
        [],
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: birds });

    return (
        <div>
            <AddBird />
            <Table striped bordered hover {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                            <th>Toiminnot</th>
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                                <td>
                                    <Trash
                                        style={{ heigth: "20px", width: "20px", cursor: "pointer" }}
                                        onClick={() => removeBird(row.original.id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default connect(
    (store) => {
        return { birds: store.birds.list };
    },
    (dispatch) => bindActionCreators(birdsAction, dispatch),
)(Birds);
