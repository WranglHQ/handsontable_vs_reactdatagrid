import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ParentHandsontable from './ParentHandsontable';
import ParentReactDataGrid from './ParentReactDataGrid';
import HandsontableRedux from './HandsontableRedux';

export default function BasicExample() {
  return (
    <Router>
      <section>
        <p style={{ textAlign: 'right' }}><a target="_blank" href="https://github.com/WranglHQ/handsontable_vs_reactdatagrid">https://github.com/WranglHQ/handsontable_vs_reactdatagrid</a></p>
        <p></p>
        <h2>compare handsontable with adazzle's react-data-grid with a ton of rows</h2>
        <p>try 500,000 or 5,000,000</p>
        <input
          style={{ width: '250px' }}
          type='text'
          placeholder="num rows (default 50,000)"
          id="numrowsinputid">
        </input>
        <p>change spreadsheet after changing number of rows to re-render the components:</p>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/handsontable">Handsontable</Link></li>
          <li><Link to="/react-data-grid">AdazzleReactDataGrid</Link></li>
          <p></p>
          <Link to="/handsontable_redux"><span style={{ color: 'gray' }}>Handsontable redux</span></Link><span style={{ color: 'gray' }}> (doesnt work. from their <a target="_blank" href="https://handsontable.com/docs/7.4.2/frameworks-wrapper-for-react-redux-example.html">docs</a>)</span>
          <p></p>
        </ul>
      </section>
      <hr style={{ margin: 0 }} />
      <section>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/handsontable"><ParentHandsontable /></Route>
          <Route path="/react-data-grid"><ParentReactDataGrid /></Route>
          <Route path="/handsontable_redux"><HandsontableRedux /></Route>
        </Switch>
      </section>

    </Router>
  );
}

function Home() {
  return (<div></div>);
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MyHotComponent from './MyHotComponent';
// import MyRDGComponent from './MyRDGComponent';

// let asdf = 9;
// function App() {
//   return (
//     <>
//               <MyHotComponent ></MyHotComponent>
//               <br></br>
//               <MyRDGComponent ></MyRDGComponent>
//       {/* <button onClick={() => {
//         window.wd[1][1] += 1;
//         console.log(window.wd);
//         asdf ++;
//         console.log(asdf);

//         //TODO stupdi quest ...how to trigger comp update?

//       }}>change</button> */}
//     </>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
