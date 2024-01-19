import React from "react"

// class App extends React.Component {
//   state = {
//     name: ""
//   }

//   componentDidMount() {
//     fetch("http://localhost:3000")
//       .then(res => res.json())
//       .then(data => this.setState({ name: data.name }))
//   }

//   render() {
//     return (
//       <h1>Hello {this.state.name}!</h1>
//     )
//   }
// }

// export default App



const apiCall = () => {
//   axios.get('http://localhost:8080').then((data) => {
//     //this console.log will be in our frontend console
//     console.log(data)
//   })
    fetch("http://localhost:8080")
      // .then(res => res.json())
      // .then(data => this.setState({ name: data.name }))
      .then(data => {
      console.log(data)
    })
  }

 export default function App() {
  return (
    <div className="App">
      <header className="App-header">

        <button onClick={apiCall}>Make API Call</button>

      </header>
    </div>
  );
}
