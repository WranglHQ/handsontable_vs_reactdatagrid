import React from "react";
import InnerHandsontable from './InnerHandsontable';
import 'handsontable/dist/handsontable.full.css';
import getData from './data.js';

class ParentHandsontable extends React.Component {
    
    state = { data: getData() }

    updateData = () => {
        const rows = this.state.data.rows;
        const row0 = { ...rows[0] };
        row0.id = row0.id + 1;
        this.setState({ data: { ...this.state.data, rows: [row0, ...rows.splice(1)] } });
    }
    
    render() {
        return (
            <div>
                <div>num rows: {this.state.data.numRows} </div><p></p>
                <InnerHandsontable dataprop={this.state.data}></InnerHandsontable>
                <button style={{ height: '50px', width: '100px', margin: '10px', cursor: 'pointer' }} onClick={this.updateData}>
                    change first cell
                </button>
            </div>
        );
    }
}
export default ParentHandsontable;