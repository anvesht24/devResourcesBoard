const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p className="category">{props.category}</p>
      <p>{props.description}</p>
      <a href={props.link} target="_blank">
        <button>Visit Resource</button>
      </a>
    </div>
  )
}

export default Card