import App from './App/App';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';

class Category extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const category = {
            name: 'Burgers',
            description: 'A hamburger (also called a beef burger, hamburger sandwich, burger or hamburg) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun. Hamburgers are often served with lettuce, bacon, tomato, onion, pickles, cheese and condiments such as mustard, mayonnaise, ketchup, relish, and green chile.',
            items: [
                { name: 'Buffalo Bleu', price: 8 },
                { name: 'Bacon', price: 8 },
                { name: 'Mushroom and Swiss', price: 6 }
            ]
        };

        return (
            <div>
                <h1>{category.name}</h1>
                <p>{category.description}</p>
            </div>
        );
    }
}

class CategorySidebar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const category = {
            name: 'Tacos',
            description: 'A taco (/ˈtækoʊ/ or /ˈtɑːkoʊ/) is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, avocado or guacamole, cilantro (coriander), tomatoes, minced meat, onions and lettuce.',
            items: [
                { name: 'Carne Asada', price: 7 },
                { name: 'Pollo', price: 6 },
                { name: 'Carnitas', price: 6 }
            ]
        };

        return (
            <div>
                <Link to="/">◀︎ Back</Link>
                <h2>{category.name} Items</h2>
                <ul>
                    {category.items.map((item, index) => (
                        <li key={index}>
                            <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class Item extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const menuItem = {
            name: 'Carne Asada',
            price: 7
        };

        return (
            <div>
                <h1>{menuItem.name}</h1>
                <p>${menuItem.price}</p>
            </div>
        );
    }
}


const app = document.getElementById('app');

console.log('Main:');
console.log(app);

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
                <Route path=":item" component={Item} />
            </Route>
        </Route>
    </Router>
);

render(routes, app);
