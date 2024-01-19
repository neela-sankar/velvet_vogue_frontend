import './FeatureProducts.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );
      
  
  return (
    <div className="featuresProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>
            Introducing our featured product at VelvetVogue: The Opulent Velvet Elegance Dress. Immerse yourself in unparalleled luxury with this exquisite piece, meticulously crafted from the finest velvet for a soft, sumptuous feel. 
            Elevate your wardrobe with this statement piece, where sophistication meets comfort, and make a lasting impression at any occasion.
            </p>
        </div>
        <div className="bottom">
            {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts