import List from "./List.jsx";

function App() {

  //try to remove the elements to see how conditional rendering works
  const fruits = [{ id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 }
  ]


  //you can now make lists with different data
  const vegetables = [{ id: 6, name: "potatos", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 }
  ]
  
  //you can also add conditional rendering; only render lists with contents
  return (
    <>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}

      {/* this works too */}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/> }
    </>
    
  );
}

export default App
