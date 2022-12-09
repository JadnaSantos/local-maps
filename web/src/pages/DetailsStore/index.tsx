import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../service/api';

interface StoreProps {
  id: string;
  name: string;
  description: string;
  category: string;
  contact: string;
  latitude: number;
  longitude: number;
}

type StoreParams = {
  id: string;
}


export const DetailsStore = () => {
  const params = useParams<StoreParams>();

  const [store, setStore] = useState<StoreProps>();

  async function getDetailsStore() {
    try {
      const response = await api.get(`/store/${params.id}`);
      console.log(response.data);

    } catch (error) {
      toast.error('Erro insperado, por favor, tente mais tarde');
    }
  }

  useEffect(() => {
    getDetailsStore();
  }, [params.id]);

  return (
    <h1>This is details</h1>
  );
};
