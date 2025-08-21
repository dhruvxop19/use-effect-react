import React from 'react';

const App = () => {

  return (
<div>
<MyComponent />
</div>
  );

};

function MyComponent() {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white', padding : 10, margin :20, borderRadius : 20 }}>
      Hello, World!
    </div>
  );
}

export default App;
