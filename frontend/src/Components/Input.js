import './Input.css' ;
function Input(props){
    return(
        <section className="card-container">
            <section className="card">
                <img src = {props.product.images} alt="" className='card-img'/>
                <div className='details'>
                <h3> {props.product.brand} </h3>
                    <h2 className='card-title'>{props.product.title}</h2>
                    <p className='description-card'> {props.product.description} </p>
                    <p className='card-price'> price : {props.product.price} EGP </p>
                    <button  className="bnt" onClick={() => { 
                        console.log('you are going to buy ', props.product.title , props.product.price)
                    }}> buy </button>
                </div>
            </section>
        </section>
    );
}
  
export default Input;