import logo from './logo.svg';
import React from 'react';
import './Filter.css';

const Filter = () => (
    /*
    <form>
    <div className="padLeft">
        <p className="filter">Filter by Alliances</p>
        <div className="marginLeft">
            <input type="radio" id="oneworld" value="Oneworld"/>
            <label for="oneworld">Oneworld</label>
            <input type="radio" id="skyteam" value="Sky Team"/>
            <label for="skyteam">Sky Team</label>
            <input type="radio" id="staralliance" value="Star Alliance"/>
            <label for="staralliance">Star Alliance</label>
        </div>
    </div>
    </form>
    */
    <div className="padLeft">
        <p className="filter">Filter by Alliances</p>
        <form className="formmarginLeft">
            <input className="buttons" type="checkbox" id="oneworld" value="Oneworld"/>
            <label className="labels" for="oneworld">Oneworld</label>
            <input className="buttons" type="checkbox" id="skyteam" value="Sky Team"/>
            <label className="labels" for="skyteam">Sky Team</label>
            <input className="buttons" type="checkbox" id="staralliance" value="Star Alliance"/>
            <label className="labels" for="staralliance">Star Alliance</label>
        </form>
    </div>
  )
  export default Filter;