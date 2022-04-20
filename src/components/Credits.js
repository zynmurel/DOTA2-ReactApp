import { useState } from "react";

const Credits = () => {
    let [members, setMembers]= useState(
        [{name: 'Sean Maruel Comingues', age: 23, id:1},
        {name: 'Christine Jumamil', age: 21, id:2},
        {name: 'Mariel Madijanon', age: 22, id:3}]
    );
    return ( 
        <div className="credits">
            
        </div>
       

     );
}
 
export default Credits;