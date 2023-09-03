import "./style.scss";

export default function SectionVideo() {
  return (
    <section className="video">
      <div className="video_content">
        <h2 className="content__title">
          Quem são, o que fazem, onde
          <br />
          vivem?
        </h2>
        <p className="content__text">
          Não precisa embedar o vídeo do Rick Astley Remastered 4K 60 FPS, pode
          ser qualquer outro vídeo da sua escolha, mas queremos dar play. Na
          estrutura de pastas nos chamamos as páginas de containers.
        </p>
      </div>
      <iframe
        width="512"
        height="297"
        src="https://www.youtube.com/embed/f6JYnsrbAKo?si=IWdC_5nb0TR5BkKm"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
}
