import "./CardUser.scss";

function CardUser({ li }) {
  return (
    <li>
      <div className="card">
        <div className="image__container">
          <img src={li.image} alt="image" />
          <div className="level">{li.level}</div>
        </div>
        <h3 className="card__title">{li.title}</h3>

        <div className="card__info">
          <div className="user">
            <img src={li.user.avatar} alt="John Doe" />
            <p>{li.user.name}</p>
          </div>
          <div className="rating">
            <p>{li.rating}</p>
          </div>
        </div>
        <div className="card__info">
          <div>{li.students} Student</div>
          <div>{li.modules} Modules</div>
          <div>{li.duration}1h 30m</div>
        </div>
      </div>
    </li>
  );
}

export { CardUser };
