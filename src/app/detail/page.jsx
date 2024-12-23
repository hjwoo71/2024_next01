"use client"
import './detail.css'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
function Page({item}) {
  return (
    <>
     <h2 className="title">GuestBookList</h2>
            <TableContainer component={Paper} className="table-container">
                <Table className="custom-table">
                    <TableBody>
                            <TableRow>
                                <TableCell className="table-cell">{item.gb_idx}</TableCell>
                            </TableRow>
                            <TableRow>    
                                <TableCell className="table-cell">{item.gb_name}</TableCell>
                             </TableRow>
                             <TableRow>   
                                <TableCell className="table-cell">{item.gb_subject}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="table-cell">{item.gb_content}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="table-cell">{item.gb_email}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="table-cell">{item.gb_pw}</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="table-cell">{item.gb_regdate}</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer> 
    </>
  );
}

export default Page;