import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  state = {};
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    const {
      location: {
        state: { title, year, genres, summary, poster },
      },
    } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <img src={poster} alt={title} title={title} />
          <div className="detail__data">
            <h3 className="detail__title">{title}</h3>
            <div className="detail__column">
              <h5 className="detail__year">{year}</h5>
              <ul className="detail__genres">
                {genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
            <p className="detail__summary">{summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
