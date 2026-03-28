const StatusBadge = ({ status }) => {
  const styles = {
    pending: "bg-bgPending text-textPending",
    accepted: "bg-bgAccept text-textAccept",
    rejected: "bg-bgReject text-textReject",
  };

  const labels = {
    pending: "Pending",
    accepted: "Accepted",
    rejected: "Declined",
  };

  return (
    <span
      className={`text-[10px] px-2 py-0.5 rounded-full font-medium font-mulish ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
};

export default StatusBadge;
