function Button(props) {
    return (
      <button style={{backgroundColor:"green",color:"whit"}} onClick={props.onClick}>
        {props.text}
      </button>
    );
  }

  export default Button;