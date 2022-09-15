import Expenses from "./components/Expenses";
function App() {
  let expenses=[
    {
        id:'e1',
        title: 'School fee',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title: 'Books',
        amount: 700,
        date: new Date(2021, 5, 31)
    },
    {
        id:'e3',
        title: 'House Rent',
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
      id:'e4',
      title: 'Water Rent',
      amount: 50,
      date: new Date(2021, 5, 12)
  }
  ];
  return (
    <div>
      <h2>Let's get Started</h2>
        <Expenses item={expenses}/>
    </div>
  );
}

export default App;
