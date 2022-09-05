import React,  {useContext, useState} from "react";
import data from "../data.js"
const DanContext = React.createContext()

const DanProvider = ({children}) =>{
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message:""
})
const [projects, setProjects] = useState(data)
const [darkMode, setDarkMode] = useState("dark-mode")
  const allCategories = projects.reduce((total, item) => {
    if (!total.includes(item.category)) {
      total.push(item.category)
    }
    return total
  }, ["ALL"])
const [categories, setCategories] = useState(allCategories)
const [readMore, setReadMore] = useState(true)
const [stateCategory, setCategory] = useState("ALL")

  const handleClick = (e, category) => {
    setCategory(e.target.textContent)
    filterProjects(category)
  }
const toggleMode = () =>{
  if(darkMode === "light-mode"){
    setDarkMode("dark-mode")
  }else{
    setDarkMode("light-mode")
  }
}

const handleChange = (e) =>{
  const {name, value} = e.target
  setFormData(prevState=>{
    return{
      ...prevState,
      [name] : value
    }
  })
}

const filterProjects = (cat)=>{
  if(cat === "ALL"){
    setProjects(data)
    return
  }
  let newProjects = [...data] 
  newProjects = newProjects.filter(project=>project.category === cat)
  setProjects(newProjects)
}

  
return(
  <DanContext.Provider value={{
    name:formData.name, 
    email:formData.email,
    message:formData.message,
    handleChange,
    darkMode,
    toggleMode,
    projects,
    setProjects,
    categories,
    setCategories, 
    readMore, 
    setReadMore,
    handleClick,
    stateCategory
    }}>
    {children}
  </DanContext.Provider>
)}

export const useGlobalContext = () =>{
  return useContext(DanContext)
}

export {DanProvider}
