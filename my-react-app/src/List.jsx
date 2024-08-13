import PropTypes from 'prop-types';

function List(props) {

    
    //this is just a list of strings
    /*
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
    */
    
    //this is a list of objects with name and calorie properties
    /*
    const fruits = [{ name: "apple", calories: 95 },
    { name: "orange", calories: 45 },
    { name: "banana", calories: 105 },
    { name: "coconut", calories: 159 },
    { name: "pineapple", calories: 37 }
    ];
    */

    //sort aplhabetical
    //fruits.sort((a, b) => a.name.localeCompare(b.name));

    //reverse alphabetical
    //fruits.sort((a, b) => b.name.localeCompare(a.name));

    //sort calories in ascending 
    //fruits.sort((a, b) => a.calories - b.calories);
    
    //calories in descending
    //fruits.sort((a, b) => b.calories - a.calories);

    //filter for fruits with calories < 100
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); 

    //for every item in fruits, map each item into an <li> element
    //each element should have a unique identifier/key
    /*
    const listItems = fruits.map(fruit => (<li key={fruit.name}> {fruit.name}: &nbsp; {fruit.calories}</li>));
    */
    
    //this returns an unordered list of fruits
    /*
    return (<ul>{listItems}</ul>);
    */

    //display the filtered fruits                              //singular
    /*
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>
        {lowCalFruit.name}: &nbsp;
        {lowCalFruit.calories}
    </li>)
    */

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp; {item.calories}
    </li>)
    //this returns an ordered list of fruits
    return (
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-item'>{listItems}</ol>
        </>
    );
}

//add proptypes validation
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
}

//setup default props
List.defaultprops = {
    category: "Category",
    items: [] //items will be empty by default
}
export default List