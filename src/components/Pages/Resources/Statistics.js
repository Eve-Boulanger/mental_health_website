import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./css/Statistics.css";
import stats_1 from '../../Images/stats_1.jpg';
import stats_2 from '../../Images/stats_2.jpg';
import stats_3 from '../../Images/stats_3.jpg';
import small_stats_1 from '../../Images/small_images/small_stats_1.jpg';
import small_stats_2 from '../../Images/small_images/small_stats_2.jpg';
import small_stats_3 from '../../Images/small_images/small_stats_3.jpg';

const images = [
    stats_1,
    stats_2,
    stats_3,
];

const smallImages = [
    small_stats_1,
    small_stats_2,
    small_stats_3,
];

class Statistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
    <div className="secondRow">
       <div className="header">
       <h1>Statistics on Mental Health</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
       Donec dictum tincidunt vulputate. Ut vitae sapien in est luctus luctus. In vitae bibendum orci. Nulla euismod lacinia augue, sed accumsan elit. Vestibulum 
       in leo pretium, molestie sem eu, imperdiet lacus. 
       </p>
       </div>
      <MDBContainer className="container-stats">
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt=""
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
              <p className="stat-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt=""
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
              <p className="stat-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt=""
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
              <p className="stat-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    </div>
    );
  }
}

export default Statistics;