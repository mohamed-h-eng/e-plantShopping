import React, { useState } from 'react';
/* Project: e-plantShopping */
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css'
import CartItem from './CartItem';
import { addItem } from '../CartSlice';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                },
                {
                    name: "Peace Lily",
                    image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores from the air and purifies the atmosphere.",
                    cost: "$18"
                },
                {
                    name: "Boston Fern",
                    image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$20"
                },
                {
                    name: "Rubber Plant",
                    image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$17"
                },
                {
                    name: "Aloe Vera",
                    image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283036_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$14"
                }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                {
                    name: "Lavender",
                    image: "https://images.unsplash.com/photo-1506174030221-cf0660f585bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$20"
                },
                {
                    name: "Jasmine",
                    image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$18"
                },
                {
                    name: "Rosemary",
                    image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$15"
                },
                {
                    name: "Mint",
                    image: "https://as1.ftcdn.net/v2/jpg/02/10/69/97/1000_F_210699740_3Rbg9E9Iq9V7YqVn5ZgYv9mR9X7f6m9m.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$12"
                },
                {
                    name: "Lemon Balm",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, known for its calming effects.",
                    cost: "$14"
                },
                {
                    name: "Hyacinth",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description: "Hyacinth is a small genus of bulbous, spring-blooming perennials.",
                    cost: "$22"
                }
            ]
        },
        {
            category: "Insect Repellent",
            plants: [
                {
                    name: "Marigold",
                    image: "https://cdn.pixabay.com/photo/2022/02/22/05/40/marigold-7028063_1280.jpg",
                    description: "Natural repellent for bugs and pests.",
                    cost: "$10"
                },
                {
                    name: "Geranium",
                    image: "https://cdn.pixabay.com/photo/2019/07/04/19/53/geranium-4317231_1280.jpg",
                    description: "Known for their ability to repel mosquitoes.",
                    cost: "$15"
                },
                {
                    name: "Basil",
                    image: "https://cdn.pixabay.com/photo/2016/07/24/20/40/basil-1539239_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$9"
                },
                {
                    name: "Citronella",
                    image: "https://cdn.pixabay.com/photo/2018/10/11/07/12/citronella-4541241_1280.jpg",
                    description: "Citronella is a popular component in bug repellents.",
                    cost: "$16"
                },
                {
                    name: "Chrysanthemum",
                    image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/chrysanthemum-4480134_1280.jpg",
                    description: "Contains pyrethrum, which is used in many insecticides.",
                    cost: "$18"
                },
                {
                    name: "Petunia",
                    image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/petunia-4110726_1280.jpg",
                    description: "Repels aphids, tomato hornworms, asparagus beetles, and more.",
                    cost: "$12"
                }
            ]
        }
    ];

   const styleObj={
    backgroundColor: '#4caf50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }

   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
   };

   const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
   };

   const handleAddToCart = (product) => {
    dispatch(addItem(product));
   };

    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Greenery Meets Serenity</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e)=>handlePlantsClick(e)} style={styleA}>Plants</a></div>
                <div> <a href="#" onClick={(e)=>handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.3A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path><text x="100" y="140" fill="white" font-size="60px" font-weight="bold">{totalItems}</text></svg></h1></a></div>
            </div>
        </div>
        {!showCart? (
        <div className="product-grid">
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h1 className="category-title">{category.category}</h1>
                    <div className="product-list">
                        {category.plants.map((plant, plantIndex) => (
                            <div className="product-card" key={plantIndex}>
                                <img className="product-image" src={plant.image} alt={plant.name} />
                                <div className="product-title">{plant.name}</div>
                                <div className="product-description">{plant.description}</div>
                                <div className="product-cost">{plant.cost}</div>
                                <button 
                                    className={`product-button ${cartItems.some(item => item.name === plant.name) ? 'added' : ''}`} 
                                    onClick={() => handleAddToCart(plant)}
                                    disabled={cartItems.some(item => item.name === plant.name)}
                                >
                                    {cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
         ) : (
            <CartItem onContinueShopping={handlePlantsClick}/>
        )}
    </div>
    );
}

export default ProductList;
