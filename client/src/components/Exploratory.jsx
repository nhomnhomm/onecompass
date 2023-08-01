import React, { useMemo } from 'react'
import { useTable, useRowSelect } from 'react-table'
import ExploratoryCourse from '../assets/exploratoryCourses.json'
import { COLUMNS } from './columns'
import { Checkbox } from './Checkbox'

const Exploratory = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => ExploratoryCourse, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        ...columns,
        {
          id: 'selection',
          Header: 'Choose',
          Cell: ({ row }) => {
            if (row.values.category === "E1") {
              return <Checkbox {...row.getToggleRowSelectedProps()} 
              disabled={!(rows.filter(row => row.values.category === "E1").filter(row => row.isSelected).length <2 
                        || row.isSelected)}/>
            }
            if (row.values.category === "E2") {
              return <Checkbox {...row.getToggleRowSelectedProps()} 
              disabled={!(rows.filter(row => row.values.category === "E2").filter(row => row.isSelected).length <2 
                        || row.isSelected)}/>
            }
            if (row.values.category === "E3") {
              return <Checkbox {...row.getToggleRowSelectedProps()} 
              disabled={!(rows.filter(row => row.values.category === "E3").filter(row => row.isSelected).length <2 
                        || row.isSelected)}/>
            }
            if (row.values.category === "E4") {
              return <Checkbox {...row.getToggleRowSelectedProps()} 
              disabled={!(rows.filter(row => row.values.category === "E4").filter(row => row.isSelected).length <2 
                        || row.isSelected)}/>
            }
          }
        }, 
        {
          id: 'year',
          Header: "Year", 
          Cell:  ({ row }) => 
            // width
            <select className="mx-auto custom-select w-50" disabled={!row.isSelected}>
              <option value>Choose...</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
        }
      ])
    }
  )

  let E1, E2, E3, E4 = false;

  return (
    <>
      <table className='table d-block w-100 h-100 overflow-auto' {...getTableProps()}>
        <thead className='thead-dark sticky-top w-100'>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th width='20%' className='text-center' {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="overflow-auto w-100 h-100" {...getTableBodyProps()}>
          
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  if (cell.value === "E1" || cell.value === "E2" || cell.value === "E3" || cell.value === "E4") {
                    if (cell.value === "E1" && !E1) {
                      E1 = true;
                      return <td rowSpan='8' className='font-weight-bold align-middle text-center'>{cell.value}: Arts and Humanities</td> 
                    }
                    else if (cell.value === "E2" && !E2) {
                      E2 = true
                      return <td rowSpan='8' className='font-weight-bold align-middle text-center'>{cell.value}: Social Sciences</td> 
                    }
                    else if (cell.value === "E3" && !E3) {
                      E3 = true
                      return <td rowSpan='8' className='font-weight-bold align-middle text-center'>{cell.value}: Sciences and Engineering</td> 
                    }
                    else if (cell.value === "E4" && !E4) {
                      E4 = true
                      return <td rowSpan='8' className='font-weight-bold align-middle text-center'>{cell.value}: Mathematics and Comuputing</td> 
                    }
                  }
                  else {
                    return <td className='align-middle text-center ' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Exploratory