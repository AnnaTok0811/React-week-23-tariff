
import { useState } from 'react';
import Tariff from '../Components/Tariff/Tariff.jsx';
import './App.scss'

const jsonData = [
  {
    title:'Безлимитный 300',
    price:'300',
    speed:'до 10 Мбит/сек',
    volume:'Объем включенного трафика неограничен',
    className: 'first'
  },
  {
    title:'Безлимитный 450',
    price:'450',
    speed:'до 50 Мбит/сек',
    volume:'Объем включенного трафика неограничен',
    className: 'second'
  },
  {
    title:'Безлимитный 550',
    price:'550',
    speed:'до 100 Мбит/сек',
    volume:'Объем включенного трафика неограничен',
    className: 'third'
  },
  {
    title:'Безлимитный 1000',
    price:'1000',
    speed:'до 200 Мбит/сек',
    volume:'Объем включенного трафика неограничен',
    className: 'fourth'
  }
];

function App() {
  const [activeIndex, setActiveIndex]=useState(0)
  const onClick = (index)=>{
        setActiveIndex(index) 
  }
console.log(activeIndex)
  return (
    <>
    <h1>Интернет тарифы</h1>
    <div className='conteiner'>
      {jsonData.map((item,index)=> <Tariff key={item.title} onClick={()=>onClick(index)} isActive={index===activeIndex} {...item}/>)}

      </div>
    </>
  );
}

export default App;
