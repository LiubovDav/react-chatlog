import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map(chatEntry => {
    return (
      <ChatEntry
        key={chatEntry.id}
        id={chatEntry.id}
        sender={chatEntry.sender}
        body={chatEntry.body}
        timeStamp={chatEntry.timeStamp}
        liked={chatEntry.liked}
        onToggleLiked={props.onToggleChatEntryLiked}
      ></ChatEntry>
    );
  });

  return <>{chatEntryComponents}</>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ),
  onToggleChatEntryLiked: PropTypes.func
};

export default ChatLog;
