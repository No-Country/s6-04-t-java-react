import { useQuery } from "react-query";
import { getRequest } from "../../service/httpRequest";

type Query = {
    onSuccess: () => void
    onError: () => void
}
const getMessages = () => getRequest('/messages');

interface Reservation {
  message: string;
  username:string;
}

export const useGetMessages = () =>
  useQuery(['getMessages'], getMessages, {
    onSuccess: (data) => data,
    onError: (error) => error
  })