/* eslint-disable indent */
import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
import { api } from '../../service/api';
import { useAuth } from '../../hooks/useAuth';
import { act } from 'react-dom/test-utils';


const apiMock = new MockAdapter(api);


describe('AuthContext', () => {
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

        const { result } = renderHook(() => useAuth(), {
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

        console.log(result);

    });

});

