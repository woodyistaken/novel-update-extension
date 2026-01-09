import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import Button from "./Button.tsx"

const rootDiv =document.createElement("div");
rootDiv.id="root"

document.body.prepend(rootDiv)
createRoot(rootDiv).render(
    <StrictMode>
        <Button/>
    </StrictMode>
)