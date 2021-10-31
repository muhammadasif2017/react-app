
import './App.css';

function Hello(props) {
  console.log(props)
  return (
    <div>
      <h1>{props.message}</h1>
      <h1>Welcome to the {props.libray}!</h1>
      <h2>You will the enjoy the course!</h2>
    </div>
  );
}

function ShowList({list}){
  return (
    <div>
      <ul>
        {
          list.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

const list = ['To go to UET', 'Apply for Degree', 'Collect DMC', 'Meet Haseeb', 'Eat Something'];
const ListObj = list.map((item, i) => ({id:i, name: item}));
console.log(ListObj);
function App() {
  return (
    <div className="App">
      <Hello message="Hurray!" libray="Next"/>
      <ShowList list={ListObj}/>
      <h4>Footer</h4>
    </div>
  );
}

export default App;
