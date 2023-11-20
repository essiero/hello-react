function Hello(props) {
  console.log('in Hello component. props is:', props)
  console.log('props.name is:', props.name)

  return (
    <h1 style={{color: props.color}}>Hello {props.name}</h1>
  );
}

export default Hello;

// We can give a component any number of props.
// HTML: Unlimited number of attributes!
// JS: Unlimited number of arguments!