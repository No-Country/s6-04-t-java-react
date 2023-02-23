import {useMutation, useQuery, useQueryClient} from 'react-query'
import { Report, ReportList } from '../models/Requests';
import { getRequest, postRequest } from '../service/httpRequest';

type Query = {
    onSuccess: () => void
    onError: () => void
}




const getReports = () => getRequest('/reports/list');
const createReport = (data:Report) => postRequest(data,'/reports/create');


export const useGetReports = () =>
  useQuery(['getReports'], getReports, {
    onSuccess: (data:ReportList) => data,
    onError: (error) => error
  })

export const useMakeReservation = (data: Report) => {
  const queryClient = useQueryClient()
  return useMutation(() => createReport(data), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getReports'])
    },
    onError: (error) =>  console.log(error)
  })
}