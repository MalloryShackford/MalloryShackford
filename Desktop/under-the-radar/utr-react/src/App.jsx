import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Other components or navigation can go here */}
      <Outlet />
    </div>
  );
}

export default App;



// function App() {
//  return (
//         <Router>
//             <Switch>
//                 <Route path="/" exact component={HomePage} />
//                 <Route path="/gallery" component={GalleryPage} />
//                 <Route path="/menu" component={MenuPage} />
//             </Switch>
//         </Router>
//     );

// }
// export default App
