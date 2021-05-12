import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Details extends React.Component {

  render() {
    const eventId = this.props.match.params.eventId;
    const event = this.props.eventsStore.events.find(item => item.id === Number(eventId));

    return (
      <div>
        <strong>Nazwa:</strong>{event.name}<br />
        <strong>Miejsce:</strong>{event.place}<br />
        <strong>Data:</strong>{event.date}<br />
        <strong>Godzina:</strong>{event.time}
        <Link className="my-3 block underline text-blue-400 hover:no-underline" to="/">Cofnij</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Details);