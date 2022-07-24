const HTWButton = (props: {
    text: string;
    main: boolean;
    linkRef: string;
}): JSX.Element => {
    const { text, main, linkRef } = props;

    const buttonClass = main
        ? "w-fit px-5 py-2 h-full bg-main rounded-md hover:bg-orange-500 transition hover:-translate-y-2 duration-500 ease-in-out hover:scale-100"
        : "w-fit px-5 py-2 bg-transparent border-2 border-main rounded-md transition hover:-translate-y-2 duration-500 ease-in-out hover:scale-100";

    return (
        <a href={linkRef}>
            <button className={buttonClass}>
                <p className='font-bold'>{text}</p>
            </button>
        </a>
    );
};

export default HTWButton;
