import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 1000);
  }

  componentDidUpdate() {
    document.getElementById('mydiv').innerHTML =
      'The updated favorite is ' + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv" />
      </div>
    );
  }
}

export default Header;
// import React, { useState } from 'react';

// const UseEffects2 = () => {
//   const [widthCount, setWidthCount] = useState(window.screen.width);

//   return (
//     <div>
//       <p>The actual size of the window is:</p>
//       <h1>{widthCount}</h1>
//     </div>
//   );
// };
// export default UseEffects2;
// import React from 'react';
// class ComponentOne extends React.Component {
//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }

//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }

// class App extends React.Component {
//   state = { display: true };
//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>Delete the component</button>
//       </div>
//     );
//   }
// }

// export default App;
