import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DropzoneComponent from "react-dropzone-component";
import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { toastr } from "react-redux-toastr";

// Translation
import { FormattedMessage } from "react-intl";
import messages from "../../locale/messages";

// Redux Action
import {
  createListPhotos,
  removeListPhotos,
} from "../../actions/manageListPhotos";

// Style
import s from "!isomorphic-style-loader!css-loader!./filepicker.css";

// Component
import PhotosList from "../PhotosList";

import { maxUploadSize } from "../../config";

class PhotosUpload extends Component {
  static propTypes = {
  };

  constructor(props) {
    super(props);
    this.success = this.success.bind(this);
    this.complete = this.complete.bind(this);
    this.dropzone = null;
    this.addedfile = this.addedfile.bind(this);
    this.onDeletePhoto = this.onDeletePhoto.bind(this);
    this.state = {
      djsConfig: {},
    };
  }

  componentDidMount() {
    const { placeholder } = this.props;
    const isBrowser = typeof window !== "undefined";
    const isDocument = typeof document !== undefined;
    if (isBrowser && isDocument) {
      document.querySelector(".dz-hidden-input").style.visibility = "visible";
      document.querySelector(".dz-hidden-input").style.opacity = "0";
      document.querySelector(".dz-hidden-input").style.height = "60%";
      document.querySelector(".dz-hidden-input").style.width = "100%";
      document.querySelector(".dz-hidden-input").style.cursor = "pointer";
    }

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: "image/jpeg,image/png",
          hiddenInputContainer: ".dzInputContainer",
          // dictFileTooBig: '',
        },
      });
    }
  }

  componentWillMount() {
    const { placeholder } = this.props;

    if (placeholder) {
      this.setState({
        djsConfig: {
          dictDefaultMessage: placeholder,
          addRemoveLinks: false,
          maxFilesize: 10,
          maxFiles: 20,
          acceptedFiles: "image/jpeg,image/png",
          hiddenInputContainer: ".dzInputContainer",
          // dictFileTooBig: '',
        },
      });
    }
  }

  success(file, fromServer) {
    /*const { listId, createListPhotos } = this.props;
    const { files } = fromServer;
    let fileName = files[0].filename;
    let fileType = files[0].mimetype;
    // Calling Redux action to create a record for uploaded file
    if(listId != undefined) {
      createListPhotos(listId, fileName, fileType);
    }*/
  }

  addedfile(file) {
    const { djsConfig } = this.state;

    // not more than the size in the server config
    if (file.size > 1024 * 1024 * maxUploadSize) {
      toastr.error(
        "Maximum upload size Exceeded! ",
        "Try with smallest size image"
      );
      this.dropzone.removeFile(file);
    }
  }
  onDeletePhoto(fileName) {
    const thisPhotos = [...this.props.photos];
    const itemIndex = this.props.photos.findIndex(ele => ele?.filename === fileName);
    if (itemIndex > -1) {
      thisPhotos.splice(itemIndex, 1);
    }
    this.props.updatePhotos(
        'coverImage',
        thisPhotos
    );
  }

  complete(file) {
    const { updatePhotos, photos = []} = this.props;
    if (file && file.xhr) {
      const { files } = JSON.parse(file.xhr.response);
      if (files[0]) {
        updatePhotos('coverImage', [
            ...photos,
            ...files,
        ])
      }
      this.dropzone.removeFile(file);
    }
  }

  render() {
    const { photos, updatePhotos } = this.props;
    const { djsConfig } = this.state;

    const componentConfig = {
      iconFiletypes: [".jpg", ".png"],
      //showFiletypeIcon: true,
      postUrl: "/photos",
    };
    const eventHandlers = {
      init: (dz) => (this.dropzone = dz),
      success: this.success,
      complete: this.complete,
      addedfile: this.addedfile,
    };

    return (
      <div className={cx("listPhotoContainer")}>
        <div className={cx("dzInputContainer")}>
          <DropzoneComponent
            config={componentConfig}
            eventHandlers={eventHandlers}
            djsConfig={djsConfig}
          />
        </div>
        <div>
          <FormattedMessage {...messages.uploadSizedLabel} />
          {maxUploadSize}MB
        </div>
        <PhotosList photos={photos || []} onDeletePhoto={this.onDeletePhoto}/>
      </div>
    );
  }
}

const mapState = (state) => ({});

const mapDispatch = {
};

export default withStyles(s)(connect(mapState, mapDispatch)(PhotosUpload));
