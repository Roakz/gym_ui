import * as React from 'react';
import Table from 'react-bootstrap/Table';

interface IndexTableProps {
  columnHeaders?: Array<String>
}

function IndexTable(props: IndexTableProps){  
  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      {props.columnHeaders?.map(function(element, index){
        return <th key={index}>{element}</th>
      })}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>yup</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>yup</td>
    </tr>
    
  </tbody>
</Table>
  )
};

export default IndexTable;