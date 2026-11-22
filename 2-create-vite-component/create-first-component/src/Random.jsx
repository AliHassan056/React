function Random(){
  let number = Math.random() * 100;
  return <h1 style={{'background-color':'red'}}>Random Number is : {number.toFixed(2)}</h1>
}

export default Random;