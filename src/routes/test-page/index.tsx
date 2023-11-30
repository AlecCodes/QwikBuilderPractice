import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { fetchOneEntry, Content } from "@builder.io/sdk-qwik";
import AnnouncementBar from "../announcementBar";

export const BUILDER_PUBLIC_API_KEY = '54f45988ca8c43a1802285452264bbc1'
//define a content model which the CMS layer can use via the content API
export const BUILDER_MODEL = 'page'

//We will use the useBuilderContent API which allows our 'page' model to access Builder Content
export const useBuilderContent = routeLoader$(async ({url, error}) => {
    
      const builderContent = await fetchOneEntry({
        model: BUILDER_MODEL,
        apiKey: BUILDER_PUBLIC_API_KEY
      })
      //this is how our component gets builder content
      return builderContent
  })


export default component$(() => {

  const content = useBuilderContent()

  return (
    <>
        {/* //content component needs the API Key + Model name so it knows where to look for content */}
        <Content
        model={BUILDER_MODEL}
        content = {content.value}
        apiKey= {BUILDER_PUBLIC_API_KEY}
        />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
