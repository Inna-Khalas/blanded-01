import { formatDistanceToNow } from 'date-fns';

export const correctDate = (date) => {
    return formatDistanceToNow(new Date(date));
}
