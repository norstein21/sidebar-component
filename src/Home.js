import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Home = () => {
  const {openSidebar,openModal} = useGlobalContext();

  return (
     <main>
      <button class="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        Lihat Modal
      </button>
     </main>
     );
}

export default Home
