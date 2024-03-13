import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "b27uq2tl",
  dataset: "production",
  useCdn: true,
  // @ts-ignore
  token: import.meta.env.VITE_SANITY_TOKEN,
  apiVersion: "2024-03-07",
});

export default client;
