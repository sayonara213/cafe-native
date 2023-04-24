import { API_ROUTES } from '@constants/config';
import { deleteRequest, postRequest, putRequest } from '@services/api.service';
import { useAppSelector, useAppDispatch } from '@services/hooks/redux.hook';
import { setAddressActive, setAddresses } from '@services/store/user';
import { IAddress } from '@typings/types.address';
import { useState, useEffect } from 'react';

export const useAddressModalState = () => {
  const { addresses, id } = useAppSelector((state) => state.user.user);

  const [filteredAddresses, setFilteredAddresses] = useState<IAddress[]>(addresses);
  const [input, setInput] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleInput = (value: string) => {
    setInput(value);
  };

  useEffect(() => {
    if (input && input.length > 0) {
      const searchedAddresses = addresses.filter((item) => {
        return item.addressName.toLowerCase().includes(input.toLowerCase());
      });
      setFilteredAddresses(searchedAddresses);
    } else {
      setFilteredAddresses(addresses);
    }
  }, [input, addresses]);

  const handleToggle = (value: IAddress) => {
    try {
      dispatch(setAddressActive({ addressName: value.addressName }));
      putRequest(`${API_ROUTES.user.updateAddress}/${value.id}`, { isActive: !value.isActive });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (value: IAddress) => {
    try {
      const filtered = addresses.filter((item) => item.id !== value.id);
      dispatch(setAddresses(filtered));
      deleteRequest(`${API_ROUTES.user.updateAddress}/${value.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    try {
      const address = (await postRequest(`${API_ROUTES.user.updateAddress}/${id}`, {
        addressName: input,
        isActive: true,
      })) as IAddress;
      dispatch(setAddresses([...addresses, address]));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    filteredAddresses,
    handleInput,
    handleToggle,
    input,
    handleDelete,
    handleAdd,
  };
};
