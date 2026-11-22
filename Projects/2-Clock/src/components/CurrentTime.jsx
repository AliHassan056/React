const CurrentTime = ()=>{
  let date = new Date();
  return <p id="CurrentTime">This is current Time <b> {date.toLocaleDateString()}</b> - <b>{date.toLocaleTimeString()}</b></p>
}


export default CurrentTime;