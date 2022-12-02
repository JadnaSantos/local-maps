import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;
  overflow: hidden;
`;

export const toastTypeVariations = {
  info: css`
    background:${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.toast};
  `,
  success: css`
    background:${({ theme }) => theme.colors.sucess};
    color: ${({ theme }) => theme.colors.sucess_color};
  `,
  error: css`
    background:${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error_color};
  `
};

export const Toast = styled.div<ToastProps>`
  width: 360px;
  position: relative;

  padding: 16px 30px 16px 16px;
  border-radius: 10px;

  box-shadow: 2px 2px 8px rgba(0,0,0, 0.2);
  display: flex;


  ${(props) => toastTypeVariations[props.type || 'info']}


  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;

    border: 0;
    background: transparent;
    color: inherit
  }
`;
