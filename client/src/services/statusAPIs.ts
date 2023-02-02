import AxiosCommon from './AxiosCommon';

export const getAllStatus = async () => AxiosCommon.get('status');
