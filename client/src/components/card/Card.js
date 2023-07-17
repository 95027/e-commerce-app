import './card.css';
import {Link} from 'react-router-dom';

export const Card = ({item}) => {
  return (
    <Link to={`product/${item.id}`} className="link" >
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src="" alt="" className="mainImg" />
          <img src="" alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.price}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}
