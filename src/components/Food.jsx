export default function Food({name, calorias, img}){
    return(
        <div className="card"> 
            <img src= {img} />
            <div className="nome-lanche">
            <h1>{name}</h1>
            <p>total caolorias: <span>{calorias}</span></p>
            <button>Buy</button>

            </div>
        </div>
    )
}