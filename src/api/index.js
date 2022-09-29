import axios from "axios";

const URL = ''

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
            params: [
                bl_latitude= 'sw.lat',
                tr_latitude= 'ne.lat',
                bl_latitude= 'sw.lng',
                tr_latitude= 'ne.lng',
            ],
            headers: {
                'x-rapidapi-key': '',
                'x-rapidapi-host': ''
        
            }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}
