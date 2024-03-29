import { useState } from "react";
import useFetch from "../Hook/useFetch";
import skillArray from "./skillArray";
import { useNavigate } from 'react-router-dom'

const AddHero = () => {
    const r= useFetch("http://localhost:8000/allHeroes");
    const {data: heroNames, error, isPending} = r;
    const result= useFetch("http://localhost:8000/Heroes");
    const navigate = useNavigate()
    heroNames && heroNames.sort(function(a, b) {
        return a.name.toLowerCase().localeCompare(
            b.name.toLowerCase()
        );
    });
    const { data:heroes} = result;
    const [name, setName] = useState();
    const [attribute, setAtt] = useState(); 
    const [description1, setDescription1] = useState();
    const [description2, setDescription2] = useState();
    const [type, setType] = useState();
    const [complexity, setComplex] = useState();
    const [isPending2, setIsPending2] = useState(false)
    let Nani=[];
    if(heroes && heroNames){Nani = heroNames.filter(hero=> {
        let v=true
        heroes.forEach(h=> {
            if(h.name===hero.name) v=false
        })
        return v
    })}
    const [skills, setSkills] = useState([])
    const handleSubmit = ()=>{
        const hero = {name ,img:name.replace(" ",""), attribute, description1, description2, type, complexity, skills}

        setIsPending2(true)
        fetch("http://localhost:8000/Heroes",{
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(hero)
        }).then(()=>{
                setIsPending2(false)
        })

        navigate('/heroes')
    }
   
    return ( 
        <div className="addHero">
            <h2>Add Hero</h2>
            <form onSubmit={handleSubmit}>
                <label>Hero Name:</label>
                <select 
                    required
                    value={name}
                    defaultValue={""}
                    onChange={(e)=> {
                        for(let hero of heroNames){
                            if(hero.name===e.target.value){
                                setSkills(skillArray(hero.skill))
                                setName(e.target.value)
                            }
                        }
                         }}
                >
                    
                    {Nani.length===0?<option value={""} disabled >All Heroes Selected</option>:<option value={""} disabled >Select Hero</option>}
                    { Nani.map((hero)=>(<option key={hero.name} value={hero.name}>{hero.name}</option>))}
                    {isPending&&<option value={""} disabled >Loading......</option>}
                    {error&&<option value={""} disabled >Unable to load</option>}
                </select>

                <label>Hero Attribute:</label>
                <select 
                    required
                    value={attribute}
                    defaultValue={""}
                    onChange={(e)=> setAtt(e.target.value)}
                >
                    <option value={""} disabled >Select an Attribute</option>
                    <option value="Strength">Strength</option>
                    <option value="Agility">Agility</option>
                    <option value="Intelligence">Intelligence</option>
                </select>

                <label>Hero Title:</label>
                <textarea 
                    required
                    placeholder="Hero title"
                    value={description1} 
                    onChange={(e)=>setDescription1(e.target.value)}
                />

                <label>Hero Description:</label>
                <textarea 
                    required
                    placeholder="Hero description"
                    value={description2} 
                    onChange={(e)=>setDescription2(e.target.value)}
                />
                
                <label>Hero Type:</label>
                <select 
                    required
                    value={type}
                    defaultValue={""}
                    onChange={(e)=> setType(e.target.value)}
                >
                    <option value={""} disabled >Select Type</option>
                    <option value="melee">Melee</option>
                    <option value="range">Range</option>
                </select>
                <label>Hero Complexity:</label>
                <select 
                    required
                    value={complexity}
                    defaultValue={""}
                    onChange={(e)=> setComplex(e.target.value)}
                >

                    <option value={""} disabled>Select Complexity</option>
                    <option value={"1"}>One</option>
                    <option value={"2"}>Two</option>
                    <option value={"3"}>Three</option>
                </select>
                <label >Hero Skills:</label>
                {skills.map((skill, index)=>{
                        return(
                            <div className="skills" key={skill.id}>
                                <label className="skillLabel">Skill {index+1}:</label>
                                <input 
                                
                                onChange={e =>{
                                    const title = e.target.value;
                                    setSkills(currentSkills =>currentSkills.map(x=> x.id=== skill.id?{
                                            ...x,
                                            title
                                        }:x
                                        )
                                    )
                                }}
                                placeholder="Skill Title"
                                value={skill.title}
                                />
                                <textarea 
                                
                                type="text" 
                                placeholder="Skill Description"
                                value={skill.description}
                                onChange={e =>{
                                    const description = e.target.value;
                                    setSkills(currentSkills =>{
                                        return(
                                            currentSkills.map(x=> x.id=== skill.id?{
                                                ...x,
                                                description
                                            }:x
                                            )
                                        )
                                        
                                    })
                                }}/>
                            </div>
                        )
                    })
                }
                <div>{JSON.stringify(skills)}</div>
                
                {!isPending2 && <button>Add Hero</button>}
                {isPending2 && <button disabled>Adding Hero</button>}
            </form>
        </div>
     );
}
 
export default AddHero;