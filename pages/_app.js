import "../styles/globals.css"
import {MoralisProvider} from "react-moralis"
import Header from "../components/Header"


const APP_ID= process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL= process.env.NEXT_PUBLIC_SERVER_URL

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Component {...pageProps} />
        </MoralisProvider>    
            
    );
}

export default MyApp;