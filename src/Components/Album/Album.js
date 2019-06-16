import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
//import firebase from '../../firebase';

class Albums extends Component{
    constructor(props) {
        super(props);
        this.state = {
          url: [],
          currentImage:0,
          viewerIsOpen: false,
        };
  
      }
    // componentDidMount() {
    //       var db = firebase.firestore();
    //       var docRef = db.collection("images").doc("bathrooms");
    //       docRef.get().then((doc) => {
    //           this.formatPhotos(doc.data())
    //           console.log(this.state.url)
    //       })
    //   }

    // formatPhotos(photos){
    //     var photosList = Object.values(photos)
    //     console.log(photosList)
    //     var formattedPhotos = []
    //     photosList.forEach(element => {
    //         formattedPhotos.push({
    //             src:element,
    //             width:3,
    //             height:4
    //         })
    //     });
    //     console.log(formattedPhotos)
    //     this.setState({url:formattedPhotos})
    // }
    
    render(){
        const openLightbox = (event, obj) => {
            this.setState(
                {
                    currentImage:obj.index,
                    viewerIsOpen:true
                }
            );
        }
    
        const closeLightbox = () => {
            this.setState(
                {
                    currentImage:0,
                    viewerIsOpen:false
                }
            );
        }


    return (
        <div>
            <Gallery photos={this.props.photos} onClick={openLightbox} />
            <ModalGateway>
                {this.state.viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={this.state.currentImage}
                            views={this.props.photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}
}


export default Albums;