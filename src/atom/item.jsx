export default function Item({src,alt,className}){
    return(
        <div className={className}>
            <img src={src} alt={alt} className="item-img"></img>
        </div>
    )
    
}