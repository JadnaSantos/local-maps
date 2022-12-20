/* eslint-disable indent */
import React, { useContext } from 'react';
import MockAdapter from 'axios-mock-adapter';
import { renderHook, act } from '@testing-library/react';
import { api } from '../../service/api';
import { AuthContext, AuthProvider } from '../../contexts/AuthContext';


const apiMock = new MockAdapter(api);


describe('Auth hook', () => {
  it('should be hable to sign in', async () => {
    const response = {
      user: {
        id: 'user-123',
        name: 'User test',
        email: 'user@example.com',
      },
      token: 'token-123',
    };

    apiMock.onPost('/session').reply(200, response);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useContext(AuthContext), {
      wrapper: AuthProvider,
    });


    await result.current.singIn({
      email: 'user@example.com',
      password: '123456',
    });


    expect(setItemSpy).toHaveBeenCalledWith(
      '@LocalMaps:token',
      response.token,
    );

    expect(setItemSpy).toHaveBeenCalledWith(
      '@LocalMaps:user',
      JSON.stringify(response.user),
    );

    expect(response.user.email).toEqual('user@example.com');

  });

  // it('should be not hable to sign in', async () => {
  //   const response = {
  //     user: {
  //       id: 'user-123',
  //       name: 'User not exist',
  //       email: 'user@example.com',
  //     },
  //   };

  //   apiMock.onPost('/session').reply(200, response);

  //   await expect(response.user.email).rejects.toEqual(new AppError('Erro ao acessar, usuario ou senha incorreta'));

  // });


  it('should be hable to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@LocalMaps:token':
          return 'token-123';
        case '@LocalMaps:user':
          return JSON.stringify({
            id: 'user-123',
            name: 'User test',
            email: 'user@example.com',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useContext(AuthContext), {
      wrapper: AuthProvider,
    });



    act(() => {
      result.current.singOut();
    });
    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });

});

