import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'

interface Props {
    children: React.ReactNode;
}

const Auth0ProviderWithHistory = ({ children }: Props) => {

    return (
        <Auth0Provider
        domain='dev-8j1ztg6y.us.auth0.com'
        clientId='EiEggNwGhnQx7OSkSjaW8laXRcX6Neo4'
        redirectUri={window.location.origin}
        // onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
        
    )
    }
 
 export default Auth0ProviderWithHistory