import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Head from "next/head"

const ContainerProduct = styled.div`
        margin-top: 4rem;

        display:flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 931px) {
            
            flex-flow: column wrap;
            
          }


`

const ContainerContent = styled.div`

            
        padding:2rem;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-flow: column nowrap;

        @media (max-width: 931px) {
            flex-flow: column wrap;
            
          }
        

`

const ContentProduct = styled.div`
        padding: 2rem;
        display:flex;
        align-items: flex-start;
        margin-bottom: 5rem;
        justify-content: space-between;

        @media (max-width: 931px) {
            padding:0;
          
            
            flex-flow: column wrap;
            
          }

`


const ContainerDesc = styled.div`
        width: 600px;
        height: 350px;
        display:flex;
        align-items: flex-start;
        flex-flow: column nowrap;
        padding: 2rem;
        
        @media (max-width: 931px) {
            padding:0;
            margin: 0;
            width: auto;
            height: auto;
            flex-flow: column wrap;
          }
`

const ContainerAvatar = styled.div`

      
        width: 450px;
        display:flex;
        align-items: flex-start;
        flex-flow: column nowrap;

        @media (max-width: 931px) {
            display: none;
          }

`

const ImgAvatar = styled.img`
        width: 380px;
        height: 350px;
        z-index:1;
        object-fit: fill;

      
        border-radius: 3px;
        transition: all 0.3s ease;
        transform: scale(1.0);

        &:hover {
            transform: scale(1.05);
            transition: all 0.3s ease;
                }

         @media (max-width: 931px) {
                display: none;
              }       
`

const BackgroundImageProduct = styled.div`
        width: 390px;
        height: 350px;
        position: absolute;
        margin-top: 20px;
        margin-left: 10px;

        background-color: #fc5c65;

        @media (max-width: 931px) {
            display: none;
          }     

`


const BarDesc = styled.div`
        width: 100px;
        height: 10px;
        background: #fc5c65;
`

const Description = styled.div`
        height:100%;
        width:100%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;

        img {
            display: none;
            @media (max-width: 931px) {
                display: flex;
                width: 100%;
                height: 210px;
                margin-top: 2rem;
                margin-bottom: 2rem;
                box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
                
              }
            
        }
                
        h1 {
            font-size: 2.2em;
            
            @media (max-width: 931px) {
                
                margin-bottom: 2rem;
              }
            
            
        }

        p {
            
            font-size: 1.2em;
            line-height: 1.5em;

            @media (max-width: 931px) {
                text-align: justify;
              }
            
        }

        button {
            width:200px;
            border: none;
            padding:10px;
            background-color: #dfe6e9;
            color: black;
            cursor: pointer;   
            font-size: 1.04em;
            opacity: 1; 
            border-radius: 2px;
            transition: 0.3s ease;

            &:hover{
                background-color: #fc5c65;
                transition: 0.3s ease;
                color: white;
            }

            @media (max-width: 931px) {
                background-color: #fc5c65;
                color: white;
              }
        }
`

export default function Produtos() {
    return (
        <div>
            <Head>
            <title>Produtos</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
           <Navbar/>
           <ContainerProduct>

                <ContainerContent>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/envernizados.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques Envernizados</h1>

                            <p>Peças compostas por diferentes ligas metálicas, envernizadas e com banho nacional, ampla variedade de berloques e separadores. Os berloques passam por um banho de verniz que prologam o brilho e se tornam
                                mais resistentes a corrosão.
                            </p>
                            <img src={'/img/catalogs/envernizadosmobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/14mhdwkTNlI4cZyRJ2sKw4cX4B6-af0mo/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/banhado.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques Banhados</h1>

                            <p>Peças banhadas a cinquenta milésimos de prata, possuem um brilho atenuado. Catálogo com ampla variedade de berloques, separadores e muranos.
                            </p>
                            <img src={'/img/catalogs/banhadomobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/12073ioScNAbrMEF-y-bQqYzpQZg8jglb/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/niquel.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Berloques em Níquel</h1>

                            <p>Berloques e separadores em níquel hipoalergênicos, ideal para quem possui a pele sensível e com alergia a diferentes compostos de metais ou a níquel. 
                                Ampla variedade de produtos com diferentes separadores e berloques. 
                            </p>
                            <img src={'/img/catalogs/niquelmobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/1vIuZH3gY3hxDmuId_QgwLm3Y2NYB2ZnE/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>




                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/pulseiras.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Pulseiras, Braceletes e Travas</h1>

                            <p>Pulseiras de diferentes tipos e fechos, com opções banhadas a prata e envernizadas, além de ampla variedade de pulseiras possuimos também braceletes e travas de segurança
                                que servem para evitar que os berloques caiam.
                            </p>
                            <img src={'/img/catalogs/pulseirasmobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/1Au_1vcOvM_DSm686KKpyBsvuuAg93qyY/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>



                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/muranos.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Muranos</h1>

                            <p>Muranos em níquel, banhados a prata e envernizados com muitas opções de cores e formatos variados.</p>
                            <img src={'/img/catalogs/muranosmobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/1WEDmwG9UwfQn3B5OJb8X6gKewbQ08W-v/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                    </ContentProduct>

                    <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/argolas.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Argolas</h1>

                            <p>Argolinhas folheadas e com zircônia para todos os gostos, consulte a disponibilidade das peças.</p>
                            <img src={'/img/catalogs/argolasmobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/14Qts8zYV_0S_lbeXEzH02PD1iXfdXQZm/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                        </ContentProduct>


                        <ContentProduct>

                        <ContainerAvatar>
                            <ImgAvatar src={'/img/catalogs/tiffany.jpeg'}/>
                            <BackgroundImageProduct/>
                        </ContainerAvatar>

                        <ContainerDesc>

                        <BarDesc></BarDesc>

                            <Description>
                            <h1>Colares e Pulseiras Tiffany & Co</h1>

                            <p>Colares e pulseiras da tão famosa marca Tiffany & Co, trabalhamos com peças de primeira linha.</p>
                            <img src={'/img/catalogs/tiffanymobile.jpeg'}/>
                            <a href="https://drive.google.com/file/d/1MK9tfPUxSL0F0XDcULc0Skj7zbrYeXZ9/view?usp=sharing" target="_blank"><button>Consulte o catálogo</button></a>
                            </Description>        

                        </ContainerDesc>


                        </ContentProduct>

                </ContainerContent>
                

           </ContainerProduct>

           <Footer/>
        </div>
    )
}
