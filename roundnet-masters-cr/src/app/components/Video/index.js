import React from 'react';
import styles from './Video.module.scss';

const Video = ({ src, title, ...props }) => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={src}
        title={title}
        {...props}
        className={styles.responsiveIframe}
      ></iframe>
    </div>
  );
};

export default Video;
