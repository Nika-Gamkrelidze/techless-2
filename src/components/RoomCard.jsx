import Link from "next/link";

// One department card in the home "directory" grid.
export default function RoomCard({ service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="room-card"
      style={{ "--hue": service.hue }}
    >
      <span className="room-card__num">Room {service.num}</span>
      <h3 className="display room-card__name">{service.name}</h3>
      <p className="room-card__tagline">{service.tagline}</p>
      <p className="room-card__body">{service.shortBody}</p>
      <ul className="chip-row room-card__list">
        {service.list.map((li) => (
          <li key={li} className="chip">
            {li}
          </li>
        ))}
      </ul>
      <span className="room-card__link">
        Visit the room{" "}
        <span className="room-card__arrow" aria-hidden>
          →
        </span>
      </span>
      <span className="room-card__bignum" aria-hidden>
        {service.num}
      </span>
    </Link>
  );
}
