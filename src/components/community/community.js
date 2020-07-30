import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './community.css';

export default class Community extends React.Component{
    render(){
        return<section><Dropdown className="filterbox">
        <Dropdown.Toggle variant="success" id="dropdow	n-basic">
            Filter
</Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/Rated">Most Rated</Dropdown.Item>
            <Dropdown.Item href="#/Reviewed">Most Reviewed</Dropdown.Item>
            <Dropdown.Item href="#/Newest">Newest</Dropdown.Item>
            <Dropdown.Item href="#/Relevant">Most Relevant</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </section>
    }
}