import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer E1MCisZhVb1N8vjx4476NPGGJKYVdhhSvDFXgAp_SNRDvAh8_MgQ-nQnX0lQ5emgp7gmFw-z0wA-_2Ph0odalIjzl_Ol8h4GgEir9nT6YLdPt8jfV9DCa2DPu92QYXYx",
  }, 
});
