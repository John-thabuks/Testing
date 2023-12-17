// import React, { useState } from 'react'

// function Form() {

//     const [name, setName] = useState("")
//     const[title, setTitle] = useState("")
//     const [selectedImage,setSelectedImage] = useState(null)
//     const [instructions, setInstruction] = useState("")
//     const [ingredients, setIngredients] = useState("")
//     // const [formData, setFormData] = useState({
//     //     "user": "",
//     //     "title":"",
//     //     "image": null,
//     //     "instructions":"",
//     //     "ingredients":""
//     // })

//     function handleSubmit(e){
//         e.preventDefault()

//         // setFormData({
//         //     ...formData, 
//         //     user: name, 
//         //     title:title,
//         //     image:selectedImage,
//         //     instructions: instructions,
//         //     ingredients: ingredients

//         // })
        
//         const newFormData = {
//                 user: name, 
//                 title:title,
//                 image:selectedImage,
//                 instructions: instructions,
//                 ingredients: ingredients
//         }
//         console.log(newFormData)

//         fetch("http://localhost:3005/recipes",{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newFormData)
//         })
//             .then((response) => response.json())
//             .then((data) => console.log(data))

//     }

//     return (
//         <div>

//             <h4>My Recipes</h4>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="">Name</label>
//                 <input onChange={(e) => setName(e.target.value)} type="text" />

//                 <label htmlFor="title">Title</label>
//                 <input onChange={(e) => setTitle(e.target.value)}  type="text" name='title' placeholder='Recipe Title'/>

//                 <br />
//                 <label htmlFor="image">Image</label>
//                 <input onChange={(e) => setSelectedImage(e.target.files[0])} type="file"  name='image' accept='image/*'/>

//                 <br />
//                 <label htmlFor="instructions">instructions</label>
//                 <input onChange={(e) => setInstruction(e.target.value)} type="text" name='instructions' placeholder='Recipe instructions'/>

//                 <br />
//                 <label htmlFor="ingredients">ingredients</label>
//                 <input onChange={(e)=> setIngredients(e.target.value)} type="text" name='instructions' placeholder='Recipe ingredients'/>

//                 <button>Submit</button>

//             </form>
//         </div>
//     )
// }

// export default Form


import React, { useState } from 'react';
import '../../src/index.css'; // Import your CSS file

function Form() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [instructions, setInstruction] = useState("");
    const [ingredients, setIngredients] = useState("");

    const resetForm = ()=>{
        setName("")
        setTitle("")
        setSelectedImage("")
        setInstruction("")
        setIngredients('')
    }
    console.log(resetForm)

    function handleSubmit(e) {
        e.preventDefault();

        const newFormData = {
            user: name,
            title: title,
            image: selectedImage,
            instructions: instructions,
            ingredients: ingredients
        };

        

        fetch("http://localhost:3005/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFormData)
        })
        .then((response) => response.json())
        .then((data) => console.log(data));

        resetForm()
    }

    return (
        <div className="form-container">
            <h4 className="form-header">My Recipes</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="name"
                        placeholder='User name'
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        id="title"
                        placeholder="Recipe Title"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        onChange={(e) => setSelectedImage(e.target.files[0])}
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        onChange={(e) => setInstruction(e.target.value)}
                        id="instructions"
                        name="instructions"
                        placeholder="Recipe instructions"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea
                        onChange={(e) => setIngredients(e.target.value)}
                        id="ingredients"
                        name="ingredients"
                        placeholder="Recipe ingredients"
                        required
                    ></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
