import Video from "@/app/components/Video";
import styles from './Media.module.scss';

const Media = () => {
  return (
    <section className={styles['video-tutorial']} id="video">
      <Video
        src="https://www.youtube.com/embed/tc1pEqCGWnw?si=E0uR-O9QJ-0oLdoC"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </section>
  );
};

export default Media;
