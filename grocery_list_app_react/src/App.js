import React from 'react';
import './App.css';
import ShoppingList from './shoppingList';
import NewItemForm from './newItemForm';
import Filters from './filters';

function App() {
  
  return(
    <div className="App">
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>

      <NewItemForm />

      <section id="filterCategories">
        <Filters />
        <form id="newCat" className="cat-new">
          <input type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
        </form>
      </section>

      <ShoppingList />

    </main>
    </div>
  )
}

export default App;




// const App =() =>{
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
