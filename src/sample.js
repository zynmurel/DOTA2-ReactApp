const text = `import '../../Styles/PageStyles/consumermanagement.css'
import { Autocomplete, 
        TextField, 
        FormControl, 
        Select, 
        InputLabel, 
        MenuItem,
        Button } from '@mui/material';
import { useState } from 'react';
const ConsumerManagement = () => {
    const [age, setAge] = useState('') 
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return ( 
        <div className="consumerManagement">
           <div className="container">
           <div className="searchAddBar">
           <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={['The Godfather', 'Pulp Fiction']}
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Search Name/ID"/>}
            />
            
            <FormControl style={{width:'25vh'}}>
            <InputLabel id="demo-simple-select-label">Barangay</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

            <FormControl style={{width:'12vh'}}>
            <InputLabel id="demo-simple-select-label">Purok</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
            </Select>
            </FormControl>

            <Button variant="contained" style={{width:'35vh', justifySelf:'right'}}>Add Consumer</Button>
           </div>
           </div>
        </div>
     );
}
 
export default ConsumerManagement;`

console.log(text.replace(/\s+/g," "))