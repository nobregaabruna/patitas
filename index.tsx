import { HomeDiv, Logoimagem } from "./style";
import logoPatitas from "../../assets/Logo.svg";

export default function Home() {
    return (
        <HomeDiv>
            <Logoimagem src={logoPatitas}/>
        </HomeDiv>
    );
}
