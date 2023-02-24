import {useMutation, useQuery, useQueryClient} from 'react-query'
import { ReservationList, Reservation } from '../models/Amenities';
import { getRequest, postRequest } from '../service/httpRequest';

type Query = {
    onSuccess: () => void
    onError: () => void
}




const getReservations = () => getRequest('/reservations/list');
const createReservations = (data:Reservation) => postRequest(data,'/reservations/amenities');


export const useGetReservation = () =>
  useQuery(['amenityReservations'], getReservations, {
    onSuccess: (data:ReservationList) => data,
    onError: (error) => error
  })

export const useMakeReservation = (data: Reservation) => {
  const queryClient = useQueryClient()
  return useMutation(() => createReservations(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['amenityReservations'])
    },
    onError: (error) =>  console.log(error)
  })
}