function Button(props) {
    return (
      <button style={{backgroundColor:"green",color:"white"}} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }

  export default Button;