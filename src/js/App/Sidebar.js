import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


class Sidebar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        const data = [
            {
                name: 'Tacos',
                description: 'A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, avocado or guacamole, cilantro (coriander), tomatoes, minced meat, onions and lettuce.',
                items: [
                    { name: 'Carne Asada', price: 7 },
                    { name: 'Pollo', price: 6 },
                    { name: 'Carnitas', price: 6 }
                ]
            },
            {
                name: 'Burgers',
                description: 'A hamburger (also called a beef burger, hamburger sandwich, burger or hamburg) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun. Hamburgers are often served with lettuce, bacon, tomato, onion, pickles, cheese and condiments such as mustard, mayonnaise, ketchup, relish, and green chile.',
                items: [
                    { name: 'Buffalo Bleu', price: 8 },
                    { name: 'Bacon', price: 8 },
                    { name: 'Mushroom and Swiss', price: 6 }
                ]
            },
            {
                name: 'Drinks',
                description: 'Drinks, or beverages, are liquids intended for human consumption. In addition to basic needs, beverages form part of the culture of human society. Although all beverages, including juice, soft drinks, and carbonated drinks, have some form of water in them, water itself is often not classified as a beverage, and the word beverage has been recurrently defined as not referring to water.',
                items: [
                    { name: 'Lemonade', price: 3 },
                    { name: 'Root Beer', price: 4 },
                    { name: 'Iron Port', price: 5 }
                ]
            }
        ];

        const { isActive, onClick } = this.props;
        const className = isActive ? 'active-list' : 'inactive-list';

        return (
            <ul className={className} onClick={onClick}>
                {data.map((category, index) => (
                    <li key={index}>
                        <Link to={`/category/${category.name}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        );
    }
}

Sidebar.propTypes = {
    onMount: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func
};

export default Sidebar;
