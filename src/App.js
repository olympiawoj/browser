import React, { useReducer } from 'react';
import Tabs from './components/Tabs';
import './App.css';
import AddressBar from './components/AddressBar';

function reducer(state, action) {
  const { browsers, activeBrowser } = state
  const { type, payload } = action
  if (type === 'ADD') {
    const newBrowsers = [...browsers, '']
    const activeBrowser = browsers.length - 1;

    return { browsers: newBrowsers, activeBrowser }
  }

  if (type === 'CHOOSE') {
    return {
      ...state,
      activeBrowser: payload
    }
  }

  if (type === 'UPDATE') {
    const newBrowsers = [...browsers]
    newBrowsers[activeBrowser] = payload;
    return {
      ...state,
      browsers: newBrowsers
    }
  }
  if (type === 'CLOSE') { }
}


export default function App() {
  const [{ browsers, activeBrowser }, dispatch] = useReducer(reducer, {
    browsers: [
      'https://chrisoncode.io/',
      'https://www.commonstock.com/'
    ],
    activeBrowser: 0
  })

  // formatting or grabbing of data
  // const { browsers, activeBrowser } = state

  const chooseBrowser = id => dispatch({ type: 'CHOOSE', payload: id })
  const addBrowser = () => dispatch({ type: 'ADD' })
  const updateBrowser = url => dispatch({ type: 'UPDATE', payload: url })

  const url = browsers[activeBrowser]

  return (
    <div className="app">
      <div className="browser">
        <Tabs browsers={browsers} active={activeBrowser}
          choose={chooseBrowser} add={addBrowser}
        />

        <AddressBar update={updateBrowser} url={url} />

        <div className="viewport">
          {url ? (
            <iframe width="100%" src={url} title="Stuff" />
          ) : <>New Tab Page</>}
        </div>
      </div>
    </div>
  );
}
