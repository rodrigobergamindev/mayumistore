import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import React from 'react';
import Head from 'next/head'

const ContainerAbout = styled.section`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    align-items: center;
    margin-bottom: 14rem;

    @media (max-width: 931px) {
        display:none;
      }

    margin-top: 5rem;

    .headerAbout {
        height:30vh;
        
        
        display: flex;
        flex-flow: row nowrap;
        width: 1200px;
        
        align-items: flex-start;

    

        .titleAbout {
            flex: 1;
            font-size: 2.2em;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
            padding: 2rem;

            

            h1 {
                font-weight: 400;
                margin-top: 1rem;
            }

            .barAbout {
                
                width: 100px;
                height: 10px;
                background-color:#fc5c65;
            }
        }

        .descriptionAbout {
            font-size: 1.2em;
            
            padding: 4rem;
            margin-top: 1rem;
            flex:1;

            p{
                line-height: 1.5em;
                text-align: justify;
            }
        }
    }

    .bodyAbout {

        height: 90vh;
        width: 1200px;
        display: flex;
        flex-flow: column nowrap;
      

        align-items: center;
        justify-content: center;


        .containerBodyAbout {
            width: 1200px;
            display: flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
            height: 90vh;
           


            .avatarAbout {
                
              
                img {
                    z-index:1;
                    width: 550px;
                    height: 640px;
                    position:absolute;
                    top: 320px;
                    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                    border-radius: 2px;
                    transition: all 0.3s ease;
                    transform: scale(1.0);

                    &:hover {
                        transform: scale(1.05);
                        transition: all 0.3s ease;
                    }
                }

                .backgroundAvatar {
                    height: 640px;
                    width: 580px;
                    margin-left: 20px;
                    background:#fc5c65;
                    position: absolute;
                    top: 360px;
                }
            }
    
    
            .bodyAboutDescription {
                margin-right: 30px;
                padding: 2rem;
                height: 30vh;
                margin-top: 5rem;
                width: 500px;
                
               
                display: flex;
                flex-flow: column nowrap;
                justify-content: flex-start;

                

                h1{
                    color:#fc5c65;
                    font-size: 2.2em;
                    margin-bottom: 2rem;
                }
                p {
                    font-size: 1.2em;
                    text-align: justify;
                    line-height: 1.5em;
                }

                
            }
        }
        

    
    }
`


const ContainerMobile = styled.section`
    
    display:none;
    @media (max-width: 931px) {
        display:flex;
        margin-top: 3rem;
        padding: 2rem;
        flex-flow: column wrap;
        
      }

    
`

const HeaderAbout = styled.div`

    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    
   
    h1 {
        font-size: 2em;
    }

    p {
        text-align: justify;
    }



`

const BarAbout = styled.div`
      width: 100px;
      height: 10px;
      background-color:#fc5c65;
      margin-top: 2rem;
      margin-bottom: 0.5rem;
`


const BodyAbout = styled.div`

        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;

        

`


const BodyDescription = styled.div`

        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        margin-top: 1rem;

        h1 {
            font-size: 2em;
            color: #fc5c65;
        }

        p{
            text-align: justify;
        }

        img {
            max-width: 100%;
        }


`

export default function About() {
    return (
        <div>
            <Head>
            <title>Sobre</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar/>

            <ContainerMobile>
                <HeaderAbout>
                    <BarAbout/>
                    <h1>SOBRE MIM</h1>
                    <p>Meu nome ?? Beatriz Mayumi Yashiki, tenho 24 anos e sou propriet??ria da Lojinha da Mayumi. Assim como voc??s, 
                            sou apaixonada em acess??rios, pulseiras, berloques, argolas e tudo o que voc?? vai encontrar por aqui.
                            Meu maior objetivo ?? oferecer a voc?? um produto de excelente qualidade e prestar o melhor atendimento poss??vel, para que voc?? se sinta em casa.
                    </p>
                </HeaderAbout>

                <BodyAbout>
                
                
                <BodyDescription>

                    <img src={"/img/aboutmobile.jpeg"} alt="avatar"/>

                    <BarAbout/>
                    <h1>O QUE ?? A LOJINHA?</h1>

                    <p>Desde sempre fui apaixonada por empreender, a Lojinha da Mayumi surgiu quando decidi unir minha paix??o por acess??rios femininos a
                            minha outra paix??o que ?? vender. Como consumidora o atendimento conta muito e por isso prestamos a voc?? um atendimento personalizado e individual de acordo com o seu gosto!
                        </p>
                        <p>Somos colecionadores de momentos, e portanto, transformamos esses momentos em pulseiras recheadas de amor e significado. Trabalhamos com as melhores pe??as do mercado e com uma variedade ampla
                            de produtos, al??m do atendimento, temos um compromisso com a qualidade do que vendemos.
                        </p>
                    
                </BodyDescription>
                </BodyAbout>
            </ContainerMobile>
            <ContainerAbout>
                <div className="headerAbout">

                    <div className="titleAbout">
                        <div className="barAbout">
                            
                        </div>
                        <h1>SOBRE MIM</h1>
                    </div>

                    <div className="descriptionAbout">
                        <p>Meu nome ?? Beatriz Mayumi Yashiki, tenho 24 anos e sou propriet??ria da Lojinha da Mayumi. Assim como voc??s, 
                            sou apaixonada em acess??rios, pulseiras, berloques, argolas e tudo o que voc?? vai encontrar por aqui.
                            Meu maior objetivo ?? oferecer a voc?? um produto de excelente qualidade e prestar o melhor atendimento poss??vel, para que voc?? se sinta em casa.
                        </p>
                    </div>
                </div>

                <div className="bodyAbout">
                    <div className="containerBodyAbout">

                    <div className="avatarAbout">
                        <img src={"/img/about.jpeg"} alt="avatar"/>
                        <div className="backgroundAvatar"></div>
                    </div>

                    <div className="bodyAboutDescription">
                     
                        <h1>O QUE ?? A LOJINHA?</h1>
                        <p>Desde sempre fui apaixonada por empreender, a Lojinha da Mayumi surgiu quando decidi unir minha paix??o por acess??rios femininos a
                            minha outra paix??o que ?? vender. Como consumidora o atendimento conta muito e por isso prestamos a voc?? um atendimento personalizado e individual de acordo com o seu gosto!
                        </p>
                        <p>Somos colecionadores de momentos, e portanto, transformamos esses momentos em pulseiras recheadas de amor e significado. Trabalhamos com as melhores pe??as do mercado e com uma variedade ampla
                            de produtos, al??m do atendimento, temos um compromisso com a qualidade do que vendemos.
                        </p>
                    </div>
                    
                </div>
                </div>

                
            </ContainerAbout>

            <Footer/>
        </div>
    )
}
