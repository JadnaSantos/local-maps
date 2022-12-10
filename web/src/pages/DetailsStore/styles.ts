import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
`;

export const Content = styled.div`
    width: 700px;
    margin: 64px auto;

    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid #D3E2E5;
    border-radius: 20px;

    overflow: hidden;
`;

export const ContentDetails = styled.div`
    padding: 80px;
    display: flex;
    flex-direction: column;

    h2 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 30px;

        line-height: 54px;
        margin-bottom: 8px;
        font-weight: 800;
    }

    span {
        color: ${({ theme }) => theme.colors.text};
        line-height: 28px;
        margin-top: 24px;
    }

    strong {
        font-weight: 800;
    }

    footer {
        margin-top: 64px;
        border: 1px solid #B3DAE2;
        background: ${({ theme }) => theme.colors.info};

        border-radius: 20px;
        padding: 20px 0;
        text-align: center;
    }

    footer a {
        line-height: 24px;
        color: #0089A5;
        text-decoration: none;
    }
`;


