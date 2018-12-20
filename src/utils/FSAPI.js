// FourSquare credentials
const CLIENT_ID = '0PZMLR4C1VQ5RTO3S3GXTYKBXNFIC0DUURUME32CNGMV1FYQ'
const CLIENT_SECRET = 'HU11MC3YLS3HUR1SYXZGB0FFKBX5SD2TKRAWYADP1F21KQ3E'
const URL = 'https://api.foursquare.com/v2/venues'
const RADIUS_N_METERS = 40000
const VERSION = 20180323
const NUMBER_OF_RESULTS = 25


export const getRestaurants = () =>
    fetch(`${URL}/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}&limit=${NUMBER_OF_RESULTS}&ll=52.5200,13.4050&query=coffee&radius=${RADIUS_N_METERS}`)
        .then(res => {
          if (res.status >= 400 && res.status < 600) {
            alert('Error Connecting to the FourSquare Api');
            throw new Error("Bad response from server");
            
          }
          return res.json()
        })
        
        
        .then(data => data)
        

export const getRestaurantDetails = (venueID) =>
    fetch(`${URL}/${venueID}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
        .then(response => {
          if (response.status >= 400 && response.status < 600) {
            alert('Error Connecting to the FourSquare Api');
            throw new Error("Bad response from server");
            
          }
          return response.json()
          .then(text => ({
            json: text,
            meta: response
          }))
        }
          
        )
        .then(({ json, meta }) => {
          return json
        })
        

export const search = () =>
    fetch(`${URL}/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}&ll=39.0997265,-94.57856670000001&query=barbecue&radius=${RADIUS_N_METERS}&intent=browse&limit=20`)
        .then(response =>{
          if(response.status >= 400 && response.status < 600){
            alert('Error Connecting to the FourSquare Api');
            throw new Error("Bad response from server");
          }
          return response.json()
        })
        
        .then(response => console.log(response))
        
