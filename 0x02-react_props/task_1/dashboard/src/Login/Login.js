import React from 'react';
import './Login.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const year = getFullYear();
const getFooter = getFooterCopy(false);

export default function App() {
    return (
        <div>
        <div className="App-body">
         <p>Login to access the full dashboard</p>
         <form>
             <label htmlFor="email">Email:</label>
             <input type="email" name="email"></input>
             <label id="appLabel2" htmlFor="password">Password:</label>
             <input type="password" name="password"></input>
             <button>OK</button>
         </form>
        </div>
         <div className="divider"></div>
        </div>
    );
}
  