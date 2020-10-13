import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const data = [
  {
    "id": 1,
    "name": "Chicken Burger",
    "restaurant": "Mc Donalds",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 2,
    "name": "Ham Burger",
    "restaurant": "Mc Donalds",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 3,
    "name": "Cheese Burger",
    "restaurant": "Mc Donalds",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 4,
    "name": "Fries",
    "restaurant": "Mc Donalds",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 5,
    "name": "Egg Muffin",
    "restaurant": "Mc Donalds",
    "availableMeals": ["breakfast"]
  },
  {
    "id": 6,
    "name": "Burrito",
    "restaurant": "Taco Bell",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 7,
    "name": "Tacos",
    "restaurant": "Taco Bell",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 8,
    "name": "Quesadilla",
    "restaurant": "Taco Bell",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 9,
    "name": "Steak",
    "restaurant": "BBQ Hut",
    "availableMeals": ["dinner"]
  },
  {
    "id": 10,
    "name": "Yakitori",
    "restaurant": "BBQ Hut",
    "availableMeals": ["dinner"]
  },
  {
    "id": 11,
    "name": "Nankotsu",
    "restaurant": "BBQ Hut",
    "availableMeals": ["dinner"]
  },
  {
    "id": 12,
    "name": "Piman",
    "restaurant": "BBQ Hut",
    "availableMeals": ["dinner"]
  },
  {
    "id": 13,
    "name": "Vegan Bento",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch"]
  },
  {
    "id": 14,
    "name": "Coleslaw Sandwich",
    "restaurant": "Vege Deli",
    "availableMeals": ["breakfast"]
  },
  {
    "id": 15,
    "name": "Grilled Sandwich",
    "restaurant": "Vege Deli",
    "availableMeals": ["breakfast"]
  },
  {
    "id": 16,
    "name": "Veg. Salad",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 17,
    "name": "Fruit Salad",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 18,
    "name": "Corn Soup",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 19,
    "name": "Tomato Soup",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 20,
    "name": "Minestrone Soup",
    "restaurant": "Vege Deli",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 21,
    "name": "Pepperoni Pizza",
    "restaurant": "Pizzeria",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 22,
    "name": "Pepperoni Pizza",
    "restaurant": "Pizzeria",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 23,
    "name": "Hawaiian Pizza",
    "restaurant": "Pizzeria",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 24,
    "name": "Seafood Pizza",
    "restaurant": "Pizzeria",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 25,
    "name": "Deep Dish Pizza",
    "restaurant": "Pizzeria",
    "availableMeals": ["dinner"]
  },
  {
    "id": 26,
    "name": "Chow Mein",
    "restaurant": "Panda Express",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 27,
    "name": "Mapo Tofu",
    "restaurant": "Panda Express",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 28,
    "name": "Kung Pao",
    "restaurant": "Panda Express",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 29,
    "name": "Wontons",
    "restaurant": "Panda Express",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 30,
    "name": "Garlic Bread",
    "restaurant": "Olive Garden",
    "availableMeals": ["breakfast", "lunch", "dinner"]
  },
  {
    "id": 31,
    "name": "Ravioli",
    "restaurant": "Olive Garden",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 32,
    "name": "Rigatoni Spaghetti",
    "restaurant": "Olive Garden",
    "availableMeals": ["lunch", "dinner"]
  },
  {
    "id": 33,
    "name": "Fettucine Pasta",
    "restaurant": "Olive Garden",
    "availableMeals": ["lunch", "dinner"]
  }
]

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({title}) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          {data.map(({id,name}) => {
            return(
            <MenuItem value={id}>{name}</MenuItem>
            )
          })}
         
        </Select>
      </FormControl>
    </div>
  );
}