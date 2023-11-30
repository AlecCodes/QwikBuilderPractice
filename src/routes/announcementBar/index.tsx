import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city"
import { fetchOneEntry , Content, getBuilderSearchParams } from "@builder.io/sdk-qwik";

export const BUILDER_PUBLIC_API_KEY = '54f45988ca8c43a1802285452264bbc1'
export const BUILDER_MODEL = 'announcement-bar'

export default component$(() => {
    const location = useLocation()
    //
    const builderContentRsrc = useResource$<any>(() => {
        return fetchOneEntry({
            model: BUILDER_MODEL,
            apiKey: BUILDER_PUBLIC_API_KEY,
            options: getBuilderSearchParams(location.url.searchParams),
            userAttributes: {
                urlPath: location.pathname || "/"
            }
        })
    })

    return (
        <>
        <h1> HIII </h1>
        <Resource
            value = {builderContentRsrc}
            onPending={() => <div>Loading...</div>}
            onResolved={(content) => (
                <Content
                    model={BUILDER_MODEL}
                    content={content}
                    apiKey={BUILDER_PUBLIC_API_KEY}
                />
            )}
        />
        </>
    )

})