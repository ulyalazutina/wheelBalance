import ItemSection from "../../components/ItemSection/ItemSection";
import { Container, H2, Wrap, WrapInner } from "./SectionPage.styled";

function SectionPage() {
    return (
        <Wrap>
            <WrapInner>
                <H2>Выберите количество секций на Вашем колесе баланса</H2>
                <Container>
                    <ItemSection count={'6'} subtitle={"6 секций"} altImg={"Диаграмма с 6 секциями"} srcImg={"sixSection"} />
                    <ItemSection count={'8'} subtitle={"8 секции"} altImg={"Диаграмма с 8 секциями"} srcImg={"eightSection"} />
                    <ItemSection count={'12'} subtitle={"12 секций"} altImg={"Диаграмма с 12 секциями"} srcImg={"twentySection"} />
                </Container>
            </WrapInner>
        </Wrap>
    )
}

export default SectionPage;