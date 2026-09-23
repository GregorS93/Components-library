import Badge from "../Badge/Badge.component";
import Button from "../Button/Button.component";

export default function CardUpdate() {
  return (
    <article className="card-update">
      <div className="card-update-cover" aria-hidden="true" />
      <div className="card-update-body">
        <div className="card-update-meta">
          <Badge color="green" round>
            Live
          </Badge>
          <span>Updated 2 hours ago</span>
        </div>
        <h3 className="card-update-title">Aurora workspace</h3>
        <p className="card-update-copy">
          Maya published a new cover for the brand kit. Files and comments stay
          with the project.
        </p>
        <Button variant="secondary">Open project</Button>
      </div>
    </article>
  );
}
