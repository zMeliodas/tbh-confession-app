import StatusBadge from "./StatusBadge";

const CustomIncomingWhisperRequestCard = ({
  requestId,
  messagePreview,
  time,
  status,
  onAccept,
  onDecline,
  onOpenChat,
}) => {
  return (
    <div className="bg-cardBg2 border border-borderColor rounded-xl p-4 mb-3 w-72 sm:w-lg md:w-2xl">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex gap-2 items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-purple flex items-center justify-center shrink-0">
            <span className="text-xs font-medium text-primaryTextColor font-mulish">
              A
            </span>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-primaryTextColor font-mulish">
              Anonymous
            </p>
            <p className="text-xs text-secondaryTextColor font-mulish mt-0.5">
              {time}
            </p>
          </div>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="flex items-center justify-start bg-cardTextField border-l-2 border-purple rounded-r-lg px-3 py-2.5 mb-3">
        <p className="text-xs text-secondaryTextColor font-mulish leading-relaxed italic">
          "{messagePreview}"
        </p>

        <p className="text-xs text-secondaryTextColor/60 font-mulish mt-1">
          — wants to reveal themselves and chat with you directly.
        </p>
      </div>

      {status === "pending" && (
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onDecline(requestId)}
            className="text-xs px-3 py-1.5 rounded-lg border border-bgReject text-textReject hover:bg-red-900/20 transition-colors font-mulish cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={() => onAccept(requestId)}
            className="text-xs px-3 py-1.5 rounded-lg border border-bgAccept text-textAccept hover:bg-green-900/20 transition-colors font-mulish cursor-pointer"
          >
            Accept
          </button>
        </div>
      )}

      {status === "accepted" && (
        <div className="flex justify-end">
          <button
            onClick={() => onOpenChat(requestId)}
            className="text-xs px-3 py-1.5 rounded-lg border border-purple/50 text-purple hover:bg-purple/10 transition-colors font-mulish cursor-pointer"
          >
            Open chat →
          </button>
        </div>
      )}

      {status === "rejected" && (
        <div className="flex justify-end">
          <span className="text-xs text-secondaryTextColor font-mulish">
            Request declined
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomIncomingWhisperRequestCard;
