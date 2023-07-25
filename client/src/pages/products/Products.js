import React from 'react'

export const Products = () => {
  return (
    <div className='products'>
      <div className="pleft">
        <div className="filterItem">
          <h2>Product categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" />
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000}/>
            <span>1000</span>
          </div>

        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name='price'  />
            <label htmlFor="asc">Price (lowest price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name='price'  />
            <label htmlFor="desc">Price (highest price)</label>
          </div>
        </div>
      </div>
      <div className="pright">
        <img className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>

    </div>
  )
}
