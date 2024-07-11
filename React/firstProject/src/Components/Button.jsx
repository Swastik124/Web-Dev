import "./Button.css"

function Button({a,b}){
    
    let x={
        color: a,
        borderRadius: b='rounded'?  '50px': '10px'
    }
    return(
    <div>
        <button style={x}>click</button>
    </div>
    )
}
export default Button