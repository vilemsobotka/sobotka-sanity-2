import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "2xogkw30",
    dataset: "production",
    apiVersion: "v2022-03-07",
    useCdn: true,
})