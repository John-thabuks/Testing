import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Searched() {

    const[searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()

    const fetchSearched= async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ebbb33ca04e54326a40256cc799992b8&query=${name}`)
        
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    useEffect(()=>{
        fetchSearched(params.search)
    },[params.search])

  return (
    <Grid>
        {searchedRecipes && searchedRecipes.map((item) =>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image}  />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}


const Grid = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;

    }
    a{
        text-decoration: none;

    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched