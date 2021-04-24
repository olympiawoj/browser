import React, { useState } from 'react';
import Tabs from './components/Tabs';
import AddressBar from './components/AddressBar';
import './App.css';

export default function App() {
  const [browsers, setBrowsers] = useState([
    'https://chrisoncode.io/',
    'https://www.commonstock.com/'
  ])
  const [activeBrowser, setActiveBrowser] = useState(0)

  function chooseBrowser(id) {
    setActiveBrowser(id)
  }

  function addBrowser() {
    const newBrowsers = [...browsers, '']
    setBrowsers(newBrowsers)
    setActiveBrowser(newBrowsers.length-1)

  }

  const url = browsers[activeBrowser]

  return (
    <div className="app">
      <div className="browser">
        <Tabs browsers={browsers} active={activeBrowser}
          choose={chooseBrowser} add={addBrowser}
        />

        <AddressBar />

        <div className="viewport">
          {url ? (
            <iframe width="100%" src={url} title="Stuff" />
          ) : <>New Tab Page</>}
        </div>
      </div>
    </div>
  );
}
