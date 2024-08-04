import { Div, Img, P } from "./ItemSection.styled";

function ItemSection({subtitle, altImg, srcImg, count}) {
    return (
        <Div to={`/wheel/${count}`}>
            <Img src={`./public/img/${srcImg}.png`} alt={altImg}/>
            <P>{subtitle}</P>
        </Div>
    )
}

export default ItemSection;