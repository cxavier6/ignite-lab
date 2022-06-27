import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x0gh3600gp01ta6dyx8wcm/master',
    cache: new InMemoryCache()
})