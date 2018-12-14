import React, { Component } from 'react';
import Table from './Redux/Containers/table.container'
import Form from './Redux/Containers/form.container'


class App extends Component {
    render() {
    return (
        <div>
          <Table/>
          <Form/>
        </div>
    );
  }
}

export default App;
