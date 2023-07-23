import { Categories } from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';
import { FeaturedProducts } from '../../components/featuredProducts/FeaturedProducts';
import { Slider } from '../../components/slider/Slider';


export const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="featured" />
      <Categories/>
      <FeaturedProducts type="trending" />
      <Contact/>
    </div>
  )
}
