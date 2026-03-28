import { getInitials } from "../../utils/stringUtils";
import StatusBadge from "./StatusBadge";

const CustomSentWhisperRequestCard = ({
  requestId,
  recipientUsername,
  recipientImage,
  messagePreview,
  time,
  status,
  onOpenChat,
}) => {
  return (
    <div className="bg-cardBg2 border border-borderColor rounded-xl p-4 mb-3">
      <div className="flex items-center gap-3 mb-3 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple/20 flex items-center justify-center shrink-0 overflow-hidden">
            {recipientImage ? (
              <img
                src={recipientImage}
                alt={recipientUsername}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-xs font-medium text-purple font-mulish">
                {getInitials(recipientUsername)}
              </span>
            )}
          </div>
          <div className="flex flex-col items-start">
            <p className="text-sm font-medium text-primaryTextColor font-mulish">
              @{recipientUsername}
            </p>
            <p className="text-xs text-secondaryTextColor font-mulish mt-0.5">
              {time}
            </p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="flex items-center bg-cardTextField border-l-2 border-purple/40 rounded-r-lg px-3 py-2.5 mb-3 gap-1">
        <p className="text-xs text-secondaryTextColor font-mulish leading-relaxed">
          You requested to whisper after:
        </p>
        <p className="text-xs text-secondaryTextColor font-mulish leading-relaxed italic mt-0.5">
          "{messagePreview}"
        </p>
      </div>

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

      {status === "pending" && (
        <div className="flex justify-end">
          <span className="text-xs text-secondaryTextColor font-mulish">
            Waiting for response...
          </span>
        </div>
      )}

      {status === "rejected" && (
        <div className="flex justify-end">
          <span className="text-xs text-secondaryTextColor font-mulish">
            Request was declined
          </span>
        </div>
      )}
    </div>
  );
};

export default CustomSentWhisperRequestCard;
