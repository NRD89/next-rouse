const Button = ({ btnSize, btnPriority, btnWidth, btnText, btnLink, btn, btnType, btnId }) => {
  return (
    <div>
      {btn ? (
        <button
          onClick={btnLink}
          id={btnId ? btnId : null}
          type={btnType}
          className={`${btnSize === "small" ? `btn-sm` : `btn`} ${
            btnWidth === "full" ? `w-full` : ``
          } ${
            btnPriority === "secondary"
              ? `bg-transparent hover:bg-purple-400 border-2 border-blue-700 dark:border-blue-50 text-blue-900 dark:text-white`
              : btnPriority === "cta"
              ? `bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 border border-solid border-white rounded-lg tracking-wider hover:tracking-widest  text-white active:tracking-wide`
              : `bg-purple-600 hover:bg-purple-500`
          } text-white flex-shrink-0 mb-2 sm:mb-0 sm:mr-2 uppercase`}
          style={{ minWidth: `200px` }}
        >
          {btnText}
        </button>
      ) : (
        <a
          href={btnLink}
          className={`${btnSize === "small" ? `btn-sm` : `btn`} ${
            btnWidth === "full" ? `w-full` : ``
          } ${
            btnPriority === "secondary"
              ? `bg-purple-500 hover:bg-purple-400`
              : btnPriority === "cta"
              ? `bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 border border-solid border-white rounded-lg tracking-wider hover:tracking-widest uppercase text-white active:tracking-wide`
              : `bg-purple-600 hover:bg-purple-500`
          } text-white flex-shrink-0 mb-2 sm:mb-0 sm:mr-2 cursor-pointer`}
          style={{ minWidth: `200px` }}
        >
          {btnText}
        </a>
      )}
    </div>
  );
};

export default Button;
