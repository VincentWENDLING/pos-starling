
const Category = ({name, setCategory}: any) => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-primary-container text-on-primary-container shadow-md shadow-black rounded-xl text-2xl" 
             onClick={()=>setCategory(name)}>
            {name}
        </div>
    )
}


export default Category