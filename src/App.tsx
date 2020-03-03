import React from 'react';
import './App.css';

function hoc<TProps>(Component: React.ComponentType<TProps>): (props: TProps) => React.ReactElement | null {
  return (props) => <Component {...props}/>
}

interface Props {
  value: string
}

const Test = ({value}: Props) => {
  return <span>{value}</span>
}

const Hoc = hoc(Test)

function App() {
  return <Hoc value="awd"/>;
}

export default App;
