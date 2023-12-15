import { component$, Resource, useResource$, useStore } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { RegisteredComponent} from "@builder.io/sdk-qwik"

export const epicButton = component$((props: {text: string}) => {
    return(
        <div>
            <h3>{props.text.toUpperCase()}</h3>
            <button onClick$={() => console.log("YOUR EPIC")}>click me</button>
        </div>
    )
})

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
    {
        component: epicButton,
        name: "myEpicButton",
        inputs: [
            {
                name: 'text',
                type: 'string',
                defaultValue: "Helloooo"
            }
        ]
    }
]