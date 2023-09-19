function List(props) {
    const listItems = props.items.map((item) =>
      <li style={{color:"red"}} key={item}>{item}</li>
    );
    
    return <ul>{listItems}</ul>;
  }
  
  export default List;