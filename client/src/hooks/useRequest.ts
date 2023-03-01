import {useMutation, useQuery} from 'react-query'
import { Report, ReportList } from '../models/Requests';
import { getRequest, postRequest } from '../service/httpRequest';
import { getURLComplement } from '../service/urlComplements';

type Query = {
    onSuccess: () => void
    onError: () => void
}

const getURL = getURLComplement();

const getReports = () => getRequest(getURL.reportList());
const createReport = (data:Report) => postRequest(data, getURL.reportCreate());


export const useGetReports = () =>
  useQuery(['getReports'], getReports, {
    onSuccess: (data:ReportList) => data,
    onError: (error) => error
  })

export const useCreateReport = (
  onSuccess: (data: {}) => void,
  onError: (error: {}) => void
) => {
  return useMutation(["createReport"], createReport, {
    onSuccess,
    onError,
  });
};