import Clients from "../../components/about/Clients"
import Features from "../../components/about/Features"
import Header from "../../components/about/Header"
import Images from "../../components/about/Images"
import Team from "../../components/about/Team"
import TestStats from "../../components/about/TestStats"
import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';

function About(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <Layout>
          <Helmet>
            <title>Code IT | About us</title>
            <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
            <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
            <meta name="robots" content='all' />
            <link rel="canonical" href="https://www.codeit.com/" />
            <meta name="author" content='Code IT' />
            <meta name="publisher" content='Code IT' />

            {/* Social Media Tags */}
            <meta property="og:title" content='Code IT | Software Agency' />
            <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
            <meta property="og:url" content="https://www.codeit.com/" />
            <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

            <meta name="twitter:title" content='Code IT | Software Agency' />
            <meta
                name="twitter:description"
                content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
            />
            <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

            <Navbar/>
            <div className="pt-28">
                <Header/>
                <TestStats/>
                <Team/>
                <div className="bg-white">
    </div>
            </div>
                <Footer/>
        </Layout>
    )
}
export default About