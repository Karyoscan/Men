const Deneme = (props) => {
  
  const style = props.on ? 'gray':'white'
  return (
    <div

key={props.key}
onClick={props.HandleClick}
style={{ backgroundColor:style}}  className='kare'>

    </div>
  )
}

export default Deneme