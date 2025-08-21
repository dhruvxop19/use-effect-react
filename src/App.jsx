import React from 'react';

const App = () => {

  return (
<div>
{[
  <Todo key = {1} title = {"go to gym"} done = {false}/>,
  <Todo key = {2} title = {"Eat food"} done = {false}/>
]}

</div>
  );

};


function Todo ({title,done}){
  return <div>
    {title} - { done ?  "done!" : "notdone!"}
  </div>
}

export default App;
