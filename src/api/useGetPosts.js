
import { useQuery} from "react-query";
import axios from "axios";

export function useGetPosts() {

    const onSuccess = () => {
        console.log('Data fetched successfully');
    }

    const onError = () => {
        console.log('Error fetching data');
    }

    const results = useQuery('posts', ()=> {
        return axios.get('http://localhost:5000/posts')
    },
    {
        enabled: false,
        onSuccess,
        onError,
    }
)

    return results;
}