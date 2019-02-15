import React, { Component } from 'react';
// import logo from './logo.svg';
import Table from '../components/Table/Table';
import InputField from '../components/InputField/InputField';
import Grid from "@material-ui/core/Grid";

class AdminPage extends Component {

  render() {
    console.log(process.env.REACT_APP_SECRET_CODE);


    return (
      <div>


      {/* NEW HOME COMPONENT */}
        
        <Grid container spacing={24} style={{width:"100%"}}>

        
        <InputField></InputField>
        <Table></Table>
        </Grid>
      </div>
    );
  }
}

export default AdminPage;