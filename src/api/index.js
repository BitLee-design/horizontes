import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: 'sw.lat',
    tr_latitude: 'ne.lat',
    bl_latitude: 'sw.lng',
    tr_latitude: 'ne.lng',
  },

  headers: {
    'X-RapidAPI-Key': '697d742ac1msh6302d389e5bc879p1c0a4ejsn8a332421197c',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, options); 

        return data;
    } catch (error) {
        console.log(error)
    }
}

