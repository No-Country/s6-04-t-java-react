import {useMutation, useQuery, useQueryClient} from 'react-query'
import { getRequest } from '../service/httpRequest';

type Query = {
    onSuccess: () => void
    onError: () => void
}


const getReservations = () => getRequest('/reservations/list');


export const useGetReservation = () =>
  useQuery(['amenityReservations'], getReservations, {
    // onSuccess,
    // onError,
  })