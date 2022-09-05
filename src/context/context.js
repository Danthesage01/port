import React,  {useContext, useState} from "react";
import data from "../data.js"


const DanContext = React.createContext()

const DanProvider = ({children}) =>{
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message:""
})
const [darkMode, setDarkMode] = useState("dark-mode")
const [projects, setProjects] = useState(data)

const category = projects.reduce((total, item) => {
    if (!total.includes(item.category)) {
      total.push(item.category)
    }
    return total
  }, ["ALL"])
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
    category,
    }}>
    {children}
  </DanContext.Provider>
)}

export const useGlobalContext = () =>{
  return useContext(DanContext)
}

export {DanProvider}
