import { ContentComponent} from "./ContentComponent"
import { FooterComponent} from "./FooterComponent"
import { HeaderComponent} from "./HeaderComponent"

export function AppComponent() {
    return (
        <div>
            <HeaderComponent></HeaderComponent><hr/>
            <ContentComponent></ContentComponent><hr/>
            <FooterComponent></FooterComponent><hr/>
        </div>
    )
}