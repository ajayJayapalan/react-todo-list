const Trash = (props) => {
  const styles = {
    position: "fixed",
    zIndex: 10,
    bottom: "1rem",
    right: "1rem",
    cursor: "pointer"
  };
  return (
    <>
      <div style={styles} onClick={props.onModal}>
        <svg
          class="w-16 
        h-16 
        bg-purple-400 
        text-purple-600 
        shadow-xl 
        rounded-full 
        p-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Trash;
