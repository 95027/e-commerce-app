import { Card } from '../card/Card';
import   './featuredProducts.css';

export const FeaturedProducts = ({type}) => {

  const data = [
    {},
    {},
    {},
    {},
  ]
  return (
    <div className='fp'>
      <div className="fp-top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus repellat delectus exercitationem perferendis dolorum autem, consequatur quia ex maiores maxime necessitatibus. Libero officiis facere qui earum doloribus ipsum atque?</p>
      </div>
      <div className="fp-bottom">
        {
          data.map((item)=>{
            return <Card item={item} key={item.id}/>
          })
        }
      </div>
    </div>
  )
}
