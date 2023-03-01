import styled from "styled-components";

const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    text-align: center;
    bottom: 0;
    left: 1%;
    
    h1 {
        font-size: 2vmin;
        font-weight: 200;
        color: #ced4da;
        text-shadow: 0px 0px 10px #000000;
    }

    a {
        color: beige;
        text-decoration: solid underline;
        text-decoration-color: orange;
    }

    a:hover {
        text-shadow: 0px 0px 10px white;
    }

    @media screen {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h1>
                {" "}
                Made with 💖 by{" "}
                <a href="https://github.com/notbozho">@notbozho</a>
            </h1>
        </FooterContainer>
    );
};

export default Footer;
