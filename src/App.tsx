import React from 'react';

type props = {
  name: string,
  age: number
}

const App = () => {
  const profiles = [
    {name:'taro', age:10},
    {name:'hanako', age:5},
    {name:'taiki', age:22}
  ]
  return (
    <React.Fragment>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </React.Fragment>
  );
}
const User: React.FC<props> = (props) => {
  return (
    <React.Fragment>
      <div>私は {props.name} です。年齢は {props.age}歳です</div>
    </React.Fragment>
  )
}
  
export default App;
