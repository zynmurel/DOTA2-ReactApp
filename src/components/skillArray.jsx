const skillArray = (num) => {
    
    const skills=[]
    for(let x=0;x<num;x++){
    const oneObbj={
        title:"",
        description:"",
        id: x,
        name: x+1
    }
        skills.push(oneObbj)
    }
    return ( 
        skills
     );
}
 
export default skillArray;