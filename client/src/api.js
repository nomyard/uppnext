const url = `https://cf.searchtempest.com/go.php?t=http%3A%2F%2Forlando.craigslist.org%2Fsearch%2Fsof%3FcatAbb%3Dsof%26query%3D%26sort%3Ddate%26searchNearby%3D2%26nearbyArea%3D37%26nearbyArea%3D237%26nearbyArea%3D376%26nearbyArea%3D125%26nearbyArea%3D639%26nearbyArea%3D333%26nearbyArea%3D331%26nearbyArea%3D219%26nearbyArea%3D332%26nearbyArea%3D238%26nearbyArea%3D638%26nearbyArea%3D557%26nearbyArea%3D80%26nearbyArea%3D20%26nearbyArea%3D427%26nearbyArea%3D330%26nearbyArea%3D570%26nearbyArea%3D205`;
const axios = require('axios');

axios.get(url)
.then(resp => {
  if (resp) console.log('**********resp******  ' + resp)
  if (resp.body) console.log(`resp body **************************  ${resp.body}`)
  console.log(resp.data);
});