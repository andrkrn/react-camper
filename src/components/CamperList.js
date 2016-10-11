import React from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';

const ColumnData = (user, index) => (
  <TableRow key={index}>
    <TableRowColumn>{user.username}</TableRowColumn>
    <TableRowColumn>{user.recent}</TableRowColumn>
    <TableRowColumn>{user.alltime}</TableRowColumn>
  </TableRow>
)

const getTable = (data) => (
  <div>
    <Table selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Recent</TableHeaderColumn>
          <TableHeaderColumn>All time</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} stripedRows={true}>
        { data.users.map((user, index) => ColumnData(user, index)) }
      </TableBody>
    </Table>
  </div>
)

const CamperList = ({ loading, error, data }) => {
  return (
    <div>
      { loading && <CircularProgress /> }
      { !loading && error && 'Something Went Wrong' }
      { !loading && !error && data && getTable(data) }
    </div>
  )
}

export default CamperList
