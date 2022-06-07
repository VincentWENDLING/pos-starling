
const Category = (props: any) => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-cyan-400" onClick={()=>props.setCat(props.name)}>{props.name}</div>
    )
}


export default Category