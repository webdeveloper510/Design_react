import React from "react";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

let images = [

];

class ImageSliderComponent extends React.Component {
  constructor(props) {
    super(props);
    props.images.map(image=>{
      images.push({
        'original': image,
        'thumbnail': image
      })
    })
    this.myImageRef = React.createRef();
  }

//   onFullscreen() {
//     this.myImageRef.current.fullScreen()
//   }
//   onPlay() {
//     this.myImageRef.current.play()
//   }
//   onPause() {
//     this.myImageRef.current.pause()
//   }
//   onMoveToSlide() {
//     // Index start from 0 so 2 will move to 3rd slide
//     this.myImageRef.current.slideToIndex(2)
//   }

  render() {
    return (
      <div className="wrapper">
        <ImageGallery items={images}  ref={this.myImageRef} />
      </div>
    );
  }
}
export default ImageSliderComponent;