import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <div>
      <ProfileCard 
        name="Ariwala Jay"
        id="23IT004"
        imageUrl="https://tse4.mm.bing.net/th?id=OIP.7hZeDzBreg4lDuIe0E8iaQHaFg&pid=Api&P=0&h=180"
        />
      </div>
  );
}

export default App;
