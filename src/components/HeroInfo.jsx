import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hook/useFetch";
import { useNavigate } from "react-router-dom";

const HeroDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const { data:hero, isPending, error } = useFetch(`http://localhost:8001/Heroes/${id}`);
    const complexity = (y) =>{
        const arr = [];
        let x=0;
        for(x=0; x<y;x++){
            arr.push(<li key={x.toString()} className={"on"}><img src={require('../images/diamonds2.png')} alt="on"/></li>);
        }
        for(x=0; x<(3-y); x++){
            arr.push(<li key={x.toString()+'no'} className={"off"}><img src={require('../images/diamonds.png')} alt="off"/></li>);
        }
        
        return arr;
    }
    const handleClick = () =>{
        fetch(`http://localhost:8001/Heroes/${hero.id}`, {
            method: "DELETE"
        }).then(()=>{
            navigate('/heroes')
        })

    }
    const [activeSkill, setActiveSkill] = useState(undefined)
    const grid = (num) =>{
        let grids = []
        for(let x=0; x<=num;x++){
            grids.push("auto");
        }
        return grids
    }

    return ( 
        <div className="heroInfo">
            {isPending && <div><h1 style={{color: "white", margin: "10% auto", textAlign:"center"}}>Loading.....</h1></div>}
            {error && <div style={{color: "white", margin: "10% auto", textAlign:"center", fontSize: "40px"}}>{error}</div>}
            {hero && (
                <div className="heroDetails">
                        <div className="left">
                                <div className='top'>
                                    <img src={require('./stats/'+hero.attribute+'.jpeg')} alt="a"/>
                                    <h4>{hero.attribute}</h4>
                                </div>
                                <h1>{hero.name.toUpperCase()}</h1>
                                <h5>{hero.description1}</h5>
                                <p>{hero.description2}</p>
                                <h4>ATTACK TYPE</h4>
                                <div className="bot">
                                    {hero.type && <img className="type" src={require('../images/'+hero.type+'.png')} alt="melee"/>}
                                    {hero.type && <h6>{hero.type.toUpperCase()}</h6>}
                                </div>
                                <div>
                                    <h4>COMPLEXITY</h4>
                                    <div className="diamonds">
                                    <ul>{complexity(hero.complexity)}</ul>
                                    </div>
                                </div>
                    </div>
                    <div className="right" style={{backgroundImage:`url(/heroes/${hero.img}/${hero.img}.png)`}}>
                        <div className="container">
                        <h3>ABILITIES</h3>
                        <div className="grid-container" style={{gridTemplateColumns:`${grid(!hero.skills?0:hero.skills.length).toString().replace(/,/g," ")}`}} >
                            <div id="zero" className="grid-item"style={{backgroundImage:`url(/heroes/Talents.png)`}} >
                                <div className="tooltip0" style={{backgroundImage: `url(/heroes/${hero.img}/${hero.img}T.png)`}}>
                                </div>
                            </div>
                           {hero.skills && 
                                hero.skills.map(skill =>(
                                    <div key={skill.name} id={skill.name} className="grid-item" style={{backgroundImage:`url(/heroes/${hero.img}/${skill.name}.webp)`}} onMouseEnter={()=>setActiveSkill(skill.id)} onMouseLeave={()=>setActiveSkill(undefined)}>
                                        <div id={skill.name} className="skill" style={{visibility:`${activeSkill === skill.id? 'visible': 'hidden'}`}} >
                                            <h2>{skill.title}</h2>
                                            <p>{skill.description}</p>
                                        </div>
                                    </div>
                                ))
                           }
                        </div>

                        </div>
                        </div>
                        <button onClick={handleClick}>Delete</button>
                    </div>
            )}
        </div>
     );
}
 
export default HeroDetails;