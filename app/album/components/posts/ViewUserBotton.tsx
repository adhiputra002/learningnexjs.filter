'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('web percobaan!AJG');
    } else {
      alert('web percobaan.');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Coba click disini? Klik disini</button>
    </>
  );
};

export default ViewUserButton;