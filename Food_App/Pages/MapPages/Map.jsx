import React , {useState, useEffect} from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Modal,
    Button,
    TextInput,
    Animated
  } from 'react-native';
import ListOfRestaurant from "./List.jsx"
import { Dimensions } from 'react-native';
import black_marker from '../../img/black_marker.png'
import CustomCallout from './Callout.jsx'

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


function Map() {
    const [radius, setRadius] = useState(3000)
    const [lat, setLat] = useState(36.143)
    const [lon, setLon] = useState(-86.7959)
    const [curRegion, setRegion] = useState({
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      })
    const [search, setSearch] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const API_key = 

    const [markers, setMarkers] = useState(<View></View>)
    const [curList, setCurList] = useState([{name: "abc", rating : 3.4}])
    
    
    const [renderMap, setRenderMap] = useState(
    <MapView style = {styles.map}
      region = {curRegion}
     >
      </MapView>
    )

    

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };

    // useEffect(() => {
    //   const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${API_key}`
    //   fetch(url, {
    //     method : 'POST'
    //   }). then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     setLat(data.location.lat)
    //     setLon(data.location.lng)

    //     console.log(`Lat is ${lat}`)
    //     console.log(`lon is ${lon}`)
    //     console.log(data)
    //   }).then().catch(error => {
    //     console.error(error);
    //   });
          
    // }, [])

    useEffect(() => {
      setRegion({
        latitude: lat,
        longitude: lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        })
    
    }, [lat, lon])
  

    const handleMarkerPress = (marker) => {
      // console.log(marker)
    }
    

    function handleSearch(){
      const searchString = encodeURIComponent(search)
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lon}&radius=${radius}&type=restaurant&keyword=${searchString}&key=${API_key}`
      fetch(url)
      .then(response => response.json())
      .then(data => {
        const result = data.results
        result.sort((a, b) => a.rating - b.rating)
        const newMarkers = result.map((marker, index) => (
          <Marker
            key={marker.place_id}
            coordinate={{ latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng }}
            title={index.toString()}
            onPress={() => handleMarkerPress(index.toString())}
          >
            <Image
              source={black_marker}
              style={{ width:35, height: 35 }} // Adjust the width and height as desired
              />
            <CustomCallout 
              style={styles.callout} 
              name= {marker.name} 
              rating={marker.rating}
              picture={marker.photos}
              coordinate={{ latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng }} >
             
            </CustomCallout>
          </Marker>
        ));
        
        setMarkers(newMarkers)
        
        const list_restuarant = result.map((info) => ({
          location : info.geometry.location,
          name : info.name,
          pricelevel : info.pricelevel,
          rating : info.rating
        }))
        setCurList(
          list_restuarant
        )      
      })
      .catch(error => {
        console.error('Error:', error);
      });
      closeModal(); 
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openModal}>
              <Text style={styles.buttonText}>Find Place</Text>
            </TouchableOpacity>

            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={false}
              style={styles.modal}
            >
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Search the Type of Restaurant here"
                  value={search}
                  onChangeText={setSearch}
                  onSubmitEditing={handleSearch}
                />
                <Button title="Close Modal" onPress={closeModal} />
              </View>
            </Modal>
            
            <MapView
              style = {styles.map}
              region = {curRegion}
             
            >
              {markers}
             
            </MapView>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    input: {
      marginTop: 40,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#00FF00',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 10
    },map: {
        height: 450,
        flex : 1,
        width: '100%'
    }, 
    
    theMap: {
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
      // overflow: 'hidden',
      // height: 450,
      // backgroundColor: '#f6f6f6'
    },
    callout:{

    }
  
  });

export default Map
