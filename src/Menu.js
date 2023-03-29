import React from 'react';

function Menu() {
  const menuItems = [
    {
      name: "NAPO'S ONE",
      description: "Brioche bread, 190 grams beef, tomato, lettuce, onion, Ham, ketchup, Mayonnaise, mustard",
      price: "13.99$"
    },
    {
      name: "NAPO'S CHICKEN",
      description: "Brioche bread, crispy chicken breast, lettuce, home made tartar sauce, American chesse",
      price: "13.99$"
    },
    {
      name: "NAPO'S TWO",
      description: "Brioche bread, 190 grams beef, Argentine sausage, bacon, white cheddar American cheese, tomato, lettuce, onion, ketchup, mustard mayonnaise",
      price: "14.99$"
    },
    {
      name: "NAPO'S THE REAL DEAL",
      description: "brioche bread, 190 grams beef argentine sausage, bacon, American cheese, soft white chesse, tomato, lettuce, onion, ketchup, mayonnaise, mustard",
      price: "16.99$"
    },
    {
      name: "STREET B.B.Q",
      description: "300 grams of delicious grilled picaña cut into thin pieces, on a bed of cassava (yuca), accompanied by cubes of white cheese, Argentine chistorra and Venezuelan guacamole",
      price: "19.99$"
    },
    {
      name: "FRENCH FRIES",
      description: "with truffled salt accompanied by 3 dips of the house",
      price: "2.99$"
    },
    {
      name: "TEQUENOS / CHESSE FINGER",
      description: "Venezuelan white cheese wrapped in fried dough 5 pieces",
      price: "6.99$"
    },
    {
      name: "CHICKEN NUGGETS AND FRIES",
      description: "6 pieces of nuggets served with french fries",
      price: "6.99$"
    },
    {
      name: "NAPO'S TENDERLOIN",
      description: "9 inches Italian filoncino bread, 250 grams beef tenderloin Chopped in cubes, bacon and pecorino chesse",
      price: "17.99$"
    },
    {
      name: "NAPO'S CHICKEN TENDERLOIN",
      description: "9 inches italian filoncino bread, 250 grams of grilled chicken breast seasoned with the flavor of the house, bacon, and pecorino cheese",
      price: "14.99$"
    },
    {
      name: "NAPO'S TENDERLOIN AND CHICKEN",
      description: "9 inches italian filoncino bread, 125 grams of beef tenderloin chopped in cubes, 125 grams of grilled chicken breast seasoned with the flavor of the house, bacon, and pecorino cheese",
      price: "18.99$"
    }
  ];

  return (
    <div className="menu">
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.name} className="menu-item">
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <p className="item-price">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
