import React from 'react';

const App = () => {

  return (
<div>
<MyComponent />
</div>
  );

};
const componetStyles= {backgroundColor: 'blue', color: 'white', padding : 10, margin :20, borderRadius : 20 }
function MyComponent() {
  return (
    <div style= {componetStyles}>
      Hello, World!
    </div>
  );
}

export default App;
