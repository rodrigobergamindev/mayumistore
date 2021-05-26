
import styled from 'styled-components';

import Navbar from '../components/Navbar/Navbar'
import { Section } from '../components/Home/Section'
import Footer from '../components/Footer/Footer';
import Head from 'next/head'

const Body = styled.div`
      display: flex;
      flex-flow: column nowrap; 
      align-self: center;
      justify-self: center;
      
      @media (max-width: 931px) {
        flex-flow: column wrap;
        padding: 0;
      }
`



export default function Home() {
  return (
    <Body>
      <Head>
            <title>LOJINHA DA MAYUMI</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
      <Navbar/>
      <Section/>
      <Footer/>
    </Body>
  )
}
