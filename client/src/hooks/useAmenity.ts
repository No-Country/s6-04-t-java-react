import {useMutation, useQuery, useQueryClient} from 'react-query'
import { ReservationList, Reservation } from '../models/Amenities';
import { getRequest, postRequest } from '../service/httpRequest';
import { getURLComplement } from '../service/urlComplements';

type Query = {
    onSuccess: () => void
    onError: () => void
}


const getURL = getURLComplement();

const getReservations = () => getRequest(getURL.reservationsList());
const createReservations = (data: Reservation) => postRequest(data, getURL.reservationsAmenities()+'asdasdas');


export const useGetReservation = () =>
  useQuery(['amenityReservations'], getReservations, {
    onSuccess: (data:ReservationList) => data,
    onError: (error) => error
  })

export const useCreateReservation = (
  onSuccess: (data: {}) => void,
  onError: (error: {}) => void
) => {
  return useMutation(["createReservation"], createReservations, {
    onSuccess,
    onError,
  });
};