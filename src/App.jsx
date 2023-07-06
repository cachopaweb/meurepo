import { useState } from 'react'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';

import './global.css';
import styles from './App.module.css';
import {BrowserView, isBrowser, isMobile} from 'react-device-detect';

function App() {

  const [device, setDevice] = useState(styles.browser);
  const[flag, setFlag] = useState(true);

  if(flag)
  {
    if(isMobile)
    {
      setDevice(styles.mobile);
    }
    setFlag(false);
  }


  console.log(device);
  return (
    <div className={device}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
