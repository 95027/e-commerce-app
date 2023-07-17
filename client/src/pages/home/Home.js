import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { Slider } from '../../components/slider/Slider';


export const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  )
}
