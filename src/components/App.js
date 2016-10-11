import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CamperList from './CamperList';
import { getCamper, setVisibility } from '../actions'

const App = ({ setVisibility, data }) => (
  <MuiThemeProvider>
    <div>
      <RaisedButton
        label='Recent'
        onClick={() => setVisibility('RECENT')} />
      <RaisedButton
        label='All Time'
        onClick={() => setVisibility('ALL_TIME')} />
      <CamperList data={data} />
    </div>
  </MuiThemeProvider>
)

const getData = (data, filter) => {
  switch (filter) {
    case 'RECENT':
      return data.recent;
    case 'ALL_TIME':
      return data.alltime
    default:
      return data.recent;
  }
}

const mapStateToProps = (state) => ({
  data: getData(
    state.byField,
    state.visibilityFilter
  )
})

const mapDispatchToProps = (dispatch, state) => ({
  getCamperData: (field) => dispatch(getCamper(field)),
  setVisibility: (filter) => dispatch(setVisibility(filter))
})

class RequestLayer extends React.Component {
  componentDidMount() {
    this.props.getCamperData('recent');
    this.props.getCamperData('alltime');
  }

  render() {
    return <App {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestLayer);
