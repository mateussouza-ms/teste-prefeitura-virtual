import "./styles.css";

interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
}

export function Card({
  imageUrl,
  title,
  subtitle,
  description,
  url,
}: CardProps) {
  return (
    <div id="card">
      <a href={url}>
        <img src={imageUrl} alt={title} />
        <h3>{subtitle}</h3>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </div>
  );
}
