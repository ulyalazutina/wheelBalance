import { useParams } from "react-router-dom";

function WheelPage() {
    let { countSection } = useParams();
    return (
        <div>{countSection}</div>
    )
}

export default WheelPage;