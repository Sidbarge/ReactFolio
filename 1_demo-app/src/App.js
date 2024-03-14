import logo from './logo.svg';
import './App.css';
import Item from './components/Items';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
function App() {
  const response=[
    {
      itemName:'Nirma',
      itemDate:'20',
      itemMonth:'Sept',
      itemYear:'2003'
    },
    {
      itemName:'SurfExcel',
      itemDate:'22',
      itemMonth:'Oct',
      itemYear:'2004'
    },
    {
      itemName:'555',
      itemDate:'24',
      itemMonth:'Nov',
      itemYear:'2005'
    }
  ]
  return (
    <div>
      <Card>
      <Item name={response?.[0]?.itemName}>
        Hello I am first Item   
      </Item>    {/*We can can not directly add content to the react custom html element for this we need to add props.child to the component */}
      <ItemDate day={response?.[0]?.itemDate} month={response?.[0]?.itemMonth} year={response?.[0]?.itemYear}></ItemDate>

      <Item name={response?.[1]?.itemName}></Item>
      <ItemDate day={response?.[1]?.itemDate} month={response?.[1]?.itemMonth} year={response?.[1]?.itemYear}></ItemDate>

      <Item name={response?.[2]?.itemName}></Item>
      <ItemDate day={response?.[2]?.itemDate} month={response?.[2]?.itemMonth} year={response?.[2]?.itemYear}></ItemDate>
      <div className="App">Hello</div>
      </Card>
    </div>
  );
}

export default App;
