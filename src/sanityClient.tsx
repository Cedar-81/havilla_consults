// sanityClient.js
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "b27uq2tl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-07",
});

export default client;
