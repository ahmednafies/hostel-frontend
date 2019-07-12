import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
      currentImage: 0,
      viewerIsOpen: false
    };
  }

  render() {
    const openLightbox = (event, obj) => {
      this.setState({
        currentImage: obj.index,
        viewerIsOpen: true
      });
    };

    const closeLightbox = () => {
      this.setState({
        currentImage: 0,
        viewerIsOpen: false
      });
    };

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
