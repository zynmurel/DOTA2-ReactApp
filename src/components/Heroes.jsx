import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../Hook/useFetch";
const Heroes = () => {
    
    const result= useFetch("http://localhost:8001/Heroes");
    const { data:heroes, isPending, error } = result;
    console.log(result)
    
    const [attribute, setAttribute] = useState(null)
    const [isActive, setIsActive] = useState(null);
    const [buttonIsAct, setButtonIsAct] = useState("all");
    const Heroes= (attribute)=>{
        heroes.sort(function(a, b) {
            return a.name.toLowerCase().localeCompare(
                b.name.toLowerCase()
            );
        });
        console.log(heroes);
        if(!attribute){
            return (heroes.map(hero=>(
                <Link to={`/details/${hero.id}`} key={hero.id}>
                <div style={{backgroundImage: 'url(/heroes/'+hero.img+'/'+hero.img+'.webp)', filter:`brightness(${isActive===hero.id? 1: 0.7})`}} className="grid-item" onMouseEnter={()=>{setIsActive(hero.id)}} onMouseLeave={()=>{setIsActive(null)}}>
                    <div className="content" style={{visibility: `${isActive=== hero.id? "visible": "hidden"}`}}>
                    <img src={require('./stats/'+hero.attribute+'.jpeg')} alt="" />
                    <h2>{hero.name.toUpperCase()}</h2>
                    </div>
                </div>
                </Link>
            )))
        }else if(attribute){
            const newHeroes = heroes.filter(hero => hero.attribute===attribute)
            return (
                newHeroes.map(hero =>(
                <Link to={`/details/${hero.id}`} key={hero.id}>
                <div style={{backgroundImage: 'url(/heroes/'+hero.img+'/'+hero.img+'.webp)', filter:`brightness(${isActive===hero.id? 1: 0.7})`}} className="grid-item" onMouseEnter={()=>{setIsActive(hero.id)}} onMouseLeave={()=>{setIsActive(null)}}>
                    <div className="content" style={{visibility: `${isActive=== hero.id? "visible": "hidden"}`}}>
                    <img src={require('./stats/'+hero.attribute+'.jpeg')} alt="" />
                    <h2>{hero.name.toUpperCase()}</h2>
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
                    <div className="top">
                    <h1>CHOOSE YOUR HERO</h1>
                    <p>From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
                    </div>
                    <div className="buttons">
                    <button onClick={()=> {clickAtt(null); setButtonIsAct("all")}} style={buttonIsAct==="all"?{filter: `grayscale(0)`,backgroundColor:"black", borderColor:"yellow"}:{}}>All<img src={require("./stats/Strength.jpeg")} alt="" /><img src={require("./stats/Agility.jpeg")} alt="" /><img src={require("./stats/Intelligence.jpeg")} alt="" /></button>
                    <button onClick={()=> {clickAtt("Strength"); setButtonIsAct("strength")}} style={buttonIsAct==="strength"?{filter: `grayscale(0)`,backgroundColor:"black", borderColor:"rgb(253, 33, 33)"}:{}} >Strength <img src={require("./stats/Strength.jpeg")} alt="" /></button>
                    <button onClick={()=> {clickAtt("Agility"); setButtonIsAct("agility")}} style={buttonIsAct==="agility"?{filter: `grayscale(0)`,backgroundColor:"black", borderColor:'rgb(33, 253, 51)'}:{}}>Agility <img src={require("./stats/Agility.jpeg")} alt="" /></button>
                    <button onClick={()=> {clickAtt("Intelligence"); setButtonIsAct("intelligence")}} style={buttonIsAct==="intelligence"?{filter: `grayscale(0)`,backgroundColor:"black", borderColor:"rgb(33, 205, 253)"}:{}}>Intelligence <img src={require("./stats/Intelligence.jpeg")} alt="" /></button>
                    <Link to={"/addHero"}><button className="Add"><img src={require('./stats/plus.ico')} alt="plus" className="plus"/>Add Hero</button></Link>
                    </div>
                    <div className="grid-container">
                    {heroes && Heroes(attribute)}
                    {isPending && <div><h1 style={{color: "white", margin: "10% auto", textAlign:"center"}}>Loading.....</h1></div>}
                    {error && <div style={{color: "white", margin: "10% auto", textAlign:"center", fontSize: "40px"}}>{error}</div>}
                    </div>
                </div>
            );
    
}
 
export default Heroes;