import '../index.css'

function Card(props) {
    return (
        <div className='card'>
            <h2>{props.title}</h2>
        <div>
        <button className='btn'>Image Resizer</button>
        </div>
  </div>
    );
}

export default Card;