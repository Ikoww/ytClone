import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utilities/constants';


function Sidebar({ selectedCategory, setSelectedCategory}) {

  const currentSelected = selectedCategory;  
  return (
    <Stack 
     direction='row'
     sx={{
        overflowY: 'auto',
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
     }}
    >
        {categories.map(category => (
            <button 
            className='category-btn' 
            style={{background: category.name === currentSelected && '#FC1503', color: 'white'}}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}>

                <span style={{
                    color: category.name === currentSelected? 'white' : 'red',
                    marginRight: '12px'}}
                >

                    {category.icon}

                </span>


                <span style={{
                    opacity: category.name === currentSelected? '1' : '0.8'}}
                    >{category.name}</span>

            </button>
        ))}

    </Stack>
  )
}

export default Sidebar