import styled from 'styled-components'



const StyledFooter = styled.footer`


    background-color:#fc5c65;

    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-top: 2px solid #f1f1f1;
    margin-top: 2rem;


    .containerFooter {
        margin-top: 2rem;
        display:flex;
        align-items: flex-start;
        justify-content: center;
        flex-flow: column wrap;
        width: 1200px;
        

        @media (max-width: 931px) {
            flex-flow: column wrap;
            max-width: 340px;
          }


        .titleFooter {
            padding: 1rem;
            h1 {
                font-size: 1.2em;
                font-weight: 400;
                line-height:1.2em;

                @media (max-width: 931px) {
                    padding: 0.6rem;
                  }

            }

            h4 {
                font-weight: 400;
                @media (max-width: 931px) {
                    padding: 0.6rem;
                  }
            }
        }
    
        .containerItems {
            padding: 1rem;
            
            width: 100%;
            
            display:flex;
            flex-flow: row nowrap;
            align-items: flex-start;
            justify-content: space-between;
          

            @media (max-width: 931px) {
                flex-flow: row wrap;
                justify-content: space-between;
              }

            .columnFooter {
                display:flex;
                flex-flow: column nowrap;
                align-items: flex-start;
                justify-content: flex-start;

                @media (max-width: 931px) {
                    flex-flow: column wrap;
                    padding: 0.6rem;
                  }
           
                

                p {
                    width: 180px;
                    line-height: 1.2em;
                }

                ul {
                    list-style: none;
                    display:flex;
                    flex-flow: column nowrap;
                    justify-content: space-between;
                    
                  

                }
            }
        }

    }

    
`

export default function Footer() {
    return (
        <StyledFooter>
            <div className="containerFooter">
            <div className="titleFooter">
                    <h1>LOJINHA DA MAYUMI</h1>
                    <h4>Arigatou gozaimasu ⛩</h4>
                </div>
            <div className="containerItems">
                

                <div className="columnFooter">
                    <h3>Produtos</h3>

                    <ul>
                        <li><a href="/Produtos">Berloques</a></li>
                        <li><a href="/Produtos">Pulseiras</a></li>
                        <li><a href="/Produtos">Argolas</a></li>
                        <li><a href="/Produtos">Muranos</a></li>
                        <li><a href="/Produtos">Colares e Pulseiras Tiffany</a></li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Fale Conosco</h3>
                    <ul>
                        <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%20gostaria%20de%20falar%20com%20o%20Servi%C3%A7o%20de%20Atendimento%20ao%20Cliente." target="_blank">SAC</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20setor%20de%20vendas." target="_blank">Vendas</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20o%20setor%20de%20suporte!" target="_blank">Suporte</a></li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Siga-nos</h3>

                    <ul>
                        <li><a href="https://www.instagram.com/lojinha_da_mayumi/" target="_blank">Instagram</a></li>
                        <li><a href="https://www.facebook.com/lojinhadamayumi/" target="_blank">Facebook</a></li>
                        <li><a href="https://vm.tiktok.com/ZMegKPN55/" target="_blank">TikTok</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=551129639226&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" target="_blank">WhatsApp</a></li>
                    </ul>
                </div>

                <div className="columnFooter">
                    <h3>Horário de Funcionamento</h3>
                    <p>24 horas por dia de Segunda a Domingo</p>

                    <h3 style={{marginTop:'40px'}}>São Paulo, SP - Brasil</h3>
                </div>
            </div>
            </div>
            
            
    
        </StyledFooter>
    )
}
