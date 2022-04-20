import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hook/useFetch";

const Heroes = () => {

    const { data:heroes, isPending, error }= useFetch("http://localhost:8000/Heroes");
    
    const [attribute, setAttribute] = useState(null)
    const Heroes= (attribute)=>{
        if(!attribute){
            return (heroes.map(hero=>(
                <Link to={`/details/${hero.id}`} key={hero.id}>
                <div style={{backgroundImage: 'url(/heroes/'+hero.img+'.webp)'}} className="grid-item" >
                    <div className="content">
                    <img src={require('./stats/'+hero.attribute+'.jpeg')} alt="" />
                    <h2>{hero.name}</h2>
                    </div>
                </div>
                </Link>
            )))
        }else if(attribute==attribute){
            const newHeroes = heroes.filter(hero => hero.attribute===attribute)
            return (
                newHeroes.map(hero =>(
                <Link to={`/details/${hero.id}`} key={hero.id}>
                <div style={{backgroundImage: 'url(/heroes/'+hero.img+'.webp)'}} className="grid-item" >
                    <div className="content">
                    <img src={require('./stats/'+hero.attribute+'.jpeg')} alt="" />
                    <h2>{hero.name}</h2>
                    </div>
                </div>
                </Link>
            )))
        }
    }
    const clickAtt = (attribute) =>{
        setAttribute(attribute);
    }
            return ( 
                
                <div className="heroes">
                    <h1>CHOOSE YOUR HERO</h1>
                    <p>From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
                    <button onClick={()=> clickAtt(null)}>All</button>
                    <button onClick={()=> clickAtt("Strength")}>Strength</button>
                    <button onClick={()=> clickAtt("Agility")}>Agility</button>
                    <button onClick={()=> clickAtt("Intelligence")}>Intelligence</button>
                    <div className="grid-container">
                    {heroes && Heroes(attribute)}
                    {isPending && <div><h1 style={{color: "white", margin: "10% auto", textAlign:"center"}}>Loading.....</h1></div>}
                    {error && <div style={{color: "white", margin: "10% auto", textAlign:"center", fontSize: "40px"}}>{error}</div>}
                    </div>
                </div>
            );
    
}
 
export default Heroes;