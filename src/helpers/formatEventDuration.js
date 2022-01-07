// расчитывает сколько времени от начала до окончания

import { formatDistanceStrict } from 'date-fns';

export const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};
