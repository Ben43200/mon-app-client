import React, {useEffect, useState} from "react"

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



// const apiCall = () => {
// //   axios.get('http://localhost:8080').then((data) => {
// //     //this console.log will be in our frontend console
// //     console.log(data)
// //   })
//     fetch("https://mon-app-api-production.up.railway.app")
//       // .then(res => res.json())
//       // .then(data => this.setState({ name: data.name }))
//       .then(data => {
//       console.log(data)
//     })
//   }

 export default function App() {

  const [backendData, setBackendData] = useState([{}])
useEffect(() =>{
fetch("/api").then(
  response => response.json()
).then(
  data => {
    setBackendData(data)
  }
)
}, [])

  return (
    <div className="App">
     {(typeof backendData.users === 'undefined') ?(
      <p>Loading</p>
     ) : (
      backendData.users.map((user, i) => (
        <p key={i}>{user}</p>
      ))
     )}
    </div>
  );
}



